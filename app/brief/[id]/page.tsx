'use client'

import { useState, use } from 'react'
import Link from 'next/link'
import { FEATURE_OPTIONS } from '@/lib/brief'

function LoadingDots() {
  return (
    <span className="inline-flex items-center gap-1.5">
      {[0, 1, 2].map((i) => (
        <span key={i} className="w-2 h-2 rounded-full bg-white inline-block animate-pulse"
          style={{ animationDelay: `${i * 0.18}s`, animationDuration: '0.9s' }} />
      ))}
    </span>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="h-px flex-1" style={{ background: 'rgba(86,54,209,0.12)' }} />
      <span className="text-xs font-bold uppercase tracking-widest px-3" style={{ color: '#5636D1' }}>{children}</span>
      <div className="h-px flex-1" style={{ background: 'rgba(86,54,209,0.12)' }} />
    </div>
  )
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-1.5" style={{ color: '#374151' }}>
        {label} {required && <span style={{ color: '#E2498A' }}>*</span>}
      </label>
      {children}
    </div>
  )
}

const inputStyle = {
  background: '#F8F7FF',
  border: '1.5px solid rgba(86,54,209,0.15)',
  color: '#0F0F1A',
  borderRadius: 12,
  padding: '10px 14px',
  fontSize: 14,
  width: '100%',
  outline: 'none',
  fontFamily: 'inherit',
  resize: 'vertical' as const,
}

const focusBorder = '1.5px solid rgba(86,54,209,0.5)'
const blurBorder  = '1.5px solid rgba(86,54,209,0.15)'

