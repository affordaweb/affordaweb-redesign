import { NextRequest, NextResponse } from 'next/server'
import { kvGet, kvSet } from '@/lib/kv-store'
import { ReportData } from '@/lib/report-content'

export async function POST(req: NextRequest) {
  try {
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
