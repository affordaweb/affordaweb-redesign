'use client'

import Link from 'next/link'
import { FormEvent, useEffect, useRef, useState } from 'react'
import type { ConciergeAnswer } from '@/lib/virtual-employee'

type Message = Pick<ConciergeAnswer, 'text' | 'href' | 'linkLabel'> & { role: 'assistant' | 'user' }

const welcome: Message = {
  role: 'assistant',
  text: "Hi, I am AffordaWeb's Virtual Employee. Ask me about services, pricing, timelines, hosting, SEO, or website redesigns.",
}

const quickQuestions = ['What are your prices?', 'How long does a website take?', 'What services do you offer?']

function track(name: string) {
  ;(window as unknown as { gtag?: (type: string, name: string) => void }).gtag?.('event', name)
}

export default function VirtualEmployeeChat() {
  const [open, setOpen] = useState(false)
  const [question, setQuestion] = useState('')
  const [messages, setMessages] = useState<Message[]>([welcome])
  const [loading, setLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const launcherRef = useRef<HTMLButtonElement>(null)
  const transcriptRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    inputRef.current?.focus()
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false)
        launcherRef.current?.focus()
      }
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [open])

  useEffect(() => {
    if (open) transcriptRef.current?.scrollTo({ top: transcriptRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, loading, open])

  function toggle() {
    setOpen((current) => {
      if (!current) track('ve_chat_opened')
      return !current
    })
  }

  async function ask(text: string) {
    const cleaned = text.trim()
    if (!cleaned || loading) return
    setQuestion('')
    setMessages((current) => [...current, { role: 'user', text: cleaned }])
    setLoading(true)
    try {
      const response = await fetch('/api/virtual-employee', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'question', question: cleaned }),
      })
      const data = await response.json() as Partial<ConciergeAnswer> & { error?: string }
      setMessages((current) => [...current, {
        role: 'assistant',
        text: data.text || data.error || 'I could not answer that right now. Please try again.',
        href: data.href,
        linkLabel: data.linkLabel,
      }])
      track(data.kind === 'unsupported' ? 've_chat_unsupported' : 've_chat_answered')
    } catch {
      setMessages((current) => [...current, { role: 'assistant', text: 'I could not connect right now. You can still contact the AffordaWeb team directly.', href: '/contact', linkLabel: 'Contact the team' }])
    } finally {
      setLoading(false)
    }
  }

  function submit(event: FormEvent) {
    event.preventDefault()
    void ask(question)
  }

  return (
    <div className="virtual-employee-widget">
      {open && (
        <section id="virtual-employee-chat" role="dialog" aria-modal="false" aria-labelledby="virtual-employee-title" className="virtual-employee-panel">
          <header className="flex items-center justify-between gap-4 bg-[#151526] px-4 py-3 text-white">
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-[#151526]" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 10h.01M12 10h.01M16 10h.01"/><path d="M21 12a8 8 0 0 1-8 8H6l-4 2 1.3-4.3A9 9 0 1 1 21 12Z"/></svg>
              </span>
              <div className="min-w-0"><h2 id="virtual-employee-title" className="truncate text-sm font-bold">AffordaWeb Virtual Employee</h2><p className="text-xs text-white/60">Approved website information</p></div>
            </div>
            <button type="button" onClick={() => { setOpen(false); launcherRef.current?.focus() }} className="rounded-lg p-2 text-white/70 hover:bg-white/10 hover:text-white" aria-label="Close chat">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 6 12 12M18 6 6 18"/></svg>
            </button>
          </header>

          <div ref={transcriptRef} className="virtual-employee-transcript" aria-live="polite" aria-relevant="additions">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${message.role === 'user' ? 'rounded-br-md bg-primary-600 text-white' : 'rounded-bl-md border border-gray-100 bg-white text-gray-700 shadow-sm'}`}>
                  <p>{message.text}</p>
                  {message.href && message.linkLabel && <Link href={message.href} onClick={() => setOpen(false)} className="mt-2 inline-block font-bold text-primary-700 underline decoration-primary-200 underline-offset-2">{message.linkLabel}</Link>}
                </div>
              </div>
            ))}
            {messages.length === 1 && <div className="flex flex-wrap gap-2">{quickQuestions.map((item) => <button key={item} type="button" onClick={() => void ask(item)} className="rounded-full border border-primary-200 bg-white px-3 py-1.5 text-xs font-semibold text-primary-700 hover:bg-primary-50">{item}</button>)}</div>}
            {loading && <div className="flex justify-start"><div className="rounded-2xl rounded-bl-md border bg-white px-3.5 py-2.5 text-sm text-gray-500">Looking that up...</div></div>}
          </div>

          <form onSubmit={submit} className="border-t border-gray-100 bg-white p-3">
            <label htmlFor="virtual-employee-question" className="sr-only">Ask the Virtual Employee a question</label>
            <div className="flex gap-2">
              <input ref={inputRef} id="virtual-employee-question" value={question} onChange={(event) => setQuestion(event.target.value)} maxLength={500} autoComplete="off" placeholder="Ask about plans or services" className="min-w-0 flex-1 rounded-xl border border-gray-300 px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100" />
              <button type="submit" disabled={loading || !question.trim()} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-600 text-white transition hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-40" aria-label="Send question">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
              </button>
            </div>
            <div className="mt-2 flex items-center justify-between text-xs"><span className="text-gray-400">Answers from approved content</span><Link href="/virtual-employee#ve-quote" onClick={() => setOpen(false)} className="font-bold text-primary-700">Request a quote</Link></div>
          </form>
        </section>
      )}

      <button ref={launcherRef} type="button" onClick={toggle} aria-expanded={open} aria-controls="virtual-employee-chat" aria-label={open ? 'Close Virtual Employee chat' : 'Open Virtual Employee chat'} className="virtual-employee-bubble">
        {open ? <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 6 12 12M18 6 6 18"/></svg> : <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 10h.01M12 10h.01M16 10h.01"/><path d="M21 12a8 8 0 0 1-8 8H6l-4 2 1.3-4.3A9 9 0 1 1 21 12Z"/></svg>}
        <span className="sr-only">{open ? 'Close chat' : 'Chat with the Virtual Employee'}</span>
      </button>
    </div>
  )
}
