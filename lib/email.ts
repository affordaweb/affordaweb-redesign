import type { ReportData } from './report-content'
import type { BriefData } from './brief'

const RESEND_API_KEY = process.env.RESEND_API_KEY
const FROM = 'AffordaWeb <hello@affordawebsolutions.com>'
const ADMIN_EMAIL = 'hello@affordawebsolutions.com'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://affordawebsolutions.com'

async function sendEmail(to: string, subject: string, html: string): Promise<boolean> {
  if (!RESEND_API_KEY) {
    console.warn('[email] RESEND_API_KEY not set — skipping email')
    return false
  }
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ from: FROM, to, subject, html }),
    })
    if (!res.ok) {
      console.error('[email] Resend error:', await res.text())
      return false
    }
    return true
  } catch (err) {
    console.error('[email] fetch error:', err)
    return false
  }
}

export async function sendAdminReportEmail(report: ReportData, adminToken: string): Promise<boolean> {
  const confirmUrl = `${BASE_URL}/api/confirm-payment?id=${report.report_id}&token=${adminToken}`

  const issuesHtml = report.preview.issues
    .map(
      (issue) =>
        `<tr>
          <td style="padding:8px 0;border-bottom:1px solid #f3f4f6;color:#374151;font-size:13px;">${issue.label}</td>
          <td style="padding:8px 0 8px 12px;border-bottom:1px solid #f3f4f6;text-align:right;">
            <span style="background:${issue.impact === 'high' ? '#fee2e2' : issue.impact === 'medium' ? '#fef3c7' : '#d1fae5'};color:${issue.impact === 'high' ? '#dc2626' : issue.impact === 'medium' ? '#d97706' : '#059669'};padding:2px 10px;border-radius:999px;font-size:11px;font-weight:700;">${issue.impact.toUpperCase()}</span>
          </td>
        </tr>`,
    )
    .join('')

  const html = `<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f8f7ff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="max-width:600px;margin:40px auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(86,54,209,0.08);">

    <div style="background:linear-gradient(135deg,#5636D1,#E2498A);padding:32px 40px;">
      <p style="margin:0;color:rgba(255,255,255,0.75);font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;">New Report Request</p>
      <h1 style="margin:8px 0 0;color:#fff;font-size:22px;font-weight:800;">${report.name}</h1>
      <p style="margin:4px 0 0;color:rgba(255,255,255,0.85);font-size:14px;">${report.website}</p>
    </div>

    <div style="padding:20px 40px;background:#f8f7ff;border-bottom:1px solid #eee;">
      <p style="margin:0;font-size:12px;color:#9ca3af;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;">Website Score</p>
      <p style="margin:4px 0 0;font-size:44px;font-weight:900;color:#5636D1;line-height:1;">${report.preview.score}<span style="font-size:18px;color:#9ca3af;font-weight:600;">/100</span></p>
      <p style="margin:4px 0 0;font-size:13px;color:#6b7280;">${report.preview.overview_status}</p>
    </div>

    <div style="padding:24px 40px;border-bottom:1px solid #f3f4f6;">
      <h2 style="margin:0 0 14px;font-size:15px;color:#0F0F1A;font-weight:700;">Submission Details</h2>
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:5px 0;color:#9ca3af;font-size:13px;width:110px;">Name</td><td style="padding:5px 0;color:#0F0F1A;font-size:13px;font-weight:600;">${report.name}</td></tr>
        <tr><td style="padding:5px 0;color:#9ca3af;font-size:13px;">Email</td><td style="padding:5px 0;color:#0F0F1A;font-size:13px;font-weight:600;">${report.email}</td></tr>
        <tr><td style="padding:5px 0;color:#9ca3af;font-size:13px;">Website</td><td style="padding:5px 0;color:#5636D1;font-size:13px;font-weight:600;">${report.website}</td></tr>
        <tr><td style="padding:5px 0;color:#9ca3af;font-size:13px;">Business</td><td style="padding:5px 0;color:#0F0F1A;font-size:13px;font-weight:600;">${report.business_type}</td></tr>
        <tr><td style="padding:5px 0;color:#9ca3af;font-size:13px;">Goal</td><td style="padding:5px 0;color:#0F0F1A;font-size:13px;font-weight:600;">${report.goal}</td></tr>
        <tr><td style="padding:5px 0;color:#9ca3af;font-size:13px;">Report ID</td><td style="padding:5px 0;color:#0F0F1A;font-size:13px;font-family:monospace;">${report.report_id}</td></tr>
      </table>
    </div>

    <div style="padding:24px 40px;border-bottom:1px solid #f3f4f6;">
      <h2 style="margin:0 0 14px;font-size:15px;color:#0F0F1A;font-weight:700;">Issues Found</h2>
      <table style="width:100%;border-collapse:collapse;">${issuesHtml}</table>
    </div>

    <div style="padding:32px 40px;text-align:center;">
      <p style="margin:0 0 6px;font-size:15px;font-weight:700;color:#0F0F1A;">Confirm payment received?</p>
      <p style="margin:0 0 20px;font-size:13px;color:#6b7280;">Clicking the button below will mark this report as paid and automatically email the full plan to <strong>${report.email}</strong>.</p>
      <a href="${confirmUrl}" style="display:inline-block;padding:16px 40px;background:linear-gradient(135deg,#5636D1,#E2498A);color:#fff;font-size:15px;font-weight:800;border-radius:12px;text-decoration:none;">
        &#10003; Confirm Payment &amp; Send Report
      </a>
      <p style="margin:20px 0 0;font-size:11px;color:#d1d5db;">View report: <a href="${BASE_URL}/report/${report.report_id}" style="color:#9ca3af;">${BASE_URL}/report/${report.report_id}</a></p>
    </div>

  </div>
</body></html>`

  return sendEmail(ADMIN_EMAIL, `New Report — ${report.name} | ${report.website}`, html)
}

