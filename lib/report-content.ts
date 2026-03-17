export interface MockupPalette {
  primary: string
  bg: string
  cardBg: string
  text: string
  muted: string
  heroGradient: string
}

export interface MockupService {
  icon: string
  title: string
  desc: string
}

export interface MockupConfig {
  palette: MockupPalette
  hero: {
    badge: string
    headline: string
    subtext: string
    cta_primary: string
    cta_secondary: string
  }
  trust: string[]
  services: MockupService[]
  testimonial: {
    quote: string
    name: string
    role: string
  }
  cta: {
    headline: string
    subtext: string
    button: string
  }
}

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
  admin_token?: string
  mockup?: MockupConfig
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

/* ── Mockup Config ───────────────────────────────────────── */

type MockupBase = Omit<MockupConfig, 'hero'> & {
  hero: Omit<MockupConfig['hero'], 'cta_primary'>
}

const MOCKUP_DATA: Record<string, MockupBase> = {
  'E-Commerce / Online Store': {
    palette: {
      primary: '#C2410C',
      bg: '#FFF7F5',
      cardBg: '#FEF0EB',
      text: '#1A0A00',
      muted: '#78716C',
      heroGradient: 'linear-gradient(135deg, #1A0A00 0%, #C2410C 55%, #F97316 100%)',
    },
    hero: {
      badge: '⭐ Rated #1 for Value & Quality',
      headline: 'Shop Top-Quality Products at Prices That Actually Make Sense',
      subtext: 'Join 2,400+ happy customers who trust us for quality products and fast, reliable delivery every time.',
      cta_secondary: 'View Best Sellers',
    },
    trust: ['⭐ 4.9/5 from 1,847 reviews', '🚚 Free shipping over $50', '🔒 Secure checkout', '↩️ 30-day returns'],
    services: [
      { icon: '🛍️', title: 'Smart Product Pages', desc: 'Convert browsers into buyers with urgency signals, trust badges, and crystal-clear product photography.' },
      { icon: '⚡', title: '1-Click Checkout', desc: 'A friction-free checkout flow that reduces cart abandonment and gets more orders completed fast.' },
      { icon: '⭐', title: 'Review Integration', desc: 'Automated review collection and on-site display to build social proof that drives sales continuously.' },
    ],
    testimonial: {
      quote: 'After the redesign, my conversion rate went from 1.2% to 3.8%. That\'s triple the revenue on exactly the same traffic.',
      name: 'Sarah K.',
      role: 'Online Store Owner',
    },
    cta: {
      headline: 'Your Next Favourite Purchase Is Waiting',
      subtext: 'Join thousands of happy customers who shop with confidence and receive fast, reliable delivery.',
      button: 'Shop the Collection',
    },
  },
  'Service Business': {
    palette: {
      primary: '#1B4F72',
      bg: '#F0F7FF',
      cardBg: '#DFF0FA',
      text: '#0D1B2A',
      muted: '#6B7280',
      heroGradient: 'linear-gradient(135deg, #0D1B2A 0%, #1B4F72 55%, #148A8A 100%)',
    },
    hero: {
      badge: '🏆 Trusted by 500+ Local Businesses',
      headline: 'Professional Service You Can Rely On — Done Right the First Time',
      subtext: 'We handle everything from start to finish so you can focus on what matters most — running your business.',
      cta_secondary: 'See Our Work',
    },
    trust: ['⭐ 4.8/5 Rating', '✅ Licensed & Insured', '🏆 10+ Years Experience', '📞 Same-Day Response'],
    services: [
      { icon: '📞', title: 'Instant Quote System', desc: 'Let visitors request quotes in under 60 seconds — capture leads before they go to a competitor.' },
      { icon: '✅', title: 'Proof-Led Design', desc: 'Showcase results, certifications, and client reviews at every scroll point to build instant credibility.' },
      { icon: '📅', title: 'Online Booking', desc: 'Calendar integration that lets clients book appointments 24/7 without picking up the phone.' },
    ],
    testimonial: {
      quote: 'Within two months of launching the new site, phone inquiries doubled. The quote form alone generates 15-20 leads a week.',
      name: 'Marcus T.',
      role: 'HVAC Company Owner',
    },
    cta: {
      headline: 'Ready to Get Started?',
      subtext: 'Contact us today for a free quote with no obligation and a response within 24 hours.',
      button: 'Get My Free Quote',
    },
  },
  'Freelancer / Portfolio': {
    palette: {
      primary: '#1E293B',
      bg: '#FAFAF9',
      cardBg: '#F1F5F9',
      text: '#0F172A',
      muted: '#64748B',
      heroGradient: 'linear-gradient(135deg, #0F172A 0%, #1E293B 45%, #334155 100%)',
    },
    hero: {
      badge: '⭐ 5.0 Rating · 50+ Happy Clients',
      headline: 'High-Impact Design & Development That Actually Grows Your Business',
      subtext: 'Specialising in high-converting work for startups, agencies, and growth-focused businesses worldwide.',
      cta_secondary: 'View Portfolio',
    },
    trust: ['⭐ 5.0 on Clutch', '🎨 50+ projects delivered', '🕐 Fast turnaround', '💬 Direct communication'],
    services: [
      { icon: '🎨', title: 'Portfolio Showcase', desc: 'A gallery that shows your work in context — with measurable results and outcomes, not just pretty pictures.' },
      { icon: '📈', title: 'Case Studies', desc: 'Deep-dive project pages that prove your impact with numbers, process, and real client outcomes.' },
      { icon: '✉️', title: 'Hire Me Page', desc: 'A dedicated page that sells your services, handles common objections, and drives client contact.' },
    ],
    testimonial: {
      quote: 'My old portfolio was costing me clients. After the redesign, I started getting inquiries from companies I used to only dream of working with.',
      name: 'Priya S.',
      role: 'UX Designer & Consultant',
    },
    cta: {
      headline: "Let's Build Something Great Together",
      subtext: "I'm currently taking on new clients. Get in touch and let's talk about your project.",
      button: 'Start a Project',
    },
  },
  'Startup / SaaS': {
    palette: {
      primary: '#4338CA',
      bg: '#F5F3FF',
      cardBg: '#EDE9FE',
      text: '#1E1B4B',
      muted: '#6B7280',
      heroGradient: 'linear-gradient(135deg, #1E1B4B 0%, #4338CA 45%, #0891B2 100%)',
    },
    hero: {
      badge: '🚀 Trusted by 2,000+ Teams Worldwide',
      headline: 'The Smarter Way to Scale Your Business — Without the Complexity',
      subtext: 'Loved by fast-growing startups and Fortune 500 teams. Full access, no credit card needed.',
      cta_secondary: 'Watch a Demo',
    },
    trust: ['🚀 2,000+ teams', '⭐ 4.7 on G2', '🔒 SOC 2 Compliant', '💳 No card needed'],
    services: [
      { icon: '🚀', title: 'Product-Led Hero', desc: 'A hero section with live preview that hooks visitors and communicates your value in under 5 seconds.' },
      { icon: '💰', title: 'Conversion Pricing', desc: 'A pricing page that guides users to your recommended plan with zero confusion or hesitation.' },
      { icon: '🔗', title: 'Integration Showcase', desc: 'Display your integrations to eliminate technical objections before they arise in the sales process.' },
    ],
    testimonial: {
      quote: 'We went from 2% trial signups to 8% in 6 weeks. The new hero and pricing page changed how prospects perceived our product entirely.',
      name: 'James L.',
      role: 'SaaS Founder',
    },
    cta: {
      headline: 'Start Your Free Trial Today',
      subtext: 'No credit card required. Get full access for 14 days and see the results for yourself.',
      button: 'Try It Free',
    },
  },
  'Restaurant / Food': {
    palette: {
      primary: '#9A3412',
      bg: '#FFFBF0',
      cardBg: '#FEF3C7',
      text: '#431407',
      muted: '#78716C',
      heroGradient: 'linear-gradient(135deg, #431407 0%, #9A3412 50%, #EA580C 100%)',
    },
    hero: {
      badge: '🍽️ Best of City 2024 · Google 4.8 ⭐',
      headline: 'Freshly Made, Full of Flavour — Order Online or Book a Table',
      subtext: 'Locally sourced ingredients, house recipes, and a dining experience worth coming back for again and again.',
      cta_secondary: 'View Full Menu',
    },
    trust: ['⭐ 4.8 on Google', '🍽️ Open 7 days a week', '🏆 Best of City 2024', '📱 Online ordering'],
    services: [
      { icon: '🍽️', title: 'Digital Menu', desc: 'A beautiful mobile-first menu with food photography, categories, and dietary filters for every guest.' },
      { icon: '📱', title: 'Online Ordering', desc: 'Commission-free ordering built into your site — no third-party fees cutting into your margins.' },
      { icon: '⭐', title: 'Reviews Display', desc: 'Showcase your Google and Yelp reviews to build instant trust with every new visitor who lands on your site.' },
    ],
    testimonial: {
      quote: 'Online orders went up 40% in the first month. The new menu design and ordering flow made all the difference.',
      name: 'Maria C.',
      role: 'Restaurant Owner',
    },
    cta: {
      headline: 'Come In or Order Online',
      subtext: "Fresh food, great atmosphere, and flavours you'll keep coming back for. We're open 7 days a week.",
      button: 'Order Now',
    },
  },
  'Healthcare / Medical': {
    palette: {
      primary: '#1B6CA8',
      bg: '#F0F9FF',
      cardBg: '#DBEAFE',
      text: '#0C2A42',
      muted: '#6B7280',
      heroGradient: 'linear-gradient(135deg, #0C2A42 0%, #1B6CA8 50%, #0D9488 100%)',
    },
    hero: {
      badge: '🏥 Board Certified · 4.9/5 Patient Rating',
      headline: 'Expert, Compassionate Care — Right When You Need It Most',
      subtext: 'Board-certified professionals dedicated to your wellbeing. Same-week appointments available for new patients.',
      cta_secondary: 'Meet Our Team',
    },
    trust: ['🏥 Board Certified', '⭐ 4.9/5 Patient Rating', '📅 Same-week appointments', '🔒 HIPAA Compliant'],
    services: [
      { icon: '📅', title: 'Online Scheduling', desc: '24/7 appointment booking that reduces phone calls and no-shows with automated reminders.' },
      { icon: '🏥', title: 'Services & Conditions', desc: 'Dedicated pages for each condition or treatment — built to rank on Google and educate patients.' },
      { icon: '👨‍⚕️', title: 'Provider Profiles', desc: 'Professional bios with credentials, specialties, and patient reviews that build trust before the first visit.' },
    ],
    testimonial: {
      quote: 'New patient bookings increased 60% after launch. Patients tell us they chose us because our website looked so professional and trustworthy.',
      name: 'Dr. Arun P.',
      role: 'Medical Director',
    },
    cta: {
      headline: 'Your Health Is Our Priority',
      subtext: 'Book an appointment today and experience care that truly makes a difference in your life.',
      button: 'Book Appointment',
    },
  },
  'Real Estate': {
    palette: {
      primary: '#1C1917',
      bg: '#F8F6F0',
      cardBg: '#F0EDE5',
      text: '#1C1917',
      muted: '#78716C',
      heroGradient: 'linear-gradient(135deg, #1C1917 0%, #292524 45%, #B45309 100%)',
    },
    hero: {
      badge: '🏆 Top 1% Agent · 500+ Homes Sold',
      headline: "Find Your Dream Home with the Area's Most Trusted Real Estate Agent",
      subtext: 'From first-time buyers to seasoned investors — personalised guidance at every step of your property journey.',
      cta_secondary: 'Browse Listings',
    },
    trust: ['🏆 Top 1% Agent', '⭐ 4.9/5 Client Rating', '🏠 500+ homes sold', '📊 Local market expert'],
    services: [
      { icon: '🏠', title: 'Property Listings', desc: 'Advanced search with map view, saved searches, and new listing alerts that keep buyers engaged.' },
      { icon: '💼', title: 'Agent Profile', desc: 'A personal brand page that positions you as the local expert buyers and sellers trust first.' },
      { icon: '📊', title: 'Market Reports', desc: 'Downloadable market reports that capture leads and establish you as the undisputed local authority.' },
    ],
    testimonial: {
      quote: 'I closed 3 additional deals last quarter that came directly from my website. The listing pages and profile are getting constant organic traffic.',
      name: 'Jennifer W.',
      role: 'Licensed Realtor',
    },
    cta: {
      headline: 'Find Your Perfect Property Today',
      subtext: 'Work with a local expert who knows the market inside and out and has the track record to prove it.',
      button: 'Browse Listings',
    },
  },
}

