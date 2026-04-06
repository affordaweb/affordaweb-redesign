"use client"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import Script from "next/script"
import {
  Globe,
  User,
  Mail,
  Briefcase,
  Target,
  ArrowRight,
  AlertCircle,
} from "lucide-react"

const businessTypes = [
  "Local Business",
  "E-commerce",
  "Professional Services",
  "Healthcare",
  "Restaurant / Food",
  "Real Estate",
  "Non-profit",
  "Technology / SaaS",
  "Other",
]

const primaryGoals = [
  "Get more leads",
  "Rank higher on Google",
  "Improve website traffic",
  "Fix technical SEO issues",
  "Beat local competitors",
  "Build brand visibility",
  "Other",
]

// ── Pulsing dots loading animation ───────────────────────────────────────────

function PulsingDots() {
  return (
    <span className="inline-flex items-center gap-1.5">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-2 h-2 rounded-full bg-white animate-bounce"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </span>
  )
}

// ── Field wrapper ─────────────────────────────────────────────────────────────

function Field({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ElementType
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
        <Icon className="w-4 h-4 text-primary-500" />
        {label}
      </label>
      {children}
    </div>
  )
}

const inputCls =
  "w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent bg-white transition-shadow hover:shadow-xs"

const selectCls =
  "w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent bg-white cursor-pointer transition-shadow hover:shadow-xs appearance-none"

// ── Main Component ────────────────────────────────────────────────────────────

export default function SeoForm() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [turnstileToken, setTurnstileToken] = useState('')
  const widgetRef = useRef<HTMLDivElement>(null)
  const widgetRendered = useRef(false)
  const [form, setForm] = useState({
    url: "",
    name: "",
    email: "",
    businessType: "",
    primaryGoal: "",
  })

  function set(key: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }))
  }

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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (loading) return

    setError("")
    setLoading(true)

    try {
      const res = await fetch("/api/create-seo-report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, turnstileToken }),
      })
      const data = await res.json()

      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.")
        setLoading(false)
        return
      }

      // GA4 conversion event
      if (typeof window !== 'undefined' && (window as any).gtag) {
        ;(window as any).gtag('event', 'seo_audit_submit', {
          event_category: 'free_tools',
          event_label: form.url,
        })
      }
      router.push(`/seo-report/${data.reportId}`)
    } catch {
      setError("Could not connect. Please check your connection and try again.")
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl shadow-card-hover border border-white/60 p-8 sm:p-10 w-full max-w-xl mx-auto"
    >
      <div className="space-y-5">

        {/* URL */}
        <Field icon={Globe} label="Website URL *">
          <input
            type="text"
            value={form.url}
            onChange={set("url")}
            placeholder="e.g. mybusiness.com"
            required
            disabled={loading}
            className={inputCls}
          />
        </Field>

        {/* Name */}
        <Field icon={User} label="Your Name *">
          <input
            type="text"
            value={form.name}
            onChange={set("name")}
            placeholder="John Smith"
            required
            disabled={loading}
            className={inputCls}
          />
        </Field>

        {/* Email */}
        <Field icon={Mail} label="Email Address *">
          <input
            type="email"
            value={form.email}
            onChange={set("email")}
            placeholder="john@example.com"
            required
            disabled={loading}
            className={inputCls}
          />
        </Field>

        {/* Business Type */}
        <Field icon={Briefcase} label="Business Type">
          <div className="relative">
            <select
              value={form.businessType}
              onChange={set("businessType")}
              disabled={loading}
              className={selectCls}
            >
              <option value="">Select your business type…</option>
              {businessTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <svg className="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </Field>

        {/* Primary Goal */}
        <Field icon={Target} label="Primary Goal">
          <div className="relative">
            <select
              value={form.primaryGoal}
              onChange={set("primaryGoal")}
              disabled={loading}
              className={selectCls}
            >
              <option value="">What&apos;s your main SEO goal?</option>
              {primaryGoals.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <svg className="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </Field>

        {/* Error */}
        {error && (
          <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-100 text-sm text-red-700">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            {error}
          </div>
        )}

        {/* Submit */}
        <div ref={widgetRef} className="flex justify-center" />
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
          onLoad={initTurnstile}
        />
        <button
          type="submit"
          disabled={loading || !form.url || !form.name || !form.email || !turnstileToken}
          className="w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl bg-gradient-primary text-white font-bold text-base shadow-btn hover:shadow-glow transition-all duration-200 hover:scale-[1.02] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 disabled:shadow-none"
        >
          {loading ? (
            <>
              Analyzing your website&hellip; <PulsingDots />
            </>
          ) : (
            <>
              Run Free SEO Analysis
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>

        <p className="text-center text-xs text-gray-400">
          Analysis typically completes in 15–30 seconds. Free preview, no payment required.
        </p>
      </div>
    </form>
  )
}
