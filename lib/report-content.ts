export interface ReportData {
  report_id: string
  website: string
  name: string
  email: string
  business_type: string
  goal: string
  preview: PreviewContent
  payment_status: 'unpaid' | 'paid'
  created_at: string
}

export interface PreviewContent {
  score: number
  grade: string
  overview_status: string
  suggested_structure: { icon: string; label: string; desc: string }[]
  issues: { label: string; impact: 'high' | 'medium' | 'low' }[]
  full_plan: FullPlan
}

export interface FullPlan {
  wireframe_sections: WireframeSection[]
  copy_suggestions: CopySuggestion[]
  conversion_strategy: string[]
  quick_wins: string[]
}

interface WireframeSection {
  name: string
  purpose: string
  elements: string[]
}

interface CopySuggestion {
  section: string
  current_problem: string
  suggested_approach: string
}

const ISSUES: Record<string, { label: string; impact: 'high' | 'medium' | 'low' }[]> = {
  'E-Commerce / Online Store': [
    { label: 'No visible trust signals — shoppers leave before converting', impact: 'high' },
    { label: 'Product pages lack urgency or scarcity cues', impact: 'high' },
    { label: 'Checkout flow has too many friction points', impact: 'high' },
    { label: 'Mobile product gallery experience is poor', impact: 'medium' },
    { label: 'No abandoned cart recovery strategy visible', impact: 'medium' },
  ],
  'Service Business': [
    { label: 'Hero headline does not communicate your core value proposition', impact: 'high' },
    { label: 'No visible reviews, ratings, or client social proof', impact: 'high' },
    { label: 'Primary CTA is buried too deep in the page', impact: 'high' },
    { label: 'Service descriptions are vague — not benefit-focused', impact: 'medium' },
    { label: 'No clear pricing or starting rate visible above the fold', impact: 'medium' },
  ],
  'Freelancer / Portfolio': [
    { label: 'No compelling above-the-fold value statement', impact: 'high' },
    { label: 'Portfolio work lacks context — results not highlighted', impact: 'high' },
    { label: 'Missing clear contact or hire call-to-action', impact: 'high' },
    { label: 'No testimonials or case study results shown', impact: 'medium' },
    { label: 'About section does not build personal trust', impact: 'low' },
  ],
  'Startup / SaaS': [
    { label: 'Value proposition is unclear within 5 seconds', impact: 'high' },
    { label: 'No social proof or user count visible near the top', impact: 'high' },
    { label: 'Feature list does not map to customer pain points', impact: 'high' },
    { label: 'Missing demo or free trial CTA in hero section', impact: 'medium' },
    { label: 'Pricing page structure creates confusion not confidence', impact: 'medium' },
  ],
  'Restaurant / Food': [
    { label: 'Menu is not easily accessible from the homepage', impact: 'high' },
    { label: 'No online ordering or reservation button above the fold', impact: 'high' },
    { label: 'Low-quality or missing food photography', impact: 'high' },
    { label: 'Hours and location are not immediately visible', impact: 'medium' },
    { label: 'No Google reviews or ratings displayed', impact: 'medium' },
  ],
  'Healthcare / Medical': [
    { label: 'No clear appointment booking CTA in the hero section', impact: 'high' },
    { label: 'Missing credentials and trust-building elements', impact: 'high' },
    { label: 'Patient testimonials or success stories not visible', impact: 'high' },
    { label: 'Services page lacks specific condition or treatment pages', impact: 'medium' },
    { label: 'Contact information is not prominently displayed', impact: 'medium' },
  ],
  default: [
    { label: 'Headline does not immediately communicate what you offer', impact: 'high' },
    { label: 'No visible trust signals to reassure new visitors', impact: 'high' },
    { label: 'Call-to-action is weak or unclear', impact: 'high' },
    { label: 'Mobile experience needs significant improvement', impact: 'medium' },
    { label: 'Page load speed is likely hurting your SEO ranking', impact: 'medium' },
  ],
}