const MOCKUP_DEFAULT: MockupBase = {
  palette: {
    primary: '#5636D1',
    bg: '#F8F7FF',
    cardBg: '#EEF0FF',
    text: '#0F0F1A',
    muted: '#6B7280',
    heroGradient: 'linear-gradient(135deg, #0F0F1A 0%, #5636D1 50%, #E2498A 100%)',
  },
  hero: {
    badge: '⭐ Rated 4.8/5 by Happy Clients',
    headline: 'Premium Service Delivered with Care, Expertise, and Real Results',
    subtext: 'Helping businesses like yours achieve more through smart strategy, quality delivery, and measurable outcomes.',
    cta_secondary: 'Learn More',
  },
  trust: ['⭐ 4.8/5 Rating', '✅ Trusted & Verified', '🏆 Award Winning', '💬 Fast Response'],
  services: [
    { icon: '🎯', title: 'Clear Value Proposition', desc: 'A homepage that communicates exactly what you do and why you\'re the best choice — in seconds.' },
    { icon: '⭐', title: 'Trust Builder', desc: 'Reviews, certifications, and client logos that establish credibility the moment visitors land on your page.' },
    { icon: '📞', title: 'Lead Capture', desc: 'Smart CTAs and forms that convert visitors into inquiries around the clock, even while you sleep.' },
  ],
  testimonial: {
    quote: 'We saw a 45% increase in contact form submissions in the first 30 days. The website finally represents the quality of what we actually deliver.',
    name: 'Alex R.',
    role: 'Business Owner',
  },
  cta: {
    headline: "Let's Work Together",
    subtext: 'Contact us today to discuss how we can help your business grow and achieve its goals.',
    button: 'Get in Touch',
  },
}

const GOAL_CTA: Record<string, string> = {
  'Get more leads or inquiries':    'Get a Free Quote',
  'Improve visual design':          'See the Redesign',
  'Increase online sales':          'Shop Now',
  'Rank higher on Google':          'Boost My Rankings',
  'Better mobile experience':       'View Mobile Design',
  'Build trust and credibility':    'Learn More About Us',
}

export function generateMockupConfig(businessType: string, goal: string): MockupConfig {
  const base = MOCKUP_DATA[businessType] ?? MOCKUP_DEFAULT
  return {
    ...base,
    hero: {
      ...base.hero,
      cta_primary: GOAL_CTA[goal] ?? 'Get Started',
    },
  }
}
