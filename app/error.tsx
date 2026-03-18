'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
          style={{ background: 'rgba(226,73,138,0.15)', border: '1px solid rgba(226,73,138,0.25)' }}
        >
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: '#E2498A' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-white mb-3">Something Went Wrong</h1>
        <p className="text-white/50 text-sm mb-8 leading-relaxed">
          An unexpected error occurred. Please try again or contact us if the problem persists.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 font-bold rounded-full px-7 py-3.5 text-sm text-white transition-all hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #5636D1, #E2498A)', boxShadow: '0 4px 20px rgba(86,54,209,0.35)' }}
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 font-semibold rounded-full px-7 py-3.5 text-sm text-white transition-all hover:-translate-y-0.5"
            style={{ border: '1.5px solid rgba(255,255,255,0.18)' }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
