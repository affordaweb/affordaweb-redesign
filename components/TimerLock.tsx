"use client"

import { useState, useEffect } from "react"
import {
  Clock,
  Lock,
  Send,
  CheckCircle,
  AlertCircle,
  User,
  Mail,
  Globe,
  MessageSquare,
} from "lucide-react"
import SeoScoreCard from "@/components/SeoScoreCard"
import { SeoTopIssuesCard, SeoQuickWinsCard } from "@/components/SeoIssuesCard"
import LockedCard from "@/components/LockedCard"
import type { SeoReport } from "@/types/seo-report"

const LOCK_SECONDS = 120

function pad(n: number) {
  return String(n).padStart(2, "0")
}

// ── Timer Indicator ───────────────────────────────────────────────────────────

function TimerIndicator({ secondsLeft }: { secondsLeft: number }) {
  const radius = 14
  const circ = 2 * Math.PI * radius
  const offset = circ * (1 - secondsLeft / LOCK_SECONDS)
  const minutes = Math.floor(secondsLeft / 60)
  const secs = secondsLeft % 60
  const isWarning = secondsLeft <= 30

  return (
    <div
      className={`fixed top-20 right-4 z-30 flex items-center gap-2 px-3 py-2 rounded-full shadow-card border backdrop-blur-sm transition-all duration-500 ${
        isWarning
          ? "bg-amber-50/95 border-amber-200 text-amber-700"
          : "bg-white/95 border-gray-200 text-gray-600"
      }`}
    >
      <svg width="36" height="36" className="-rotate-90 shrink-0">
        <circle
          cx="18" cy="18" r={radius} fill="none"
          stroke={isWarning ? "#fde68a" : "#e5e7eb"}
          strokeWidth="3"
        />
        <circle
          cx="18" cy="18" r={radius} fill="none"
          stroke={isWarning ? "#f59e0b" : "#5636D1"}
          strokeWidth="3" strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          className="transition-all duration-1000 ease-linear"
        />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="text-xs font-black tabular-nums tracking-tight">
          {pad(minutes)}:{pad(secs)}
        </span>
        <span className="text-[10px] opacity-60 mt-0.5">free preview</span>
      </div>
    </div>
  )
}

// ── Subscribe Form ────────────────────────────────────────────────────────────

