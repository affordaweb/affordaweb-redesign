import { Resend } from 'resend'
import type { SeoReport } from '@/types/seo-report'

function getResend() {
  const key = process.env.RESEND_API_KEY
  if (!key) throw new Error('RESEND_API_KEY is not configured.')
  return new Resend(key)
}

const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? 'hello@affordawebsolutions.com'
const FROM_EMAIL = process.env.FROM_EMAIL ?? 'SEO Audit <audits@affordawebsolutions.com>'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://affordawebsolutions.com'

function gradeColor(grade: string) {
  if (grade === 'A') return '#16a34a'
  if (grade === 'B') return '#2563eb'
  if (grade === 'C') return '#d97706'
  if (grade === 'D') return '#ea580c'
  return '#dc2626'
}

function priorityColor(priority: string) {
  if (priority === 'critical') return '#dc2626'
  if (priority === 'high') return '#ea580c'
  if (priority === 'medium') return '#d97706'
  return '#16a34a'
}

// ── Admin notification ────────────────────────────────────────────────────────

export async function sendAdminNotification(report: SeoReport) {
  const confirmUrl = `${BASE_URL}/api/confirm-payment?report_id=${report.id}`
  const gc = gradeColor(report.grade)

  const issuesList = report.topIssues
    .map((issue) => `<li style="padding:4px 0;color:#374151;">${issue}</li>`)
    .join('')

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="max-width:600px;margin:32px auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

    <!-- Header -->
    <div style="background:linear-gradient(135deg,#3d24a0,#5636D1);padding:32px 40px;text-align:center;">
      <div style="font-size:12px;font-weight:700;letter-spacing:2px;color:rgba(255,255,255,0.7);text-transform:uppercase;margin-bottom:8px;">AffordaWeb Solutions</div>
      <h1 style="margin:0;color:#fff;font-size:24px;font-weight:800;">New SEO Audit Request</h1>
      <p style="margin:8px 0 0;color:rgba(255,255,255,0.8);font-size:14px;">Payment confirmation required</p>
    </div>

    <!-- Body -->
    <div style="padding:40px;">

      <!-- Score -->
      <div style="text-align:center;margin-bottom:32px;">
        <div style="display:inline-block;background:#f9fafb;border:2px solid #e5e7eb;border-radius:50%;width:100px;height:100px;line-height:100px;">
          <span style="font-size:36px;font-weight:900;color:${gc};">${report.grade}</span>
        </div>
        <div style="margin-top:12px;font-size:28px;font-weight:900;color:${gc};">${report.seoScore}<span style="font-size:16px;color:#6b7280;">/100</span></div>
        <div style="color:#6b7280;font-size:14px;">SEO Score for <strong>${report.domain}</strong></div>
      </div>

      <!-- User Info -->
      <table style="width:100%;border-collapse:collapse;margin-bottom:28px;">
        <tr><td style="padding:10px 16px;background:#f9fafb;border-radius:8px 8px 0 0;border-bottom:1px solid #e5e7eb;"><strong style="color:#374151;">Name</strong></td><td style="padding:10px 16px;background:#f9fafb;border-radius:8px 8px 0 0;border-bottom:1px solid #e5e7eb;color:#111827;">${report.name}</td></tr>
        <tr><td style="padding:10px 16px;background:#f9fafb;border-bottom:1px solid #e5e7eb;"><strong style="color:#374151;">Email</strong></td><td style="padding:10px 16px;background:#f9fafb;border-bottom:1px solid #e5e7eb;"><a href="mailto:${report.email}" style="color:#5636D1;">${report.email}</a></td></tr>
        <tr><td style="padding:10px 16px;background:#f9fafb;border-bottom:1px solid #e5e7eb;"><strong style="color:#374151;">Website</strong></td><td style="padding:10px 16px;background:#f9fafb;border-bottom:1px solid #e5e7eb;"><a href="${report.website}" style="color:#5636D1;">${report.website}</a></td></tr>
        <tr><td style="padding:10px 16px;background:#f9fafb;border-bottom:1px solid #e5e7eb;"><strong style="color:#374151;">Business Type</strong></td><td style="padding:10px 16px;background:#f9fafb;border-bottom:1px solid #e5e7eb;color:#111827;">${report.businessType}</td></tr>
        <tr><td style="padding:10px 16px;background:#f9fafb;border-radius:0 0 8px 8px;"><strong style="color:#374151;">Primary Goal</strong></td><td style="padding:10px 16px;background:#f9fafb;border-radius:0 0 8px 8px;color:#111827;">${report.primaryGoal}</td></tr>
      </table>

      <!-- Issues -->
      <div style="background:#fef2f2;border:1px solid #fecaca;border-radius:12px;padding:20px;margin-bottom:28px;">
        <h3 style="margin:0 0 12px;color:#dc2626;font-size:15px;font-weight:700;">⚠ Top Issues Found</h3>
        <ul style="margin:0;padding:0 0 0 20px;">${issuesList}</ul>
      </div>

      <!-- CTA -->
      <div style="text-align:center;">
        <p style="color:#6b7280;font-size:14px;margin-bottom:20px;">Once payment is confirmed, the full SEO report will be automatically sent to the user.</p>
        <a href="${confirmUrl}" style="display:inline-block;padding:16px 40px;background:linear-gradient(135deg,#3d24a0,#5636D1);color:#fff;font-weight:800;font-size:16px;text-decoration:none;border-radius:50px;box-shadow:0 8px 24px rgba(86,54,209,0.4);">
          ✓ Confirm Payment &amp; Send Report
        </a>
        <p style="margin-top:12px;font-size:12px;color:#9ca3af;">Or copy this link: ${confirmUrl}</p>
      </div>

    </div>

    <!-- Footer -->
    <div style="background:#f9fafb;border-top:1px solid #e5e7eb;padding:20px 40px;text-align:center;">
      <p style="margin:0;font-size:12px;color:#9ca3af;">AffordaWeb Solutions · <a href="${BASE_URL}" style="color:#5636D1;">affordawebsolutions.com</a></p>
    </div>
  </div>
</body>
</html>`

  return getResend().emails.send({
    from: FROM_EMAIL,
    to: ADMIN_EMAIL,
    subject: `[SEO Audit] New request: ${report.domain} — Score ${report.seoScore}/100`,
    html,
  })
}

// ── User full report email ────────────────────────────────────────────────────

export async function sendUserReport(report: SeoReport) {
  const reportUrl = `${BASE_URL}/seo-report/${report.id}?unlocked=true`
  const gc = gradeColor(report.grade)

  const categoriesHtml = report.categories
    .map((cat) => {
      const pct = Math.round((cat.score / cat.maxScore) * 100)
      const barColor = pct >= 80 ? '#16a34a' : pct >= 60 ? '#2563eb' : pct >= 40 ? '#d97706' : '#dc2626'
      return `
      <div style="margin-bottom:16px;">
        <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
          <span style="font-weight:700;color:#111827;font-size:14px;">${cat.name}</span>
          <span style="font-weight:700;color:${barColor};font-size:14px;">${cat.score}/${cat.maxScore}</span>
        </div>
        <div style="height:8px;background:#e5e7eb;border-radius:99px;overflow:hidden;">
          <div style="height:8px;width:${pct}%;background:${barColor};border-radius:99px;"></div>
        </div>
      </div>`
    })
    .join('')

  const recsHtml = report.recommendations
    .slice(0, 8)
    .map(
      (r) => `
    <div style="border-left:4px solid ${priorityColor(r.priority)};padding:12px 16px;background:#f9fafb;border-radius:0 8px 8px 0;margin-bottom:12px;">
      <div style="font-weight:700;color:#111827;margin-bottom:4px;">${r.title} <span style="font-size:11px;font-weight:600;padding:2px 8px;border-radius:99px;background:${priorityColor(r.priority)}22;color:${priorityColor(r.priority)};text-transform:uppercase;">${r.priority}</span></div>
      <div style="font-size:13px;color:#6b7280;line-height:1.5;">${r.description}</div>
    </div>`
    )
    .join('')

  const issuesHtml = report.topIssues
    .map((i) => `<li style="padding:5px 0;color:#dc2626;font-size:13px;">✗ ${i}</li>`)
    .join('')

  const quickWinsHtml = report.quickWins
    .map((w) => `<li style="padding:5px 0;color:#16a34a;font-size:13px;">✓ ${w}</li>`)
    .join('')

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="max-width:640px;margin:32px auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

    <!-- Header -->
    <div style="background:linear-gradient(135deg,#3d24a0,#5636D1);padding:40px;text-align:center;">
      <div style="font-size:12px;font-weight:700;letter-spacing:2px;color:rgba(255,255,255,0.7);text-transform:uppercase;margin-bottom:8px;">AffordaWeb Solutions</div>
      <h1 style="margin:0;color:#fff;font-size:28px;font-weight:900;">Your Full SEO Report</h1>
      <p style="margin:8px 0 0;color:rgba(255,255,255,0.85);font-size:15px;">${report.domain}</p>
    </div>

    <div style="padding:40px;">

      <!-- Score Hero -->
      <div style="text-align:center;background:#f9fafb;border-radius:16px;padding:32px;margin-bottom:32px;border:1px solid #e5e7eb;">
        <div style="font-size:64px;font-weight:900;color:${gc};line-height:1;">${report.seoScore}</div>
        <div style="font-size:20px;color:#6b7280;margin-bottom:4px;">out of 100</div>
        <div style="display:inline-block;padding:6px 20px;border-radius:99px;background:${gc}15;color:${gc};font-weight:800;font-size:18px;">Grade: ${report.grade}</div>
        <p style="margin:16px 0 0;color:#6b7280;font-size:14px;">Hi ${report.name}, here is your full SEO analysis for <strong>${report.domain}</strong>.</p>
      </div>

      <!-- Category Scores -->
      <h2 style="font-size:18px;font-weight:800;color:#111827;margin:0 0 16px;">Category Breakdown</h2>
      ${categoriesHtml}

      <!-- Issues & Wins -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:28px 0;">
        <div style="background:#fef2f2;border:1px solid #fecaca;border-radius:12px;padding:20px;">
          <h3 style="margin:0 0 12px;color:#dc2626;font-size:14px;font-weight:700;">Top Issues</h3>
          <ul style="margin:0;padding:0;list-style:none;">${issuesHtml}</ul>
        </div>
        <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:12px;padding:20px;">
          <h3 style="margin:0 0 12px;color:#16a34a;font-size:14px;font-weight:700;">Quick Wins</h3>
          <ul style="margin:0;padding:0;list-style:none;">${quickWinsHtml}</ul>
        </div>
      </div>

      <!-- Recommendations -->
      <h2 style="font-size:18px;font-weight:800;color:#111827;margin:28px 0 16px;">Recommendations</h2>
      ${recsHtml}

      <!-- View Online CTA -->
      <div style="text-align:center;margin-top:32px;padding:32px;background:linear-gradient(135deg,#f3f0fd,#eff6ff);border-radius:16px;">
        <h3 style="margin:0 0 8px;color:#111827;font-size:18px;font-weight:800;">View Your Full Report Online</h3>
        <p style="margin:0 0 20px;color:#6b7280;font-size:14px;">See your interactive dashboard with detailed breakdowns and all check results.</p>
        <a href="${reportUrl}" style="display:inline-block;padding:14px 36px;background:linear-gradient(135deg,#3d24a0,#5636D1);color:#fff;font-weight:800;font-size:15px;text-decoration:none;border-radius:50px;box-shadow:0 8px 24px rgba(86,54,209,0.4);">
          View Full Report →
        </a>
      </div>

      <!-- Footer note -->
      <p style="margin-top:32px;font-size:13px;color:#9ca3af;text-align:center;">Questions? Reply to this email or contact us at <a href="mailto:hello@affordawebsolutions.com" style="color:#5636D1;">hello@affordawebsolutions.com</a></p>

    </div>

    <div style="background:#f9fafb;border-top:1px solid #e5e7eb;padding:20px 40px;text-align:center;">
      <p style="margin:0;font-size:12px;color:#9ca3af;">AffordaWeb Solutions · <a href="${BASE_URL}" style="color:#5636D1;">affordawebsolutions.com</a> · Professional Website Design from $69/month</p>
    </div>
  </div>
</body>
</html>`

  return getResend().emails.send({
    from: FROM_EMAIL,
    to: report.email,
    subject: `Your Full SEO Report for ${report.domain} — Score: ${report.seoScore}/100`,
    html,
  })
}