const STRUCTURE: Record<string, { icon: string; label: string; desc: string }[]> = {
  'E-Commerce / Online Store': [
    { icon: '⚡', label: 'Power Hero Section', desc: 'Bold offer, trust badges, and primary product CTA above the fold' },
    { icon: '🏆', label: 'Social Proof Strip', desc: 'Customer count, star rating, and media mentions' },
    { icon: '🛍️', label: 'Featured Products', desc: 'Best-sellers with urgency signals and quick-add buttons' },
    { icon: '💬', label: 'Customer Reviews', desc: 'Photo reviews with verified purchase badges' },
    { icon: '🔒', label: 'Trust & Guarantee', desc: 'Return policy, security badges, and satisfaction guarantee' },
  ],
  'Service Business': [
    { icon: '🎯', label: 'Value-First Hero', desc: 'Clear headline, result-focused subtext, and instant quote CTA' },
    { icon: '✅', label: 'Services Grid', desc: 'Card-based services with clear benefits — not just features' },
    { icon: '⭐', label: 'Client Testimonials', desc: 'Real names, results, and star ratings from past clients' },
    { icon: '📋', label: 'Process Section', desc: '3-step process to reduce buyer hesitation' },
    { icon: '📞', label: 'Conversion CTA', desc: 'Sticky contact form with fast-response promise' },
  ],
  'Freelancer / Portfolio': [
    { icon: '👤', label: 'Personal Brand Hero', desc: 'Photo, specialty statement, and hire/contact CTA' },
    { icon: '🎨', label: 'Portfolio Grid', desc: 'Work samples with project results and client names' },
    { icon: '📈', label: 'Results Section', desc: 'Metrics and outcomes from your best projects' },
    { icon: '💬', label: 'Client Testimonials', desc: 'Short, powerful quotes from satisfied clients' },
    { icon: '✉️', label: 'Easy Contact', desc: 'Simple form with expected response time' },
  ],
  'Startup / SaaS': [
    { icon: '🚀', label: 'Product Hero', desc: 'Clear value prop, product screenshot, and free trial CTA' },
    { icon: '🔥', label: 'Social Proof', desc: 'Logos, user count, and G2/Capterra ratings' },
    { icon: '⚙️', label: 'Features vs Benefits', desc: 'Feature cards mapped to customer pain points' },
    { icon: '💰', label: 'Pricing Section', desc: 'Clear plans with recommended tier highlighted' },
    { icon: '❓', label: 'FAQ', desc: 'Handles objections before they kill the conversion' },
  ],
  default: [
    { icon: '🎯', label: 'Hero Section', desc: 'Clear headline, supporting text, and primary CTA' },
    { icon: '🏅', label: 'Trust Signals', desc: 'Reviews, certifications, and client logos' },
    { icon: '📦', label: 'Services / Products', desc: 'What you offer — explained simply and clearly' },
    { icon: '💬', label: 'Testimonials', desc: 'Real customer feedback to build confidence' },
    { icon: '📞', label: 'Call to Action', desc: 'Strong closing section to drive conversions' },
  ],
}

const FULL_PLAN_SECTIONS: Record<string, WireframeSection[]> = {
  default: [
    {
      name: 'Hero Section',
      purpose: 'Capture attention and communicate value within 3 seconds',
      elements: ['Benefit-driven H1 headline (not your business name)', 'Supporting subheadline with specific result', 'Primary CTA button (high contrast, action verb)', 'Secondary CTA for low-intent visitors', 'Hero image or product screenshot', 'Trust micro-copy beneath CTA (no credit card, etc.)'],
    },
    {
      name: 'Social Proof Strip',
      purpose: 'Immediately establish credibility before visitors scroll',
      elements: ['Star rating with review count', 'Client/customer logos (if applicable)', 'Key metric (50+ clients, $2M+ managed, etc.)', 'Media mentions or certifications'],
    },
    {
      name: 'Services / Offer Section',
      purpose: 'Explain what you do in benefit-first language',
      elements: ['Card-based layout with icons', 'Benefit headline per service (not just name)', 'Short 2-sentence description', 'Individual service CTA or learn more link'],
    },
    {
      name: 'How It Works',
      purpose: 'Remove friction by showing how easy it is to get started',
      elements: ['3-step numbered process', 'Simple icon per step', 'Brief description of each step', 'CTA after the process'],
    },
    {
      name: 'Testimonials',
      purpose: 'Build trust through real customer voices',
      elements: ['Full name + photo (or initials)', 'Company or role for credibility', 'Specific result or outcome quote', 'Star rating visual', 'Grid or carousel layout'],
    },
    {
      name: 'Final CTA Section',
      purpose: 'Convert visitors who are ready to take action',
      elements: ['Strong closing headline restating the offer', 'Brief supporting text handling final objections', 'Primary CTA button', 'Secondary contact option (email or phone)'],
    },
  ],
}

