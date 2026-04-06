'use client'

import { useState, useRef, FormEvent } from 'react'
import Link from 'next/link'
import Script from 'next/script'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [turnstileToken, setTurnstileToken] = useState('')
  const widgetRef = useRef<HTMLDivElement>(null)
  const widgetRendered = useRef(false)

  function initTurnstile() {
    if (widgetRef.current && !widgetRendered.current) {
      widgetRendered.current = true
      ;(window as any).turnstile?.render(widgetRef.current, {
        sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '',
        callback: (token: string) => setTurnstileToken(token),
        'expired-callback': () => setTurnstileToken(''),
        'error-callback': () => setTurnstileToken(''),
      })
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    try {
      const form = e.currentTarget
      const formData = new FormData(form)

      const res = await fetch('https://contact-form-lake-theta.vercel.app/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
          website: 'affordaweb',
          _honeypot: formData.get('_honeypot') ?? '',
          clientWebsite: formData.get('clientWebsite'),
          service: formData.get('service'),
          budget: formData.get('budget'),
          turnstileToken,
        }),
      })

      const data = await res.json()

      if (data.ok) {
        setStatus('success')
        form.reset()
        // GA4 conversion event
        if (typeof window !== 'undefined' && (window as any).gtag) {
          ;(window as any).gtag('event', 'generate_lead', {
            event_category: 'contact',
            event_label: 'quote_request',
          })
        }
      } else {
        setErrorMsg(data.error || 'Submission failed.')
        setStatus('error')
      }
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Network error.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-gray-300 text-sm">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
      aria-label="Contact form"
    >
      {/* Honeypot — hidden from users, bots will fill it and get blocked */}
      <input type="text" name="_honeypot" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
            Full Name <span className="text-pink-500">*</span>
          </label>
          <input
            type="text" id="name" name="name" required
            placeholder="John Smith"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 transition-all"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
            Email Address <span className="text-pink-500">*</span>
          </label>
          <input
            type="email" id="email" name="email" required
            placeholder="john@example.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 transition-all"
          />
        </div>
      </div>

      <div>
        <label htmlFor="website" className="block text-sm font-semibold text-white mb-2">
          Current Website <span className="text-gray-300 font-normal">(optional)</span>
        </label>
        <input
          type="url" id="website" name="clientWebsite"
          placeholder="https://example.com"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 transition-all"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-white mb-2">
          Service Interested In <span className="text-pink-500">*</span>
        </label>
        <select
          id="service" name="service" required
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 transition-all"
        >
          <option value="">Select a service…</option>
          <option value="website-design">New Website Design</option>
          <option value="website-redesign">Website Redesign</option>
          <option value="seo">SEO Optimization</option>
          <option value="maintenance">Website Maintenance</option>
          <option value="ecommerce">E-Commerce Store</option>
          <option value="other">Other / Not Sure</option>
        </select>
      </div>

      <div>
        <label htmlFor="budget" className="block text-sm font-semibold text-white mb-2">
          Monthly Budget <span className="text-pink-500">*</span>
        </label>
        <select
          id="budget" name="budget" required
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 transition-all"
        >
          <option value="">Select budget range…</option>
          <option value="basic">Basic — $69/month</option>
          <option value="standard">Standard — $99/month</option>
          <option value="premium">Premium — $149/month</option>
          <option value="unsure">Not Sure Yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
          Tell Us About Your Project <span className="text-pink-500">*</span>
        </label>
        <textarea
          id="message" name="message" required rows={5}
          placeholder="Tell us about your business, what you're looking for, and any goals you have for your website…"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm placeholder:text-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 transition-all"
        />
      </div>

      <div ref={widgetRef} className="flex justify-center" />
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        onLoad={initTurnstile}
      />

      <button
        type="submit"
        disabled={status === 'submitting' || !turnstileToken}
        className="btn-primary w-full justify-center py-4 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending…' : 'Send My Quote Request'}
        {status !== 'submitting' && (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        )}
      </button>

      {status === 'error' && (
        <p className="text-center text-sm text-red-500">{errorMsg || 'Something went wrong. Please try again.'}</p>
      )}

      <p className="text-center text-xs text-gray-300 pt-2">
        No spam. No commitment. By submitting you agree to our{' '}
        <Link href="/privacy" className="text-primary-400 hover:underline">Privacy Policy</Link>.
      </p>
    </form>
  )
}
