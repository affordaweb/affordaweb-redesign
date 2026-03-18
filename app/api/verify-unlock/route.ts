import { NextRequest, NextResponse } from 'next/server'
import { kvGet, kvSet, kvIncr } from '@/lib/kv-store'
import { ReportData } from '@/lib/report-content'

export async function POST(req: NextRequest) {
  try {
    // Rate limit: 10 attempts per IP per hour
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
    const hour = new Date().toISOString().slice(0, 13)
    const rateKey = `rate:verify-unlock:${ip}:${hour}`
    const count = await kvIncr(rateKey, 60 * 60)
    if (count > 10) {
      return NextResponse.json({ error: 'Too many attempts. Please try again later.' }, { status: 429 })
    }

    const { report_id, email } = await req.json()

    if (!report_id || !email) {
      return NextResponse.json({ error: 'Report ID and email are required.' }, { status: 400 })
    }

    const report = await kvGet<ReportData>(`report:${report_id}`)

    if (!report) {
      return NextResponse.json({ error: 'Report not found.' }, { status: 404 })
    }

    if (report.email !== email.toLowerCase().trim()) {
      return NextResponse.json(
        { error: 'Email does not match. Please use the email you submitted the form with.' },
        { status: 403 },
      )
    }

    if (report.payment_status === 'paid') {
      return NextResponse.json({ success: true, already_paid: true })
    }

    // Mark as paid
    const updated: ReportData = { ...report, payment_status: 'paid' }
    await kvSet(`report:${report_id}`, updated, 60 * 60 * 24 * 30)

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[verify-unlock]', err)
    return NextResponse.json({ error: 'Server error. Please try again.' }, { status: 500 })
  }
}
