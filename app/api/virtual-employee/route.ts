import { NextRequest, NextResponse } from 'next/server'
import { answerQuestion, isLeadSource, recommendPlan, type Guidance } from '@/lib/virtual-employee'
import { recordKnowledgeGap, saveLead } from '@/lib/virtual-employee-leads'
import { kvIncr } from '@/lib/kv-store'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const contactEndpoint = 'https://contact-form-lake-theta.vercel.app/api/contact'
function clientKey(request: NextRequest) { return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown' }
async function limited(request: NextRequest) { return (await kvIncr(`ve:rate:${clientKey(request)}`, 60)) > 20 }

export async function POST(request: NextRequest) {
  if (await limited(request)) return NextResponse.json({ error: 'Please wait a moment before trying again.' }, { status: 429 })
  try {
    const body = await request.json() as Record<string, unknown>
    if (body.action === 'question' && typeof body.question === 'string') {
      const answer = answerQuestion(body.question)
      if (answer.kind === 'unsupported') await recordKnowledgeGap(answer.topic)
      return NextResponse.json(answer)
    }
    if (body.action === 'guidance' && body.guidance && typeof body.guidance === 'object') {
      const guidance = body.guidance as Guidance
      if (!['up-to-5', 'up-to-10', 'more-than-10'].includes(guidance.pages) || !['one', 'unlimited'].includes(guidance.updates) || typeof guidance.seo !== 'boolean' || typeof guidance.virtualEmployee !== 'boolean') return NextResponse.json({ error: 'Invalid guidance options.' }, { status: 400 })
      return NextResponse.json(recommendPlan(guidance))
    }
    if (body.action === 'lead') {
      const { name, email, source, plan, message, demo } = body
      if (typeof name !== 'string' || name.trim().length < 2 || name.length > 100 || typeof email !== 'string' || !emailPattern.test(email) || !isLeadSource(source) || (plan !== undefined && typeof plan !== 'string') || (message !== undefined && (typeof message !== 'string' || message.length > 500))) return NextResponse.json({ error: 'Please provide a valid name, email, and source.' }, { status: 400 })
      if (demo === true) return NextResponse.json({ success: true, demo: true })
      const lead = await saveLead({ name: name.trim(), email: email.trim().toLowerCase(), source, plan: typeof plan === 'string' ? plan.slice(0, 50) : undefined, message: typeof message === 'string' ? message.trim() : undefined })
      const notification = await fetch(contactEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Contact-Forwarding-Secret': process.env.CONTACT_FORM_FORWARDING_SECRET ?? '' },
        body: JSON.stringify({ name: lead.name, email: lead.email, message: lead.message || 'Virtual Employee lead without an additional message.', website: 'affordaweb', subject: `[Virtual Employee] ${lead.source} lead`, source: lead.source, plan: lead.plan || 'Not selected', _honeypot: '' }),
      }).catch(() => null)
      if (!notification?.ok) return NextResponse.json({ error: 'We saved your request but could not notify the team. Please try again.' }, { status: 503 })
      return NextResponse.json({ success: true })
    }
  } catch { return NextResponse.json({ error: 'Unable to process this request.' }, { status: 400 }) }
  return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
}
