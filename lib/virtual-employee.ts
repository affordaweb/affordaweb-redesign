import { getPlan, pricingPlans, routineUpdateDefinition, SETUP_FEE_PROMOTION_ACTIVE, setupFeeLabel, type PlanId, type PricingPlan } from './pricing'

export type LeadSource = 'pricing' | 'virtual-employee' | 'seo-audit' | 'website-recommendation' | 'redesign' | 'contact'
export type LeadStatus = 'New' | 'Contacted' | 'Proposal Sent' | 'Won' | 'Lost'
export const leadStatuses: readonly LeadStatus[] = ['New', 'Contacted', 'Proposal Sent', 'Won', 'Lost']

export type Guidance = { pages: 'up-to-5' | 'up-to-10' | 'more-than-10'; updates: 'one' | 'unlimited'; seo: boolean; virtualEmployee: boolean }
export type ConciergeAnswer = { text: string; kind: 'answer' | 'unsupported'; topic: string; plans?: PlanId[]; href?: string; linkLabel?: string }

const toolLinks = { recommendation: '/recommendation', seoAudit: '/seo-audit', contact: '/contact', redesign: '/recommendation' }

export function answerQuestion(input: string): ConciergeAnswer {
  const question = input.trim().toLowerCase()
  if (!question || question.length > 500) return unsupported('general')
  if (/\b(contract|cancellation|cancel|refund|domain ownership|ownership|legal|guarantee|sla|uptime)\b/.test(question)) return unsupported('terms')
  if (/^(hi|hello|hey|good (morning|afternoon|evening))\b/.test(question)) return { text: 'Hello! I can help with AffordaWeb services, plans, pricing, timelines, hosting, SEO, redesigns, and service areas. What would you like to know?', kind: 'answer', topic: 'welcome' }
  if (/\b(virtual employee|chatbot|knowledge base|review queue|knowledge gap)\b/.test(question)) {
    const plan = getPlan('virtual-employee')
    return { text: `${plan.description} It answers from business information you approve, identifies knowledge gaps, and provides a review queue with human oversight. It does not make binding commitments or answer outside the approved knowledge base. The plan is $${plan.monthlyPrice}/mo and includes everything in Business.`, kind: 'answer', topic: 'virtual-employee', plans: ['virtual-employee'], href: '/virtual-employee', linkLabel: 'Explore the Virtual Employee' }
  }
  if (/\bstarter\b/.test(question) && /\b(plan|price|cost|include|included|feature|offer|come with)\b/.test(question)) return planAnswer(getPlan('starter'))
  if (/\bbusiness plan\b/.test(question) || (/\bbusiness\b/.test(question) && /\b(price|cost|include|included|feature|come with)\b/.test(question))) return planAnswer(getPlan('business'))
  if (/\b(price|pricing|cost|monthly|how much|setup fee)\b/.test(question)) {
    const prices = pricingPlans.map((plan) => `${plan.name}: $${plan.monthlyPrice}/mo`).join('; ')
    return { text: `${prices}. ${SETUP_FEE_PROMOTION_ACTIVE ? 'Setup fees are currently waived.' : 'Each plan has a one-time setup fee.'} See the plan comparison for inclusions.`, kind: 'answer', topic: 'pricing', plans: pricingPlans.map((plan) => plan.id), href: '/pricing', linkLabel: 'Compare plans' }
  }
  if (/\b(how many pages|page limit|number of pages|website pages)\b/.test(question)) return { text: 'Starter includes up to 5 website pages. Business and Virtual Employee include up to 10. Projects needing more than 10 pages require a custom quote.', kind: 'answer', topic: 'pages', plans: ['starter', 'business', 'virtual-employee'], href: '/contact', linkLabel: 'Request a custom quote' }
  if (/\b(how long|timeline|launch|turnaround|business days|when.*ready)\b/.test(question)) return { text: 'Most websites launch in 10 to 15 business days after AffordaWeb receives your content, preferences, and feedback. E-commerce and more complex projects may take longer.', kind: 'answer', topic: 'timeline', href: '/services', linkLabel: 'See how it works' }
  if (/\b(routine update|content update|content change|unlimited update|maintenance)\b/.test(question)) return { text: `${routineUpdateDefinition} Starter includes one routine update per month; Business and Virtual Employee include unlimited routine updates.`, kind: 'answer', topic: 'maintenance', plans: ['starter', 'business', 'virtual-employee'], href: '/pricing', linkLabel: 'Compare update allowances' }
  if (/\b(e-?commerce|online store|sell online|products|shopping cart|checkout)\b/.test(question)) return { text: 'AffordaWeb designs mobile-friendly online stores with secure payment processing. E-commerce scope and timing depend on the number of products and required features, so the team provides a custom quote.', kind: 'answer', topic: 'ecommerce', href: '/contact', linkLabel: 'Request an e-commerce quote' }
  if (/\b(redesign|existing (site|website)|migrate|migration|old website)\b/.test(question)) return { text: 'AffordaWeb can redesign an existing website with a modern mobile-friendly layout, improved performance, and a conversion-focused structure while preserving existing content and SEO where practical.', kind: 'answer', topic: 'redesign', href: '/services/redesign', linkLabel: 'Explore website redesign' }
  if (/\b(seo|search engine|google ranking|rank|analytics)\b/.test(question)) return { text: 'Every plan includes basic SEO setup. Business and Virtual Employee add SEO optimization and Google Analytics integration. Rankings cannot be guaranteed, but you can use the free SEO Audit for site-specific findings.', kind: 'answer', topic: 'seo', plans: ['starter', 'business', 'virtual-employee'], href: '/seo-audit', linkLabel: 'Run a free SEO audit' }
  if (/\b(hosting|ssl|certificate|professional email|email account|backup|security update)\b/.test(question)) return { text: 'Every plan includes managed hosting, an SSL certificate, monitoring, maintenance, and one 1 GB professional email account. You do not need to purchase separate hosting.', kind: 'answer', topic: 'hosting', plans: ['starter', 'business', 'virtual-employee'], href: '/services/hosting', linkLabel: 'View hosting details' }
  if (/\b(location|service area|serve|based|new jersey|fresno|houston|los angeles|philadelphia|manila|philippines|nationwide|united states|usa)\b/.test(question)) return { text: "AffordaWeb works remotely with small businesses across the United States and internationally. Published service areas include New Jersey, Fresno and California's Central Valley, Greater Houston, Los Angeles, Philadelphia, and the Philippines.", kind: 'answer', topic: 'service-area', href: '/contact', linkLabel: 'Ask about your location' }
  if (/\b(process|how does it work|how do (we|i) start|getting started|start a website)\b/.test(question)) return { text: 'The process has three stages: share your goals and preferences, review a custom mobile-first and SEO-ready website, then launch with managed hosting and ongoing support. The team handles design, development, hosting setup, and launch.', kind: 'answer', topic: 'process', href: '/recommendation', linkLabel: 'Get a website recommendation' }
  if (/\b(contact|email|talk to|speak to|human|person|quote|consultation|support hours|open hours)\b/.test(question)) return { text: 'You can request a free, no-obligation quote or email hello@affordawebsolutions.com. Support hours are Monday through Friday, 9:00 AM to 5:00 PM, and the team aims to respond within 24 hours.', kind: 'answer', topic: 'contact', href: '/contact', linkLabel: 'Contact the team' }
  if (/\b(payment|pay|credit card|visa|mastercard|american express|paypal)\b/.test(question)) return { text: 'AffordaWeb publishes Visa, Mastercard, American Express, and PayPal as accepted payment methods. Contact the team for billing questions specific to your account.', kind: 'answer', topic: 'payment', href: '/contact', linkLabel: 'Ask a billing question' }
  if (/\b(technical knowledge|coding|code|provide content|need content|what do you need from me)\b/.test(question)) return { text: 'You do not need technical or coding knowledge. To begin, share your goals, design preferences, business information, and available text and images. AffordaWeb handles design, development, hosting setup, and launch.', kind: 'answer', topic: 'requirements', href: '/contact', linkLabel: 'Start a project' }
  if (/\b(portfolio|examples|work|websites built)\b/.test(question)) return { text: 'You can review examples of AffordaWeb website work in the portfolio.', kind: 'answer', topic: 'portfolio', href: '/portfolio', linkLabel: 'View the portfolio' }
  if (/\b(new website|website design|services|affordaweb|what do you do|what do you offer)\b/.test(question)) return { text: 'AffordaWeb offers custom website design, redesign, managed hosting, maintenance, SEO support, e-commerce projects, and governed Virtual Employee experiences for small businesses.', kind: 'answer', topic: 'services', plans: ['starter', 'business', 'virtual-employee'], href: '/services', linkLabel: 'Explore services' }
  return unsupported('general')
}

function planAnswer(plan: PricingPlan): ConciergeAnswer {
  return { text: `${plan.name} is $${plan.monthlyPrice}/mo with ${setupFeeLabel(plan).toLowerCase()}. It includes ${plan.inclusions.join(', ')}.`, kind: 'answer', topic: 'pricing', plans: [plan.id], href: '/pricing', linkLabel: 'Compare all plans' }
}

function unsupported(topic: string): ConciergeAnswer {
  return { text: 'I do not have approved information to answer that accurately. A team member can help with this question.', kind: 'unsupported', topic, href: '/contact', linkLabel: 'Ask the team' }
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
