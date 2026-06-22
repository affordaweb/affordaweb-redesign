import type { Metadata } from 'next'
import Link from 'next/link'
import InnerHeroBg from '@/components/InnerHeroBg'

export const metadata: Metadata = {
  title: { absolute: 'Affordable Web Design Houston, TX | $69/mo | AffordaWeb Solutions' },
  description:
    'Affordable web design in Houston, TX starting at $69/mo. Monthly website design packages with hosting, SEO, and SSL included. Serving Harris, Fort Bend, Montgomery & Galveston counties. No setup fees, no contracts.',
  keywords: [
    'affordable web design Houston',
    'web design Houston',
    'cheap website design Houston',
    'small business website Houston',
    'Houston web designer for small business',
    'monthly website design Houston',
    'Houston website design pricing',
    'affordable web design Houston TX',
    'affordable web designer near me Houston',
    'Houston small business website',
    'web design no upfront cost Houston',
    'web design company Houston',
  ],
  alternates: { canonical: 'https://www.affordawebsolutions.com/houston' },
  openGraph: {
    type: 'website',
    title: 'Affordable Web Design Houston, TX | $69/mo | AffordaWeb Solutions',
    description:
      'Affordable web design in Houston, TX starting at $69/month. Monthly website design packages with hosting, SEO, SSL, and maintenance included. Serving all Houston metro areas.',
    url: 'https://www.affordawebsolutions.com/houston',
    images: [{ url: 'https://www.affordawebsolutions.com/og-image.png', width: 1200, height: 630, alt: 'Affordable Web Design Houston TX' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Affordable Web Design Houston, TX | $69/mo | AffordaWeb Solutions',
    description: 'Affordable web design in Houston, TX starting at $69/month. Monthly website design packages with hosting, SEO, SSL included.',
    images: ['https://www.affordawebsolutions.com/og-image.png'],
  },
}

const houstonCities = [
  'Houston', 'Pearland', 'Sugar Land', 'The Woodlands', 'Katy',
  'Pasadena', 'League City', 'Friendswood', 'Missouri City', 'Baytown',
  'Clear Lake', 'Conroe', 'Spring', 'Humble', 'Cypress',
  'Tomball', 'Kingwood', 'Stafford', 'Missouri City', 'Galveston',
  'Texas City', 'La Marque', 'Clute', 'Lake Jackson', 'Angleton',
  'Manvel', 'Alvin', 'Deer Park', 'La Porte', 'Seabrook',
]

const counties = [
  { name: 'Harris County', desc: 'The heart of Greater Houston — downtown, Midtown, Heights, Memorial, and Galleria.' },
  { name: 'Fort Bend County', desc: 'Sugar Land, Missouri City, and rapidly growing southwest suburbs.' },
  { name: 'Montgomery County', desc: 'The Woodlands, Conroe, and north Houston\'s expanding business corridor.' },
  { name: 'Galveston County', desc: 'League City, Friendswood, Clear Lake, and the Gulf Coast communities.' },
  { name: 'Brazoria County', desc: 'Pearland, Alvin, Angleton, and the southeast Houston commuter belt.' },
]

const services = [
  {
    title: 'Custom Website Design',
    desc: 'Mobile-first, SEO-ready websites built around your Houston business goals. Launched in 10–15 business days.',
    href: '/services/design',
    accent: '#5636D1',
  },
  {
    title: 'Local SEO Optimization',
    desc: 'Rank for "web design Houston" and location-specific searches. Built-in schema markup and Google-ready structure.',
    href: '/services/seo',
    accent: '#E2498A',
  },
  {
    title: 'Website Hosting & SSL',
    desc: 'Managed Houston-friendly hosting with guaranteed uptime, free SSL, and 1GB professional email.',
    href: '/services/hosting',
    accent: '#06B6D4',
  },
  {
    title: 'Website Maintenance',
    desc: 'Monthly updates, security monitoring, and content changes — handled within 24 hours.',
    href: '/services/maintenance',
    accent: '#10B981',
  },
]

const faqs = [
  {
    q: 'Do you work with businesses physically located in Houston, TX?',
    a: 'Yes. We serve Houston businesses across Harris, Fort Bend, Montgomery, Galveston, and Brazoria counties. All work is done remotely — we handle everything online, from kickoff to launch.',
  },
  {
    q: 'How much does a website cost for a Houston small business?',
    a: 'Our plans start at $69/month with no setup fee. That includes custom design, hosting, SSL, and basic maintenance. Standard ($99/mo) and Premium ($149/mo) plans add SEO, unlimited updates, and e-commerce.',
  },
  {
    q: 'Will my website rank for Houston-specific searches?',
    a: 'Yes. Every site we build includes local SEO structure: location-specific meta tags, schema markup, and Google-optimized content targeting Houston and surrounding areas. Standard and Premium plans include full local SEO setup.',
  },
  {
    q: 'How quickly can my Houston business get online?',
    a: 'Most sites are designed and launched within 10–15 business days after you submit your content and preferences. We handle design, development, hosting setup, and launch — you just review and approve.',
  },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.affordawebsolutions.com' },
    { '@type': 'ListItem', position: 2, name: 'Houston Web Design', item: 'https://www.affordawebsolutions.com/houston' },
  ],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://www.affordawebsolutions.com/#business',
  name: 'AffordaWeb Solutions',
  url: 'https://www.affordawebsolutions.com',
  description: 'Affordable website design for Houston small businesses starting at $69/month.',
  areaServed: [
    { '@type': 'City', name: 'Houston', containedInPlace: { '@type': 'State', name: 'Texas' } },
    { '@type': 'City', name: 'Sugar Land', containedInPlace: { '@type': 'State', name: 'Texas' } },
    { '@type': 'City', name: 'The Woodlands', containedInPlace: { '@type': 'State', name: 'Texas' } },
    { '@type': 'City', name: 'Katy', containedInPlace: { '@type': 'State', name: 'Texas' } },
    { '@type': 'City', name: 'Pearland', containedInPlace: { '@type': 'State', name: 'Texas' } },
  ],
  knowsAbout: ['Website Design', 'SEO Optimization', 'Web Hosting', 'Website Maintenance'],
  priceRange: '$69–$149/month',
  email: 'hello@affordawebsolutions.com',
}

export default function HoustonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden pt-[200px] pb-[100px] text-center" style={{ background: '#0F0F1A' }}>
        <InnerHeroBg page="services" />
        <div className="container-tight relative z-10">
          <p className="section-label-white">Houston</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6" style={{ letterSpacing: '-0.025em' }}>
            Affordable Web Design<br className="hidden sm:block" /> for Houston Small Businesses
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Professional websites for Houston businesses starting at <strong className="text-white">$69/month</strong> — custom design, local SEO, hosting, SSL, and ongoing maintenance bundled into one plan. No setup fees.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['Harris County', 'Fort Bend County', 'Montgomery County', 'Galveston County', 'Brazoria County'].map(label => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-full px-4 py-2"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.14)' }}
              >
                <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#2577C9' }} />
                <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.75)' }}>{label}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-white">
              Get a Free Houston Quote
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/pricing" className="btn-outline-white">View Pricing</Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad bg-white" aria-labelledby="houston-services-heading">
        <div className="container-tight">
          <div className="text-center mb-14">
            <p className="section-label">What We Offer Houston Businesses</p>
            <h2 id="houston-services-heading" className="section-title">
              Everything Your Houston Business Needs Online
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              From custom website design to local SEO and managed hosting — all bundled into one affordable monthly plan built for Houston small businesses.
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

      {/* Counties + Cities */}
      <section className="section-pad relative overflow-hidden" style={{ background: '#0F0F1A' }}>
        <div className="absolute inset-x-0 top-0 h-px pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, #5636D1 40%, transparent)' }} />
        <div className="container-tight relative z-10">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5" style={{ background: 'rgba(86,54,209,0.12)', color: '#5636D1', border: '1px solid rgba(86,54,209,0.25)' }}>
              Service Area
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
              Serving All of Houston
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.45)' }}>
              We work remotely with Houston businesses across every county. If you&rsquo;re in Greater Houston, we can build your website.
            </p>
          </div>

          {/* Counties */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {counties.map(({ name, desc }, i) => {
              const colors = ['#5636D1','#E2498A','#06B6D4','#F59E0B','#10B981']
              const accent = colors[i % colors.length]
              return (
                <div
                  key={name}
                  className="relative overflow-hidden rounded-2xl p-6"
                  style={{ background: '#0F0F1A', border: `1px solid ${accent}30` }}
                >
                  <div className="absolute inset-x-0 top-0 h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />
                  <h3 className="font-bold text-white mb-1">{name}</h3>
                  <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>{desc}</p>
                </div>
              )
            })}
          </div>

          {/* Cities */}
          <div className="text-center">
            <p className="text-sm font-semibold mb-4" style={{ color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Cities & Towns We Serve
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {houstonCities.map(city => (
                <span
                  key={city}
                  className="text-sm px-3 py-1 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why AffordaWeb for Houston */}
      <section className="section-pad bg-white" aria-labelledby="houston-why-heading">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label">Why Choose Us</p>
              <h2 id="houston-why-heading" className="section-title mb-6">
                The Affordable Option for Houston Small Businesses
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                Most Houston web design agencies charge $3,000–$10,000 upfront. AffordaWeb delivers the same professional quality at <Link href="/pricing" className="text-primary-600 font-medium hover:underline">$69/month</Link> — with no large upfront cost and no long-term contract.
              </p>
              <p className="text-gray-500 leading-relaxed mb-6">
                Every site includes local SEO setup so your business can rank for searches like &ldquo;affordable web design Houston&rdquo; or &ldquo;[your service] near me.&rdquo; We build the structure Google rewards, from day one.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'No $3,000+ upfront agency fee',
                  'Local SEO built into every plan',
                  'Live in 10–15 business days',
                  'One monthly bill — design, hosting, SSL, maintenance',
                  'Cancel anytime, no long-term contracts',
                ].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-primary-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">Get a Free Quote</Link>
                <Link href="/portfolio" className="btn-secondary">See Our Work</Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: '$69/mo', label: 'Starting Price', accent: '#5636D1' },
                { stat: '0', label: 'Setup Fees', accent: '#10B981' },
                { stat: '10–15', label: 'Days to Launch', accent: '#E2498A' },
                { stat: '4.9★', label: 'Client Rating', accent: '#F59E0B' },
              ].map(({ stat, label, accent }) => (
                <div
                  key={label}
                  className="rounded-2xl p-6 text-center"
                  style={{ background: '#FAFBFF', border: `1px solid ${accent}22` }}
                >
                  <div className="text-2xl font-bold mb-1" style={{ color: accent }}>{stat}</div>
                  <div className="text-xs text-gray-500 font-medium">{label}</div>
                </div>
              ))}
            </div>
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
              Houston Web Design FAQ
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map(({ q, a }, idx) => {
              const colors = ['#5636D1','#E2498A','#06B6D4','#10B981']
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
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(37,119,201,0.18) 1.5px, transparent 1.5px)', backgroundSize: '28px 28px', opacity: 0.3 }} />
        <div className="container-tight relative z-10 text-center">
          <p className="section-label-white">Ready to Get Online?</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6" style={{ letterSpacing: '-0.025em' }}>
            Let&rsquo;s Build Your Houston Business Website
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Tell us about your Houston business and we&rsquo;ll have your professional website live in 10–15 days. No upfront cost, no contracts.
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
