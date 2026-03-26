import { NextRequest, NextResponse } from 'next/server'
import { kvSet, kvGet, kvIncr } from '@/lib/kv-store'
import { analyzeSeo, normalizeUrl, extractDomain } from '@/lib/seo-analyzer'
import { sendSeoAdminNotification } from '@/lib/email'
import type { SeoReport } from '@/types/seo-report'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://www.affordawebsolutions.com'

// ── Rate limiting (3 per IP per day) ─────────────────────────────────────────

async function checkRateLimit(ip: string): Promise<boolean> {
  const today = new Date().toISOString().slice(0, 10)
  const key = `seo_rate:${ip}:${today}`
  try {
    const count = await kvIncr(key, 86400)
    return count <= 3
  } catch {
    return true // fail open
  }
}

// ── POST /api/create-seo-report ───────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { url, name, email, businessType, primaryGoal } = body

    if (!url || !name || !email) {
      return NextResponse.json(
        { error: 'Website URL, name, and email are required.' },
        { status: 400 }
      )
    }

    let normalizedUrl: string
    try {
      normalizedUrl = normalizeUrl(url)
      new URL(normalizedUrl)
    } catch {
      return NextResponse.json({ error: 'Please enter a valid website URL.' }, { status: 400 })
    }

    // Rate limiting
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
      req.headers.get('x-real-ip') ??
      '127.0.0.1'
    const allowed = await checkRateLimit(ip)
    if (!allowed) {
      return NextResponse.json(
        { error: 'Too many requests. You can submit up to 3 reports per day.' },
        { status: 429 }
      )
    }

    // Run SEO analysis
    let analysis
    try {
      analysis = await analyzeSeo(normalizedUrl)
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Analysis failed.'
      return NextResponse.json({ error: message }, { status: 422 })
    }

    // Build report
    const reportId = crypto.randomUUID()
    const report: SeoReport = {
      id: reportId,
      website: normalizedUrl,
      domain: extractDomain(normalizedUrl),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      businessType: businessType?.trim() ?? '',
      primaryGoal: primaryGoal?.trim() ?? '',
      seoScore: analysis.seoScore,
      grade: analysis.grade,
      categories: analysis.categories,
      topIssues: analysis.topIssues,
      quickWins: analysis.quickWins,
      recommendations: analysis.recommendations,
      paymentStatus: 'pending',
      createdAt: new Date().toISOString(),
    }

    // Store in KV (90-day TTL)
    await kvSet(`seo_report:${reportId}`, report, 60 * 60 * 24 * 90)

    // Send admin notification (non-blocking)
    const confirmUrl = `${BASE_URL}/api/confirm-seo-payment?report_id=${reportId}`
    sendSeoAdminNotification(report, confirmUrl).catch((e) =>
      console.error('[create-seo-report] admin email failed:', e)
    )

    return NextResponse.json({ reportId })
  } catch (err) {
    console.error('[create-seo-report] error:', err)
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 })
  }
}
