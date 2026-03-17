'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'

const FEATURES = [
  'Contact form', 'Booking / calendar', 'Online shop', 'Photo gallery',
  'Blog', 'FAQ section', 'Video embed', 'Google Maps',
  'Social media feed', 'Live chat',
]

interface Props {
  reportId: string
  name: string
  email: string
  website: string
}

export default function GetStartedForm({ reportId, name, email, website }: Props) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [features, setFeatures] = useState<string[]>([])

  function toggleFeature(f: string) {
    setFeatures((p) => p.includes(f) ? p.filter((x) => x !== f) : [...p, f])
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')
    try {
      const fd = new FormData(e.currentTarget)
      const body: Record<string, string> = {}
      fd.forEach((v, k) => { body[k] = v as string })
      // Append features as a readable string
      body['features_needed'] = features.length ? features.join(', ') : 'None specified'

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(body),
      })
      const data = await res.json()
      if (data.success) { setStatus('success') }
      else { setErrorMsg(data.message || 'Submission failed.'); setStatus('error') }
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Network error.')
      setStatus('error')
    }
  }

  const inputCls = 'w-full px-4 py-3 rounded-xl text-sm font-medium outline-none transition-all duration-200'
  const inputStyle = { background: '#F8F7FF', border: '1.5px solid rgba(86,54,209,0.15)', color: '#0F0F1A' }
  const focus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    (e.currentTarget.style.border = '1.5px solid rgba(86,54,209,0.5)')
  const blur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    (e.currentTarget.style.border = '1.5px solid rgba(86,54,209,0.15)')

  if (status === 'success') {
    return (
      <div
        className="rounded-3xl p-8 text-center"
        style={{ background: 'linear-gradient(135deg, #5636D1, #E2498A)', boxShadow: '0 12px 40px rgba(86,54,209,0.3)' }}
      >
        <div className="text-4xl mb-4">🎉</div>
        <h3 className="text-xl font-extrabold text-white mb-2">Request Submitted!</h3>
        <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.8)' }}>
          We&apos;ve received everything we need. You and our team have both been sent a copy by email.
        </p>
        <div
          className="rounded-2xl px-5 py-4 mb-6 mx-auto max-w-xs"
          style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)' }}
        >
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Your Unique Reference Code
          </p>
          <p className="text-xl font-black font-mono text-white" style={{ letterSpacing: '0.05em' }}>
            {reportId.toUpperCase()}
          </p>
          <p className="text-xs mt-2" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Quote this code in any correspondence with us.
          </p>
        </div>
        <p className="text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>
          We&apos;ll review your details and send you a PayPal payment request shortly.
          Once received, we&apos;ll start building your website right away.
        </p>
      </div>
    )
  }

  return (
    <div
      className="rounded-3xl overflow-hidden"
      style={{ border: '1.5px solid rgba(86,54,209,0.18)', boxShadow: '0 8px 40px rgba(86,54,209,0.1)' }}
    >
      {/* Header */}
      <div
        className="px-7 py-6"
        style={{ background: 'linear-gradient(135deg, #3D22B0, #5636D1 60%, #E2498A)' }}
      >
        <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.65)' }}>
          Ready to build it?
        </p>
        <h2 className="text-xl font-extrabold text-white mb-1" style={{ letterSpacing: '-0.02em' }}>
          Let&apos;s Get Started
        </h2>
        <p className="text-sm" style={{ color: 'rgba(255,255,255,0.72)' }}>
          Fill in your project details and we&apos;ll send you a quote. You and our team will both receive a copy.
        </p>
      </div>

      <div className="p-7 space-y-6" style={{ background: 'rgba(248,247,255,0.97)' }}>

        {/* Pre-filled info chips */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#9ca3af' }}>
            Your details (from your report)
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'Name', value: name },
              { label: 'Email', value: email },
              { label: 'Website', value: website },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
                style={{ background: 'rgba(86,54,209,0.08)', border: '1px solid rgba(86,54,209,0.18)', color: '#374151' }}
              >
                <span style={{ color: '#9ca3af' }}>{label}:</span>
                <span className="font-semibold">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Web3Forms hidden fields */}
          <input type="hidden" name="access_key" value="60088a8c-e8de-4ab9-beb2-179f54e5b2ef" />
          <input type="hidden" name="subject" value={`🔧 Build Request #${reportId.slice(0, 8).toUpperCase()} — ${name} | ${website}`} />
          <input type="hidden" name="from_name" value="AffordaWeb Report System" />
          <input type="hidden" name="redirect" value="false" />
          {/* Pre-filled identifiers */}
          <input type="hidden" name="report_id" value={reportId} />
          <input type="hidden" name="client_name" value={name} />
          <input type="hidden" name="client_email" value={email} />
          <input type="hidden" name="client_website" value={website} />
          <input type="hidden" name="cc" value={email} />
          {/* Honeypot */}
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold mb-1.5" style={{ color: '#374151' }}>
              Phone Number <span style={{ color: '#9ca3af', fontWeight: 400 }}>(optional)</span>
            </label>
            <input type="tel" name="phone" placeholder="+1 555 000 0000"
              className={inputCls} style={inputStyle} onFocus={focus} onBlur={blur} />
          </div>

          {/* Service + Budget */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1.5" style={{ color: '#374151' }}>
                Service <span style={{ color: '#E2498A' }}>*</span>
              </label>
              <select name="service" required className={inputCls} style={{ ...inputStyle, appearance: 'auto' }}
                onFocus={focus} onBlur={blur}>
                <option value="website-redesign">Website Redesign</option>
                <option value="new-website">New Website</option>
                <option value="ecommerce">E-Commerce Store</option>
                <option value="seo">SEO Package</option>
                <option value="maintenance">Maintenance Plan</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1.5" style={{ color: '#374151' }}>
                Budget <span style={{ color: '#E2498A' }}>*</span>
              </label>
              <select name="budget" required className={inputCls} style={{ ...inputStyle, appearance: 'auto' }}
                onFocus={focus} onBlur={blur}>
                <option value="">Select range…</option>
                <option value="under-300">Under $300</option>
                <option value="300-500">$300 – $500</option>
                <option value="500-1000">$500 – $1,000</option>
                <option value="1000+">$1,000+</option>
                <option value="unsure">Not sure yet</option>
              </select>
            </div>
          </div>

          {/* Business details */}
          <div>
            <label className="block text-sm font-semibold mb-1.5" style={{ color: '#374151' }}>
              Business Name <span style={{ color: '#E2498A' }}>*</span>
            </label>
            <input type="text" name="business_name" required placeholder="e.g. Smith Plumbing Co."
              className={inputCls} style={inputStyle} onFocus={focus} onBlur={blur} />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1.5" style={{ color: '#374151' }}>
              Who is your ideal customer?
            </label>
            <input type="text" name="target_audience" placeholder="e.g. Homeowners in Sydney aged 30–60 needing emergency plumbing"
              className={inputCls} style={inputStyle} onFocus={focus} onBlur={blur} />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1.5" style={{ color: '#374151' }}>
              Colour &amp; style preferences
            </label>
            <input type="text" name="color_style" placeholder="e.g. Clean and modern, navy and white, similar to Apple.com"
              className={inputCls} style={inputStyle} onFocus={focus} onBlur={blur} />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1.5" style={{ color: '#374151' }}>
              3 websites you love the design of
            </label>
            <textarea name="reference_sites" rows={2}
              placeholder={'e.g. https://example.com, https://example2.com, https://example3.com'}
              className={inputCls} style={{ ...inputStyle, resize: 'vertical' }}
              onFocus={focus} onBlur={blur} />
          </div>

          {/* Features */}
          <div>
            <label className="block text-sm font-semibold mb-2" style={{ color: '#374151' }}>
              Features you need
            </label>
            <div className="grid grid-cols-2 gap-2">
              {FEATURES.map((f) => (
                <button key={f} type="button" onClick={() => toggleFeature(f)}
                  className="px-3 py-2.5 rounded-xl text-xs font-semibold text-left transition-all duration-150"
                  style={{
                    background: features.includes(f) ? 'rgba(86,54,209,0.1)' : '#F8F7FF',
                    border: features.includes(f) ? '1.5px solid #5636D1' : '1.5px solid rgba(86,54,209,0.15)',
                    color: features.includes(f) ? '#5636D1' : '#6b7280',
                  }}>
                  {features.includes(f) ? '✓ ' : ''}{f}
                </button>
              ))}
            </div>
          </div>

          {/* Photos + Copy */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1.5" style={{ color: '#374151' }}>
                Photos / images ready?
              </label>
              <select name="has_photos" className={inputCls} style={{ ...inputStyle, appearance: 'auto' }}
                onFocus={focus} onBlur={blur}>
                <option value="yes">Yes, ready</option>
                <option value="partial">Some available</option>
                <option value="no">No, need stock</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1.5" style={{ color: '#374151' }}>
                Need copywriting help?
              </label>
              <select name="needs_copy" className={inputCls} style={{ ...inputStyle, appearance: 'auto' }}
                onFocus={focus} onBlur={blur}>
                <option value="yes">Yes, write it for me</option>
                <option value="no">No, I&apos;ll provide it</option>
              </select>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <label className="block text-sm font-semibold mb-1.5" style={{ color: '#374151' }}>
              When do you need it? <span style={{ color: '#E2498A' }}>*</span>
            </label>
            <select name="timeline" required className={inputCls} style={{ ...inputStyle, appearance: 'auto' }}
              onFocus={focus} onBlur={blur}>
              <option value="">Select timeline…</option>
              <option value="asap">ASAP</option>
              <option value="2weeks">Within 2 weeks</option>
              <option value="1month">Within a month</option>
              <option value="flexible">No rush / flexible</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold mb-1.5" style={{ color: '#374151' }}>
              Anything else we should know?
            </label>
            <textarea name="message" rows={3}
              placeholder="Extra details, questions, or anything specific about your project…"
              className={inputCls} style={{ ...inputStyle, resize: 'vertical' }}
              onFocus={focus} onBlur={blur} />
          </div>

          {errorMsg && (
            <div className="rounded-xl px-4 py-3 text-sm font-medium"
              style={{ background: 'rgba(239,68,68,0.07)', color: '#dc2626', border: '1px solid rgba(239,68,68,0.15)' }}>
              {errorMsg}
            </div>
          )}

          <button type="submit" disabled={status === 'submitting'}
            className="w-full py-4 rounded-2xl font-bold text-sm transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5"
            style={{
              background: status === 'submitting' ? '#9ca3af' : 'linear-gradient(135deg, #5636D1 0%, #E2498A 100%)',
              color: '#fff',
              boxShadow: status === 'submitting' ? 'none' : '0 8px 24px rgba(86,54,209,0.35)',
            }}>
            {status === 'submitting' ? 'Sending…' : '🚀 Submit My Project Request'}
          </button>

          <p className="text-center text-xs" style={{ color: '#9ca3af' }}>
            No commitment required. By submitting you agree to our{' '}
            <Link href="/privacy" className="underline hover:text-gray-600 transition-colors">Privacy Policy</Link>.
          </p>
        </form>
      </div>
    </div>
  )
}
