import type { Metadata } from 'next'
import Link from 'next/link'
import InnerHeroBg from '@/components/InnerHeroBg'

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
    tagline: 'Perfect for getting online fast',
    popular: false,
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

      {/* Hero — Dark navy */}
      <section
        className="relative overflow-hidden pt-[75px] pb-14 text-center"
        style={{ background: '#091829' }}
      >
        <InnerHeroBg />
        <div className="container-tight relative z-10">
          <p className="section-label-white">Transparent Pricing</p>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
            style={{ letterSpacing: '-0.025em' }}
          >
            One Monthly Rate.<br className="hidden sm:block" /> Everything Included.
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
            No setup fees. No hidden costs. No long-term contracts. Just professional website design with hosting, SSL, and maintenance bundled into one affordable monthly plan.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <span className="text-amber-400 text-lg tracking-tight">★★★★★</span>
            <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Trusted by 50+ small businesses · Starting at $69/mo
            </span>
          </div>
        </div>
      </section>

      {/* Pricing cards — White */}
      <section className="section-pad bg-white" aria-labelledby="plans-heading">
        <div className="container-tight">
          <div className="sr-only" id="plans-heading">Pricing Plans</div>
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
                        background: 'linear-gradient(145deg, #1E66A8 0%, #2878C4 100%)',
                        boxShadow: '0 24px 60px rgba(40,120,196,0.35)',
                        border: 'none',
                        marginTop: '-16px',
                        marginBottom: '-16px',
                      }
                    : { boxShadow: '0 2px 16px rgba(0,0,0,0.05)' }
                }
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-white text-primary-700 text-xs font-bold tracking-wide uppercase px-4 py-1.5 rounded-full shadow-md inline-block">
                      ✦ Most Popular
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
                    color: '#1E66A8',
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
            {['✓ No setup fees', '✓ Cancel anytime', '✓ Month-to-month', '✓ Respond within 24 hrs'].map(t => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Feature comparison table — Light */}
      <section className="section-pad" style={{ background: '#F7FBFF' }} aria-labelledby="compare-heading">
        <div className="container-tight max-w-4xl">
          <div className="text-center mb-12">
            <p className="section-label">Compare Plans</p>
            <h2 id="compare-heading" className="section-title">Full Feature Comparison</h2>
            <div className="divider-glow" />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-2xl overflow-hidden" style={{ boxShadow: '0 2px 20px rgba(0,0,0,0.06)' }}>
              <thead>
                <tr style={{ background: '#091829' }}>
                  <th className="text-left py-4 px-6 font-semibold text-white/70 w-1/2">Feature</th>
                  {plans.map(p => (
                    <th key={p.id} className="text-center py-4 px-3 font-bold text-white">
                      {p.name}
                      <div className={`text-sm font-normal mt-0.5 ${p.popular ? 'text-primary-300' : 'text-white/40'}`}>
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
                    className="border-b border-gray-100 hover:bg-primary-50/30 transition-colors"
                    style={rowIdx % 2 === 0 ? {} : { background: '#FAFBFF' }}
                  >
                    <td className="py-3 px-6 text-gray-600">{text}</td>
                    {plans.map(plan => {
                      const f = plan.features.find(ft => ft.text === text)
                      return (
                        <td key={plan.id} className="text-center py-3 px-3">
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

      {/* FAQ — White */}
      <section className="section-pad bg-white" id="pricing-faq" aria-labelledby="pfaq-heading">
        <div className="container-tight max-w-3xl">
          <div className="text-center mb-12">
            <p className="section-label">Questions</p>
            <h2 id="pfaq-heading" className="section-title">Pricing FAQ</h2>
            <div className="divider-glow" />
          </div>
          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <details
                key={q}
                className="group card border border-gray-100 p-0 overflow-hidden hover:border-primary-200 transition-colors"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer select-none p-6 text-gray-900 font-semibold text-base list-none [&::-webkit-details-marker]:hidden">
                  <span>{q}</span>
                  <svg
                    className="w-5 h-5 text-primary-500 shrink-0 transition-transform duration-300 group-open:rotate-180"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
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

      {/* CTA — Dark navy */}
      <section
        className="section-pad relative overflow-hidden"
        style={{ background: '#091829' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(40,120,196,0.18) 1.5px, transparent 1.5px)',
            backgroundSize: '28px 28px',
            opacity: 0.3,
          }}
        />
        <div className="container-tight relative z-10 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ letterSpacing: '-0.025em' }}
          >
            Not Sure Which Plan Is Right for You?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Contact us for a free consultation. We will recommend the best plan based on your goals, timeline, and budget.
          </p>
          <Link href="/contact" className="btn-white px-9 py-4">
            Get a Free Recommendation
          </Link>
        </div>
      </section>
    </>
  )
}