export async function sendUserUnlockedEmail(report: ReportData): Promise<boolean> {
  const { full_plan } = report.preview

  const wireframeHtml = full_plan.wireframe_sections
    .map(
      (s, i) => `
      <div style="margin-bottom:16px;padding:18px;background:${i % 2 === 0 ? '#f8f7ff' : '#fdf4ff'};border-radius:12px;border-left:4px solid #5636D1;">
        <p style="margin:0 0 4px;font-size:14px;font-weight:700;color:#5636D1;">${s.name}</p>
        <p style="margin:0 0 10px;font-size:12px;color:#6b7280;">${s.purpose}</p>
        <ul style="margin:0;padding-left:18px;">
          ${s.elements.map((el) => `<li style="color:#374151;font-size:12px;margin-bottom:3px;">${el}</li>`).join('')}
        </ul>
      </div>`,
    )
    .join('')

  const copyHtml = full_plan.copy_suggestions
    .map(
      (c) => `
      <div style="margin-bottom:14px;padding:14px;background:#fff;border-radius:10px;border:1px solid #e5e7eb;">
        <p style="margin:0 0 8px;font-size:13px;font-weight:700;color:#0F0F1A;">${c.section}</p>
        <p style="margin:0 0 6px;font-size:12px;color:#dc2626;background:#fee2e2;padding:6px 10px;border-radius:6px;"><strong>Problem:</strong> ${c.current_problem}</p>
        <p style="margin:0;font-size:12px;color:#059669;background:#d1fae5;padding:6px 10px;border-radius:6px;"><strong>Fix:</strong> ${c.suggested_approach}</p>
      </div>`,
    )
    .join('')

  const conversionHtml = full_plan.conversion_strategy
    .map(
      (tip, i) =>
        `<p style="margin:0 0 8px;font-size:12px;color:#374151;padding:10px 12px;background:#f8f7ff;border-radius:8px;"><strong style="color:#5636D1;">${i + 1}.</strong> ${tip}</p>`,
    )
    .join('')

  const quickWinsHtml = full_plan.quick_wins
    .map((win) => `<p style="margin:0 0 8px;font-size:12px;color:#374151;">&#10003; ${win}</p>`)
    .join('')

  const html = `<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f8f7ff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="max-width:600px;margin:40px auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(86,54,209,0.08);">

    <div style="background:linear-gradient(135deg,#5636D1,#E2498A);padding:32px 40px;">
      <p style="margin:0;color:rgba(255,255,255,0.75);font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;">Your Full Report is Unlocked</p>
      <h1 style="margin:8px 0 0;color:#fff;font-size:22px;font-weight:800;">Website Redesign Plan</h1>
      <p style="margin:4px 0 0;color:rgba(255,255,255,0.85);font-size:14px;">${report.website}</p>
    </div>

    <div style="padding:24px 40px;background:#f8f7ff;border-bottom:1px solid #eee;text-align:center;">
      <p style="margin:0;font-size:12px;color:#9ca3af;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;">Website Score</p>
      <p style="margin:8px 0 0;font-size:52px;font-weight:900;color:#5636D1;line-height:1;">${report.preview.score}<span style="font-size:20px;color:#9ca3af;font-weight:600;">/100</span></p>
      <p style="margin:6px 0 0;font-size:13px;color:#6b7280;">${report.preview.overview_status} — your plan below will fix this</p>
    </div>

    <div style="padding:32px 40px;">

      <h2 style="margin:0 0 14px;font-size:16px;color:#0F0F1A;font-weight:800;">Homepage Wireframe</h2>
      ${wireframeHtml}

      <h2 style="margin:28px 0 14px;font-size:16px;color:#0F0F1A;font-weight:800;">Copywriting Suggestions</h2>
      ${copyHtml}

      <h2 style="margin:28px 0 14px;font-size:16px;color:#0F0F1A;font-weight:800;">Conversion Strategy</h2>
      ${conversionHtml}

      <h2 style="margin:28px 0 14px;font-size:16px;color:#0F0F1A;font-weight:800;">Quick Wins (Do This Week)</h2>
      ${quickWinsHtml}

      <div style="margin-top:28px;padding:24px;background:linear-gradient(135deg,rgba(86,54,209,0.06),rgba(226,73,138,0.06));border-radius:12px;text-align:center;border:1px solid rgba(86,54,209,0.12);">
        <p style="margin:0 0 6px;font-size:14px;font-weight:700;color:#0F0F1A;">Need help implementing this?</p>
        <p style="margin:0 0 14px;font-size:12px;color:#6b7280;">We build affordable websites starting from $299 — built around exactly this plan.</p>
        <a href="https://affordawebsolutions.com/contact" style="display:inline-block;padding:12px 28px;background:linear-gradient(135deg,#5636D1,#E2498A);color:#fff;font-size:13px;font-weight:700;border-radius:10px;text-decoration:none;">Get a Custom Quote</a>
      </div>

    </div>

    <div style="padding:20px 40px;background:#f8f7ff;border-top:1px solid #e5e7eb;text-align:center;">
      <p style="margin:0;font-size:12px;color:#9ca3af;">AffordaWeb Solutions · hello@affordawebsolutions.com</p>
      <p style="margin:6px 0 0;font-size:11px;color:#d1d5db;">View online: <a href="${BASE_URL}/report/${report.report_id}" style="color:#9ca3af;">${BASE_URL}/report/${report.report_id}</a></p>
    </div>

  </div>
</body></html>`

  return sendEmail(report.email, `Your Full Website Redesign Report — ${report.website}`, html)
}

