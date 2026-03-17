import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { kvGet } from '@/lib/kv-store'
import { ReportData } from '@/lib/report-content'
import WebsiteMockup from './WebsiteMockup'
import GetStartedForm from './GetStartedForm'

export const metadata: Metadata = {
  title: 'Your Website Redesign Report | AffordaWeb Solutions',
  description: 'View your personalised website redesign recommendation from AffordaWeb Solutions.',
  robots: { index: false, follow: false },
}

const IMPACT_COLORS = {
  high:   { bg: 'rgba(239,68,68,0.08)',   border: 'rgba(239,68,68,0.2)',   text: '#dc2626',   label: 'High Impact' },
  medium: { bg: 'rgba(245,158,11,0.08)',  border: 'rgba(245,158,11,0.2)',  text: '#d97706',   label: 'Medium'      },
  low:    { bg: 'rgba(107,114,128,0.07)', border: 'rgba(107,114,128,0.2)', text: '#6b7280',   label: 'Low'         },
}

function ScoreRing({ score }: { score: number }) {
  const color = score >= 65 ? '#f59e0b' : score >= 50 ? '#ef4444' : '#dc2626'
  const label = score >= 65 ? 'Needs Work' : 'Critical'
  const circumference = 2 * Math.PI * 40
  const offset = circumference - (score / 100) * circumference

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-24">
        <svg className="w-24 h-24 -rotate-90" viewBox="0 0 96 96">
          <circle cx="48" cy="48" r="40" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="8" />
          <circle
            cx="48" cy="48" r="40" fill="none"
            stroke={color} strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: 'stroke-dashoffset 1s ease' }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-extrabold" style={{ color, lineHeight: 1 }}>{score}</span>
          <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: '#9ca3af' }}>/ 100</span>
        </div>
      </div>
      <span
        className="mt-2 text-xs font-bold px-2.5 py-1 rounded-full"
        style={{ background: `${color}15`, color }}
      >
        {label}
      </span>
    </div>
  )
}

function PastelCard({
  children,
  bg,
  border,
  className = '',
}: {
  children: React.ReactNode
  bg: string
  border: string
  className?: string
}) {
  return (
    <div
      className={`rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 ${className}`}
      style={{
        background: bg,
        border: `1.5px solid ${border}`,
        boxShadow: '0 2px 8px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.04)',
      }}
    >
      {children}
    </div>
  )
}

function CardLabel({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-1 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full mb-4"
      style={{ background: `${color}18`, color }}
    >
      {children}
    </span>
  )
}

