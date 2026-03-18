'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const BUSINESS_TYPES = [
  'E-Commerce / Online Store',
  'Service Business',
  'Freelancer / Portfolio',
  'Startup / SaaS',
  'Restaurant / Food',
  'Healthcare / Medical',
  'Real Estate',
  'Other',
]

const GOALS = [
  'Get more leads or inquiries',
  'Improve visual design',
  'Increase online sales',
  'Rank higher on Google',
  'Better mobile experience',
  'Build trust and credibility',
]

const BENEFITS = [
  {
    icon: '🎯',
    title: 'Personalised to your business',
    desc: 'Your report is generated based on your industry, goals, and existing website — not a generic template.',
  },
  {
    icon: '⚡',
    title: 'Results in under 30 seconds',
    desc: 'No waiting, no back-and-forth. Your full redesign plan is ready instantly.',
  },
  {
    icon: '🔍',
    title: 'Real issues, real solutions',
    desc: "We identify what's holding your site back and give you a clear, actionable fix for each one.",
  },
  {
    icon: '🚀',
    title: 'We build it for you',
    desc: 'Love your report? Our team can build your new site from scratch — fast, affordable, and stress-free.',
  },
]

function LoadingDots() {
  return (
    <span className="inline-flex items-center gap-1.5">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-2 h-2 rounded-full bg-white inline-block animate-pulse"
          style={{ animationDelay: `${i * 0.18}s`, animationDuration: '0.9s' }}
        />
      ))}
    </span>
  )
}

