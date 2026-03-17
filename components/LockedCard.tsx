import { Lock, CheckCircle, AlertTriangle, XCircle, ChevronDown } from "lucide-react"
import type { SeoReport, SeoCategory, SeoCheck } from "@/types/seo-report"

// ── Status icon ───────────────────────────────────────────────────────────────

function StatusIcon({ status }: { status: SeoCheck["status"] }) {
  if (status === "pass") return <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
  if (status === "warning") return <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
  return <XCircle className="w-4 h-4 text-red-500 shrink-0" />
}

// ── Category card preview (blurred) ──────────────────────────────────────────

function CategoryPreview({ category }: { category: SeoCategory }) {
  const pct = Math.round((category.score / category.maxScore) * 100)
  const barColor =
    pct >= 80 ? "bg-emerald-400" : pct >= 60 ? "bg-blue-400" : pct >= 40 ? "bg-amber-400" : "bg-red-400"

  return (
    <div className="bg-white/80 rounded-2xl border border-gray-100 p-5">
      <div className="flex items-center justify-between mb-3">
        <span className="font-bold text-gray-800 text-sm">{category.name}</span>
        <span className="text-xs font-bold text-gray-500">{category.score}/{category.maxScore}</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-3">
        <div className={`h-2 rounded-full ${barColor}`} style={{ width: `${pct}%` }} />
      </div>
      <ul className="space-y-2">
        {category.checks.map((check, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <div className="mt-0.5"><StatusIcon status={check.status} /></div>
            <div className="min-w-0">
              <div className="text-xs font-semibold text-gray-700">{check.label}</div>
              <div className="text-xs text-gray-400 leading-relaxed mt-0.5 line-clamp-1">{check.detail}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

// ── Recommendations preview ───────────────────────────────────────────────────

function priorityBadge(priority: string) {
  const map: Record<string, string> = {
    critical: "bg-red-100 text-red-700",
    high: "bg-orange-100 text-orange-700",
    medium: "bg-amber-100 text-amber-700",
    low: "bg-emerald-100 text-emerald-700",
  }
  return map[priority] ?? "bg-gray-100 text-gray-600"
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function LockedCard({ report, unlocked }: { report: SeoReport; unlocked: boolean }) {
  if (unlocked && report.paymentStatus === "paid") {
    // ── UNLOCKED VIEW ────────────────────────────────────────────────────────
    return (
      <div className="space-y-6">
        {/* Unlocked banner */}
        <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-100">
          <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
          <div>
            <span className="font-bold text-emerald-800">Full SEO Report Unlocked</span>
            <p className="text-xs text-emerald-600 mt-0.5">Payment confirmed. Here is your complete analysis.</p>
          </div>
        </div>

        {/* All categories */}
        <div>
          <h3 className="text-lg font-black text-gray-900 mb-4">Full Category Breakdown</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {report.categories.map((cat) => (
              <CategoryPreview key={cat.name} category={cat} />
            ))}
          </div>
        </div>

        {/* Recommendations */}
        {report.recommendations.length > 0 && (
          <div>
            <h3 className="text-lg font-black text-gray-900 mb-4">Full Recommendations</h3>
            <div className="space-y-3">
              {report.recommendations.map((rec, i) => (
                <div key={i} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-xs hover:shadow-card transition-shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide ${priorityBadge(rec.priority)}`}>
                      {rec.priority}
                    </span>
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">{rec.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{rec.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }

  // ── LOCKED VIEW ─────────────────────────────────────────────────────────────
  return (
    <div className="rounded-3xl border border-primary-100 bg-gradient-to-br from-primary-50/60 to-violet-50/60 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">

      {/* Blurred preview */}
      <div className="relative">
        <div className="p-6 space-y-4 pointer-events-none select-none" aria-hidden="true">
          <div className="grid sm:grid-cols-2 gap-4 blur-sm opacity-60">
            {report.categories.map((cat) => (
              <CategoryPreview key={cat.name} category={cat} />
            ))}
          </div>

          {/* Fake recommendations blurred */}
          <div className="blur-sm opacity-60 space-y-3">
            {report.recommendations.slice(0, 3).map((rec, i) => (
              <div key={i} className="bg-white/80 rounded-2xl border border-gray-100 p-5">
                <div className={`inline-block text-xs font-bold px-2 py-0.5 rounded-full mb-2 ${priorityBadge(rec.priority)}`}>
                  {rec.priority}
                </div>
                <div className="font-bold text-gray-900 text-sm mb-1">{rec.title}</div>
                <div className="text-xs text-gray-400 leading-relaxed">{rec.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Lock overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-white/20 via-white/60 to-white/90">
          <div className="text-center px-6 py-8 max-w-sm">
            <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4 shadow-glow animate-float">
              <Lock className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-2">Full SEO Analysis Locked</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              To unlock your full SEO report — including all detailed checks, complete recommendations, and a step-by-step action plan — complete the payment and wait for confirmation.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 justify-center text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-primary-500 shrink-0" />
                Full category-by-category breakdown
              </div>
              <div className="flex items-center gap-2.5 justify-center text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-primary-500 shrink-0" />
                {report.recommendations.length} actionable recommendations
              </div>
              <div className="flex items-center gap-2.5 justify-center text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-primary-500 shrink-0" />
                Prioritized fix-by-fix action plan
              </div>
              <div className="flex items-center gap-2.5 justify-center text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-primary-500 shrink-0" />
                Delivered to your inbox
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Unlock CTA */}
      <div className="border-t border-primary-100/60 bg-white/80 px-8 py-7 text-center">
        <p className="text-sm font-semibold text-gray-700 mb-1">Ready to unlock your full report?</p>
        <p className="text-xs text-gray-400 mb-4">
          Contact us to complete payment. Once confirmed, the full analysis is sent directly to{" "}
          <strong className="text-gray-600">{report.email}</strong>.
        </p>
        <a
          href={`mailto:hello@affordawebsolutions.com?subject=Unlock%20SEO%20Report&body=Hi%2C%20I%27d%20like%20to%20unlock%20my%20SEO%20report.%20Report%20ID%3A%20${report.id}`}
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-primary text-white font-bold text-sm shadow-btn hover:shadow-glow transition-all duration-200 hover:scale-[1.02]"
        >
          Unlock Full Report
          <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
        </a>
      </div>
    </div>
  )
}
