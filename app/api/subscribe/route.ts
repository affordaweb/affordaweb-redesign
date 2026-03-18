import { NextRequest, NextResponse } from 'next/server'
import { kvGet } from '@/lib/kv-store'
import { sendSeoSubscriptionEmail } from '@/lib/email'
import type { SeoReport } from '@/types/seo-report'

// ── POST /api/subscribe ───────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, website, message, reportId } = body

    if (!name || !email || !website) {
      return NextResponse.json(
        { error: 'Name, email, and website are required.' },
        { status: 400 }
      )
    }

    // Fetch the original SEO report for context (non-blocking if missing)
    let report: SeoReport | null = null
    if (reportId) {
      try {
        report = await kvGet<SeoReport>(`seo_report:${reportId}`)
      } catch {
        // fine — report context is best-effort
      }
    }

    // Send admin notification (non-blocking)
    sendSeoSubscriptionEmail({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      website: website.trim(),
      message: message?.trim() ?? '',
      reportId: reportId ?? '',
      report,
    }).catch((e) => console.error('[subscribe] email failed:', e))

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[subscribe] error:', err)
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 })
  }
}
