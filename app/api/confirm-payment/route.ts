import { NextRequest, NextResponse } from 'next/server'
import { kv } from '@vercel/kv'
import { sendUserReport } from '@/lib/email'
import type { SeoReport } from '@/types/seo-report'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://affordawebsolutions.com'

// ── GET /api/confirm-payment?report_id=XYZ ────────────────────────────────────
// Admin clicks this from the notification email to unlock the report and send it to the user.

export async function GET(req: NextRequest) {
  const reportId = req.nextUrl.searchParams.get('report_id')

  if (!reportId) {
    return new Response('<h2>Missing report_id parameter.</h2>', {
      status: 400,
      headers: { 'Content-Type': 'text/html' },
    })
  }

  try {
    const raw = await kv.get<string>(`seo_report:${reportId}`)
    if (!raw) {
      return new Response('<h2>Report not found or expired.</h2>', {
        status: 404,
        headers: { 'Content-Type': 'text/html' },
      })
    }

    const report: SeoReport = typeof raw === 'string' ? JSON.parse(raw) : raw

    if (report.paymentStatus === 'paid') {
      return new Response(
        confirmHtml(report.domain, report.email, reportId, 'already_paid'),
        { status: 200, headers: { 'Content-Type': 'text/html' } }
      )
    }

    // Update status to paid
    report.paymentStatus = 'paid'
    await kv.set(`seo_report:${reportId}`, JSON.stringify(report), { ex: 60 * 60 * 24 * 90 })

    // Send full report to user
    try {
      await sendUserReport(report)
    } catch (e) {
      console.error('User report email failed:', e)
    }

    return new Response(confirmHtml(report.domain, report.email, reportId, 'success'), {
      status: 200,
      headers: { 'Content-Type': 'text/html' },
    })
  } catch (err) {
    console.error('confirm-payment error:', err)
    return new Response('<h2>Server error. Please try again.</h2>', {
      status: 500,
      headers: { 'Content-Type': 'text/html' },
    })
  }
}

function confirmHtml(
  domain: string,
  email: string,
  reportId: string,
  status: 'success' | 'already_paid'
) {
  const isSuccess = status === 'success'
  const reportUrl = `${BASE_URL}/seo-report/${reportId}?unlocked=true`

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${isSuccess ? 'Payment Confirmed' : 'Already Confirmed'} | AffordaWeb</title>
  <style>
    body { margin: 0; padding: 40px 20px; background: #f3f4f6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; }
    .card { background: #fff; max-width: 520px; width: 100%; border-radius: 20px; padding: 48px 40px; box-shadow: 0 8px 40px rgba(0,0,0,0.1); text-align: center; }
    .icon { font-size: 64px; margin-bottom: 16px; }
    h1 { margin: 0 0 8px; font-size: 26px; font-weight: 900; color: #111827; }
    p { color: #6b7280; font-size: 15px; line-height: 1.6; margin: 0 0 24px; }
    .highlight { color: #5636D1; font-weight: 700; }
    a.btn { display: inline-block; padding: 12px 32px; background: linear-gradient(135deg, #3d24a0, #5636D1); color: #fff; font-weight: 700; font-size: 14px; text-decoration: none; border-radius: 50px; }
    .meta { margin-top: 24px; font-size: 12px; color: #9ca3af; }
  </style>
</head>
<body>
  <div class="card">
    <div class="icon">${isSuccess ? '✅' : 'ℹ️'}</div>
    <h1>${isSuccess ? 'Payment Confirmed!' : 'Already Confirmed'}</h1>
    <p>
      ${
        isSuccess
          ? `The full SEO report for <span class="highlight">${domain}</span> has been sent to <span class="highlight">${email}</span>.`
          : `This report for <span class="highlight">${domain}</span> was already marked as paid. The report was previously sent to <span class="highlight">${email}</span>.`
      }
    </p>
    <a href="${reportUrl}" class="btn">View Unlocked Report →</a>
    <div class="meta">Report ID: ${reportId}</div>
  </div>
</body>
</html>`
}
