import { NextRequest, NextResponse } from 'next/server'
import { kvGet } from '@/lib/kv-store'
import { ReportData } from '@/lib/report-content'

const RESEND_API_KEY = process.env.RESEND_API_KEY
const FROM = 'AffordaWeb <hello@affordawebsolutions.com>'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://www.affordawebsolutions.com'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const reportId = searchParams.get('reportId')
    const email = searchParams.get('email')

    if (!reportId || !email) {
      return NextResponse.json(
        { error: 'Missing reportId or email' },
        { status: 400 }
      )
    }

    // Get report from KV store
    const report = await kvGet<ReportData>(`report:${reportId}`)
    if (!report) {
      return NextResponse.json(
        { error: 'Report not found' },
        { status: 404 }
      )
    }

    // Verify email matches
    if (report.email.toLowerCase() !== decodeURIComponent(email).toLowerCase()) {
      return NextResponse.json(
        { error: 'Email does not match report' },
        { status: 403 }
      )
    }

    // Generate email HTML with report summary
    const reportUrl = `${BASE_URL}/report/${reportId}`
    const mockupUrl = `${reportUrl}#mockup-section`

    const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #1f2937; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #5636D1 0%, #E2498A 100%); color: white; padding: 30px 20px; border-radius: 12px 12px 0 0; text-align: center; }
    .header h1 { margin: 0; font-size: 24px; font-weight: 800; }
    .header p { margin: 8px 0 0 0; font-size: 14px; opacity: 0.9; }
    .body { background: #f9fafb; padding: 30px 20px; border-radius: 0 0 12px 12px; }
    .score-box { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border: 2px solid #e5e7eb; }
    .score-value { font-size: 32px; font-weight: 800; color: #5636D1; }
    .score-label { font-size: 13px; color: #6b7280; margin-top: 4px; }
    .mockup-info { background: linear-gradient(135deg, rgba(86, 54, 209, 0.1) 0%, rgba(226, 73, 138, 0.1) 100%); padding: 16px; border-radius: 8px; border-left: 4px solid #5636D1; margin: 20px 0; }
    .mockup-info h3 { margin: 0 0 8px 0; font-size: 14px; font-weight: 700; color: #374151; }
    .mockup-info p { margin: 0; font-size: 13px; color: #6b7280; line-height: 1.5; }
    .issues-list { margin: 20px 0; }
    .issue { background: white; padding: 12px; margin: 8px 0; border-radius: 6px; font-size: 13px; color: #374151; border-left: 3px solid #f59e0b; }
    .cta-box { background: linear-gradient(135deg, #5636D1 0%, #E2498A 100%); padding: 24px; border-radius: 8px; text-align: center; margin: 20px 0; }
    .cta-button { display: inline-block; background: white; color: #5636D1; padding: 12px 32px; border-radius: 8px; font-weight: 700; text-decoration: none; font-size: 14px; }
    .footer { text-align: center; font-size: 12px; color: #9ca3af; margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Your Website Redesign Report</h1>
      <p>Complete Analysis for ${report.website}</p>
    </div>
    
    <div class="body">
      <p>Hi ${report.name.split(' ')[0]},</p>
      
      <p>Your personalized website redesign report is ready! Here's what we found:</p>
      
      <div class="score-box">
        <div class="score-value">${report.preview.score}</div>
        <div class="score-label">Website Health Score / 100</div>
        <div style="font-size: 12px; color: #9ca3af; margin-top: 8px;">Status: <strong>${report.preview.overview_status}</strong></div>
      </div>
      
      <div class="mockup-info">
        <h3>🎨 Your Personalized Website Mockup</h3>
        <p>We've generated a custom website design mockup showing exactly how your site could look after redesign. Click the button below to view your full report including this mockup visualization.</p>
      </div>
      
      <h3 style="margin: 20px 0 12px 0; color: #0f0f1a; font-weight: 700;">Issues Identified:</h3>
      <div class="issues-list">
        ${report.preview.issues
          .slice(0, 5)
          .map(
            (issue) =>
              `<div class="issue">${issue.label}</div>`
          )
          .join('')}
      </div>
      
      <p style="font-size: 12px; color: #6b7280; margin-top: 8px;">
        + ${Math.max(0, report.preview.issues.length - 5)} more issues in your full report
      </p>
      
      <div class="cta-box">
        <p style="margin: 0 0 12px 0; color: white; font-size: 14px;">Ready to see your complete report with mockup?</p>
        <a href="${reportUrl}" class="cta-button">View Full Report & Mockup</a>
      </div>
      
      <p style="font-size: 13px; color: #6b7280; line-height: 1.6; margin: 20px 0;">
        Your report includes:
        <br>✓ Website health score
        <br>✓ Personalized website mockup design
        <br>✓ 6+ sections of detailed recommendations
        <br>✓ Copywriting suggestions
        <br>✓ Conversion strategy tips
        <br>✓ Quick wins you can implement immediately
      </p>
      
      <p style="font-size: 13px; color: #6b7280;">Once you view the report, you can screenshot your mockup design or use the tools on your device to save it.</p>
    </div>
    
    <div class="footer">
      <p>Questions? Reply to this email or visit <a href="${BASE_URL}" style="color: #5636D1; text-decoration: none;">affordawebsolutions.com</a></p>
      <p style="margin-top: 8px;">© 2025 AffordaWeb Solutions. All rights reserved.</p>
    </div>
  </div>
</body>
</html>`

    // Send email via Resend
    if (!RESEND_API_KEY) {
      console.warn('[send-report] RESEND_API_KEY not set')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: FROM,
          to: email,
          subject: `Your Website Redesign Report & Mockup – ${report.website}`,
          html,
        }),
      })

      if (!res.ok) {
        console.error('[send-report] Resend error:', await res.text())
        return NextResponse.json(
          { error: 'Failed to send email' },
          { status: 500 }
        )
      }

      return NextResponse.json({
        success: true,
        message: 'Report sent to your email!',
        redirectUrl: `/report/${reportId}`,
      })
    } catch (err) {
      console.error('[send-report] fetch error:', err)
      return NextResponse.json(
        { error: 'Email service error' },
        { status: 500 }
      )
    }
  } catch (err) {
    console.error('[send-report] error:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
