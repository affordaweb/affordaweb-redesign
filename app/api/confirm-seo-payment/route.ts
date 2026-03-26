import { NextRequest } from 'next/server'
import { kvGet, kvSet } from '@/lib/kv-store'
import { sendSeoUserReport } from '@/lib/email'
import type { SeoReport } from '@/types/seo-report'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://www.affordawebsolutions.com'

// ── GET /api/confirm-seo-payment?report_id=XYZ ────────────────────────────────
// Admin clicks this link in the notification email to unlock the report.

export async function GET(req: NextRequest) {
  const reportId = req.nextUrl.searchParams.get('report_id')

  if (!reportId) {
    return html(errorPage('Missing report_id parameter.'))
  }

  const report = await kvGet<SeoReport>(`seo_report:${reportId}`)
  if (!report) {
    return html(errorPage('SEO report not found or expired.'))
  }

  const reportUrl = `${BASE_URL}/seo-report/${reportId}?unlocked=true`

  if (report.paymentStatus === 'paid') {
    return html(confirmPage(report.domain, report.email, reportId, reportUrl, true))
  }

  const updated: SeoReport = { ...report, paymentStatus: 'paid' }
  await kvSet(`seo_report:${reportId}`, updated, 60 * 60 * 24 * 90)

  try {
    await sendSeoUserReport(updated, reportUrl)
  } catch (e) {
    console.error('[confirm-seo-payment] email failed:', e)
  }

  return html(confirmPage(report.domain, report.email, reportId, reportUrl, false))
}

function html(content: string) {
  return new Response(content, { headers: { 'Content-Type': 'text/html; charset=utf-8' } })
}

function confirmPage(
  domain: string,
  email: string,
  reportId: string,
  reportUrl: string,
  alreadyPaid: boolean,
): string {
  const message = alreadyPaid
    ? `This report for <strong>${domain}</strong> was already confirmed. The report was previously sent to <strong>${email}</strong>.`
    : `Payment confirmed. The full SEO report for <strong>${domain}</strong> has been emailed to <strong>${email}</strong>.`

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Payment Confirmed</title>
<style>body{margin:0;padding:40px 20px;background:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;}.card{background:#fff;max-width:520px;width:100%;border-radius:20px;padding:48px 40px;box-shadow:0 8px 40px rgba(0,0,0,0.1);text-align:center;}h1{margin:0 0 10px;font-size:24px;font-weight:900;color:#111827;}p{color:#6b7280;font-size:14px;line-height:1.6;margin:0 0 24px;}a.btn{display:inline-block;padding:12px 32px;background:linear-gradient(135deg,#3d24a0,#5636D1);color:#fff;font-weight:700;font-size:14px;text-decoration:none;border-radius:50px;}.meta{margin-top:20px;font-size:11px;color:#9ca3af;}</style>
</head>
<body>
  <div class="card">
    <div style="font-size:56px;margin-bottom:16px;">${alreadyPaid ? 'ℹ️' : '✅'}</div>
    <h1>${alreadyPaid ? 'Already Confirmed' : 'Payment Confirmed!'}</h1>
    <p>${message}</p>
    <a href="${reportUrl}" class="btn">View Unlocked SEO Report →</a>
    <div class="meta">Report ID: ${reportId}</div>
  </div>
</body>
</html>`
}

function errorPage(message: string): string {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>Error</title><style>body{margin:0;padding:40px 20px;background:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;}.card{background:#fff;max-width:480px;border-radius:20px;padding:48px 40px;box-shadow:0 8px 40px rgba(0,0,0,0.1);text-align:center;}h1{margin:0 0 10px;font-size:22px;font-weight:900;color:#111827;}p{color:#6b7280;font-size:14px;}</style></head>
<body><div class="card"><div style="font-size:48px;margin-bottom:16px;">⚠️</div><h1>Something went wrong</h1><p>${message}</p></div></body>
</html>`
}
