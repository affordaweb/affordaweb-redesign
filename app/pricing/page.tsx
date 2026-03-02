import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Website Design Pricing | Plans Starting at $69/mo | AffordaWeb Solutions',
  description:
    'Simple, transparent website design pricing. Basic $69/mo, Standard $99/mo, Premium $149/mo. Hosting, SSL, and maintenance included. No setup fees, cancel anytime.',
  alternates: { canonical: 'https://affordawebsolutions.com/pricing' },
  openGraph: {
    title: 'Website Design Pricing | Plans Starting at $69/mo',
    description: 'Hosting, SSL, and maintenance included. No setup fees. Cancel anytime.',
    url: 'https://affordawebsolutions.com/pricing',
  },
}

function Check({ dim = false }: { dim?: boolean }) {
  return (
    <svg
      className={`w-5 h-5 shrink-0 ${dim ? 'text-gray-300' : 'text-cyan-500'}`}
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
    tagline: 'Perfect for getting online fast',
    popular: false,
    color: 'gray',
    features: [
      { text: '1–5 page website', included: true },
      { text: 'Custom mobile-responsive design', included: true },
      { text: 'Web hosting included', included: true },
      { text: 'SSL certificate (HTTPS)', included: true },
      { text: '1 business email account', included: true },
      { text: '1 content update per month', included: true },
      { text: 'Basic security maintenance', included: true },
      { text: 'Contact form', included: true },
      { text: 'SEO optimization', included: false },
      { text: 'Unlimited updates', included: false },
      { text: 'Google Analytics setup', included: false },
      { text: 'E-commerce store', included: false },
      { text: 'Speed optimization', included: false },
      { text: 'Priority support', included: false },
    ],
  },
  {
    id: 'standard',
    name: 'Standard',
    price: 99,
    tagline: 'Best for growing businesses',
    popular: true,
    color: 'primary',
    features: [
      { text: 'Up to 10 pages', included: true },
      { text: 'Custom mobile-responsive design', included: true },
      { text: 'Web hosting included', included: true },
      { text: 'SSL certificate (HTTPS)', included: true },
      { text: '1 business email account', included: true },
      { text: 'Unlimited content updates', included: true },
      { text: 'Advanced security maintenance', included: true },
      { text: 'Contact forms (unlimited)', included: true },
      { text: 'Full SEO optimization', included: true },
      { text: 'Google Analytics setup', included: true },
      { text: 'Booking / inquiry forms', included: true },
      { text: 'E-commerce store', included: false },
      { text: 'Speed optimization', included: false },
      { text: 'Priority support', included: false },
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 149,
    tagline: 'For e-commerce & full-scale brands',
    popular: false,
    color: 'cyan',
    features: [
      { text: 'Unlimited pages', included: true },
      { text: 'Custom mobile-responsive design', included: true },
      { text: 'Web hosting included', included: true },
      { text: 'SSL certificate (HTTPS)', included: true },
      { text: '1 business email account', included: true },
      { text: 'Unlimited content updates', included: true },
      { text: 'Advanced security maintenance', included: true },
      { text: 'Contact forms (unlimited)', included: true },
      { text: 'Full SEO optimization', included: true },
      { text: 'Google Analytics setup', included: true },
      { text: 'Booking / inquiry forms', included: true },
      { text: 'E-commerce (up to 30 products)', included: true },
      { text: 'Speed optimization', included: true },
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
    a: 'If your project requires more pages than your current plan allows, you can easily upgrade to the Premium plan. Contact us and we will handle the migration seamlessly.',
  },
  {
    q: 'Can I cancel my plan at any time?',
    a: 'Yes. All our plans are month-to-month with no long-term contracts. You can cancel at any time with 30 days notice. We will export your content so you are never left stranded.',
  },
  {
    q: 'Is the domain name included in the price?',
    a: 'Domain registration is not included in the monthly plan price, but we can help you register your domain and connect it to your new website. Domain registration typically costs $10–$15/year.',
  },
  {
    q: 'How do unlimited updates work on Standard and Premium plans?',
    a: 'Simply email us your requested changes — new text, photos, pages, or any other updates — and we will implement them within 24–48 business hours. There is no limit to how many update requests you can submit per month.',
  },
  {
    q: 'Can I upgrade from Basic to Standard or Premium later?',
    a: 'Absolutely. You can upgrade your plan at any time. We will build out the additional pages and features on your upgraded plan without any additional setup fees.',
  },
]

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
      url: `https://affordawebsolutions.com/pricing#${p.id}`,
    },
  })),
}

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-hero pt-32 pb-20 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[600px] h-[400px] bg-primary-500/20 rounded-full blur-[150px] pointer-events-none" />
        <div className="container-tight relative z-10">
          <p className="section-label text-cyan-400">Transparent Pricing</p>
          <h1 className="section-title-white mb-6">
            One Monthly Rate.<br className="hidden sm:block" /> Everything Included.
          </h1>
          <p className="section-subtitle-white mx-auto text-center">
            No setup fees. No hidden costs. No long-term contracts. Just professional website design with hosting, SSL, and maintenance bundled into one affordable monthly plan.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="section-pad bg-surface" aria-labelledby="plans-heading">
        <div className="container-tight">
          <div className="sr-only" id="plans-heading">Pricing Plans</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.id}
                id={plan.id}
                className={`card flex flex-col ${
                  plan.popular
                    ? 'pricing-popular bg-gradient-to-b from-primary-50 to-white'
                    : 'border-gray-100'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="badge bg-cyan-500 text-dark px-4 py-1.5 text-xs font-bold tracking-wide uppercase shadow-btn">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`mb-6 ${plan.popular ? 'mt-3' : ''}`}>
                  <p className={`text-sm font-bold tracking-widest uppercase mb-2 ${
                    plan.popular ? 'text-primary-500' : 'text-gray-400'
                  }`}>
                    {plan.name}
                  </p>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className={`text-5xl font-bold ${
                      plan.popular ? 'gradient-text' : 'text-dark'
                    }`}>
                      ${plan.price}
                    </span>
                    <span className="text-gray-400 text-sm">/month</span>
                  </div>
                  <p className="text-sm text-gray-500">{plan.tagline}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map(({ text, included }) => (
                    <li
                      key={text}
                      className={`flex items-center gap-3 text-sm ${
                        included ? 'text-gray-700' : 'text-gray-300'
                      }`}
                    >
                      <Check dim={!included} />
                      {text}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={plan.popular ? 'btn-primary w-full justify-center' : 'btn-secondary w-full justify-center'}
                >
                  Get Started — ${plan.price}/mo
                </Link>
              </div>
            ))}
          </div>

          {/* Trust line */}
          <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-gray-400">
            {[
              '✓ No setup fees',
              '✓ Cancel anytime',
              '✓ Month-to-month',
              '✓ Respond within 24 hrs',
            ].map(t => <span key={t}>{t}</span>)}
          </div>
        </div>
      </section>

      {/* Feature comparison table */}
      <section className="section-pad bg-white" aria-labelledby="compare-heading">
        <div className="container-tight max-w-4xl">
          <div className="text-center mb-12">
            <p className="section-label">Compare Plans</p>
            <h2 id="compare-heading" className="section-title">
              Full Feature Comparison
            </h2>
            <div className="divider-glow" />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 pr-4 font-semibold text-gray-700 w-1/2">Feature</th>
                  {plans.map(p => (
                    <th key={p.id} className="text-center py-4 px-2 font-bold text-dark">
                      {p.name}
                      <div className={`text-sm font-normal mt-0.5 ${
                        p.popular ? 'text-primary-500' : 'text-gray-400'
                      }`}>
                        ${p.price}/mo
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {plans[2].features.map(({ text }) => (
                  <tr key={text} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-3 pr-4 text-gray-600">{text}</td>
                    {plans.map(plan => {
                      const f = plan.features.find(ft => ft.text === text)
                      return (
                        <td key={plan.id} className="text-center py-3 px-2">
                          <Check dim={!f?.included} />
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
      <section className="section-pad bg-surface" id="pricing-faq" aria-labelledby="pfaq-heading">
        <div className="container-tight max-w-3xl">
          <div className="text-center mb-12">
            <p className="section-label">Questions</p>
            <h2 id="pfaq-heading" className="section-title">Pricing FAQ</h2>
            <div className="divider-glow" />
          </div>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group card border border-gray-100 p-0 overflow-hidden hover:border-cyan-200 transition-colors">
                <summary className="flex items-center justify-between gap-4 cursor-pointer select-none p-6 text-dark font-semibold text-base list-none [&::-webkit-details-marker]:hidden">
                  <span>{q}</span>
                  <svg className="w-5 h-5 text-primary-500 shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <div className="w-full h-px bg-gray-100 mb-4" />
                  <p className="text-gray-500 leading-relaxed text-sm">{a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-gradient-hero relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[600px] h-[400px] bg-primary-500/20 rounded-full blur-[150px] pointer-events-none" />
        <div className="container-tight relative z-10 text-center">
          <h2 className="section-title-white mb-4">Not Sure Which Plan Is Right for You?</h2>
          <p className="section-subtitle-white mx-auto text-center mb-8">
            Contact us for a free consultation. We will recommend the best plan based on your goals, timeline, and budget.
          </p>
          <Link href="/contact" className="btn-primary">
            Get a Free Recommendation
          </Link>
        </div>
      </section>
    </>
  )
}
