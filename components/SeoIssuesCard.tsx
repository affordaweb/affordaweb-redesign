import { XCircle, Zap } from "lucide-react"
import type { SeoReport } from "@/types/seo-report"

export function SeoTopIssuesCard({ report }: { report: SeoReport }) {
  return (
    <div className="rounded-3xl border border-red-100 bg-gradient-to-br from-red-50 to-rose-50 p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-2xl bg-red-100 flex items-center justify-center shrink-0">
          <XCircle className="w-5 h-5 text-red-600" />
        </div>
        <div>
          <h3 className="font-black text-gray-900 text-base">Top Issues Found</h3>
          <p className="text-xs text-gray-500">Issues hurting your search rankings</p>
        </div>
      </div>

      {report.topIssues.length === 0 ? (
        <p className="text-sm text-gray-500 italic">No major issues detected — great job!</p>
      ) : (
        <ul className="space-y-3">
          {report.topIssues.map((issue, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                {i + 1}
              </span>
              <div>
                <span className="text-sm font-semibold text-gray-800">{issue}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export function SeoQuickWinsCard({ report }: { report: SeoReport }) {
  return (
    <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-green-50 p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-2xl bg-emerald-100 flex items-center justify-center shrink-0">
          <Zap className="w-5 h-5 text-emerald-600" />
        </div>
        <div>
          <h3 className="font-black text-gray-900 text-base">Quick Wins</h3>
          <p className="text-xs text-gray-500">Fast fixes with high SEO impact</p>
        </div>
      </div>

      {report.quickWins.length === 0 ? (
        <p className="text-sm text-gray-500 italic">No immediate quick wins — your site is well optimized!</p>
      ) : (
        <ul className="space-y-3">
          {report.quickWins.map((win, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-emerald-700" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="text-sm text-gray-700 leading-relaxed">{win}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
