import type { SeoReport } from "@/types/seo-report"

function gradeConfig(grade: string) {
  switch (grade) {
    case "A":
      return { color: "text-emerald-600", ring: "text-emerald-500", bg: "from-emerald-50 to-green-50", border: "border-emerald-100", label: "Excellent", badge: "bg-emerald-100 text-emerald-700" }
    case "B":
      return { color: "text-blue-600", ring: "text-blue-500", bg: "from-blue-50 to-sky-50", border: "border-blue-100", label: "Good", badge: "bg-blue-100 text-blue-700" }
    case "C":
      return { color: "text-amber-600", ring: "text-amber-500", bg: "from-amber-50 to-yellow-50", border: "border-amber-100", label: "Average", badge: "bg-amber-100 text-amber-700" }
    case "D":
      return { color: "text-orange-600", ring: "text-orange-500", bg: "from-orange-50 to-amber-50", border: "border-orange-100", label: "Below Average", badge: "bg-orange-100 text-orange-700" }
    default:
      return { color: "text-red-600", ring: "text-red-500", bg: "from-red-50 to-rose-50", border: "border-red-100", label: "Needs Work", badge: "bg-red-100 text-red-700" }
  }
}

function ScoreRing({ score, grade }: { score: number; grade: string }) {
  const r = 68
  const stroke = 8
  const circumference = 2 * Math.PI * r
  const filled = (score / 100) * circumference
  const cfg = gradeConfig(grade)

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={(r + stroke) * 2} height={(r + stroke) * 2} className="-rotate-90">
        <circle cx={r + stroke} cy={r + stroke} r={r} fill="none" stroke="currentColor" strokeWidth={stroke} className="text-gray-200" />
        <circle
          cx={r + stroke} cy={r + stroke} r={r} fill="none"
          strokeWidth={stroke} strokeLinecap="round"
          strokeDasharray={circumference} strokeDashoffset={circumference - filled}
          stroke="currentColor"
          className={`${cfg.ring} transition-all duration-1000 ease-out`}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`text-5xl font-black leading-none ${cfg.color}`}>{grade}</span>
        <span className="text-sm text-gray-400 font-semibold">{score}/100</span>
      </div>
    </div>
  )
}

export default function SeoScoreCard({ report }: { report: SeoReport }) {
  const cfg = gradeConfig(report.grade)

  return (
    <div className={`rounded-3xl border ${cfg.border} bg-gradient-to-br ${cfg.bg} p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300`}>
      <div className="flex flex-col sm:flex-row items-center gap-8">
        {/* Ring */}
        <div className="shrink-0">
          <ScoreRing score={report.seoScore} grade={report.grade} />
        </div>

        {/* Info */}
        <div className="flex-1 text-center sm:text-left">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-3 ${cfg.badge}`}>
            SEO Health: {cfg.label}
          </div>
          <h2 className="text-2xl font-black text-gray-900 mb-1">
            {report.domain}
          </h2>
          <p className="text-sm text-gray-500 mb-5">
            Analysis completed · {new Date(report.createdAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>

          {/* Category mini-bars */}
          <div className="space-y-2">
            {report.categories.map((cat) => {
              const pct = Math.round((cat.score / cat.maxScore) * 100)
              const barColor = pct >= 80 ? "bg-emerald-500" : pct >= 60 ? "bg-blue-500" : pct >= 40 ? "bg-amber-500" : "bg-red-500"
              return (
                <div key={cat.name} className="flex items-center gap-3">
                  <span className="text-xs text-gray-500 w-36 shrink-0 truncate">{cat.name}</span>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className={`h-2 rounded-full ${barColor} transition-all duration-700`} style={{ width: `${pct}%` }} />
                  </div>
                  <span className="text-xs font-bold text-gray-700 w-12 text-right">{cat.score}/{cat.maxScore}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