export async function sendUserConfirmationEmail(report: ReportData): Promise<boolean> {
  const briefUrl = `${BASE_URL}/brief/${report.report_id}`
  const reportUrl = `${BASE_URL}/report/${report.report_id}`
  const contactUrl = `${BASE_URL}/contact`

  const html = `<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f8f7ff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="max-width:600px;margin:40px auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(86,54,209,0.08);">

    <div style="background:linear-gradient(135deg,#5636D1,#E2498A);padding:32px 40px;text-align:center;">
      <div style="width:64px;height:64px;background:rgba(255,255,255,0.2);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 16px;font-size:28px;">&#10003;</div>
      <h1 style="margin:0 0 6px;color:#fff;font-size:22px;font-weight:800;">Request Received!</h1>
      <p style="margin:0;color:rgba(255,255,255,0.85);font-size:14px;">Hi ${report.name} — we're on it.</p>
    </div>

    <div style="padding:32px 40px;border-bottom:1px solid #f3f4f6;">
      <p style="margin:0 0 16px;font-size:14px;color:#374151;line-height:1.6;">
        We've received your website analysis request for <strong>${report.website}</strong>.
        We're reviewing your site and preparing your personalised report. We'll send you a payment request as soon as it's ready — usually within a few hours.
      </p>
    </div>

    <div style="padding:28px 40px;border-bottom:1px solid #f3f4f6;">
      <p style="margin:0 0 10px;font-size:12px;font-weight:700;color:#9ca3af;text-transform:uppercase;letter-spacing:0.08em;">Your Report ID</p>
      <div style="background:#f8f7ff;border:2px solid rgba(86,54,209,0.2);border-radius:12px;padding:16px 20px;text-align:center;">
        <p style="margin:0;font-size:22px;font-weight:900;color:#5636D1;font-family:monospace;letter-spacing:0.05em;">${report.report_id}</p>
      </div>
      <p style="margin:10px 0 0;font-size:12px;color:#9ca3af;line-height:1.5;">Keep this ID safe. Every payment request we send will include this exact number.</p>
    </div>

    <div style="padding:28px 40px;border-bottom:1px solid #f3f4f6;">
      <h2 style="margin:0 0 16px;font-size:15px;font-weight:700;color:#0F0F1A;">What Happens Next</h2>
      <div style="display:flex;flex-direction:column;gap:12px;">
        ${[
          ['1', '#5636D1', 'We review your website', `We audit <strong>${report.website}</strong> and prepare your full personalised redesign report.`],
          ['2', '#E2498A', 'You receive a payment request', `We\'ll email a payment request to <strong>${report.email}</strong> with your Report ID included.`],
          ['3', '#10b981', 'Your full report is sent instantly', 'Once payment is confirmed, your full report and concept design are emailed to you immediately.'],
        ].map(([n, c, title, desc]) => `
          <div style="display:flex;gap:14px;align-items:flex-start;">
            <div style="width:28px;height:28px;border-radius:50%;background:${c};color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;flex-shrink:0;">${n}</div>
            <div>
              <p style="margin:0 0 3px;font-size:13px;font-weight:700;color:#0F0F1A;">${title}</p>
              <p style="margin:0;font-size:12px;color:#6b7280;line-height:1.5;">${desc}</p>
            </div>
          </div>`).join('')}
      </div>
    </div>

    <div style="padding:24px 40px;background:#fff8f8;border-bottom:1px solid #fee2e2;">
      <p style="margin:0 0 8px;font-size:13px;font-weight:800;color:#dc2626;">&#9888; Important Security Notice</p>
      <p style="margin:0 0 8px;font-size:13px;color:#374151;line-height:1.6;">
        Any payment request from us will always display your Report ID:
        <strong style="color:#5636D1;font-family:monospace;"> ${report.report_id}</strong>
      </p>
      <p style="margin:0;font-size:13px;color:#374151;line-height:1.6;">
        If you receive a payment request showing a <strong>different ID</strong>, do NOT make any payment.
        Contact us immediately via our <a href="${contactUrl}" style="color:#5636D1;font-weight:700;">Contact Form</a>.
      </p>
    </div>

    <div style="padding:28px 40px;text-align:center;">
      <p style="margin:0 0 16px;font-size:13px;color:#6b7280;">While you wait, you can view your free preview report:</p>
      <a href="${reportUrl}" style="display:inline-block;padding:11px 28px;background:linear-gradient(135deg,#5636D1,#E2498A);color:#fff;font-size:13px;font-weight:700;border-radius:10px;text-decoration:none;margin-bottom:16px;">View My Free Preview</a>
      <p style="margin:12px 0 0;font-size:12px;color:#9ca3af;">
        To help us build your site faster, you can also <a href="${briefUrl}" style="color:#5636D1;font-weight:600;">fill in your Project Brief</a> now.
      </p>
    </div>

    <div style="padding:20px 40px;background:#f8f7ff;border-top:1px solid #e5e7eb;text-align:center;">
      <p style="margin:0;font-size:12px;color:#9ca3af;">AffordaWeb Solutions · hello@affordawebsolutions.com</p>
    </div>

  </div>
