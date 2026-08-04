import { getPlan, pricingPlans, SETUP_FEE_PROMOTION_ACTIVE, setupFeeLabel, type PlanId } from './pricing'

export type LeadSource = 'pricing' | 'virtual-employee' | 'seo-audit' | 'website-recommendation' | 'redesign' | 'contact'
export type LeadStatus = 'New' | 'Contacted' | 'Proposal Sent' | 'Won' | 'Lost'
export const leadStatuses: readonly LeadStatus[] = ['New', 'Contacted', 'Proposal Sent', 'Won', 'Lost']

export type Guidance = { pages: 'up-to-5' | 'up-to-10' | 'more-than-10'; updates: 'one' | 'unlimited'; seo: boolean; virtualEmployee: boolean }
export type ConciergeAnswer = { text: string; kind: 'answer' | 'unsupported'; topic: string; plans?: PlanId[] }

const toolLinks = { recommendation: '/recommendation', seoAudit: '/seo-audit', contact: '/contact', redesign: '/recommendation' }

export function answerQuestion(input: string): ConciergeAnswer {
  const question = input.trim().toLowerCase()
  if (!question || question.length > 500) return unsupported('general')
  if (/\b(contract|cancellation|cancel|refund|domain ownership|ownership|legal|guarantee|sla|uptime)\b/.test(question)) return unsupported('terms')
  if (/\b(price|pricing|cost|monthly|how much|setup fee)\b/.test(question)) {
    const prices = pricingPlans.map((plan) => `${plan.name}: $${plan.monthlyPrice}/mo`).join('; ')
    return { text: `${prices}. ${SETUP_FEE_PROMOTION_ACTIVE ? 'Setup fees are currently waived.' : 'Each plan has a one-time setup fee.'} See the plan comparison for inclusions.`, kind: 'answer', topic: 'pricing', plans: pricingPlans.map((plan) => plan.id) }
  }
  if (/\b(virtual employee|chatbot|knowledge base|review queue|knowledge gap)\b/.test(question)) return { text: `${getPlan('virtual-employee').description} It answers only from approved business knowledge; questions outside that knowledge are routed to a human review process.`, kind: 'answer', topic: 'virtual-employee', plans: ['virtual-employee'] }
  if (/\b(seo|search engine|google ranking|rank)\b/.test(question)) return { text: 'Starter includes basic SEO setup. Business and Virtual Employee include SEO optimization. For a site-specific result, use the SEO Audit tool.', kind: 'answer', topic: 'seo', plans: ['starter', 'business', 'virtual-employee'] }
  if (/\b(hosting|ssl|maintenance|update|content change)\b/.test(question)) return { text: `All plans include managed hosting and SSL. Starter includes one routine content update per month; Business and Virtual Employee include unlimited routine content updates. ${setupFeeLabel(getPlan('starter'))}.`, kind: 'answer', topic: 'maintenance', plans: ['starter', 'business', 'virtual-employee'] }
  if (/\b(redesign|new website|website design|services|affordaweb|contact)\b/.test(question)) return { text: 'AffordaWeb offers custom website design, redesign, managed hosting, SEO support, and governed Virtual Employee experiences. I can help compare the published plans or connect you with the team for a quote.', kind: 'answer', topic: 'services', plans: ['starter', 'business', 'virtual-employee'] }
  return unsupported('general')
}

function unsupported(topic: string): ConciergeAnswer {
  return { text: 'I do not have approved information to answer that accurately. A team member can help with this question.', kind: 'unsupported', topic }
}

export function recommendPlan(guidance: Guidance): { plan: PlanId | null; text: string } {
  if (guidance.pages === 'more-than-10') return { plan: null, text: 'The published plans list up to 10 website pages. Please request a quote so the team can discuss your needs.' }
  const plan = guidance.virtualEmployee ? 'virtual-employee' : guidance.pages === 'up-to-10' || guidance.updates === 'unlimited' || guidance.seo ? 'business' : 'starter'
  const selected = getPlan(plan)
  return { plan, text: `Based on the options selected, ${selected.name} is the closest published plan: $${selected.monthlyPrice}/mo, ${setupFeeLabel(selected)}. This is guidance from the catalog, not a custom quote.` }
}

export function isLeadSource(value: unknown): value is LeadSource {
  return typeof value === 'string' && ['pricing', 'virtual-employee', 'seo-audit', 'website-recommendation', 'redesign', 'contact'].includes(value)
}

export { toolLinks }
