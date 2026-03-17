'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

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

interface Props { reportId: string }

export default function UnlockSection({ reportId }: Props) {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)

  async function handleUnlock(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (!email.trim()) { setError('Please enter your email address.'); return }
    setLoading(true)
    try {
      const res = await fetch('/api/verify-unlock', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ report_id: reportId, email }),
      })
      const data = await res.json()
      if (!res.ok) { setError(data.error ?? 'Verification failed. Please try again.'); setLoading(false); return }
      setDone(true)
      setTimeout(() => router.refresh(), 1200)
    } catch {
      setError('Network error. Please try again.')
      setLoading(false)
    }
  }

  if (done) {
    return (
      <div
        className="rounded-2xl p-6 text-center"
        style={{ background: 'rgba(16,185,129,0.08)', border: '1.5px solid rgba(16,185,129,0.25)' }}
      >
        <div className="text-3xl mb-2">🎉</div>
        <p className="font-bold text-emerald-700 mb-1">Payment confirmed!</p>
        <p className="text-sm text-emerald-600">Unlocking your full report now…</p>
      </div>
    )
  }

  return (
    <div
      className="rounded-2xl p-6 mt-5"
      style={{
        background: 'rgba(255,255,255,0.7)',
        border: '1.5px solid rgba(86,54,209,0.15)',
        boxShadow: '0 4px 20px rgba(86,54,209,0.06)',
      }}
    >
      <p className="text-sm font-bold mb-1" style={{ color: '#374151' }}>
        ✅ Completed payment?
      </p>
      <p className="text-xs mb-4" style={{ color: '#9ca3af' }}>
        Enter the email you used when submitting your website and we will unlock your full report instantly.
      </p>
      {error && (
        <div
          className="rounded-lg px-3 py-2 mb-3 text-xs font-medium"
          style={{ background: 'rgba(239,68,68,0.07)', color: '#dc2626', border: '1px solid rgba(239,68,68,0.15)' }}
        >
          {error}
        </div>
      )}
      <form onSubmit={handleUnlock} className="flex gap-2">
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-3 py-2.5 rounded-xl text-sm font-medium outline-none transition-all duration-200"
          style={{
            background: '#F8F7FF',
            border: '1.5px solid rgba(86,54,209,0.15)',
            color: '#0F0F1A',
          }}
          onFocus={(e) => (e.currentTarget.style.border = '1.5px solid rgba(86,54,209,0.5)')}
          onBlur={(e) => (e.currentTarget.style.border = '1.5px solid rgba(86,54,209,0.15)')}
        />
        <button
          type="submit"
          disabled={loading}
          className="px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200"
          style={{
            background: loading ? '#9ca3af' : '#5636D1',
            color: '#fff',
            boxShadow: loading ? 'none' : '0 4px 12px rgba(86,54,209,0.3)',
          }}
          onMouseEnter={(e) => { if (!loading) e.currentTarget.style.transform = 'scale(1.02)' }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'none' }}
        >
          {loading ? <LoadingDots /> : 'Unlock'}
        </button>
      </form>
    </div>
  )
}
