import type { Metadata } from 'next'
import Link from 'next/link'
import InnerHeroBg from '@/components/InnerHeroBg'

export const metadata: Metadata = {
  title: 'Website Design Pricing | Starting at $69/mo',
  description:
    'Website design pricing starting at $69/mo. All plans include hosting, SSL, and maintenance. No setup fees, no contracts, cancel anytime.',
  alternates: { canonical: 'https://www.affordawebsolutions.com/pricing' },
  openGraph: {
    type: 'website',
    title: 'Website Design Pricing | Plans Starting at $69/mo',
    description: 'Website design plans from $69/mo — custom design, hosting, SSL, SEO, maintenance, and unlimited updates all included. No setup fees, no contracts.',
    url: 'https://www.affordawebsolutions.com/pricing',
    images: [{ url: 'https://www.affordawebsolutions.com/og-image.png', width: 1200, height: 630, alt: 'AffordaWeb Solutions Pricing Plans' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Design Pricing | Plans Starting at $69/mo',
    description: 'Website design plans from $69/mo — custom design, hosting, SSL, SEO, maintenance, and unlimited updates all included. No setup fees, no contracts.',
    images: ['https://www.affordawebsolutions.com/og-image.png'],
  },
}

function Check({ dim = false }: { dim?: boolean }) {
  return (
    <svg
      className={`w-5 h-5 shrink-0 ${dim ? 'text-gray-300' : 'text-primary-500'}`}
      fill="none" viewBox="0 0 24 24" stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
        d={dim ? 'M6 18L18 6M6 6l12 12' : 'M5 13l4 4L19 7'} />
    </svg>
  )
}

const plans = [
  {
    id: 'basic',
    name: 'Basic',
    price: 69,
    tagline: 'Small service providers, freelancers, and local businesses starting online.',
    popular: false,
    features: [
      { text: '1–5 pages', included: true },
      { text: 'Mobile-responsive design', included: true },
      { text: 'Web hosting', included: true },
      { text: 'SSL certificate', included: true },
      { text: '1 business email (1 GB)', included: true },
      { text: 'Basic maintenance & plugin updates', included: true },
      { text: '1 monthly content update', included: true },
      { text: 'SEO optimization', included: false },
      { text: 'Unlimited content updates', included: false },
      { text: 'Google Analytics integration', included: false },
      { text: 'Contact form integration', included: false },
      { text: 'Advanced SEO setup', included: false },
      { text: 'E-commerce (up to 30 products)', included: false },
      { text: 'Speed optimization & caching', included: false },
      { text: 'Security monitoring', included: false },
      { text: '24/7 priority support', included: false },
    ],
  },
  {
    id: 'standard',
    name: 'Standard',
    price: 99,
    tagline: 'Businesses looking to grow visibility without hiring a full web team.',
    popular: true,
    features: [
      { text: 'Up to 10 pages', included: true },
      { text: 'Mobile-responsive design', included: true },
      { text: 'Web hosting', included: true },
      { text: 'SSL certificate', included: true },
      { text: '1 business email (1 GB)', included: true },
      { text: 'Basic maintenance & plugin updates', included: true },
      { text: 'Unlimited content updates', included: true },
      { text: 'SEO optimization', included: true },
      { text: 'Google Analytics integration', included: true },
      { text: 'Contact form integration', included: true },
      { text: 'Advanced SEO setup', included: false },
      { text: 'E-commerce (up to 30 products)', included: false },
      { text: 'Speed optimization & caching', included: false },
      { text: 'Security monitoring', included: false },
      { text: '24/7 priority support', included: false },
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 149,
    tagline: 'Established brands, online stores, and agencies seeking top-tier support.',
    popular: false,
    features: [
      { text: 'Up to 10 pages', included: true },
      { text: 'Mobile-responsive design', included: true },
      { text: 'Web hosting', included: true },
      { text: 'SSL certificate', included: true },
      { text: '1 business email (1 GB)', included: true },
      { text: 'Basic maintenance & plugin updates', included: true },
      { text: 'Unlimited content updates', included: true },
      { text: 'SEO optimization', included: true },
      { text: 'Google Analytics integration', included: true },
      { text: 'Contact form integration', included: true },
      { text: 'Advanced SEO setup', included: true },
      { text: 'E-commerce (up to 30 products)', included: true },
      { text: 'Speed optimization & caching', included: true },
      { text: 'Security monitoring', included: true },
      { text: '24/7 priority support', included: true },
    ],
  },
]

const faqs = [
  {
    q: 'Are there any setup fees or hidden costs?',
    a: 'No setup fees and no hidden costs. You pay one flat monthly rate and everything listed in your plan is included. The price you see is the price you pay.',
  },
  {
    q: 'What happens if I need more than 10 pages on the Standard plan?',
    a: 'If your project grows beyond what Standard covers, you can upgrade to the Premium plan. Contact us and we will take care of the transition.',
    display: <>If your project grows beyond what Standard covers, you can upgrade to the <Link href="/pricing#premium" className="font-medium" style={{ color: '#5636D1' }}>Premium plan</Link>. <Link href="/contact" className="font-medium" style={{ color: '#5636D1' }}>Contact us</Link> and we will take care of the transition.</>,
  },
  {
    q: 'Can I cancel my plan at any time?',
    a: 'Yes. All our plans are month-to-month with no long-term contracts. You can cancel at any time.',
  },
  {
    q: 'Is the domain name included in the price?',
    a: 'Domain registration is not included in the monthly plan price, but we can help you register your domain and connect it to your new website.',
  },
  {
    q: 'How do unlimited updates work on Standard and Premium plans?',
    a: 'Send us your changes via the contact form or by email, and we will implement them within 24 hours. Text, photos, new pages — there is no limit to how many requests you can submit each month.',
    display: <>Send us your changes via <Link href="/contact" className="font-medium" style={{ color: '#10B981' }}>the contact form</Link> or by email, and we will implement them within 24 hours. Text, photos, new pages — there is no limit to how many requests you can submit each month.</>,
  },
  {
    q: 'Can I upgrade from Basic to Standard or Premium later?',
    a: 'Yes. You can upgrade at any time. We will build out the additional pages and features on your new plan without any additional setup fees.',
  },
  {
    q: 'Do you offer e-commerce websites?',
    a: 'Yes. The Premium plan includes e-commerce functionality for up to 30 products. Reach out to discuss your store requirements before choosing a plan.',
  },
  {
    q: 'Which plan includes SEO optimization?',
    a: 'Standard and Premium plans include full SEO optimization — keyword research, on-page SEO, schema markup, and Google Analytics integration. The Basic plan includes foundational SEO structure. View our SEO service page for details.',
    display: <><Link href="/services/seo" className="font-medium" style={{ color: '#5636D1' }}>Standard and Premium plans</Link> include full SEO optimization — keyword research, on-page SEO, schema markup, and Google Analytics integration. The Basic plan includes foundational SEO structure.</>,
  },
  {
    q: 'How do I get started?',
    a: 'Reach out via hello@affordawebsolutions.com or fill out the contact form. We will follow up to learn about your goals and recommend the right plan.',
    display: <>Reach out via hello@affordawebsolutions.com or fill out <Link href="/contact" className="font-medium" style={{ color: '#06B6D4' }}>the contact form</Link>. We will follow up to learn about your goals and recommend the right <Link href="/services" className="font-medium" style={{ color: '#06B6D4' }}>plan</Link>.</>,
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

const pricingSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'AffordaWeb Solutions Pricing Plans',
  itemListElement: plans.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Offer',
      name: `${p.name} Website Design Plan`,
      price: p.price,
      priceCurrency: 'USD',
      description: p.tagline,
      url: `https://www.affordawebsolutions.com/pricing#${p.id}`,
    },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.affordawebsolutions.com' },
    { '@type': 'ListItem', position: 2, name: 'Pricing', item: 'https://www.affordawebsolutions.com/pricing' },
  ],
}

const faqAccentColors = [
  { accent: '#5636D1', light: 'rgba(86,54,209,0.08)',  border: 'rgba(86,54,209,0.18)',  glow: 'rgba(86,54,209,0.10)'  },
  { accent: '#E2498A', light: 'rgba(226,73,138,0.08)', border: 'rgba(226,73,138,0.18)', glow: 'rgba(226,73,138,0.08)' },
  { accent: '#06B6D4', light: 'rgba(6,182,212,0.08)',  border: 'rgba(6,182,212,0.18)',  glow: 'rgba(6,182,212,0.08)'  },
  { accent: '#F59E0B', light: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.18)', glow: 'rgba(245,158,11,0.08)' },
  { accent: '#10B981', light: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.18)', glow: 'rgba(16,185,129,0.08)' },
  { accent: '#5636D1', light: 'rgba(86,54,209,0.08)',  border: 'rgba(86,54,209,0.18)',  glow: 'rgba(86,54,209,0.10)'  },
  { accent: '#E2498A', light: 'rgba(226,73,138,0.08)', border: 'rgba(226,73,138,0.18)', glow: 'rgba(226,73,138,0.08)' },
  { accent: '#06B6D4', light: 'rgba(6,182,212,0.08)',  border: 'rgba(6,182,212,0.18)',  glow: 'rgba(6,182,212,0.08)'  },
]

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section
        className="relative overflow-hidden pt-[200px] pb-[100px] text-center"
        style={{ background: '#0F0F1A' }}
      >
        <InnerHeroBg page="pricing" />
        <div className="container-tight relative z-10">
          <p className="section-label-white">Transparent Pricing</p>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
            style={{ letterSpacing: '-0.025em' }}
          >
            One Monthly Rate.<br className="hidden sm:block" /> Everything Included.
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
            No setup fees. No hidden costs. No long-term contracts. <Link href="/services" className="font-medium hover:opacity-90" style={{ color: 'rgba(255,255,255,0.85)' }}>Professional website design</Link> with hosting, SSL, and maintenance bundled into one affordable monthly plan.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 mb-10">
            <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.45)' }}>
              No contracts · No setup fees · Starting at $69/mo
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { tier: 'Basic', price: '$69/mo', border: 'rgba(148,163,184,0.35)' },
              { tier: 'Standard', price: '$99/mo', border: 'rgba(37,119,201,0.6)' },
              { tier: 'Premium', price: '$149/mo', border: 'rgba(37,119,201,0.3)' },
            ].map(({ tier, price, border }) => (
              <div
                key={tier}
                className="rounded-2xl px-7 py-4 text-center"
                style={{ background: 'rgba(255,255,255,0.07)', border: `1.5px solid ${border}` }}
              >
                <div className="text-2xl font-bold text-white">{price}</div>
                <div className="text-xs mt-1 font-medium" style={{ color: 'rgba(255,255,255,0.45)' }}>{tier} Plan</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="section-pad bg-white" aria-labelledby="plans-heading">
        <div className="container-tight">
          <h2 className="sr-only" id="plans-heading">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.id}
                id={plan.id}
                className={`flex flex-col rounded-2xl p-8 border ${
                  plan.popular
                    ? 'relative overflow-visible'
                    : 'border-gray-100 bg-white'
                }`}
                style={
                  plan.popular
                    ? {
                        background: 'linear-gradient(145deg, #2577C9 0%, #4298DC 100%)',
                        boxShadow: '0 24px 60px rgba(37,119,201,0.4)',
                        border: 'none',
                        marginTop: '-16px',
                        marginBottom: '-16px',
                      }
                    : { boxShadow: '0 2px 16px rgba(0,0,0,0.05)' }
                }
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="text-xs font-bold tracking-wide uppercase px-4 py-1.5 rounded-full shadow-md inline-block" style={{ background: '#fff', color: '#2577C9' }}>
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`mb-6 ${plan.popular ? 'mt-3' : ''}`}>
                  <p className={`text-xs font-bold tracking-widest uppercase mb-3 ${plan.popular ? 'text-white/60' : 'text-gray-400'}`}>
                    {plan.name}
                  </p>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                      ${plan.price}
                    </span>
                    <span className={`text-sm ${plan.popular ? 'text-white/50' : 'text-gray-400'}`}>/month</span>
                  </div>
                  <p className={`text-sm ${plan.popular ? 'text-white/65' : 'text-gray-500'}`}>{plan.tagline}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map(({ text, included }) => (
                    <li
                      key={text}
                      className={`flex items-center gap-3 text-sm ${
                        plan.popular
                          ? included ? 'text-white' : 'text-white/30'
                          : included ? 'text-gray-700' : 'text-gray-300'
                      }`}
                    >
                      {plan.popular ? (
                        <svg className={`w-5 h-5 shrink-0 ${included ? 'text-white' : 'text-white/25'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                            d={included ? 'M5 13l4 4L19 7' : 'M6 18L18 6M6 6l12 12'} />
                        </svg>
                      ) : (
                        <Check dim={!included} />
                      )}
                      {text}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={plan.popular
                    ? 'w-full justify-center inline-flex items-center rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5'
                    : 'btn-secondary w-full justify-center'}
                  style={plan.popular ? {
                    background: '#ffffff',
                    color: '#2577C9',
                    padding: '14px 32px',
                    fontSize: '15px',
                  } : undefined}
                >
                  Get Started — ${plan.price}/mo
                </Link>
              </div>
            ))}
          </div>

          {/* Trust line */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-gray-400">
            {['No setup fees', 'Cancel anytime', 'Month-to-month', 'Respond within 24 hrs'].map(t => (
              <span key={t} className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Feature comparison table */}
      <section className="section-pad relative overflow-hidden" style={{ background: '#0F0F1A' }} aria-labelledby="compare-heading">
        {/* Top accent line */}
        <div className="absolute inset-x-0 top-0 h-px pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, #5636D1 40%, transparent)' }} />
        {/* Ambient glow */}
        <div className="absolute pointer-events-none" style={{ width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(86,54,209,0.12), transparent 65%)', top: '50%', left: '-200px', transform: 'translateY(-50%)' }} />
        {/* Large decorative number */}
        <div
          className="absolute top-1/2 -translate-y-1/2 font-extrabold select-none pointer-events-none hidden lg:block"
          style={{ fontSize: '260px', lineHeight: 1, color: 'rgba(86,54,209,0.06)', right: '-20px', letterSpacing: '-0.05em' }}
        >
          01
        </div>

        <div className="container-tight max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5"
              style={{ background: 'rgba(86,54,209,0.12)', color: '#5636D1', border: '1px solid rgba(86,54,209,0.25)' }}
            >
              Compare Plans
            </span>
            <h2 id="compare-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
              Full Feature Comparison
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.45)' }}>
              See exactly what is included in every plan before you decide.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl" style={{ border: '1px solid rgba(86,54,209,0.25)', boxShadow: '0 0 0 1px rgba(86,54,209,0.15), 0 24px 80px rgba(0,0,0,0.25)' }}>
            <table className="w-full text-sm" style={{ background: '#0F0F1A' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                  <th className="text-left py-5 px-6 font-semibold w-1/2" style={{ color: 'rgba(255,255,255,0.45)' }}>Feature</th>
                  {plans.map(p => (
                    <th key={p.id} className="text-center py-5 px-3 font-bold text-white">
                      <span
                        className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-1"
                        style={p.popular
                          ? { background: 'rgba(37,119,201,0.2)', color: '#4298DC', border: '1px solid rgba(37,119,201,0.3)' }
                          : { color: 'rgba(255,255,255,0.55)' }
                        }
                      >
                        {p.name}
                      </span>
                      <div className="text-xs font-normal mt-0.5" style={{ color: p.popular ? '#4298DC' : 'rgba(255,255,255,0.35)' }}>
                        ${p.price}/mo
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {plans[2].features.map(({ text }, rowIdx) => (
                  <tr
                    key={text}
                    style={{
                      borderBottom: rowIdx < plans[2].features.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                      background: rowIdx % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)',
                    }}
                  >
                    <td className="py-3.5 px-6 text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>{text}</td>
                    {plans.map(plan => {
                      const f = plan.features.find(ft => ft.text === text)
                      return (
                        <td key={plan.id} className="text-center py-3.5 px-3">
                          {f?.included ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full mx-auto" style={{ background: 'rgba(16,185,129,0.15)' }}>
                              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: '#10B981' }}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full mx-auto" style={{ background: 'rgba(255,255,255,0.05)' }}>
                              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'rgba(255,255,255,0.2)' }}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </span>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad relative overflow-hidden" style={{ background: '#FAFBFF' }} id="pricing-faq" aria-labelledby="pfaq-heading">
        {/* Top accent line */}
        <div className="absolute inset-x-0 top-0 h-px pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, #E2498A 40%, transparent)' }} />
        {/* Ambient glow */}
        <div className="absolute pointer-events-none" style={{ width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(226,73,138,0.06), transparent 65%)', top: '50%', right: '-200px', transform: 'translateY(-50%)' }} />
        {/* Large decorative number */}
        <div
          className="absolute top-1/2 -translate-y-1/2 font-extrabold select-none pointer-events-none hidden lg:block"
          style={{ fontSize: '260px', lineHeight: 1, color: 'rgba(226,73,138,0.04)', left: '-20px', letterSpacing: '-0.05em' }}
        >
          02
        </div>

        <div className="container-tight max-w-3xl relative z-10">
          <div className="text-center mb-12">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5"
              style={{ background: 'rgba(226,73,138,0.08)', color: '#E2498A', border: '1px solid rgba(226,73,138,0.2)' }}
            >
              Questions
            </span>
            <h2 id="pfaq-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" style={{ letterSpacing: '-0.02em' }}>
              Pricing FAQ
            </h2>
            <p className="text-base max-w-xl mx-auto text-gray-500">
              Everything you need to know before picking a plan.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map(({ q, a, display }, idx) => {
              const c = faqAccentColors[idx % faqAccentColors.length]
              return (
                <details
                  key={q}
                  className="group overflow-hidden rounded-2xl"
                  style={{ background: '#0F0F1A', border: `1px solid ${c.border}` }}
                >
                  {/* Colored top accent line on each card */}
                  <div className="absolute inset-x-0 top-0 h-px pointer-events-none rounded-t-2xl" style={{ background: `linear-gradient(90deg, transparent, ${c.accent} 50%, transparent)` }} />
                  <summary className="relative flex items-center justify-between gap-4 cursor-pointer select-none p-6 font-semibold text-base list-none [&::-webkit-details-marker]:hidden" style={{ color: 'rgba(255,255,255,0.9)' }}>
                    <div className="flex items-center gap-3">
                      <span
                        className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                        style={{ background: c.light, color: c.accent, border: `1px solid ${c.border}` }}
                      >
                        {idx + 1}
                      </span>
                      <span>{q}</span>
                    </div>
                    <svg
                      className="w-5 h-5 shrink-0 transition-transform duration-300 group-open:rotate-180"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      style={{ color: c.accent }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <div className="w-full h-px mb-4" style={{ background: 'rgba(255,255,255,0.07)' }} />
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{display ?? a}</p>
                  </div>
                </details>
              )
            })}
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm mb-5" style={{ color: 'rgba(0,0,0,0.45)' }}>Still have questions?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-bold rounded-full px-7 py-3.5 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg text-white"
              style={{ background: 'linear-gradient(135deg, #E2498A, #E2498Acc)', boxShadow: '0 4px 20px rgba(226,73,138,0.25)' }}
            >
              Ask Us Anything
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section-pad relative overflow-hidden"
        style={{ background: '#0F0F1A' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(37,119,201,0.25) 1.5px, transparent 1.5px)',
            backgroundSize: '28px 28px',
            opacity: 0.3,
          }}
        />
        {/* Glow blobs */}
        <div className="absolute pointer-events-none" style={{ width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(86,54,209,0.14), transparent 65%)', top: '50%', left: '-150px', transform: 'translateY(-50%)' }} />
        <div className="absolute pointer-events-none" style={{ width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(226,73,138,0.10), transparent 65%)', top: '50%', right: '-100px', transform: 'translateY(-50%)' }} />

        <div className="container-tight relative z-10 text-center">
          <span
            className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-6"
            style={{ background: 'rgba(86,54,209,0.12)', color: '#5636D1', border: '1px solid rgba(86,54,209,0.25)' }}
          >
            Free Consultation
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ letterSpacing: '-0.025em' }}
          >
            Not Sure Which Plan Is Right for You?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Contact us for a free consultation. We will recommend the right plan based on your goals and budget.
          </p>

          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { icon: '💬', label: 'Real Humans' },
              { icon: '⚡', label: '24-Hour Response' },
              { icon: '🆓', label: 'No Commitment' },
              { icon: '🎯', label: 'Tailored Advice' },
              { icon: '🔒', label: 'No Spam Ever' },
            ].map(({ icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-full px-4 py-2.5"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)' }}
              >
                <span className="text-base">{icon}</span>
                <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.70)' }}>{label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 font-bold rounded-full px-9 py-4 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow text-white"
              style={{ background: 'linear-gradient(135deg, #5636D1, #E2498A)', boxShadow: '0 4px 24px rgba(86,54,209,0.35)' }}
            >
              Get a Free Recommendation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/recommendation"
              className="inline-flex items-center justify-center gap-2 font-bold rounded-full px-9 py-4 text-sm transition-all duration-300 hover:-translate-y-0.5 text-white"
              style={{ border: '1.5px solid rgba(255,255,255,0.18)' }}
            >
              Try Free Website Audit
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