const COPY_SUGGESTIONS: CopySuggestion[] = [
  {
    section: 'Hero Headline',
    current_problem: 'Generic headlines like "Welcome to [Business Name]" or "[Service] in [City]" do not communicate value',
    suggested_approach: 'Lead with the result your customer gets. Format: "[Outcome] without [Common Pain Point]" or "Get [Result] in [Timeframe]"',
  },
  {
    section: 'CTA Button Text',
    current_problem: '"Submit" and "Click Here" are the two weakest CTA phrases — they say nothing about what happens next',
    suggested_approach: 'Use action + outcome: "Get My Free Quote", "Start My Project", "See My Options" — tell them exactly what clicking does',
  },
  {
    section: 'Service Descriptions',
    current_problem: 'Listing features ("We offer responsive design, SSL, and hosting") is not persuasive — no one buys features',
    suggested_approach: 'Lead with the benefit: "Your website will load in under 2 seconds on any device, so visitors stay longer and Google ranks you higher"',
  },
  {
    section: 'About / Trust Section',
    current_problem: 'About pages that focus on founding year and mission statement convert at nearly zero',
    suggested_approach: 'Flip it: lead with who you help, what result they get, and then add a human element. Proof before personality.',
  },
]

const CONVERSION_STRATEGIES = [
  'Add a sticky header CTA that appears after 300px of scrolling — this captures high-intent visitors who are already engaged',
  'Place testimonials directly adjacent to your primary CTA — social proof at the moment of decision increases conversions significantly',
  'Add a FAQ section above the fold CTA — the most common objections handled = fewer people leaving to "think about it"',
  'Implement exit-intent logic or a time-delayed soft CTA (not a popup) — captures the 70% of visitors who leave without acting',
  'Use a contrasting CTA button color that is not used anywhere else on the page — it draws the eye naturally',
  'Add specific numbers to your trust signals — "50 clients" beats "many clients", "4.9 stars from 38 reviews" beats "great reviews"',
]

const QUICK_WINS = [
  'Change your hero headline to lead with a customer outcome (takes 10 minutes, can double inquiry rate)',
  'Add a Google Reviews widget or screenshot in your hero or above your CTA',
  'Make your phone number or email clickable and visible in the header on mobile',
  'Reduce form fields to the minimum needed — every extra field drops conversions by ~10%',
  'Add real customer photos next to testimonials — even initials in a circle beat a blank space',
  'Set page title tags to include your main keyword and city for local SEO',
]

function getScore(goal: string): number {
  const base = 42 + Math.floor(Math.random() * 18)
  return base
}

function getGrade(score: number): string {
  if (score >= 80) return 'B+'
  if (score >= 65) return 'C+'
  if (score >= 50) return 'D+'
  return 'D'
}

export function generatePreviewContent(
  website: string,
  businessType: string,
  goal: string,
): PreviewContent {
  const score = getScore(goal)
  const issues = (ISSUES[businessType] ?? ISSUES.default).slice(0, 3)
  const structure = STRUCTURE[businessType] ?? STRUCTURE.default
  const wireframe = FULL_PLAN_SECTIONS.default
  const copy_suggestions = COPY_SUGGESTIONS
  const conversion_strategy = CONVERSION_STRATEGIES
  const quick_wins = QUICK_WINS

  return {
    score,
    grade: getGrade(score),
    overview_status: score >= 65 ? 'Needs Work' : 'Critical Issues Found',
    suggested_structure: structure,
    issues,
    full_plan: {
      wireframe_sections: wireframe,
      copy_suggestions,
      conversion_strategy,
      quick_wins,
    },
  }
}
