'use client'

import { useState, FormEvent } from 'react'

const RECAPTCHA_SITE_KEY = '6LexrXUrAAAAANyuRrheQxVF9DLnRBUygw5P_Lod'

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void
      execute: (siteKey: string, options: { action: string }) => Promise<string>
    }
  }
}

export default function NewsletterForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')

    try {
      const form = e.currentTarget
      const formData = new FormData(form)

      // reCAPTCHA V3 client-side gate — block bots before submitting
      try {
        if (window.grecaptcha) {
          await new Promise<string>((resolve, reject) => {
            window.grecaptcha.ready(() => {
              window.grecaptcha
                .execute(RECAPTCHA_SITE_KEY, { action: 'newsletter' })
                .then(resolve)
                .catch(reject)
            })
          })
        }
      } catch {
        // reCAPTCHA failed — continue with submission anyway
      }

      const res = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center">
        <p className="text-white font-semibold">You&apos;re subscribed! Thanks for joining.</p>
      </div>
    )
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
      >
        <input
          type="email"
          name="email"
          required
          placeholder="Your email address"
          className="flex-1 px-4 py-3 rounded-full text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary-400/50"
          style={{ background: 'rgba(255,255,255,0.08)', border: '1.5px solid rgba(255,255,255,0.15)' }}
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn-white px-6 py-3 shrink-0 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? 'Subscribing…' : 'Subscribe'}
        </button>
      </form>

      {status === 'error' && (
        <p className="text-center text-sm text-red-400 mt-2">Something went wrong. Please try again.</p>
      )}

      <p className="text-xs mt-4" style={{ color: 'rgba(255,255,255,0.3)' }}>
        This site is protected by reCAPTCHA and the Google{' '}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: 'rgba(255,255,255,0.45)' }}>Privacy Policy</a> and{' '}
        <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: 'rgba(255,255,255,0.45)' }}>Terms of Service</a> apply.
        No spam. Unsubscribe anytime.
      </p>
    </>
  )
}
