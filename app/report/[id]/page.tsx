import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { kvGet } from '@/lib/kv-store'
import { ReportData } from '@/lib/report-content'

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

  const { preview, payment_status, website, name, business_type, goal } = report
  const isPaid = payment_status === 'paid'

  return (
    <div
      className="min-h-screen pb-24"
      style={{ background: 'linear-gradient(160deg, #f8f7ff 0%, #eef2ff 50%, #fdf4ff 100%)' }}
    >
      <div className="max-w-2xl mx-auto px-4 pt-28">

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
              style={
                isPaid
                  ? { background: 'rgba(16,185,129,0.1)', color: '#059669', border: '1px solid rgba(16,185,129,0.25)' }
                  : { background: 'rgba(245,158,11,0.1)', color: '#d97706', border: '1px solid rgba(245,158,11,0.25)' }
              }
            >
              {isPaid ? '✅ Unlocked' : '🔒 Preview Mode'}
            </span>
          </div>
        </div>

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

          {/* LOCKED / UNLOCKED SECTION */}
          {isPaid ? (
            <UnlockedContent report={report} />
          ) : (
            <LockedCard reportId={id} />
          )}

        </div>

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

/* ── Locked Card ──────────────────────────────────────────── */
function LockedCard({ reportId }: { reportId: string }) {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        border: '1.5px solid rgba(86,54,209,0.25)',
        boxShadow: '0 8px 40px rgba(86,54,209,0.12)',
      }}
    >
      {/* Blurred preview */}
      <div className="relative" style={{ background: 'rgba(245,243,255,0.95)' }}>
        <div className="p-6 blur-[3px] pointer-events-none select-none opacity-60">
          <div className="mb-4">
            <div className="h-4 rounded-full w-32 mb-2" style={{ background: 'rgba(86,54,209,0.15)' }} />
            <div className="h-6 rounded-full w-64 mb-1" style={{ background: 'rgba(86,54,209,0.1)' }} />
            <div className="h-3 rounded-full w-48" style={{ background: 'rgba(86,54,209,0.08)' }} />
          </div>
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center gap-3 mb-3 rounded-xl p-3" style={{ background: 'rgba(86,54,209,0.06)' }}>
              <div className="w-7 h-7 rounded-lg shrink-0" style={{ background: 'rgba(86,54,209,0.12)' }} />
              <div className="flex-1">
                <div className="h-3 rounded-full mb-1.5" style={{ background: 'rgba(86,54,209,0.12)', width: `${55 + i * 8}%` }} />
                <div className="h-2.5 rounded-full" style={{ background: 'rgba(86,54,209,0.07)', width: `${40 + i * 5}%` }} />
              </div>
            </div>
          ))}
          {[...Array(3)].map((_, i) => (
            <div key={i} className="mb-3 rounded-xl p-4" style={{ background: 'rgba(226,73,138,0.06)' }}>
              <div className="h-3 rounded-full mb-2" style={{ background: 'rgba(226,73,138,0.15)', width: '45%' }} />
              <div className="h-2.5 rounded-full mb-1" style={{ background: 'rgba(226,73,138,0.08)', width: '90%' }} />
              <div className="h-2.5 rounded-full" style={{ background: 'rgba(226,73,138,0.08)', width: '75%' }} />
            </div>
          ))}
        </div>

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(245,243,255,0) 0%, rgba(245,243,255,0.5) 30%, rgba(245,243,255,0.98) 65%, rgba(245,243,255,1) 100%)' }}
        />

        {/* Lock UI overlay */}
        <div className="absolute inset-x-0 bottom-0 pb-8 px-6 flex flex-col items-center text-center">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
            style={{ background: 'linear-gradient(135deg, #5636D1, #E2498A)', boxShadow: '0 8px 24px rgba(86,54,209,0.35)' }}
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-xl font-extrabold mb-1" style={{ color: '#0F0F1A', letterSpacing: '-0.02em' }}>
            Unlock Full Website Redesign Plan
          </h3>
          <p className="text-sm mb-5 max-w-xs" style={{ color: '#6b7280' }}>
            Get your complete homepage layout, conversion strategy, copywriting suggestions, and section-by-section breakdown.
          </p>

          {/* What's inside */}
          <div className="grid grid-cols-2 gap-2 w-full max-w-xs mb-6 text-left">
            {[
              '✦ Complete homepage wireframe',
              '✦ Copywriting suggestions',
              '✦ Conversion strategy',
              '✦ Section-by-section breakdown',
              '✦ Quick wins list',
              '✦ Priority fix roadmap',
            ].map((item) => (
              <p key={item} className="text-xs font-medium" style={{ color: '#374151' }}>{item}</p>
            ))}
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-1.5 mb-5">
            <span className="text-4xl font-extrabold" style={{ color: '#0F0F1A', letterSpacing: '-0.03em' }}>$69</span>
            <span className="text-sm font-medium" style={{ color: '#9ca3af' }}>one-time</span>
          </div>

          <div
            className="w-full max-w-xs rounded-2xl px-5 py-4 text-left"
            style={{ background: 'rgba(255,255,255,0.9)', border: '1.5px solid rgba(86,54,209,0.15)', boxShadow: '0 4px 16px rgba(86,54,209,0.06)' }}
          >
            <p className="text-sm font-bold mb-1" style={{ color: '#0F0F1A' }}>How to unlock your report</p>
            <p className="text-xs mb-3" style={{ color: '#6b7280', lineHeight: 1.6 }}>
              Send <strong>$69</strong> to{' '}
              <a href="mailto:hello@affordawebsolutions.com" style={{ color: '#5636D1', fontWeight: 600 }}>
                hello@affordawebsolutions.com
              </a>{' '}
              via PayPal (Friends &amp; Family) or bank transfer. Include your report ID in the notes:
            </p>
            <p
              className="text-xs font-mono px-3 py-2 rounded-lg mb-3 select-all"
              style={{ background: 'rgba(86,54,209,0.07)', color: '#5636D1', wordBreak: 'break-all' }}
            >
              {reportId}
            </p>
            <p className="text-xs" style={{ color: '#9ca3af', lineHeight: 1.5 }}>
              Once we confirm your payment, your full report will be emailed to you automatically. Usually within a few hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Unlocked Content ────────────────────────────────────── */
