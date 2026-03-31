import type { Metadata } from 'next'
import Link from 'next/link'
import InnerHeroBg from '@/components/InnerHeroBg'

export const metadata: Metadata = {
  title: { absolute: 'Affordable Web Design Company | AffordaWeb Solutions' },
  description:
    'AffordaWeb Solutions is an affordable web design company for small businesses. Professional websites from $69/mo — custom design, hosting, SEO & SSL included.',
  keywords: [
    'affordable web design company',
    'affordable web design',
    'affordable website design company',
    'cheap web design company',
    'affordable web design agency',
    'affordable website design',
    'affordable web design services',
    'affordable web design companies',
    'web design company for small business',
    'affordable web design near me',
  ],
  alternates: { canonical: 'https://www.affordawebsolutions.com/affordable-web-design-company' },
  openGraph: {
    type: 'website',
    title: 'Affordable Web Design Company | AffordaWeb Solutions',
    description:
      'AffordaWeb Solutions is an affordable web design company for small businesses. Professional websites from $69/mo — custom design, hosting, SEO & SSL included.',
    url: 'https://www.affordawebsolutions.com/affordable-web-design-company',
    images: [
      {
        url: 'https://www.affordawebsolutions.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Affordable Web Design Company — AffordaWeb Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Affordable Web Design Company | AffordaWeb Solutions',
    description:
      'Professional websites from $69/mo — custom design, hosting, SEO & SSL included. No setup fees.',
    images: ['https://www.affordawebsolutions.com/og-image.png'],
  },
}

const services = [
  {
    title: 'Custom Website Design',
    desc: 'Every site is designed from scratch to match your brand. Mobile-first, fast-loading, and built to convert visitors into customers — launched in 10–15 business days.',
    href: '/services/design',
    accent: '#5636D1',
  },
  {
    title: 'Local SEO',
    desc: 'Built-in SEO structure including schema markup, optimized meta tags, and location-based targeting so you rank for what your customers are searching.',
    href: '/services/seo',
    accent: '#E2498A',
  },
  {
    title: 'Managed Hosting & SSL',
    desc: 'Reliable hosting with 99.9% uptime, free SSL certificate, and 1GB professional email — all bundled into your monthly plan. Nothing extra to buy.',
    href: '/services/hosting',
    accent: '#06B6D4',
  },
  {
    title: 'Website Maintenance',
    desc: 'Content updates, security monitoring, and software patches handled within 24 hours. You focus on running your business — we keep your site running perfectly.',
    href: '/services/maintenance',
    accent: '#10B981',
  },
]

const industries = [
  { name: 'Contractors & Trades', accent: '#5636D1' },
  { name: 'Restaurants & Cafés', accent: '#E2498A' },
  { name: 'Health & Wellness', accent: '#06B6D4' },
  { name: 'Legal & Consulting', accent: '#10B981' },
  { name: 'Real Estate', accent: '#F59E0B' },
  { name: 'Retail & E-commerce', accent: '#5636D1' },
  { name: 'Beauty & Salons', accent: '#E2498A' },
  { name: 'Service Businesses', accent: '#06B6D4' },
]

const faqs = [
  {
    q: 'What makes AffordaWeb an affordable web design company?',
    a: 'AffordaWeb operates with a subscription model that eliminates the massive upfront cost traditional agencies charge. Instead of paying $3,000–$10,000 before a single page is built, you pay $69/month and get a fully custom, professionally designed website with hosting, SSL, SEO, and maintenance all included. No hidden fees, no contracts.',
  },
  {
    q: 'How much does an affordable website design cost?',
    a: 'Our Starter plan is $69/month with zero setup fees. The Standard plan is $99/month and includes full local SEO and unlimited content updates. The Premium plan is $149/month and adds e-commerce, priority support, and advanced features. All plans include custom design, hosting, SSL, and maintenance.',
  },
  {
    q: "What's included in your affordable web design services?",
    a: 'Every plan includes a custom-designed website (not a template), managed cloud hosting, SSL certificate, professional email, basic SEO setup, and monthly maintenance. Standard and Premium plans add unlimited content updates, full local SEO, Google Analytics integration, and more.',
  },
  {
    q: 'How is AffordaWeb different from other affordable web design companies?',
    a: "Most so-called 'affordable' web design companies either hand you a generic template or charge hidden fees after the initial quote. AffordaWeb delivers a genuinely custom website at a predictable monthly price — everything bundled, no surprises. We've been building websites for small businesses for years and our clients stay because the quality speaks for itself.",
  },
  {
    q: 'Can I get affordable web design near me?',
    a: 'Yes — because we work remotely, we serve small businesses across the entire United States. Whether you\'re in New Jersey, California, Texas, Florida, or anywhere in between, our process is 100% online. You get the same quality work regardless of location, delivered right to your inbox.',
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
      name: 'Affordable Web Design Company',
      item: 'https://www.affordawebsolutions.com/affordable-web-design-company',
    },
  ],
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'AffordaWeb Solutions',
  url: 'https://www.affordawebsolutions.com',
  description:
    'Affordable web design company for small businesses. Professional websites starting at $69/month with hosting, SEO, SSL, and maintenance included.',
  serviceType: ['Website Design', 'SEO Optimization', 'Web Hosting', 'Website Maintenance'],
  priceRange: '$69–$149/month',
  email: 'hello@affordawebsolutions.com',
  areaServed: { '@type': 'Country', name: 'United States' },
}

export default function AffordableWebDesignCompanyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden pt-[200px] pb-[100px] text-center" style={{ background: '#0F0F1A' }}>
        <InnerHeroBg page="services" />
        <div className="container-tight relative z-10">
          <p className="section-label-white">Affordable Web Design Company</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6" style={{ letterSpacing: '-0.025em' }}>
            The Affordable Web Design Company<br className="hidden sm:block" /> for Small Businesses
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Professional websites starting at <strong className="text-white">$69/month</strong> — custom design, managed hosting, SEO, and SSL all included. No setup fees. No long-term contracts. Live in 10–15 days.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['Affordable Pricing', 'Custom Design', 'No Setup Fees', 'SEO Included', 'Cancel Anytime'].map(label => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-full px-4 py-2"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.14)' }}
              >
                <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#5636D1' }} />
                <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.75)' }}>{label}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-white">
              Get a Free Quote
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/pricing" className="btn-outline-white">View Pricing</Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad bg-white" aria-labelledby="awdc-services-heading">
        <div className="container-tight">
          <div className="text-center mb-14">
            <p className="section-label">What We Offer</p>
            <h2 id="awdc-services-heading" className="section-title">
              What Our Web Design Company Offers
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              From initial design through ongoing maintenance, our affordable web design services cover everything your small business needs to succeed online — bundled into one simple monthly plan.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map(({ title, desc, href, accent }) => (
              <Link
                key={title}
                href={href}
                className="group relative overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                style={{ background: '#FAFBFF', border: `1px solid ${accent}22` }}
              >
                <div className="absolute inset-x-0 top-0 h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />
                <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-primary-600 transition-colors">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Why Affordable Doesn't Mean Cheap */}
      <section className="section-pad relative overflow-hidden" style={{ background: '#0F0F1A' }} aria-labelledby="awdc-why-heading">
        <div className="absolute inset-x-0 top-0 h-px pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, #5636D1 40%, transparent)' }} />
        <div className="container-tight relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5" style={{ background: 'rgba(86,54,209,0.12)', color: '#5636D1', border: '1px solid rgba(86,54,209,0.25)' }}>
                Why Choose Us
              </span>
              <h2 id="awdc-why-heading" className="text-3xl sm:text-4xl font-bold text-white mb-6" style={{ letterSpacing: '-0.02em' }}>
                Professional Quality at an Affordable Price
              </h2>
              <p className="leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Traditional web design agencies charge anywhere from <strong className="text-white">$3,000 to $10,000 upfront</strong> before a single pixel is placed. That pricing model puts professional web design out of reach for most small businesses — and that&rsquo;s exactly the problem AffordaWeb was built to solve.
              </p>
              <p className="leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
                We deliver agency-quality websites at a predictable monthly rate, with no surprise invoices and no long-term lock-in. Every site we build is custom-designed for your brand, optimized for search engines, and maintained by our team so you never have to touch the technical side.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'No $3,000–$10,000 upfront agency fee',
                  'Fully custom design — never a generic template',
                  'SEO structure built in from day one',
                  'Hosting, SSL, and maintenance all included',
                  'Live website in 10–15 business days',
                ].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <svg className="w-4 h-4 shrink-0" style={{ color: '#5636D1' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-white">Get a Free Quote</Link>
                <Link href="/portfolio" className="btn-outline-white">See Our Work</Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: '$69/mo', label: 'Starting Price', accent: '#5636D1' },
                { stat: '$0', label: 'Setup Fees', accent: '#10B981' },
                { stat: '10–15', label: 'Days to Launch', accent: '#E2498A' },
                { stat: '4.9★', label: 'Client Rating', accent: '#F59E0B' },
              ].map(({ stat, label, accent }) => (
                <div
                  key={label}
                  className="rounded-2xl p-6 text-center"
                  style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${accent}30` }}
                >
                  <div className="text-2xl font-bold mb-1" style={{ color: accent }}>{stat}</div>
                  <div className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.45)' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section-pad bg-white" aria-labelledby="awdc-industries-heading">
        <div className="container-tight">
          <div className="text-center mb-14">
            <p className="section-label">Industries We Serve</p>
            <h2 id="awdc-industries-heading" className="section-title">
              Affordable Web Design for Every Industry
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              We&rsquo;ve built websites for small businesses across dozens of industries. Whatever your trade, our affordable web design company delivers results that fit your niche.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {industries.map(({ name, accent }) => (
              <div
                key={name}
                className="relative overflow-hidden rounded-2xl p-5 text-center"
                style={{ background: '#FAFBFF', border: `1px solid ${accent}22` }}
              >
                <div className="absolute inset-x-0 top-0 h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />
                <div className="w-2 h-2 rounded-full mx-auto mb-3" style={{ background: accent }} />
                <p className="font-semibold text-gray-800 text-sm">{name}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/contact" className="btn-primary">Start Your Website Today</Link>
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
              Affordable Web Design Company FAQ
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
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(86,54,209,0.18) 1.5px, transparent 1.5px)', backgroundSize: '28px 28px', opacity: 0.3 }} />
        <div className="container-tight relative z-10 text-center">
          <p className="section-label-white">Ready to Get Started?</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6" style={{ letterSpacing: '-0.025em' }}>
            Ready to Work With an Affordable<br className="hidden sm:block" /> Web Design Company?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Tell us about your business and we&rsquo;ll have your professional website live in 10–15 days. No upfront fees, no long-term contracts — just results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-white px-9 py-4">Get a Free Quote</Link>
            <Link href="/pricing" className="btn-outline-white px-9 py-4">View Plans</Link>
          </div>
        </div>
      </section>
    </>
  )
}