function SubscribeForm({
  report,
  onSuccess,
}: {
  report: SeoReport
  onSuccess: () => void
}) {
  const [form, setForm] = useState({
    name: report.name,
    email: report.email,
    website: report.website,
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  function set(key: keyof typeof form) {
    return (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => setForm((prev) => ({ ...prev, [key]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (loading) return
    setError("")
    setLoading(true)
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, reportId: report.id }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.")
        setLoading(false)
        return
      }
      onSuccess()
    } catch {
      setError("Could not connect. Please try again.")
      setLoading(false)
    }
  }

  const inputCls =
    "w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent bg-white transition-shadow hover:shadow-xs"

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="flex items-center gap-1.5 text-xs font-bold text-gray-600">
            <User className="w-3.5 h-3.5 text-primary-500" /> Name *
          </label>
          <input
            type="text"
            value={form.name}
            onChange={set("name")}
            required
            disabled={loading}
            placeholder="Your name"
            className={inputCls}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="flex items-center gap-1.5 text-xs font-bold text-gray-600">
            <Mail className="w-3.5 h-3.5 text-primary-500" /> Email *
          </label>
          <input
            type="email"
            value={form.email}
            onChange={set("email")}
            required
            disabled={loading}
            placeholder="your@email.com"
            className={inputCls}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="flex items-center gap-1.5 text-xs font-bold text-gray-600">
          <Globe className="w-3.5 h-3.5 text-primary-500" /> Website *
        </label>
        <input
          type="text"
          value={form.website}
          onChange={set("website")}
          required
          disabled={loading}
          placeholder="https://yoursite.com"
          className={inputCls}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="flex items-center gap-1.5 text-xs font-bold text-gray-600">
          <MessageSquare className="w-3.5 h-3.5 text-primary-500" /> Message{" "}
          <span className="font-normal opacity-60">(optional)</span>
        </label>
        <textarea
          value={form.message}
          onChange={set("message")}
          disabled={loading}
          placeholder="Any specific priorities or questions?"
          rows={3}
          className={inputCls + " resize-none"}
        />
      </div>

      {error && (
        <div className="flex items-start gap-2 p-3 rounded-xl bg-red-50 border border-red-100 text-xs text-red-700">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading || !form.name || !form.email || !form.website}
        className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-2xl bg-gradient-primary text-white font-bold text-sm shadow-btn hover:shadow-glow transition-all duration-200 hover:scale-[1.02] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 disabled:shadow-none"
      >
        {loading ? (
          <>
            <span>Sending&hellip;</span>
            <span className="inline-flex gap-1">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-white animate-bounce"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Get Personalized Help
          </>
        )}
      </button>
    </form>
  )
}

// ── Locked Overlay ────────────────────────────────────────────────────────────

function LockedOverlay({
  report,
  onSuccess,
}: {
  report: SeoReport
  onSuccess: () => void
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-white/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl shadow-card-hover border border-gray-100 w-full max-w-lg my-auto">
        {/* Header */}
        <div className="bg-gradient-hero p-8 text-center relative overflow-hidden rounded-t-3xl">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(86,54,209,0.3) 1.5px, transparent 1.5px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative">
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4 shadow-glow animate-float">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl font-black text-white mb-2">
              Want to implement these improvements?
            </h2>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm mx-auto">
              If you&apos;re interested in improving your website based on
              this report, subscribe below and we&apos;ll guide you through
              the next steps.
            </p>
          </div>
        </div>

        {/* What you get */}
        <div className="px-8 pt-6 pb-2">
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { icon: "🎯", label: "Personalized plan" },
              { icon: "📞", label: "1-on-1 consultation" },
              { icon: "🚀", label: "Priority fixes first" },
            ].map(({ icon, label }) => (
              <div
                key={label}
                className="rounded-2xl bg-primary-50 border border-primary-100 p-3 text-center"
              >
                <div className="text-xl mb-1">{icon}</div>
                <div className="text-xs font-semibold text-primary-700 leading-tight">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="px-8 pb-8">
          <SubscribeForm report={report} onSuccess={onSuccess} />
        </div>
      </div>
    </div>
  )
}

// ── Subscribe Success ─────────────────────────────────────────────────────────

function SubscribeSuccess({ domain }: { domain: string }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl shadow-card-hover border border-emerald-100 w-full max-w-md p-10 text-center animate-fade-up">
        <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="w-8 h-8 text-emerald-600" />
        </div>
        <h2 className="text-2xl font-black text-gray-900 mb-3">
          You&apos;re on the list!
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          We&apos;ve received your request. Our team will review your SEO
          report for{" "}
          <strong className="text-gray-700">{domain}</strong> and reach out
          to guide you through the next steps.
        </p>
        <div className="space-y-2">
          {[
            "Expect to hear from us within 24 hours",
            "We'll review your full SEO audit first",
            "No automated payment — personal service only",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2.5 text-xs text-gray-500 bg-gray-50 rounded-xl px-4 py-2.5"
            >
              <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              {item}
            </div>
          ))}
        </div>
        <a
          href="/seo-audit"
          className="mt-6 inline-flex items-center gap-2 text-sm text-primary-600 font-semibold hover:text-primary-700 transition-colors"
        >
          Run another analysis →
        </a>
      </div>
    </div>
  )
}

// ── Main TimerLock Component ──────────────────────────────────────────────────

export default function TimerLock({
  report,
  unlocked,
}: {
  report: SeoReport
  unlocked: boolean
}) {
  const [secondsLeft, setSecondsLeft] = useState(LOCK_SECONDS)
  const [locked, setLocked] = useState(false)
  const [subscribed, setSubscribed] = useState(false)

  useEffect(() => {
    // Skip timer for paid/unlocked reports
    if (unlocked) return

    const id = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(id)
          setLocked(true)
          return 0
        }
        return s - 1
      })
    }, 1000)

    return () => clearInterval(id)
  }, [unlocked])

  const blurContent = locked && !subscribed

  return (
    <>
      {/* Subtle timer pill — top right */}
      {!unlocked && !locked && (
        <TimerIndicator secondsLeft={secondsLeft} />
      )}

      {/* ── Report cards ─────────────────────────────────────────────── */}
      <div
        className={`transition-all duration-700 ${
          blurContent ? "blur-sm pointer-events-none select-none opacity-60" : ""
        }`}
      >
        {/* Score card */}
        <section className="mb-6">
          <SeoScoreCard report={report} />
        </section>

        {/* Issues + Quick Wins */}
        <section className="grid sm:grid-cols-2 gap-6 mb-6">
          <SeoTopIssuesCard report={report} />
          <SeoQuickWinsCard report={report} />
        </section>

        {/* Full report (payment locked) */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-lg font-black text-gray-900">
              Full SEO Analysis
            </h2>
            {!unlocked && (
              <span className="px-2.5 py-0.5 rounded-full bg-primary-100 text-primary-700 text-xs font-bold">
                Locked
              </span>
            )}
          </div>
          <LockedCard report={report} unlocked={unlocked} />
        </section>
      </div>

      {/* ── Timer expired overlay ──────────────────────────────────────── */}
      {locked && !subscribed && (
        <LockedOverlay
          report={report}
          onSuccess={() => setSubscribed(true)}
        />
      )}

      {/* ── Success screen ─────────────────────────────────────────────── */}
      {subscribed && <SubscribeSuccess domain={report.domain} />}
    </>
  )
}