function UnlockedContent({ report }: { report: ReportData }) {
  const { preview, business_type, website } = report
  const { full_plan } = preview

  return (
    <div className="space-y-5">

      {/* Unlocked header */}
      <div
        className="rounded-2xl p-5 flex items-center gap-4"
        style={{ background: 'rgba(16,185,129,0.08)', border: '1.5px solid rgba(16,185,129,0.2)' }}
      >
        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
          style={{ background: 'rgba(16,185,129,0.12)' }}>🔓</div>
        <div>
          <p className="font-bold text-emerald-800 text-sm">Full Report Unlocked</p>
          <p className="text-xs text-emerald-600">Complete redesign plan for {website}</p>
        </div>
      </div>

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
          Fix these this week — for free
        </h3>
        <p className="text-xs mb-4" style={{ color: '#92400e' }}>
          No developer needed. Each takes under 30 minutes.
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

      {/* CTA card */}
      <div
        className="rounded-2xl p-7 text-center"
        style={{
          background: 'linear-gradient(135deg, #3D22B0, #5636D1 50%, #E2498A)',
          boxShadow: '0 12px 40px rgba(86,54,209,0.25)',
        }}
      >
        <div className="text-2xl mb-3">🚀</div>
        <h3 className="text-xl font-extrabold text-white mb-2">Ready to rebuild your website?</h3>
        <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.7)' }}>
          AffordaWeb Solutions handles everything — design, hosting, SEO, and maintenance — from $69/mo.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 hover:-translate-y-0.5"
          style={{ background: '#fff', color: '#5636D1', boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}
        >
          Get Started with AffordaWeb →
        </a>
      </div>

    </div>
  )
}
