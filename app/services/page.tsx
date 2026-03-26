import type { Metadata } from 'next'
import Link from 'next/link'
import InnerHeroBg from '@/components/InnerHeroBg'

export const metadata: Metadata = {
  title: 'Web Design & SEO Services for Small Businesses',
  description:
    'Affordable web design services for small businesses: custom design, SEO, hosting, maintenance, and e-commerce. Everything bundled from $69/month.',
  alternates: { canonical: 'https://www.affordawebsolutions.com/services' },
  openGraph: {
    title: 'Web Design & SEO Services for Small Businesses',
    description: 'Professional website design, SEO, and maintenance services for small businesses starting at $69/month.',
    url: 'https://www.affordawebsolutions.com/services',
    images: [{ url: 'https://www.affordawebsolutions.com/og-image.png', width: 1200, height: 630, alt: 'AffordaWeb Solutions Web Design Services' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design & SEO Services for Small Businesses',
    description: 'Professional website design, SEO, and maintenance services for small businesses starting at $69/month.',
    images: ['https://www.affordawebsolutions.com/og-image.png'],
  },
}

function IconCheck() {
  return (
    <svg className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  )
}

const serviceColors = [
  { accent: '#5636D1', light: 'rgba(86,54,209,0.08)', border: 'rgba(86,54,209,0.2)',  glow: 'rgba(86,54,209,0.12)'  },
  { accent: '#E2498A', light: 'rgba(226,73,138,0.08)', border: 'rgba(226,73,138,0.2)', glow: 'rgba(226,73,138,0.10)' },
  { accent: '#06B6D4', light: 'rgba(6,182,212,0.08)',  border: 'rgba(6,182,212,0.2)',  glow: 'rgba(6,182,212,0.10)'  },
  { accent: '#F59E0B', light: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.2)', glow: 'rgba(245,158,11,0.10)' },
  { accent: '#10B981', light: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.2)', glow: 'rgba(16,185,129,0.10)' },
]

const services = [
  {
    id: 'design',
    tag: 'Core Service',
    title: 'Website Design',
    headline: 'Custom Website Design for Small Businesses',
    description: `Most web agencies charge thousands upfront before they know anything about your business. We built this differently. For $69 a month, you get a custom site that is responsive on every device, with clean SEO structure built in from the start.

You share your goals, preferred style, and the features you need. We design and launch a professional website with your branding, your colors, and your voice. Clean code, fast loading, built to convert.

Works for freelancers, local service providers, startups, and small businesses that have outgrown a free template.`,
    paragraphs: [
      <>Most web agencies charge thousands upfront before they know anything about your business. We built this differently. For <Link href="/pricing" className="font-medium text-primary-500 hover:underline">$69 a month</Link>, you get a custom site that is responsive on every device, with clean SEO structure built in from the start.</>,
      <>You share your goals, preferred style, and the features you need. We design and launch a professional website with your branding, your colors, and your voice. Clean code, fast loading, built to convert.</>,
      <>Works for freelancers, local service providers, startups, and small businesses that have outgrown a free template.</>,
    ],
    features: [
      'Fully responsive design for all devices',
      'Custom layout, color palette, and branding',
      'SEO-optimized structure and clean code',
      'Fast loading speed and smooth navigation',
      'Built to convert visitors into customers',
      'SSL certificate included on every plan',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 'redesign',
    tag: 'Popular',
    title: 'Website Redesign',
    headline: 'Transform Your Outdated Website',
    description: `An outdated site costs you business. Not dramatically, just quietly. Visitors land, see something that looks like it was built years ago, and leave. A redesign fixes that without losing the content and rankings you have already built.

We give your site a complete visual and functional makeover. Modern, mobile-friendly layout. Improved performance. Sharper conversion focus. Your existing content stays put.

Right move if your site works but no longer represents what you actually offer.`,
    features: [
      'Complete visual and functional makeover',
      'Preserves existing content and SEO',
      'Modern, mobile-friendly layouts',
      'Improved performance and conversion focus',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    id: 'seo',
    tag: 'Grow Traffic',
    title: 'SEO Optimization',
    headline: 'Rank Higher. Get Found. Grow Faster.',
    description: `Google does not reward the prettiest site. It rewards the most structured one. Every site we build starts with clean code, proper meta setup, and the structural decisions that search engines pay attention to.

Standard and Premium plans include SEO as a standard feature, not an upsell. Proven keyword strategies, content structure, Google Analytics integration, and a long-term organic growth focus.

If your site has been live for years but traffic has barely moved, this is the thing you have not tried yet.`,
    paragraphs: [
      <>Google does not reward the prettiest site. It rewards the most structured one. Every site we build starts with clean code, proper meta setup, and the structural decisions that search engines pay attention to.</>,
      <><Link href="/pricing" className="font-medium text-primary-500 hover:underline">Standard and Premium plans</Link> include SEO as a standard feature, not an upsell. Proven keyword strategies, content structure, Google Analytics integration, and a long-term organic growth focus.</>,
      <>If your site has been live for years but traffic has barely moved, start with our <Link href="/seo-audit" className="font-medium text-primary-500 hover:underline">free SEO audit tool</Link> — it shows you exactly where you stand.</>,
    ],
    features: [
      'Higher rankings on major search engines',
      'Proven keyword and content strategies',
      'Long-term organic growth focus',
      'Clean site structure and meta optimization',
      'Google Analytics integration',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    id: 'maintenance',
    tag: 'Stay Current',
    title: 'Website Maintenance',
    headline: 'We Handle Everything. You Run Your Business.',
    description: `Plugins go out of date. Security vulnerabilities do not announce themselves. Most business owners learn something broke because a customer mentioned it.

Every AffordaWeb plan includes maintenance. Regular plugin and security updates, backups, and performance monitoring. Standard and Premium clients get unlimited content updates, typically turned around within 24 hours.

You run your business. We keep the site running.`,
    features: [
      'Regular plugin and security updates',
      'Backups and performance monitoring',
      'Ongoing uptime and technical checks',
      'Unlimited content updates (Standard and Premium)',
      'Response within 24 hours',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: 'hosting',
    tag: 'Included',
    title: 'Shared Web Hosting',
    headline: 'Reliable Hosting Included with Every Plan',
    description: `Hosting should not be one more vendor to manage. Every AffordaWeb plan bundles it in. High-performance, reliable hosting with an SSL certificate included on every account.

You also get 1GB of professional email connected to your domain. One provider, one monthly bill, one contact for anything technical.

Bundled because separating it out just adds friction.`,
    features: [
      'High-performance, reliable hosting',
      'SSL certificate included',
      '24/7 monitoring and guaranteed uptime',
      '1GB free professional email (1 user)',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'AffordaWeb Solutions Services',
  itemListElement: services.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Service',
      name: s.title,
      description: s.description.split('\n')[0],
      provider: { '@type': 'Organization', name: 'AffordaWeb Solutions', url: 'https://www.affordawebsolutions.com' },
      url: `https://www.affordawebsolutions.com/services#${s.id}`,
    },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.affordawebsolutions.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.affordawebsolutions.com/services' },
  ],
}

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero — Dark navy */}
      <section
        className="relative overflow-hidden pt-[200px] pb-[100px] text-center"
        style={{ background: '#0F0F1A' }}
      >
        <InnerHeroBg page="services" />
        <div className="container-tight relative z-10">
          <p className="section-label-white">What We Offer</p>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
            style={{ letterSpacing: '-0.025em' }}
          >
            Affordable Web Design Services<br className="hidden sm:block" /> for Small Businesses
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: 'rgba(255,255,255,0.55)' }}>
            From <Link href="/portfolio" className="font-medium hover:opacity-90" style={{ color: 'rgba(255,255,255,0.85)' }}>custom website design</Link> to SEO, hosting, and maintenance. Everything your business needs online, bundled into one simple monthly plan.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['Website Design', 'SEO Optimization', 'Hosting & SSL', 'E-Commerce', 'Maintenance', 'Redesign'].map(label => (
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
              Get a Free Quote
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/pricing" className="btn-outline-white">View Pricing</Link>
            <Link href="/seo-audit" className="btn-outline-white">🔍 Free SEO Audit</Link>
          </div>
        </div>
      </section>

      {/* Services detail */}
      {services.map((service, i) => {
        const c = serviceColors[i]
        const flip = i % 2 !== 0
        return (
          <section
            key={service.id}
            id={service.id}
            className="section-pad relative overflow-hidden"
            style={{ background: i % 2 === 0 ? '#ffffff' : '#FAFBFF' }}
            aria-labelledby={`${service.id}-heading`}
          >
            {/* Top accent line */}
            <div className="absolute inset-x-0 top-0 h-px pointer-events-none" style={{ background: `linear-gradient(90deg, transparent, ${c.accent} 40%, transparent)` }} />
            {/* Ambient glow */}
            <div className="absolute pointer-events-none" style={{ width: '500px', height: '500px', borderRadius: '50%', background: `radial-gradient(circle, ${c.glow}, transparent 65%)`, top: '50%', [flip ? 'right' : 'left']: '-200px', transform: 'translateY(-50%)' }} />
            {/* Large decorative number */}
            <div
              className="absolute top-1/2 -translate-y-1/2 font-extrabold select-none pointer-events-none hidden lg:block"
              style={{ fontSize: '260px', lineHeight: 1, color: c.light, [flip ? 'right' : 'left']: '-20px', letterSpacing: '-0.05em' }}
            >
              {String(i + 1).padStart(2, '0')}
            </div>

            <div className="container-tight relative z-10">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center ${flip ? 'lg:grid-flow-dense' : ''}`}>

                {/* Content */}
                <div className={flip ? 'lg:col-start-2' : ''}>
                  <span
                    className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5"
                    style={{ background: c.light, color: c.accent, border: `1px solid ${c.border}` }}
                  >
                    {service.tag}
                  </span>
                  <h2
                    id={`${service.id}-heading`}
                    className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5"
                    style={{ letterSpacing: '-0.02em', lineHeight: 1.15 }}
                  >
                    {service.headline}
                  </h2>
                  {service.paragraphs
                    ? service.paragraphs.map((para, j) => (
                        <p key={j} className="text-gray-500 leading-relaxed mb-4 text-[15px]">{para}</p>
                      ))
                    : service.description.split('\n\n').map((para, j) => (
                        <p key={j} className="text-gray-500 leading-relaxed mb-4 text-[15px]">{para.trim()}</p>
                      ))
                  }
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 font-bold rounded-full px-7 py-3.5 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg text-white"
                      style={{ background: `linear-gradient(135deg, ${c.accent}, ${c.accent}cc)`, boxShadow: `0 4px 20px ${c.glow}` }}
                    >
                      Get Started
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                    <Link
                      href={`/services/${service.id}`}
                      className="inline-flex items-center gap-2 font-semibold rounded-full px-6 py-3.5 text-sm transition-all duration-300 hover:-translate-y-0.5"
                      style={{ background: c.light, color: c.accent, border: `1px solid ${c.border}` }}
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>

                {/* Features card */}
                <div
                  className={`relative rounded-3xl p-8 ${flip ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                  style={{ background: '#0F0F1A', border: `1px solid ${c.border}`, boxShadow: `0 0 0 1px ${c.border}, 0 24px 80px rgba(0,0,0,0.12)` }}
                >
                  {/* Card glow */}
                  <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none" style={{ background: `radial-gradient(circle, ${c.accent}30, transparent 65%)` }} />
                  {/* Icon */}
                  <div
                    className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{ background: `linear-gradient(135deg, ${c.accent}25, ${c.accent}10)`, border: `1px solid ${c.border}`, color: c.accent }}
                  >
                    {service.icon}
                  </div>
                  <h3 className="relative z-10 font-bold text-white text-base mb-5">{service.title} — What&apos;s Included</h3>
                  <ul className="relative z-10 space-y-3">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                        <span className="shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center" style={{ background: `${c.accent}30`, color: c.accent }}>
                          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="relative z-10 mt-6 pt-6" style={{ borderTop: `1px solid rgba(255,255,255,0.07)` }}>
                    <Link href="/pricing" className="text-sm font-semibold transition-colors hover:opacity-80" style={{ color: c.accent }}>
                      View pricing for this service →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* CTA — Dark navy */}
      <section
        className="section-pad relative overflow-hidden"
        style={{ background: '#0F0F1A' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(37,119,201,0.18) 1.5px, transparent 1.5px)',
            backgroundSize: '28px 28px',
            opacity: 0.3,
          }}
        />
        <div className="container-tight relative z-10 text-center">
          <p className="section-label-white">Ready to Get Started?</p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
            style={{ letterSpacing: '-0.025em' }}
          >
            Let&apos;s Build Something Great Together
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Tell us about your project and receive a no-obligation quote within 24 hours. We serve small businesses nationwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-white px-9 py-4">Get a Free Quote</Link>
            <Link href="/pricing" className="btn-outline-white px-9 py-4">View Pricing</Link>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="text-white/30 text-sm hidden sm:block">or try a free tool:</span>
            <Link href="/recommendation" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-white/70 text-sm font-medium hover:bg-white/10 hover:text-white transition-all">
              🎨 Free Website Recommendation
            </Link>
            <Link href="/seo-audit" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-white/70 text-sm font-medium hover:bg-white/10 hover:text-white transition-all">
              🔍 Free SEO Audit
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
