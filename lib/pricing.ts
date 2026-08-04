export type PlanId = 'starter' | 'business' | 'virtual-employee'

export type PlanFeature = {
  label: string
  starter: string | boolean
  business: string | boolean
  virtualEmployee: string | boolean
}

export type PricingPlan = {
  id: PlanId
  name: string
  monthlyPrice: number
  setupFee: number
  description: string
  featured?: boolean
  inclusions: string[]
}

// Set to false to show the normal one-time setup fees again.
export const SETUP_FEE_PROMOTION_ACTIVE = true

export const pricingPlans: readonly PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    monthlyPrice: 39,
    setupFee: 99,
    description: 'A professional web presence for a business getting started online.',
    inclusions: [
      'Custom website design',
      'Up to 5 website pages',
      'Mobile-responsive layout',
      'Managed hosting and SSL certificate',
      'Basic SEO setup',
      'One routine content update per month',
    ],
  },
  {
    id: 'business',
    name: 'Business',
    monthlyPrice: 69,
    setupFee: 149,
    featured: true,
    description: 'More room to grow your website and keep its information current.',
    inclusions: [
      'Everything in Starter',
      'Up to 10 website pages',
      'Contact form integration',
      'Google Analytics integration',
      'SEO optimization',
      'Unlimited routine content updates',
    ],
  },
  {
    id: 'virtual-employee',
    name: 'Virtual Employee',
    monthlyPrice: 149,
    setupFee: 299,
    description: 'A website plan with a carefully governed virtual employee experience.',
    inclusions: [
      'Everything in Business',
      'Virtual Employee guided by your approved knowledge base',
      'Review queue for responses that need your approval',
      'Knowledge-gap reporting to identify missing answers',
      'Ongoing knowledge-base refinement',
      'Human oversight for information you want reviewed',
    ],
  },
] as const

export const comparisonFeatures: readonly PlanFeature[] = [
  { label: 'Custom website design', starter: true, business: true, virtualEmployee: true },
  { label: 'Website pages', starter: 'Up to 5', business: 'Up to 10', virtualEmployee: 'Up to 10' },
  { label: 'Mobile-responsive layout', starter: true, business: true, virtualEmployee: true },
  { label: 'Managed hosting and SSL certificate', starter: true, business: true, virtualEmployee: true },
  { label: 'Basic SEO setup', starter: true, business: true, virtualEmployee: true },
  { label: 'SEO optimization', starter: false, business: true, virtualEmployee: true },
  { label: 'Contact form integration', starter: false, business: true, virtualEmployee: true },
  { label: 'Google Analytics integration', starter: false, business: true, virtualEmployee: true },
  { label: 'Routine content updates', starter: '1 per month', business: 'Unlimited', virtualEmployee: 'Unlimited' },
  { label: 'Approved knowledge base', starter: false, business: false, virtualEmployee: true },
  { label: 'Response review queue', starter: false, business: false, virtualEmployee: true },
  { label: 'Knowledge-gap reporting', starter: false, business: false, virtualEmployee: true },
] as const

export const routineUpdateDefinition =
  'Routine updates are straightforward changes to existing website content, such as replacing provided text, images, business hours, contact details, or links. They do not include new page design, custom development, e-commerce work, integrations, copywriting, or strategy projects.'

export const scopeExclusions = [
  'New functionality, custom development, third-party software costs, and complex integrations are outside the monthly plan scope unless separately agreed.',
  'Virtual Employee responses are limited to the approved knowledge base and are not a substitute for professional, legal, medical, financial, or emergency advice.',
  'The Virtual Employee does not make binding commitments, complete transactions, or act without the review process you approve.',
] as const

export function getPlan(planId: PlanId) {
  return pricingPlans.find((plan) => plan.id === planId)!
}

export function formatMonthlyPrice(plan: PricingPlan) {
  return `$${plan.monthlyPrice}/mo`
}

export function setupFeeLabel(plan: PricingPlan) {
  return SETUP_FEE_PROMOTION_ACTIVE ? `Setup fee waived (normally $${plan.setupFee})` : `$${plan.setupFee} one-time setup fee`
}