export default function BriefPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)

  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')
  const [features, setFeatures] = useState<string[]>([])

  const [form, setForm] = useState({
    business_name:    '',
    tagline:          '',
    target_audience:  '',
    top_services:     '',
    differentiator:   '',
    color_preferences: '',
    reference_sites:  '',
    has_photos:       '',
    needs_copy:       '',
    timeline:         '',
    notes:            '',
  })

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }))

  function toggleFeature(f: string) {
    setFeatures((prev) => prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f])
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (!form.business_name.trim()) { setError('Please enter your business name.'); return }
    if (!form.target_audience.trim()) { setError('Please describe your target audience.'); return }
    if (!form.has_photos) { setError('Please select whether you have photos ready.'); return }
    if (!form.needs_copy) { setError('Please select whether you need copywriting help.'); return }
    if (!form.timeline) { setError('Please select your preferred timeline.'); return }

    setLoading(true)
    try {
      const res = await fetch('/api/save-brief', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ report_id: id, ...form, features }),
      })
      const data = await res.json()
      if (!res.ok) { setError(data.error ?? 'Something went wrong. Please try again.'); setLoading(false); return }
      setDone(true)
    } catch {
      setError('Network error. Please try again.')
      setLoading(false)
    }
  }

  if (done) {
    return (
      <div className="min-h-screen pt-28 pb-24 px-4" style={{ background: 'linear-gradient(135deg, #f8f7ff 0%, #eef2ff 40%, #fdf4ff 100%)' }}>
        <div className="max-w-md mx-auto text-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl"
            style={{ background: 'linear-gradient(135deg, #10b981, #059669)', boxShadow: '0 12px 32px rgba(16,185,129,0.35)' }}>
            ✅
          </div>
          <h1 className="text-2xl font-extrabold mb-3" style={{ color: '#0F0F1A', letterSpacing: '-0.025em' }}>
            Brief Received!
          </h1>
          <p className="text-sm leading-relaxed mb-8" style={{ color: '#6b7280' }}>
            Thank you — we now have everything we need to get started on your website.
            You&apos;ll hear from us shortly with your payment request and next steps.
          </p>
          <Link
            href={`/report/${id}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #5636D1, #E2498A)', color: '#fff', boxShadow: '0 6px 20px rgba(86,54,209,0.3)' }}
          >
            View My Report Preview →
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-28 pb-24 px-4" style={{ background: 'linear-gradient(135deg, #f8f7ff 0%, #eef2ff 40%, #fdf4ff 100%)' }}>
      <div className="max-w-xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full mb-6"
            style={{ background: 'rgba(86,54,209,0.1)', color: '#5636D1', border: '1px solid rgba(86,54,209,0.2)' }}>
            Project Brief
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3" style={{ color: '#0F0F1A', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            Help Us Build Your{' '}
            <span style={{ backgroundImage: 'linear-gradient(135deg, #5636D1, #E2498A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Perfect Website
            </span>
          </h1>
          <p className="text-sm" style={{ color: '#6b7280' }}>
            Fill in as much as you can. The more detail you share, the better your website will be.
          </p>
        </div>

        {/* Form card */}
        <div className="rounded-3xl p-7 sm:p-9"
          style={{ background: 'rgba(255,255,255,0.88)', backdropFilter: 'blur(12px)', boxShadow: '0 4px 6px rgba(0,0,0,0.04), 0 20px 60px rgba(86,54,209,0.08), 0 0 0 1px rgba(86,54,209,0.08)' }}>

          {error && (
            <div className="rounded-xl px-4 py-3 mb-6 text-sm font-medium"
              style={{ background: 'rgba(239,68,68,0.07)', color: '#dc2626', border: '1px solid rgba(239,68,68,0.15)' }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-7">

            {/* Section 1 */}
            <SectionLabel>About Your Business</SectionLabel>

            <Field label="Business Name" required>
              <input type="text" placeholder="e.g. Smith Plumbing Co." value={form.business_name}
                onChange={(e) => set('business_name', e.target.value)}
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.border = focusBorder)}
                onBlur={(e) => (e.currentTarget.style.border = blurBorder)} />
            </Field>

            <Field label="Tagline or one-line description">
              <input type="text" placeholder="e.g. Fast, affordable plumbing for Sydney homes" value={form.tagline}
                onChange={(e) => set('tagline', e.target.value)}
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.border = focusBorder)}
                onBlur={(e) => (e.currentTarget.style.border = blurBorder)} />
            </Field>

            <Field label="Who is your ideal customer?" required>
              <textarea rows={2} placeholder="e.g. Homeowners aged 30-60 in Sydney's north shore who need emergency plumbing" value={form.target_audience}
                onChange={(e) => set('target_audience', e.target.value)}
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.border = focusBorder)}
                onBlur={(e) => (e.currentTarget.style.border = blurBorder)} />
            </Field>

            <Field label="Top 3 services or products you offer">
              <textarea rows={3} placeholder={"e.g.\n1. Emergency plumbing repairs\n2. Hot water system installation\n3. Blocked drain clearing"} value={form.top_services}
                onChange={(e) => set('top_services', e.target.value)}
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.border = focusBorder)}
                onBlur={(e) => (e.currentTarget.style.border = blurBorder)} />
            </Field>

            <Field label="What makes you different from competitors?">
              <textarea rows={2} placeholder="e.g. We're available 24/7, upfront pricing, 10-year workmanship guarantee" value={form.differentiator}
                onChange={(e) => set('differentiator', e.target.value)}
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.border = focusBorder)}
                onBlur={(e) => (e.currentTarget.style.border = blurBorder)} />
            </Field>

            {/* Section 2 */}
            <SectionLabel>Design Preferences</SectionLabel>

            <Field label="Colour & style preferences">
              <textarea rows={2} placeholder="e.g. Clean and professional, navy and white, modern minimalist — similar to Apple.com" value={form.color_preferences}
                onChange={(e) => set('color_preferences', e.target.value)}
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.border = focusBorder)}
                onBlur={(e) => (e.currentTarget.style.border = blurBorder)} />
            </Field>

            <Field label="3 websites whose design you love (URLs)">
              <textarea rows={3} placeholder={"e.g.\nhttps://example.com\nhttps://example2.com\nhttps://example3.com"} value={form.reference_sites}
                onChange={(e) => set('reference_sites', e.target.value)}
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.border = focusBorder)}
                onBlur={(e) => (e.currentTarget.style.border = blurBorder)} />
            </Field>

            {/* Section 3 */}
            <SectionLabel>Features & Content</SectionLabel>

            <Field label="Features you need">
              <div className="grid grid-cols-2 gap-2 mt-1">
                {FEATURE_OPTIONS.map((f) => (
                  <button key={f} type="button" onClick={() => toggleFeature(f)}
                    className="px-3 py-2.5 rounded-xl text-xs font-semibold text-left transition-all duration-200"
                    style={{
                      background: features.includes(f) ? 'rgba(86,54,209,0.1)' : '#F8F7FF',
                      border: features.includes(f) ? '1.5px solid #5636D1' : '1.5px solid rgba(86,54,209,0.15)',
                      color: features.includes(f) ? '#5636D1' : '#6b7280',
                    }}>
                    {features.includes(f) ? '✓ ' : ''}{f}
                  </button>
                ))}
              </div>
            </Field>

            <Field label="Do you have photos / images ready?" required>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { v: 'yes', l: 'Yes, ready' },
                  { v: 'partial', l: 'Some available' },
                  { v: 'no', l: 'No, need stock' },
                ].map(({ v, l }) => (
                  <button key={v} type="button" onClick={() => set('has_photos', v)}
                    className="px-3 py-2.5 rounded-xl text-xs font-semibold text-center transition-all duration-200"
                    style={{
                      background: form.has_photos === v ? 'rgba(86,54,209,0.1)' : '#F8F7FF',
                      border: form.has_photos === v ? '1.5px solid #5636D1' : '1.5px solid rgba(86,54,209,0.15)',
                      color: form.has_photos === v ? '#5636D1' : '#6b7280',
                    }}>
                    {l}
                  </button>
                ))}
              </div>
            </Field>

            <Field label="Do you need help writing the website copy?" required>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { v: 'yes', l: 'Yes, write it for me' },
                  { v: 'no', l: "No, I'll provide it" },
                ].map(({ v, l }) => (
                  <button key={v} type="button" onClick={() => set('needs_copy', v)}
                    className="px-3 py-2.5 rounded-xl text-xs font-semibold text-center transition-all duration-200"
                    style={{
                      background: form.needs_copy === v ? 'rgba(226,73,138,0.08)' : '#F8F7FF',
                      border: form.needs_copy === v ? '1.5px solid #E2498A' : '1.5px solid rgba(86,54,209,0.15)',
                      color: form.needs_copy === v ? '#E2498A' : '#6b7280',
                    }}>
                    {l}
                  </button>
                ))}
              </div>
            </Field>

            {/* Section 4 */}
            <SectionLabel>Project Details</SectionLabel>

            <Field label="When do you need the website?" required>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { v: 'asap', l: 'ASAP' },
                  { v: '2weeks', l: 'Within 2 weeks' },
                  { v: '1month', l: 'Within a month' },
                  { v: 'flexible', l: 'No rush / flexible' },
                ].map(({ v, l }) => (
                  <button key={v} type="button" onClick={() => set('timeline', v)}
                    className="px-3 py-2.5 rounded-xl text-xs font-semibold text-center transition-all duration-200"
                    style={{
                      background: form.timeline === v ? 'rgba(86,54,209,0.1)' : '#F8F7FF',
                      border: form.timeline === v ? '1.5px solid #5636D1' : '1.5px solid rgba(86,54,209,0.15)',
                      color: form.timeline === v ? '#5636D1' : '#6b7280',
                    }}>
                    {l}
                  </button>
                ))}
              </div>
            </Field>

            <Field label="Anything else we should know?">
              <textarea rows={3} placeholder="Any other details, preferences, or questions for our team..." value={form.notes}
                onChange={(e) => set('notes', e.target.value)}
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.border = focusBorder)}
                onBlur={(e) => (e.currentTarget.style.border = blurBorder)} />
            </Field>

            <button type="submit" disabled={loading}
              className="w-full py-4 rounded-2xl font-bold text-sm transition-all duration-300 mt-2"
              style={{
                background: loading ? '#9ca3af' : 'linear-gradient(135deg, #5636D1 0%, #E2498A 100%)',
                color: '#fff',
                boxShadow: loading ? 'none' : '0 8px 24px rgba(86,54,209,0.35)',
              }}
              onMouseEnter={(e) => { if (!loading) e.currentTarget.style.transform = 'scale(1.02) translateY(-1px)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'none' }}>
              {loading ? <LoadingDots /> : '📋 Submit My Project Brief'}
            </button>

          </form>
        </div>
      </div>
    </div>
  )
}
