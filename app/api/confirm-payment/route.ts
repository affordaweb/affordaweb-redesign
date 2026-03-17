import { NextRequest, NextResponse } from 'next/server'
import { kvGet, kvSet } from '@/lib/kv-store'
import type { ReportData } from '@/lib/report-content'
import { sendUserUnlockedEmail } from '@/lib/email'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const id    = searchParams.get('id')
  const token = searchParams.get('token')

  if (!id || !token) {
    return html(errorPage('Missing parameters.'))
  }

  const report = await kvGet<ReportData>(`report:${id}`)
  if (!report) {
    return html(errorPage('Report not found. It may have expired.'))
  }

  if (report.admin_token !== token) {
    return html(errorPage('Invalid confirmation token.'))
  }

  if (report.payment_status === 'paid') {
    return html(successPage(report, true))
  }

  const updated: ReportData = { ...report, payment_status: 'paid' }
  await kvSet(`report:${id}`, updated, 60 * 60 * 24 * 30)
  await sendUserUnlockedEmail(updated)

  return html(successPage(report, false))
}

function html(content: string) {
  return new NextResponse(content, { headers: { 'Content-Type': 'text/html; charset=utf-8' } })
}

function successPage(report: ReportData, alreadyPaid: boolean): string {
  const message = alreadyPaid
    ? 'This report was already marked as paid.'
    : `Payment confirmed. The full report has been emailed to <strong>${report.email}</strong>.`

  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>Payment Confirmed</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>body{margin:0;padding:40px 20px;background:#f8f7ff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;}</style>
</head><body>
<div style="max-width:480px;background:#fff;border-radius:16px;padding:40px;text-align:center;box-shadow:0 4px 24px rgba(86,54,209,0.08);">
  <div style="width:64px;height:64px;background:linear-gradient(135deg,#5636D1,#E2498A);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;font-size:28px;">&#10003;</div>
  <h1 style="margin:0 0 10px;font-size:22px;font-weight:800;color:#0F0F1A;">Payment Confirmed</h1>
  <p style="margin:0 0 24px;font-size:14px;color:#6b7280;line-height:1.6;">${message}</p>
  <div style="background:#f8f7ff;border-radius:10px;padding:14px;text-align:left;font-size:13px;color:#374151;">
    <p style="margin:0 0 4px;"><strong>Name:</strong> ${report.name}</p>
    <p style="margin:0 0 4px;"><strong>Website:</strong> ${report.website}</p>
    <p style="margin:0;"><strong>Email:</strong> ${report.email}</p>
  </div>
</div>
</body></html>`
}

function errorPage(message: string): string {
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>Error</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>body{margin:0;padding:40px 20px;background:#f8f7ff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;}</style>
</head><body>
<div style="max-width:480px;background:#fff;border-radius:16px;padding:40px;text-align:center;box-shadow:0 4px 24px rgba(86,54,209,0.08);">
  <div style="font-size:40px;margin-bottom:16px;">&#9888;</div>
  <h1 style="margin:0 0 10px;font-size:20px;font-weight:800;color:#0F0F1A;">Something went wrong</h1>
  <p style="margin:0;font-size:14px;color:#6b7280;">${message}</p>
</div>
</body></html>`
}