export default async function ReportPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const report = await kvGet<ReportData>(`report:${id}`)

  if (!report) notFound()

  const { preview, website, name, business_type, goal, mockup, email } = report
  const { full_plan } = preview

  return (
    <div
      className="min-h-screen pb-24"
      style={{ background: 'linear-gradient(160deg, #f8f7ff 0%, #eef2ff 50%, #fdf4ff 100%)' }}
    >
      <div className="container-tight pt-28">

        {/* Top breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-medium mb-8" style={{ color: '#9ca3af' }}>
          <Link href="/recommendation" className="hover:text-gray-600 transition-colors">← New Report</Link>
          <span>/</span>
          <span>Report #{id.slice(0, 8).toUpperCase()}</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold mb-1" style={{ color: '#0F0F1A', letterSpacing: '-0.02em' }}>
                Website Redesign Report
              </h1>
              <p className="text-sm" style={{ color: '#6b7280' }}>
                For <span className="font-semibold" style={{ color: '#374151' }}>{name}</span> · {business_type}
              </p>
            </div>
            <span
              className="text-xs font-bold px-3 py-1.5 rounded-full shrink-0"
              style={{ background: 'rgba(86,54,209,0.1)', color: '#5636D1', border: '1px solid rgba(86,54,209,0.2)' }}
            >
              Free Report
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1fr_400px] gap-8 items-start">

        {/* ── Left: Report cards ── */}
        <div className="space-y-5">

          {/* CARD 1 — Website Overview */}
          <PastelCard bg="rgba(239,246,255,0.9)" border="rgba(147,197,253,0.5)">
            <CardLabel color="#3b82f6">01 · Website Overview</CardLabel>
            <div className="flex items-start gap-5">
              <ScoreRing score={preview.score} />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold mb-1" style={{ color: '#9ca3af' }}>Analysing</p>
                <p className="font-bold text-sm mb-3 truncate" style={{ color: '#1e40af' }}>
                  🌐 {website}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span style={{ color: '#6b7280' }}>Website Health Score</span>
                    <span className="font-bold" style={{ color: '#1e40af' }}>{preview.score}/100</span>
                  </div>
                  <div className="h-1.5 rounded-full" style={{ background: 'rgba(147,197,253,0.3)' }}>
                    <div
                      className="h-1.5 rounded-full"
                      style={{
                        width: `${preview.score}%`,
                        background: preview.score >= 65 ? '#f59e0b' : '#ef4444',
                        transition: 'width 1.2s ease',
                      }}
                    />
                  </div>
                  <p className="text-xs" style={{ color: '#6b7280' }}>
                    Status: <span className="font-semibold" style={{ color: '#1e40af' }}>{preview.overview_status}</span> · Goal: {goal}
                  </p>
                </div>
              </div>
            </div>
          </PastelCard>

          {/* CARD 2 — Suggested Structure */}
          <PastelCard bg="rgba(245,243,255,0.9)" border="rgba(196,181,253,0.5)">
            <CardLabel color="#7c3aed">02 · Suggested Page Structure</CardLabel>
            <h3 className="text-base font-bold mb-4" style={{ color: '#4c1d95' }}>
              Recommended layout for your new site
            </h3>
            <div className="space-y-3">
              {preview.suggested_structure.map(({ icon, label, desc }, i) => (
                <div
                  key={label}
                  className="flex items-start gap-3 rounded-xl p-3.5 transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: 'rgba(139,92,246,0.06)', border: '1px solid rgba(139,92,246,0.12)' }}
                >
                  <span
                    className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold"
                    style={{ background: 'rgba(139,92,246,0.12)', color: '#7c3aed' }}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-sm font-bold mb-0.5" style={{ color: '#4c1d95' }}>
                      {icon} {label}
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: '#6d28d9' }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </PastelCard>

          {/* CARD 3 — Issues */}
          <PastelCard bg="rgba(255,247,237,0.9)" border="rgba(253,186,116,0.5)">
            <CardLabel color="#ea580c">03 · Issues &amp; Opportunities</CardLabel>
            <h3 className="text-base font-bold mb-1" style={{ color: '#9a3412' }}>
              {preview.issues.length} critical issues detected
            </h3>
            <p className="text-xs mb-4" style={{ color: '#c2410c' }}>
              Fixing these alone could significantly improve conversions.
            </p>
            <div className="space-y-3">
              {preview.issues.map(({ label, impact }) => {
                const c = IMPACT_COLORS[impact]
                return (
                  <div
                    key={label}
                    className="flex items-start gap-3 rounded-xl p-3.5 transition-all duration-200 hover:-translate-y-0.5"
                    style={{ background: c.bg, border: `1px solid ${c.border}` }}
                  >
                    <span className="mt-0.5 text-sm">⚠️</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium leading-snug" style={{ color: '#374151' }}>{label}</p>
                    </div>
                    <span
                      className="shrink-0 text-[9px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full"
                      style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}
                    >
                      {c.label}
                    </span>
                  </div>
                )
              })}
            </div>
            <p className="text-xs mt-4 pt-3" style={{ color: '#c2410c', borderTop: '1px solid rgba(253,186,116,0.4)' }}>
              + More issues identified in the full report below.
            </p>
          </PastelCard>

          {/* Concept Design Mockup */}
          {mockup && (
            <div
              className="rounded-3xl p-5 sm:p-7"
              style={{ background: 'rgba(248,247,255,0.95)', border: '1.5px solid rgba(86,54,209,0.12)' }}
            >
              <WebsiteMockup config={mockup} website={website} />
            </div>
          )}

          {/* Card 4 — Full Homepage Wireframe */}
          <PastelCard bg="rgba(240,253,244,0.95)" border="rgba(134,239,172,0.5)">
            <CardLabel color="#16a34a">04 · Full Homepage Wireframe</CardLabel>
            <h3 className="text-base font-bold mb-4" style={{ color: '#14532d' }}>
              Section-by-section breakdown
            </h3>
            <div className="space-y-4">
              {full_plan.wireframe_sections.map((section, i) => (
                <div
                  key={section.name}
                  className="rounded-xl p-4 transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: 'rgba(22,163,74,0.06)', border: '1px solid rgba(22,163,74,0.15)' }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold shrink-0"
                      style={{ background: 'rgba(22,163,74,0.15)', color: '#16a34a' }}
                    >
                      {i + 1}
                    </span>
                    <p className="text-sm font-bold" style={{ color: '#14532d' }}>{section.name}</p>
                  </div>
                  <p className="text-xs mb-2.5 pl-7" style={{ color: '#166534' }}>{section.purpose}</p>
                  <ul className="pl-7 space-y-1">
                    {section.elements.map((el) => (
                      <li key={el} className="text-xs flex items-start gap-1.5" style={{ color: '#374151' }}>
                        <span className="mt-0.5 shrink-0" style={{ color: '#16a34a' }}>→</span>
                        {el}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </PastelCard>

          {/* Card 5 — Copy Suggestions */}
          <PastelCard bg="rgba(255,241,242,0.95)" border="rgba(252,165,165,0.5)">
            <CardLabel color="#e11d48">05 · Copywriting Suggestions</CardLabel>
            <h3 className="text-base font-bold mb-4" style={{ color: '#881337' }}>
              Words that actually convert
            </h3>
            <div className="space-y-4">
              {full_plan.copy_suggestions.map((s) => (
                <div
                  key={s.section}
                  className="rounded-xl p-4 transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: 'rgba(225,29,72,0.04)', border: '1px solid rgba(225,29,72,0.12)' }}
                >
                  <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#e11d48' }}>
                    {s.section}
                  </p>
                  <div className="flex gap-3 mb-2">
                    <span className="text-xs shrink-0 font-bold mt-0.5" style={{ color: '#dc2626' }}>✗</span>
                    <p className="text-xs leading-relaxed" style={{ color: '#6b7280' }}>{s.current_problem}</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-xs shrink-0 font-bold mt-0.5" style={{ color: '#16a34a' }}>✓</span>
                    <p className="text-xs leading-relaxed font-medium" style={{ color: '#374151' }}>{s.suggested_approach}</p>
                  </div>
                </div>
              ))}
            </div>
          </PastelCard>

          {/* Card 6 — Conversion Strategy */}
          <PastelCard bg="rgba(240,249,255,0.95)" border="rgba(125,211,252,0.5)">
            <CardLabel color="#0284c7">06 · Conversion Strategy</CardLabel>
            <h3 className="text-base font-bold mb-4" style={{ color: '#0c4a6e' }}>
              How to turn visitors into customers
            </h3>
            <div className="space-y-3">
              {full_plan.conversion_strategy.map((tip, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl p-3.5 transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: 'rgba(2,132,199,0.05)', border: '1px solid rgba(2,132,199,0.12)' }}
                >
                  <span
                    className="shrink-0 w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold"
                    style={{ background: 'rgba(2,132,199,0.12)', color: '#0284c7' }}
                  >
                    {i + 1}
                  </span>
                  <p className="text-xs leading-relaxed" style={{ color: '#374151' }}>{tip}</p>
                </div>
              ))}
            </div>
          </PastelCard>

          {/* Card 7 — Quick Wins */}
          <PastelCard bg="rgba(255,251,235,0.95)" border="rgba(253,230,138,0.6)">
            <CardLabel color="#d97706">07 · Quick Wins</CardLabel>
            <h3 className="text-base font-bold mb-1" style={{ color: '#78350f' }}>
              Ready to upgrade your website to something amazing?
            </h3>
            <p className="text-xs mb-4" style={{ color: '#92400e' }}>
              Less talk, let&apos;s build.
            </p>
            <div className="space-y-2.5">
              {full_plan.quick_wins.map((win, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl p-3 transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: 'rgba(217,119,6,0.05)', border: '1px solid rgba(217,119,6,0.15)' }}
                >
                  <span className="shrink-0 text-sm">⚡</span>
                  <p className="text-xs leading-relaxed" style={{ color: '#374151' }}>{win}</p>
                </div>
              ))}
            </div>
          </PastelCard>

        </div>
        {/* ── End left column ── */}

        {/* ── Right: Sticky Get Started Form ── */}
        <div className="xl:sticky xl:top-28">
          <GetStartedForm reportId={id} name={name} email={email} website={website} />
        </div>

        </div>
        {/* ── End 2-col grid ── */}

        {/* Footer note */}
        <div className="mt-10 text-center">
          <p className="text-xs" style={{ color: '#9ca3af' }}>
            Report generated by{' '}
            <Link href="/" className="font-semibold hover:text-gray-600 transition-colors" style={{ color: '#5636D1' }}>
              AffordaWeb Solutions
            </Link>
            {' '}· Questions?{' '}
            <a href="mailto:hello@affordawebsolutions.com" className="underline hover:text-gray-600 transition-colors">
              hello@affordawebsolutions.com
            </a>
          </p>
        </div>

      </div>
    </div>
  )
}