export default function RecommendationPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    website: '',
    name: '',
    email: '',
    business_type: '',
    goal: '',
  })

  const set = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }))

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    if (!form.website.trim()) { setError('Please enter your website URL.'); return }
    if (!form.name.trim())    { setError('Please enter your name.'); return }
    if (!form.email.trim())   { setError('Please enter your email.'); return }
    if (!form.business_type)  { setError('Please select your business type.'); return }
    if (!form.goal)           { setError('Please select your primary goal.'); return }

    setLoading(true)
    try {
      const res = await fetch('/api/create-preview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) { setError(data.error ?? 'Something went wrong. Please try again.'); setLoading(false); return }
      router.push(`/report/${data.report_id}`)
    } catch {
      setError('Network error. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #f8f7ff 0%, #eef2ff 40%, #fdf4ff 100%)' }}>
      <div className="container-tight pt-28 pb-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-start">

          {/* ── Left: Pitch ── */}
          <div className="lg:sticky lg:top-28">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full mb-6"
              style={{ background: 'rgba(86,54,209,0.1)', color: '#5636D1', border: '1px solid rgba(86,54,209,0.2)' }}
            >
              Free Website Analysis
            </span>

            <h1
              className="text-4xl sm:text-5xl font-extrabold mb-5"
              style={{ letterSpacing: '-0.03em', color: '#0F0F1A', lineHeight: 1.1 }}
            >
              Get Your Free{' '}
              <span style={{ backgroundImage: 'linear-gradient(135deg, #5636D1, #E2498A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Website Redesign
              </span>{' '}
              Recommendation
            </h1>

            <p className="text-lg mb-2" style={{ color: '#6b7280', lineHeight: 1.6 }}>
              Enter your website and receive a personalised redesign plan in seconds — completely free.
            </p>
            <p className="text-sm mb-10" style={{ color: '#9ca3af' }}>
              No signup required. No spam. Results in under 30 seconds.
            </p>

            {/* Trust strip */}
            <div className="flex flex-wrap gap-4 mb-10">
              {[
                { icon: '⚡', label: 'Instant Results' },
                { icon: '🔒', label: 'Privacy Protected' },
                { icon: '🆓', label: '100% Free' },
                { icon: '🎯', label: '50+ Businesses Helped' },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm font-medium" style={{ color: '#6b7280' }}>
                  <span>{icon}</span>
                  {label}
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {BENEFITS.map(({ icon, title, desc }, i) => {
                const colors = [
                  { bg: 'rgba(86,54,209,0.07)',  border: 'rgba(86,54,209,0.16)',  iconBg: 'rgba(86,54,209,0.12)'  },
                  { bg: 'rgba(226,73,138,0.07)', border: 'rgba(226,73,138,0.16)', iconBg: 'rgba(226,73,138,0.12)' },
                  { bg: 'rgba(6,182,212,0.07)',  border: 'rgba(6,182,212,0.16)',  iconBg: 'rgba(6,182,212,0.12)'  },
                  { bg: 'rgba(16,185,129,0.07)', border: 'rgba(16,185,129,0.16)', iconBg: 'rgba(16,185,129,0.12)' },
                ]
                const c = colors[i]
                return (
                  <div
                    key={title}
                    className="rounded-2xl p-5 transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      background: c.bg,
                      border: `1px solid ${c.border}`,
                      boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-3"
                      style={{ background: c.iconBg }}
                    >
                      {icon}
                    </div>
                    <p className="text-sm font-bold mb-1" style={{ color: '#0F0F1A' }}>{title}</p>
                    <p className="text-xs leading-relaxed" style={{ color: '#6b7280' }}>{desc}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div>
            <div
              className="rounded-3xl p-8 sm:p-10"
              style={{
                background: 'rgba(255,255,255,0.88)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 4px 6px rgba(0,0,0,0.04), 0 20px 60px rgba(86,54,209,0.08), 0 0 0 1px rgba(86,54,209,0.08)',
              }}
            >
              <h2 className="text-xl font-bold mb-1" style={{ color: '#0F0F1A' }}>Your Website Details</h2>
              <p className="text-sm mb-7" style={{ color: '#9ca3af' }}>Fill in the form below and we will generate your report instantly.</p>

              {error && (
                <div
                  className="rounded-xl px-4 py-3 mb-6 text-sm font-medium"
                  style={{ background: 'rgba(239,68,68,0.07)', color: '#dc2626', border: '1px solid rgba(239,68,68,0.15)' }}
                >
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Website URL */}
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: '#374151' }}>
                    Website URL <span style={{ color: '#E2498A' }}>*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base pointer-events-none">🌐</span>
                    <input
                      type="text"
                      placeholder="https://yourwebsite.com"
                      value={form.website}
                      onChange={(e) => set('website', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 outline-none"
                      style={{ background: '#F8F7FF', border: '1.5px solid rgba(86,54,209,0.15)', color: '#0F0F1A' }}
                      onFocus={(e) => (e.currentTarget.style.border = '1.5px solid rgba(86,54,209,0.5)')}
                      onBlur={(e) => (e.currentTarget.style.border = '1.5px solid rgba(86,54,209,0.15)')}
                    />
                  </div>
                </div>

                {/* Name + Email side by side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-1.5" style={{ color: '#374151' }}>
                      Your Name <span style={{ color: '#E2498A' }}>*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base pointer-events-none">👤</span>
                      <input
                        type="text"
                        placeholder="Jane Smith"
                        value={form.name}
                        onChange={(e) => set('name', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 outline-none"
                        style={{ background: '#F8F7FF', border: '1.5px solid rgba(86,54,209,0.15)', color: '#0F0F1A' }}
                        onFocus={(e) => (e.currentTarget.style.border = '1.5px solid rgba(86,54,209,0.5)')}
                        onBlur={(e) => (e.currentTarget.style.border = '1.5px solid rgba(86,54,209,0.15)')}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1.5" style={{ color: '#374151' }}>
                      Email Address <span style={{ color: '#E2498A' }}>*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base pointer-events-none">✉️</span>
                      <input
                        type="email"
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={(e) => set('email', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 outline-none"
                        style={{ background: '#F8F7FF', border: '1.5px solid rgba(86,54,209,0.15)', color: '#0F0F1A' }}
                        onFocus={(e) => (e.currentTarget.style.border = '1.5px solid rgba(86,54,209,0.5)')}
                        onBlur={(e) => (e.currentTarget.style.border = '1.5px solid rgba(86,54,209,0.15)')}
                      />
                    </div>
                  </div>
                </div>

                {/* Business Type */}
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: '#374151' }}>
                    Business Type <span style={{ color: '#E2498A' }}>*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {BUSINESS_TYPES.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => set('business_type', type)}
                        className="px-3 py-2.5 rounded-xl text-xs font-semibold text-left transition-all duration-200 hover:-translate-y-0.5"
                        style={{
                          background: form.business_type === type ? 'rgba(86,54,209,0.1)' : '#F8F7FF',
                          border: form.business_type === type ? '1.5px solid #5636D1' : '1.5px solid rgba(86,54,209,0.15)',
                          color: form.business_type === type ? '#5636D1' : '#6b7280',
                          boxShadow: form.business_type === type ? '0 4px 12px rgba(86,54,209,0.15)' : 'none',
                        }}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Goal */}
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: '#374151' }}>
                    Primary Goal <span style={{ color: '#E2498A' }}>*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {GOALS.map((g) => (
                      <button
                        key={g}
                        type="button"
                        onClick={() => set('goal', g)}
                        className="px-3 py-2.5 rounded-xl text-xs font-semibold text-left transition-all duration-200 hover:-translate-y-0.5"
                        style={{
                          background: form.goal === g ? 'rgba(226,73,138,0.08)' : '#F8F7FF',
                          border: form.goal === g ? '1.5px solid #E2498A' : '1.5px solid rgba(86,54,209,0.15)',
                          color: form.goal === g ? '#E2498A' : '#6b7280',
                          boxShadow: form.goal === g ? '0 4px 12px rgba(226,73,138,0.12)' : 'none',
                        }}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-2xl font-bold text-sm transition-all duration-300 mt-2"
                  style={{
                    background: loading ? '#9ca3af' : 'linear-gradient(135deg, #5636D1 0%, #E2498A 100%)',
                    color: '#fff',
                    boxShadow: loading ? 'none' : '0 8px 24px rgba(86,54,209,0.35)',
                    transform: loading ? 'none' : undefined,
                  }}
                  onMouseEnter={(e) => { if (!loading) e.currentTarget.style.transform = 'scale(1.02) translateY(-1px)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'none' }}
                >
                  {loading ? <LoadingDots /> : '⚡ Run Free Recommendation'}
                </button>

                <p className="text-center text-xs" style={{ color: '#9ca3af' }}>
                  By submitting you agree to our{' '}
                  <Link href="/privacy" className="underline hover:text-gray-600 transition-colors">Privacy Policy</Link>.
                  We will never spam you.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
