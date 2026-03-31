import type { Metadata } from 'next'
import Link from 'next/link'
import InnerHeroBg from '@/components/InnerHeroBg'

export const metadata: Metadata = {
  title: { absolute: 'Affordable Web Design for Small Businesses | AffordaWeb Solutions' },
  description:
    'Affordable web design for small businesses starting at $69/mo. Custom websites with hosting, SEO & SSL built in. No setup fees, no contracts — launch in 10–15 days.',
  keywords: [
    'affordable web design for small business',
    'small business web design',
    'web design for small businesses',
    'small business website design',
    'small business website design services',
    'web design services for small business',
    'small business web designer',
    'website design for small business',
    'affordable small business website',
    'small business web design company',
  ],
  alternates: { canonical: 'https://www.affordawebsolutions.com/affordable-web-design-for-small-businesses' },
  openGraph: {
    type: 'website',
    title: 'Affordable Web Design for Small Businesses | AffordaWeb Solutions',
    description:
      'Affordable web design for small businesses starting at $69/mo. Custom websites with hosting, SEO & SSL built in. No setup fees, no contracts — launch in 10–15 days.',
    url: 'https://www.affordawebsolutions.com/affordable-web-design-for-small-businesses',
    images: [
      {
        url: 'https://www.affordawebsolutions.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Affordable Web Design for Small Businesses — AffordaWeb Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Affordable Web Design for Small Businesses | AffordaWeb Solutions',
    description:
      'Custom small business websites from $69/mo. Hosting, SEO & SSL included. Launch in 10–15 days.',
    images: ['https://www.affordawebsolutions.com/og-image.png'],
  },
}

const painPoints = [
  {
    problem: 'Too Expensive',
    stat: '$3,000–$10,000',
    detail: 'That\'s what traditional agencies charge upfront — before a single page is designed. For most small business owners, that\'s simply not an option.',
    solution: 'AffordaWeb starts at $69/month with zero setup fees. Spread the cost over a year and it\'s a fraction of what an agency charges, with the same professional results.',
    accent: '#E2498A',
  },
  {
    problem: 'Too Complicated',
    stat: '20–40 hrs',
    detail: 'That\'s how long most small business owners spend wrestling with DIY builders like Wix or Squarespace before giving up or settling for something mediocre.',
    solution: 'We handle everything — design, development, hosting setup, and launch. You review and approve. No software to learn, no templates to fight, no technical headaches.',
    accent: '#5636D1',
  },
  {
    problem: 'Too Risky',
    stat: '1 in 3',
    detail: 'Freelancers go quiet after delivery, leaving small businesses stranded when updates are needed or something breaks. No accountability, no ongoing support.',
    solution: 'As a company, we\'re always here. Your site comes with ongoing maintenance and support included. Email us a change and it\'s done within 24 hours — guaranteed.',
    accent: '#06B6D4',
  },
]

const included = [
  {
    title: 'Custom Website Design',
    desc: 'Your site is designed specifically for your business and industry — not a template someone else is using. Mobile-first, fast, and built to earn customer trust from first click.',
    href: '/services/design',
    accent: '#5636D1',
  },
  {
    title: 'Local SEO Setup',
    desc: 'Every site includes on-page SEO structure: targeted title tags, meta descriptions, schema markup, and location-based keyword optimization so you show up when customers search.',
    href: '/services/seo',
    accent: '#E2498A',
  },
  {
    title: 'Managed Hosting & SSL',
    desc: 'Cloud hosting with 99.9% uptime, free SSL (the padlock in the browser), and 1GB professional email are bundled into every plan. No separate hosting bill.',
    href: '/services/hosting',
    accent: '#06B6D4',
  },
  {
    title: 'Ongoing Maintenance',
    desc: 'Security patches, content updates, speed optimization, and monthly monitoring — all handled by our team. Your website stays healthy and current without any effort from you.',
    href: '/services/maintenance',
    accent: '#10B981',
  },
]

const plans = [
  {
    name: 'Starter',
    price: '$69',
    period: '/mo',
    features: ['Custom designed website', 'Managed cloud hosting', 'Free SSL certificate', 'Professional email (1GB)', 'Basic SEO setup', 'Monthly maintenance'],
    accent: '#5636D1',
    cta: 'Get Started',
  },
  {
    name: 'Standard',
    price: '$99',
    period: '/mo',
    features: ['Everything in Starter', 'Unlimited content updates', 'Full local SEO setup', 'Google Analytics setup', 'Social media integration', 'Priority email support'],
    accent: '#E2498A',
    cta: 'Most Popular',
    highlight: true,
  },
  {
    name: 'Premium',
    price: '$149',
    period: '/mo',
    features: ['Everything in Standard', 'E-commerce / online store', 'Advanced SEO strategy', 'Booking / appointment system', 'Custom contact forms', 'Dedicated account manager'],
    accent: '#06B6D4',
    cta: 'Get Started',
  },
]

const faqs = [
  {
    q: 'How much does a small business website cost?',
    a: 'With AffordaWeb, a professional small business website starts at $69/month with no setup fee. That includes custom design, hosting, SSL, and maintenance — everything your business needs to be online professionally. The Standard plan is $99/month and the Premium is $149/month.',
  },
  {
    q: 'Do I need technical knowledge to work with AffordaWeb?',
    a: 'Not at all. Our process is designed for busy small business owners who have zero time for tech. You fill out a brief questionnaire about your business, share any photos or content you have, and we handle everything from design to launch. Once live, just email us whenever you need a change.',
  },
  {
    q: 'How long does it take to build a small business website?',
    a: 'Most websites are live within 10–15 business days after you submit your content and preferences. We move quickly because we know your time matters. Rush delivery options are available on the Standard and Premium plans.',
  },
  {
    q: 'What if I already have a website but need a redesign?',
    a: "That's one of the most common situations we handle. We migrate your existing content, improve the design and structure, fix SEO issues, and launch a fresh site — all within the same monthly plan. There's no extra charge for starting from an existing site.",
  },
  {
    q: 'Do small business websites need SEO?',
    a: 'Yes — without SEO, your website is essentially invisible to potential customers searching on Google. Every AffordaWeb plan includes basic on-page SEO. Our Standard and Premium plans include full local SEO optimization, which is especially important if your business serves a specific city or region.',
  },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.affordawebsolutions.com' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Affordable Web Design for Small Businesses',
      item: 'https://www.affordawebsolutions.com/affordable-web-design-for-small-businesses',
    },
  ],
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'AffordaWeb Solutions',
  url: 'https://www.affordawebsolutions.com',
  description:
    'Affordable web design for small businesses starting at $69/month. Custom websites with hosting, SEO, and maintenance included.',
  serviceType: ['Website Design', 'SEO Optimization', 'Web Hosting', 'Website Maintenance'],
  priceRange: '$69–$149/month',
  email: 'hello@affordawebsolutions.com',
  areaServed: { '@type': 'Country', name: 'United States' },
}

export default function AffordableWebDesignSmallBusinessesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden pt-[200px] pb-[100px] text-center" style={{ background: '#0F0F1A' }}>
        <InnerHeroBg page="services" />
        <div className="container-tight relative z-10">
          <p className="section-label-white">Built for Small Businesses</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6" style={{ letterSpacing: '-0.025em' }}>
            Affordable Web Design Built<br className="hidden sm:block" /> for Small Businesses
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: 'rgba(255,255,255,0.55)' }}>
            You don&rsquo;t have an enterprise budget — you have a business to run. AffordaWeb gives small business owners a professionally designed website starting at <strong className="text-white">$69/month</strong>, with everything included and zero technical hassle.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['Retail & Service', 'Restaurants', 'Contractors', 'Wellness', 'Consulting', 'Trades'].map(label => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-full px-4 py-2"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.14)' }}
              >
                <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#E2498A' }} />
                <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.75)' }}>{label}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-white">
              Start Your Website
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/pricing" className="btn-outline-white">See Pricing</Link>
          </div>
        </div>
      </section>

      {/* Pain Points Solved */}
      <section className="section-pad bg-white" aria-labelledby="awdsb-why-heading">
        <div className="container-tight">
          <div className="text-center mb-14">
            <p className="section-label">The Problem We Solve</p>
            <h2 id="awdsb-why-heading" className="section-title">
              Why Small Businesses Choose AffordaWeb
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Small business owners face the same three obstacles when trying to get online. Here&rsquo;s exactly how AffordaWeb eliminates each one.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {painPoints.map(({ problem, stat, detail, solution, accent }) => (
              <div
                key={problem}
                className="relative overflow-hidden rounded-2xl p-7"
                style={{ background: '#FAFBFF', border: `1px solid ${accent}22` }}
              >
                <div className="absolute inset-x-0 top-0 h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />
                <div className="text-2xl font-bold mb-1" style={{ color: accent }}>{stat}</div>
                <div className="font-bold text-gray-900 text-lg mb-3">{problem}</div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{detail}</p>
                <div className="w-full h-px mb-4" style={{ background: `${accent}20` }} />
                <p className="text-sm leading-relaxed font-medium" style={{ color: accent === '#E2498A' ? '#c2336e' : accent === '#5636D1' ? '#4025b0' : '#0597ac' }}>{solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-pad relative overflow-hidden" style={{ background: '#0F0F1A' }} aria-labelledby="awdsb-included-heading">
        <div className="absolute inset-x-0 top-0 h-px pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, #5636D1 40%, transparent)' }} />
        <div className="container-tight relative z-10">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5" style={{ background: 'rgba(86,54,209,0.12)', color: '#5636D1', border: '1px solid rgba(86,54,209,0.25)' }}>
              What You Get
            </span>
            <h2 id="awdsb-included-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
              Everything Your Small Business Website Needs
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.45)' }}>
              One plan, one bill, zero headaches. Here&rsquo;s everything bundled into every AffordaWeb subscription.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {included.map(({ title, desc, href, accent }) => (
              <Link
                key={title}
                href={href}
                className="group relative overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${accent}30` }}
              >
                <div className="absolute inset-x-0 top-0 h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />
                <h3 className="font-bold text-white text-lg mb-2">{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="section-pad bg-white" aria-labelledby="awdsb-plans-heading">
        <div className="container-tight">
          <div className="text-center mb-14">
            <p className="section-label">Simple Pricing</p>
            <h2 id="awdsb-plans-heading" className="section-title">
              Pick the Plan That Fits Your Business
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              All plans include a fully custom website, hosting, SSL, and maintenance. No setup fees. Cancel anytime.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map(({ name, price, period, features, accent, cta, highlight }) => (
              <div
                key={name}
                className="relative overflow-hidden rounded-2xl p-7 flex flex-col"
                style={{
                  background: highlight ? '#0F0F1A' : '#FAFBFF',
                  border: `1px solid ${accent}${highlight ? '50' : '22'}`,
                }}
              >
                <div className="absolute inset-x-0 top-0 h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />
                {highlight && (
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4 self-start" style={{ background: `${accent}18`, color: accent, border: `1px solid ${accent}40` }}>
                    Most Popular
                  </div>
                )}
                <h3 className={`font-bold text-xl mb-1 ${highlight ? 'text-white' : 'text-gray-900'}`}>{name}</h3>
                <div className="mb-5">
                  <span className="text-4xl font-bold" style={{ color: accent }}>{price}</span>
                  <span className={`text-sm ${highlight ? 'text-white/50' : 'text-gray-400'}`}>{period}</span>
                </div>
                <ul className="space-y-2 mb-8 flex-grow">
                  {features.map(f => (
                    <li key={f} className="flex items-center gap-2">
                      <svg className="w-4 h-4 shrink-0" style={{ color: accent }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`text-sm ${highlight ? 'text-white/70' : 'text-gray-600'}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={highlight ? 'btn-white text-center' : 'btn-primary text-center'}
                >
                  {highlight ? 'Get Started' : cta}
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/pricing" className="btn-secondary">View Full Pricing Details</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad relative overflow-hidden" style={{ background: '#0F0F1A' }}>
        <div className="absolute inset-x-0 top-0 h-px pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, #E2498A 40%, transparent)' }} />
        <div className="container-tight max-w-3xl relative z-10">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5" style={{ background: 'rgba(226,73,138,0.08)', color: '#E2498A', border: '1px solid rgba(226,73,138,0.2)' }}>
              Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
              Small Business Web Design FAQ
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map(({ q, a }, idx) => {
              const colors = ['#5636D1', '#E2498A', '#06B6D4', '#10B981', '#F59E0B']
              const accent = colors[idx % colors.length]
              const border = `${accent}30`
              return (
                <details key={q} className="group overflow-hidden rounded-2xl" style={{ background: '#0F0F1A', border: `1px solid ${border}` }}>
                  <summary className="relative flex items-center justify-between gap-4 cursor-pointer select-none p-6 font-semibold text-base list-none [&::-webkit-details-marker]:hidden" style={{ color: 'rgba(255,255,255,0.9)' }}>
                    <div className="flex items-center gap-3">
                      <span className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: `${accent}18`, color: accent, border: `1px solid ${border}` }}>
                        {idx + 1}
                      </span>
                      <span className="pr-2">{q}</span>
                    </div>
                    <svg className="w-5 h-5 shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: accent }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <div className="w-full h-px mb-4" style={{ background: 'rgba(255,255,255,0.07)' }} />
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{a}</p>
                  </div>
                </details>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad relative overflow-hidden" style={{ background: '#0F0F1A' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(226,73,138,0.15) 1.5px, transparent 1.5px)', backgroundSize: '28px 28px', opacity: 0.3 }} />
        <div className="container-tight relative z-10 text-center">
          <p className="section-label-white">Ready to Launch?</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6" style={{ letterSpacing: '-0.025em' }}>
            Let&rsquo;s Build Your Small Business Website Today
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Get a professionally designed website that works as hard as you do — starting at $69/month with everything included. No setup fees, no contracts, no technical headaches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-white px-9 py-4">Start My Website</Link>
            <Link href="/pricing" className="btn-outline-white px-9 py-4">View All Plans</Link>
          </div>
        </div>
      </section>
    </>
  )
}
