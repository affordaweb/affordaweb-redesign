import { NextRequest, NextResponse } from 'next/server'
import { kvGet, kvSet, kvIncr } from '@/lib/kv-store'
import type { ReportData } from '@/lib/report-content'
import type { BriefData } from '@/lib/brief'
import { sendAdminBriefEmail } from '@/lib/email'

export async function POST(req: NextRequest) {
  try {
    // Rate limit: 5 submissions per IP per day
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
    const today = new Date().toISOString().slice(0, 10)
    const rateKey = `rate:save-brief:${ip}:${today}`
    const count = await kvIncr(rateKey, 60 * 60 * 24)
    if (count > 5) {
      return NextResponse.json({ error: 'Too many submissions. Please try again tomorrow.' }, { status: 429 })
    }

    const body = await req.json()
    const { report_id, ...fields } = body

    if (!report_id) {
      return NextResponse.json({ error: 'Report ID is required.' }, { status: 400 })
    }

    const report = await kvGet<ReportData>(`report:${report_id}`)
    if (!report) {
      return NextResponse.json({ error: 'Report not found.' }, { status: 404 })
    }

    // Check if brief already submitted
    const existing = await kvGet(`brief:${report_id}`)
    if (existing) {
      return NextResponse.json({ success: true, already_submitted: true })
    }

    const brief: BriefData = {
      report_id,
      business_name:    fields.business_name    ?? '',
      tagline:          fields.tagline           ?? '',
      target_audience:  fields.target_audience   ?? '',
      top_services:     fields.top_services      ?? '',
      differentiator:   fields.differentiator    ?? '',
      color_preferences: fields.color_preferences ?? '',
      reference_sites:  fields.reference_sites   ?? '',
      features:         Array.isArray(fields.features) ? fields.features : [],
      has_photos:       fields.has_photos        ?? 'no',
      needs_copy:       fields.needs_copy        ?? 'no',
      timeline:         fields.timeline          ?? 'flexible',
      notes:            fields.notes             ?? '',
      submitted_at:     new Date().toISOString(),
    }

    await kvSet(`brief:${report_id}`, brief, 60 * 60 * 24 * 60) // 60 days
    await sendAdminBriefEmail(report, brief)

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[save-brief]', err)
    return NextResponse.json({ error: 'Server error. Please try again.' }, { status: 500 })
  }
}
