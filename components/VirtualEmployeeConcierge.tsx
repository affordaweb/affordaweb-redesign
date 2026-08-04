'use client'

import Link from 'next/link'
import { FormEvent, useEffect, useState } from 'react'
import { pricingPlans, type PlanId } from '@/lib/pricing'
import type { Guidance, LeadSource } from '@/lib/virtual-employee'

function event(name: string, params: Record<string, string> = {}) { (window as unknown as { gtag?: (type: string, name: string, params: Record<string, string>) => void }).gtag?.('event', name, params) }
export default function VirtualEmployeeConcierge({ demo = false, source = 'virtual-employee' }: { demo?: boolean; source?: LeadSource }) {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [unsupported, setUnsupported] = useState(false)
  const [plan, setPlan] = useState<PlanId | null>(null)
  const [guidance, setGuidance] = useState<Guidance>({ pages: 'up-to-5', updates: 'one', seo: false, virtualEmployee: false })
  const [lead, setLead] = useState({ name: '', email: '' })
  const [leadStatus, setLeadStatus] = useState('')
  useEffect(() => { if (demo) event('ve_demo_opened') }, [demo])

  async function ask(eventForm: FormEvent) {
    eventForm.preventDefault(); setAnswer(''); setUnsupported(false)
    const response = await fetch('/api/virtual-employee', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'question', question }) })
    const data = await response.json(); setAnswer(data.text || data.error || 'Please try again.'); setUnsupported(data.kind === 'unsupported')
  }
  async function guide(eventForm: FormEvent) {
    eventForm.preventDefault()
    const response = await fetch('/api/virtual-employee', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'guidance', guidance }) })
    const data = await response.json(); setPlan(data.plan ?? null); setAnswer(data.text || data.error || 'Please try again.'); setUnsupported(false)
    if (data.plan) event('plan_selection', { plan: data.plan })
  }
  async function submitLead(eventForm: FormEvent) {
    eventForm.preventDefault(); setLeadStatus('')
    const response = await fetch('/api/virtual-employee', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'lead', ...lead, source, plan, demo }) })
    const data = await response.json(); setLeadStatus(data.success ? (demo ? 'Demo mode: no contact information was stored or sent.' : 'Thanks. Your request has been sent to the team.') : data.error || 'Please try again.')
  }
  return <div className="rounded-3xl border border-primary-100 bg-white p-5 shadow-card sm:p-7">
    {demo && <p className="mb-4 rounded-xl bg-amber-50 p-3 text-sm text-amber-800">Demo mode is active. Lead details are never stored or forwarded.</p>}
    <div className="flex flex-wrap gap-2 mb-6">
      <a href="#ve-services" className="rounded-full bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700">Explore services</a>
      <a href="#ve-guidance" className="rounded-full bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700">Plan guidance</a>
      <Link href="/pricing" onClick={() => event('compare_plans')} className="rounded-full bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700">Compare plans</Link>
    </div>
    <section id="ve-services"><h2 className="text-xl font-bold text-gray-900">Explore AffordaWeb</h2><p className="mt-2 text-sm text-gray-600">Website design, redesign, managed hosting, routine updates, SEO support, and a governed Virtual Employee option.</p><div className="mt-3 flex flex-wrap gap-3 text-sm font-semibold text-primary-700"><Link href="/recommendation" onClick={() => event('recommendation_tool_link')}>Website Recommendation</Link><Link href="/seo-audit" onClick={() => event('seo_tool_link')}>SEO Audit</Link><Link href="/contact">Contact the team</Link></div></section>
    <form onSubmit={ask} className="mt-7"><label htmlFor="ve-question" className="text-sm font-semibold text-gray-900">Ask a question</label><div className="mt-2 flex gap-2"><input id="ve-question" value={question} onChange={(e) => setQuestion(e.target.value)} maxLength={500} required placeholder="Ask about published plans or services" className="min-w-0 flex-1 rounded-xl border border-gray-300 px-3 py-2 text-sm"/><button className="btn-primary px-4 py-2 text-sm">Ask</button></div></form>
    <form id="ve-guidance" onSubmit={guide} className="mt-7 rounded-2xl bg-gray-50 p-4"><h2 className="font-bold text-gray-900">Plan guidance</h2><div className="mt-3 grid gap-3 sm:grid-cols-2 text-sm text-gray-700"><label>Pages<select value={guidance.pages} onChange={(e) => setGuidance({ ...guidance, pages: e.target.value as Guidance['pages'] })} className="mt-1 w-full rounded border p-2"><option value="up-to-5">Up to 5</option><option value="up-to-10">Up to 10</option><option value="more-than-10">More than 10</option></select></label><label>Updates<select value={guidance.updates} onChange={(e) => setGuidance({ ...guidance, updates: e.target.value as Guidance['updates'] })} className="mt-1 w-full rounded border p-2"><option value="one">One routine update/month</option><option value="unlimited">Unlimited routine updates</option></select></label><label><input type="checkbox" checked={guidance.seo} onChange={(e) => setGuidance({ ...guidance, seo: e.target.checked })}/> Need SEO optimization</label><label><input type="checkbox" checked={guidance.virtualEmployee} onChange={(e) => setGuidance({ ...guidance, virtualEmployee: e.target.checked })}/> Need a Virtual Employee</label></div><button className="btn-secondary mt-4 px-4 py-2 text-sm">Get catalog guidance</button></form>
    {answer && <div className="mt-6 rounded-2xl border border-primary-100 bg-primary-50 p-4 text-sm text-gray-700"><p>{answer}</p>{plan && <p className="mt-3 font-semibold text-primary-800">Suggested published plan: {pricingPlans.find((item) => item.id === plan)?.name}</p>}{unsupported && <p className="mt-3 font-semibold">Request a quote below and a person can answer this.</p>}<div className="mt-4 flex flex-wrap gap-3"><Link href="/pricing" onClick={() => event('compare_plans')} className="font-semibold text-primary-700">Compare Plans</Link><button type="button" onClick={() => { setPlan(null); setAnswer(''); }} className="font-semibold text-primary-700">Choose Another Plan</button><button type="button" onClick={() => document.getElementById('ve-question')?.focus()} className="font-semibold text-primary-700">Ask Question</button></div></div>}
    <form onSubmit={submitLead} className="mt-7 border-t pt-5"><h2 className="font-bold text-gray-900">Request a quote</h2><div className="mt-3 grid gap-3 sm:grid-cols-2"><input value={lead.name} onChange={(e) => setLead({ ...lead, name: e.target.value })} required maxLength={100} placeholder="Name" className="rounded-xl border p-2 text-sm"/><input value={lead.email} onChange={(e) => setLead({ ...lead, email: e.target.value })} required type="email" maxLength={254} placeholder="Email" className="rounded-xl border p-2 text-sm"/></div><button className="btn-primary mt-3 px-4 py-2 text-sm">Request Quote</button>{leadStatus && <p className="mt-2 text-sm text-gray-600">{leadStatus}</p>}</form>
  </div>
}
