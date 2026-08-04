import { NextRequest, NextResponse } from 'next/server'
import { kvSet, kvGet, kvIncr } from '@/lib/kv-store'
import { generatePreviewContent, generateMockupConfig, ReportData } from '@/lib/report-content'
import { sendAdminReportEmail, sendUserConfirmationEmail } from '@/lib/email'

async function verifyTurnstile(token: string, remoteip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_AFFORDAWEB;
  if (!secret) return true;
  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret, response: token, remoteip }),
    });
    const data = await res.json() as { success: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { turnstileToken, ...rest } = body
    if (process.env.TURNSTILE_SECRET_AFFORDAWEB) {
      if (!turnstileToken) return NextResponse.json({ error: 'Missing verification token.' }, { status: 400 })
      const remoteip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? req.headers.get('x-real-ip') ?? '127.0.0.1'
      const ok = await verifyTurnstile(turnstileToken as string, remoteip)
      if (!ok) {
        return NextResponse.json({ error: 'Turnstile verification failed.' }, { status: 400 })
      }
    }
    const { website, name, email, business_type, goal } = rest

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

    // Fire-and-forget email notifications. Report creation should succeed
    // even if the email service experiences a temporary failure.
    void Promise.allSettled([
      sendAdminReportEmail(report, admin_token),
      sendUserConfirmationEmail(report),
    ]).then((results) => {
      results.forEach((result, index) => {
        if (result.status === 'rejected') {
          console.warn(`[create-preview] email task ${index} failed`, result.reason)
        } else if (!result.value) {
          console.warn(`[create-preview] email task ${index} returned false`)
        }
      })
    })

    return NextResponse.json({ report_id })
  } catch (err) {
    console.error('[create-preview]', err)
    return NextResponse.json({ error: 'Server error. Please try again.' }, { status: 500 })
  }
}
