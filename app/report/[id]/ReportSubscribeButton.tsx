'use client'

import { useState, type MouseEvent } from 'react'

interface Props {
  reportId: string
  email: string
}

export default function ReportSubscribeButton({ reportId, email }: Props) {
  const [status, setStatus] = useState<'idle' | 'pending' | 'sent' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    if (status === 'pending') return

    setStatus('pending')
    setMessage('')

    try {
      const res = await fetch(
        `/api/send-report?reportId=${encodeURIComponent(reportId)}&email=${encodeURIComponent(email)}`,
      )
      const data = await res.json()
      if (!res.ok) {
        setStatus('error')
        setMessage(data.error ?? 'Failed to send report. Please try again.')
        return
      }

      setStatus('sent')
      setMessage('✅ Report sent! Check your inbox for the email with your mockup design.')
    } catch (err) {
      setStatus('error')
      setMessage('Network error. Please try again.')
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        disabled={status === 'pending'}
        className="w-full py-3 px-4 rounded-xl font-bold text-sm transition-all duration-300"
        style={{
          background: status === 'sent' ? '#10b981' : '#fff',
          color: status === 'sent' ? '#fff' : '#5636D1',
          cursor: status === 'pending' ? 'not-allowed' : 'pointer',
          boxShadow: status === 'pending' ? 'none' : '0 8px 24px rgba(0,0,0,0.15)',
        }}
      >
        {status === 'pending'
          ? 'Sending…'
          : status === 'sent'
          ? '📧 Report Sent!'
          : '📧 Subscribe & Get My Report'}
      </button>
      {message ? (
        <p className="mt-3 text-sm" style={{ color: status === 'error' ? '#dc2626' : '#10b981' }}>
          {message}
        </p>
      ) : null}
    </div>
  )
}