</body></html>`

  return sendEmail(report.email, `We've received your request — Report ID: ${report.report_id}`, html)
}

export async function sendAdminBriefEmail(report: ReportData, brief: BriefData): Promise<boolean> {
  const rows = [
    ['Business Name', brief.business_name],
    ['Tagline', brief.tagline],
    ['Target Audience', brief.target_audience],
    ['Top Services / Products', brief.top_services],
    ['What Makes Them Different', brief.differentiator],
    ['Colour Preferences', brief.color_preferences],
    ['Reference Sites', brief.reference_sites],
    ['Features Needed', brief.features.join(', ') || 'None specified'],
    ['Has Photos', brief.has_photos === 'yes' ? 'Yes, ready' : brief.has_photos === 'partial' ? 'Some available' : 'No, needs stock'],
    ['Needs Copywriting', brief.needs_copy === 'yes' ? 'Yes' : 'No, will provide'],
    ['Timeline', { asap: 'ASAP', '2weeks': 'Within 2 weeks', '1month': 'Within a month', flexible: 'Flexible' }[brief.timeline] ?? brief.timeline],
    ['Additional Notes', brief.notes || '—'],
  ]

  const html = `<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f8f7ff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="max-width:600px;margin:40px auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(86,54,209,0.08);">

    <div style="background:linear-gradient(135deg,#10b981,#059669);padding:28px 40px;">
      <p style="margin:0 0 4px;color:rgba(255,255,255,0.75);font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;">Project Brief Submitted</p>
      <h1 style="margin:0;color:#fff;font-size:20px;font-weight:800;">${report.name} — ${report.website}</h1>
    </div>

    <div style="padding:24px 40px;background:#f0fdf4;border-bottom:1px solid #d1fae5;">
      <p style="margin:0 0 4px;font-size:12px;color:#9ca3af;font-weight:700;text-transform:uppercase;">Report ID</p>
      <p style="margin:0;font-size:18px;font-weight:900;color:#5636D1;font-family:monospace;">${report.report_id}</p>
    </div>

    <div style="padding:24px 40px;border-bottom:1px solid #f3f4f6;">
      <h2 style="margin:0 0 14px;font-size:15px;font-weight:700;color:#0F0F1A;">Client Details</h2>
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:5px 0;color:#9ca3af;font-size:13px;width:110px;">Name</td><td style="padding:5px 0;color:#0F0F1A;font-size:13px;font-weight:600;">${report.name}</td></tr>
        <tr><td style="padding:5px 0;color:#9ca3af;font-size:13px;">Email</td><td style="padding:5px 0;color:#0F0F1A;font-size:13px;font-weight:600;">${report.email}</td></tr>
        <tr><td style="padding:5px 0;color:#9ca3af;font-size:13px;">Website</td><td style="padding:5px 0;color:#5636D1;font-size:13px;font-weight:600;">${report.website}</td></tr>
        <tr><td style="padding:5px 0;color:#9ca3af;font-size:13px;">Industry</td><td style="padding:5px 0;color:#0F0F1A;font-size:13px;font-weight:600;">${report.business_type}</td></tr>
        <tr><td style="padding:5px 0;color:#9ca3af;font-size:13px;">Goal</td><td style="padding:5px 0;color:#0F0F1A;font-size:13px;font-weight:600;">${report.goal}</td></tr>
      </table>
    </div>

    <div style="padding:24px 40px;">
      <h2 style="margin:0 0 16px;font-size:15px;font-weight:700;color:#0F0F1A;">Project Brief</h2>
      <table style="width:100%;border-collapse:collapse;">
        ${rows.map(([label, value]) => `
          <tr>
            <td style="padding:9px 12px 9px 0;color:#9ca3af;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;vertical-align:top;width:160px;">${label}</td>
            <td style="padding:9px 0;color:#0F0F1A;font-size:13px;line-height:1.55;border-bottom:1px solid #f3f4f6;">${value}</td>
          </tr>`).join('')}
      </table>
    </div>

  </div>
</body></html>`

  return sendEmail(ADMIN_EMAIL, `Project Brief — ${report.name} | ${report.website}`, html)
}
