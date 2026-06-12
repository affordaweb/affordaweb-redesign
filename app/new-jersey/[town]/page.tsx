import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import InnerHeroBg from '@/components/InnerHeroBg'
import { njTowns } from '@/lib/nj-towns-data'

export async function generateStaticParams() {
  return njTowns.map((t) => ({ town: t.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ town: string }>
}): Promise<Metadata> {
  const { town } = await params
  const t = njTowns.find((t) => t.slug === town)
  if (!t) return {}
  return {
    title: { absolute: t.metaTitle },
    description: t.metaDesc,
    keywords: [
      `web design ${t.name} NJ`,
      `website design ${t.name} New Jersey`,
      `affordable web design ${t.name} nj`,
      `${t.name} NJ web design company`,
      `${t.name} website designer`,
      `small business website ${t.name} nj`,
      `cheap web design ${t.name} nj`,
    ],
    alternates: { canonical: `https://www.affordawebsolutions.com/new-jersey/${t.slug}` },
    openGraph: {
      type: 'website',
      title: t.metaTitle,
      description: t.metaDesc,
      url: `https://www.affordawebsolutions.com/new-jersey/${t.slug}`,
      images: [{ url: 'https://www.affordawebsolutions.com/og-image.png', width: 1200, height: 630, alt: `Affordable Web Design ${t.name} NJ` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.metaTitle,
      description: t.metaDesc,
      images: ['https://www.affordawebsolutions.com/og-image.png'],
    },
  }
}

const services = [
  {
    title: 'Custom Website Design',
    desc: 'Mobile-first, SEO-ready websites built around your local business goals. Launched in 10–15 business days.',
    href: '/services/design',
    accent: '#5636D1',
  },
  {
    title: 'Local SEO Optimization',
    desc: 'Rank for local searches. Built-in schema markup and Google-ready structure targeting your area.',
    href: '/services/seo',
    accent: '#E2498A',
  },
  {
    title: 'Website Hosting & SSL',
    desc: 'Managed NJ-friendly hosting with guaranteed uptime, free SSL, and 1GB professional email.',
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

const benefits = [
  'No $3,000+ upfront agency fee',
  'Local SEO built into every plan',
  'Live in 10–15 business days',
  'One monthly bill — design, hosting, SSL, maintenance',
  'Cancel anytime, no long-term contracts',
]

export default async function NjTownPage({
  params,
}: {
  params: Promise<{ town: string }>
}) {
  const { town } = await params
  const t = njTowns.find((t) => t.slug === town)
  if (!t) notFound()

  const otherTowns = njTowns.filter((o) => o.slug !== t.slug)

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.affordawebsolutions.com' },
      { '@type': 'ListItem', position: 2, name: 'New Jersey Web Design', item: 'https://www.affordawebsolutions.com/new-jersey' },
      { '@type': 'ListItem', position: 3, name: `${t.name} Web Design`, item: `https://www.affordawebsolutions.com/new-jersey/${t.slug}` },
    ],
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'AffordaWeb Solutions',
    url: 'https://www.affordawebsolutions.com',
    description: t.metaDesc,
    areaServed: { '@type': 'City', name: t.name, containedInPlace: { '@type': 'State', name: 'New Jersey' } },
    serviceType: ['Website Design', 'SEO Optimization', 'Web Hosting', 'Website Maintenance'],
    priceRange: '$69–$149/month',
    email: 'hello@affordawebsolutions.com',
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden pt-[200px] pb-[100px] text-center" style={{ background: '#0F0F1A' }}>
        <InnerHeroBg page="services" />
        <div className="container-tight relative z-10">
          <Link href="/new-jersey" className="inline-flex items-center gap-1 text-xs font-medium mb-5 transition-colors" style={{ color: 'rgba(255,255,255,0.4)' }}>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to New Jersey
          </Link>
          <p className="section-label-white">{t.name}, New Jersey</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6" style={{ letterSpacing: '-0.025em' }}>
            {t.headline}
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: 'rgba(255,255,255,0.55)' }}>
            {t.subhead}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-white">
              {t.cta}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/pricing" className="btn-outline-white">View Pricing</Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad bg-white" aria-labelledby="town-services-heading">
        <div className="container-tight">
          <div className="text-center mb-14">
            <p className="section-label">What We Offer {t.name} Businesses</p>
            <h2 id="town-services-heading" className="section-title">
              Everything Your {t.name} Business Needs Online
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              From custom website design to local SEO and managed hosting — all bundled into one affordable monthly plan built for {t.name} small businesses.
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

      {/* Why Choose Us */}
      <section className="section-pad bg-white" aria-labelledby="town-why-heading">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label">Why Choose Us</p>
              <h2 id="town-why-heading" className="section-title mb-6">
                Affordable Web Design for {t.name} Small Businesses
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                Most web design agencies in New Jersey charge $3,000–$10,000 upfront. AffordaWeb delivers the same professional quality at <Link href="/pricing" className="text-primary-600 font-medium hover:underline">$69/month</Link> — with no large upfront cost and no long-term contract.
              </p>
              <p className="text-gray-500 leading-relaxed mb-6">
                Every site includes local SEO setup so your {t.name} business can rank for searches like &ldquo;affordable web design {t.name} NJ&rdquo; or &ldquo;{t.name} website designer.&rdquo; We build the structure Google rewards, from day one.
              </p>
              <div className="space-y-3 mb-8">
                {benefits.map((item) => (
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

      {/* Other NJ Towns */}
      <section className="section-pad relative overflow-hidden" style={{ background: '#0F0F1A' }}>
        <div className="absolute inset-x-0 top-0 h-px pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, #5636D1 40%, transparent)' }} />
        <div className="container-tight relative z-10">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5" style={{ background: 'rgba(86,54,209,0.12)', color: '#5636D1', border: '1px solid rgba(86,54,209,0.25)' }}>
              Other NJ Cities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
              Web Design Services Across New Jersey
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.45)' }}>
              We serve small businesses in every corner of New Jersey. Click your town below.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {otherTowns.map(({ name, slug }) => (
              <Link
                key={slug}
                href={`/new-jersey/${slug}`}
                className="group rounded-xl p-4 text-center transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <h3 className="font-semibold text-sm group-hover:text-primary-300 transition-colors" style={{ color: 'rgba(255,255,255,0.75)' }}>{name}</h3>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/new-jersey" className="btn-outline-white">View All New Jersey</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-white">
        <div className="container-tight max-w-3xl">
          <div className="text-center mb-12">
            <p className="section-label">Questions</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" style={{ letterSpacing: '-0.02em' }}>
              {t.name} Web Design FAQ
            </h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: `Do you work with businesses in ${t.name}, NJ?`,
                a: `Yes. We serve ${t.name} businesses and the surrounding New Jersey area. All work is done remotely — we handle everything online, from kickoff to launch.`,
              },
              {
                q: `How much does a website cost for a ${t.name} small business?`,
                a: 'Our plans start at $69/month with no setup fee. That includes custom design, hosting, SSL, and basic maintenance. Standard ($99/mo) and Premium ($149/mo) plans add SEO, unlimited updates, and e-commerce.',
              },
              {
                q: `Will my ${t.name} website rank on Google?`,
                a: `Yes. Every site we build includes local SEO structure: location-specific meta tags, schema markup, and Google-optimized content targeting ${t.name} and the surrounding New Jersey area.`,
              },
              {
                q: `How quickly can my ${t.name} business get online?`,
                a: 'Most sites are designed and launched within 10–15 business days after you submit your content and preferences. We handle design, development, hosting setup, and launch — you just review and approve.',
              },
            ].map(({ q, a }, idx) => {
              const colors = ['#5636D1','#E2498A','#06B6D4','#10B981']
              const accent = colors[idx % colors.length]
              const border = `${accent}30`
              return (
                <details key={q} className="group overflow-hidden rounded-2xl" style={{ background: '#FAFBFF', border: `1px solid ${border}` }}>
                  <summary className="relative flex items-center justify-between gap-4 cursor-pointer select-none p-6 font-semibold text-base list-none [&::-webkit-details-marker]:hidden" style={{ color: '#0F0F1A' }}>
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
                    <div className="w-full h-px mb-4" style={{ background: 'rgba(86,54,209,0.08)' }} />
                    <p className="text-sm leading-relaxed text-gray-500">{a}</p>
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
            Let&rsquo;s Build Your {t.name} Business Website
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Tell us about your {t.name} business and we&rsquo;ll have your professional website live in 10–15 days. No upfront cost, no contracts.
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
