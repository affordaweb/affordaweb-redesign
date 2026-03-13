'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    try {
      const form = e.currentTarget
      const formData = new FormData(form)

      const jsonBody: Record<string, string> = {}
      formData.forEach((value, key) => {
        jsonBody[key] = value as string
      })

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(jsonBody),
      })

      const data = await res.json()

      if (data.success) {
        setStatus('success')
        form.reset()
      } else {
        setErrorMsg(data.message || 'Submission failed.')
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
        <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-500 text-sm">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
      aria-label="Contact form"
    >
      <input type="hidden" name="access_key" value="60088a8c-e8de-4ab9-beb2-179f54e5b2ef" />
      <input type="hidden" name="subject" value="New Quote Request — AffordaWeb Solutions" />
      <input type="hidden" name="from_name" value="AffordaWeb Solutions Website" />
      <input type="hidden" name="to" value="hello@affordawebsolutions.com" />
      <input type="hidden" name="cc" value="va.saifcastle@gmail.com" />
      {/* Honeypot — hidden from users, bots will fill it and get blocked */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
            Full Name <span className="text-pink-500">*</span>
          </label>
          <input
            type="text" id="name" name="name" required
            placeholder="John Smith"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 transition-all"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
            Email Address <span className="text-pink-500">*</span>
          </label>
          <input
            type="email" id="email" name="email" required
            placeholder="john@example.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 transition-all"
          />
        </div>
      </div>

      <div>
        <label htmlFor="website" className="block text-sm font-semibold text-gray-900 mb-2">
          Current Website <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <input
          type="url" id="website" name="website"
          placeholder="https://example.com"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 transition-all"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-2">
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
        <label htmlFor="budget" className="block text-sm font-semibold text-gray-900 mb-2">
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
        <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
          Tell Us About Your Project <span className="text-pink-500">*</span>
        </label>
        <textarea
          id="message" name="message" required rows={5}
          placeholder="Tell us about your business, what you're looking for, and any goals you have for your website…"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm placeholder:text-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 transition-all"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
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

      <p className="text-center text-xs text-gray-400 pt-2">
        No spam. No commitment. By submitting you agree to our{' '}
        <Link href="/privacy" className="text-primary-600 hover:underline">Privacy Policy</Link>.
      </p>
    </form>
  )
}
