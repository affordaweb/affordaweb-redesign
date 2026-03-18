import { kvGet } from "@/lib/kv-store"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, Globe, AlertCircle } from "lucide-react"
import type { Metadata } from "next"
import type { SeoReport } from "@/types/seo-report"
import TimerLock from "@/components/TimerLock"

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  return {
    title: `SEO Report | AffordaWeb Solutions`,
    description: "View your SEO audit results — score, top issues, and recommendations.",
    robots: { index: false, follow: false },
  }
}

// ── Helpers ───────────────────────────────────────────────────────────────────

async function getReport(id: string): Promise<SeoReport | null> {
  try {
    return await kvGet<SeoReport>(`seo_report:${id}`)
  } catch {
    return null
  }
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function SeoReportPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>
  searchParams: Promise<{ unlocked?: string }>
}) {
  const { id } = await params
  const { unlocked: unlockedParam } = await searchParams
  const report = await getReport(id)
  if (!report) notFound()

  const unlocked =
    unlockedParam === "true" && report.paymentStatus === "paid"

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        {/* Back link */}
        <Link
          href="/seo-audit"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary-600 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
          Run Another Analysis
        </Link>

        {/* Page header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-bold border border-primary-100">
              SEO Audit Report
            </span>
            {report.paymentStatus === "paid" && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100">
                ✓ Unlocked
              </span>
            )}
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900">
            SEO Analysis:{" "}
            <span className="text-primary-600">{report.domain}</span>
          </h1>
          <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-400">
            <span className="flex items-center gap-1.5">
              <Globe className="w-4 h-4" />
              <a
                href={report.website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-500 transition-colors"
              >
                {report.website}
              </a>
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(report.createdAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
        </div>

        {/* Pending payment notice (only shown when paid + unlocked flow) */}
        {report.paymentStatus === "pending" && !unlocked && (
          <div className="flex items-start gap-3 p-4 rounded-2xl bg-amber-50 border border-amber-100 mb-8 text-sm text-amber-800">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-amber-500" />
            <div>
              <strong>Preview Mode</strong> — Your free 2-minute preview is
              shown below. After the timer expires you&apos;ll be prompted to
              subscribe for personalized implementation help.
            </div>
          </div>
        )}

        {/* ── Timer-locked report (client component) ────────────────────── */}
        <TimerLock report={report} unlocked={unlocked} />

        {/* Promo footer */}
        <div className="mt-10 rounded-3xl bg-gradient-hero text-white p-8 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(86,54,209,0.3) 1.5px, transparent 1.5px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative">
            <h3 className="text-xl font-black mb-2">
              Want a Better-Ranking Website?
            </h3>
            <p className="text-white/70 text-sm mb-6 max-w-lg mx-auto">
              AffordaWeb Solutions builds fast, professional websites starting
              at{" "}
              <strong className="text-white">$69/month</strong> — with
              hosting, SSL, SEO, and unlimited updates included.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-primary text-white font-bold text-sm shadow-btn hover:shadow-glow transition-all hover:scale-[1.02]"
              >
                View Pricing
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border-2 border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
