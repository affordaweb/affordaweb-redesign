import { NextRequest, NextResponse } from 'next/server'
import { kvSet, kvGet, kvIncr } from '@/lib/kv-store'
import { generatePreviewContent, generateMockupConfig, ReportData } from '@/lib/report-content'
import { sendAdminReportEmail, sendUserConfirmationEmail } from '@/lib/email'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { website, name, email, business_type, goal } = body

    if (!website || !name || !email || !business_type || !goal) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
    }

    // Rate limit: 10 submissions per IP per day
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
      req.headers.get('x-real-ip') ??
      '127.0.0.1'
    const rateLimitKey = `ratelimit:${ip}`
    const count = await kvIncr(rateLimitKey, 86400) // 24hr TTL on first increment
    if (count > 10) {
      return NextResponse.json(
        { error: 'Daily limit reached. Try again tomorrow.' },
        { status: 429 },
      )
    }

    // Generate unique report ID and admin token
    const report_id = crypto.randomUUID().replace(/-/g, '').slice(0, 16)
    const admin_token = crypto.randomUUID().replace(/-/g, '')

    // Generate preview and mockup content
    const preview = generatePreviewContent(website, business_type, goal)
    const mockup  = generateMockupConfig(business_type, goal)

    const report: ReportData = {
      report_id,
      website,
      name,
      email: email.toLowerCase().trim(),
      business_type,
      goal,
      preview,
      mockup,
      payment_status: 'unpaid',
      created_at: new Date().toISOString(),
      admin_token,
    }

    // Store report (TTL: 30 days)
    await kvSet(`report:${report_id}`, report, 60 * 60 * 24 * 30)

    // Notify admin and send user confirmation
    await Promise.all([
      sendAdminReportEmail(report, admin_token),
      sendUserConfirmationEmail(report),
    ])

    return NextResponse.json({ report_id })
  } catch (err) {
    console.error('[create-preview]', err)
    return NextResponse.json({ error: 'Server error. Please try again.' }, { status: 500 })
  }
}
