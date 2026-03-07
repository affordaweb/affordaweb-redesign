import type { Metadata } from 'next'
import Link from 'next/link'
import InnerHeroBg from '@/components/InnerHeroBg'

export const metadata: Metadata = {
  title: 'Web Design & SEO Services | AffordaWeb Solutions',
  description:
    'Explore our full range of affordable web design services: custom website design, redesigns, SEO optimization, maintenance, hosting, and e-commerce solutions for small businesses.',
  alternates: { canonical: 'https://affordawebsolutions.com/services' },
  openGraph: {
    title: 'Web Design & SEO Services | AffordaWeb Solutions',
    description: 'Professional website design, SEO, and maintenance services for small businesses starting at $69/month.',
    url: 'https://affordawebsolutions.com/services',
  },
}

function IconCheck() {
  return (
    <svg className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  )
}

const services = [
  {
    id: 'design',
    tag: 'Core Service',
    title: 'Website Design',
    headline: 'Custom Website Design for Small Businesses',
    description: `Most web agencies charge thousands upfront before they know anything about your business. We built this differently. For $69 a month, you get a custom site that is responsive on every device, with clean SEO structure built in from the start.

You share your goals, preferred style, and the features you need. We design and launch a professional website with your branding, your colors, and your voice. Clean code, fast loading, built to convert.

Works for freelancers, local service providers, startups, and small businesses that have outgrown a free template.`,
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
      provider: { '@type': 'Organization', name: 'AffordaWeb Solutions', url: 'https://affordawebsolutions.com' },
      url: `https://affordawebsolutions.com/services#${s.id}`,
    },
  })),
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero — Dark navy */}
      <section
        className="relative overflow-hidden pt-[200px] pb-[100px] text-center"
        style={{ background: '#0F0F1A' }}
      >
        <InnerHeroBg />
        <div className="container-tight relative z-10">
          <p className="section-label-white">What We Offer</p>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
            style={{ letterSpacing: '-0.025em' }}
          >
            Affordable Web Design Services<br className="hidden sm:block" /> for Small Businesses
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: 'rgba(255,255,255,0.55)' }}>
            From custom website design to SEO, hosting, and maintenance. Everything your business needs online, bundled into one simple monthly plan.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['Website Design', 'SEO Optimization', 'Hosting & SSL', 'E-Commerce', 'Maintenance', 'Redesign'].map(label => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-full px-4 py-2"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.14)' }}
              >
                <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#4D9BE5' }} />
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

      {/* Services detail — alternating white / light */}
      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className="section-pad"
          style={{ background: i % 2 === 0 ? '#ffffff' : '#F7FBFF' }}
          aria-labelledby={`${service.id}-heading`}
        >
          <div className="container-tight">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}>

              {/* Content */}
              <div className={i % 2 !== 0 ? 'lg:col-start-2' : ''}>
                <span className="badge bg-primary-50 text-primary-600 mb-4 text-xs">
                  {service.tag}
                </span>
                <h2
                  id={`${service.id}-heading`}
                  className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5"
                  style={{ letterSpacing: '-0.01em' }}
                >
                  {service.headline}
                </h2>
                {service.description.split('\n\n').map((para, j) => (
                  <p key={j} className="text-gray-500 leading-relaxed mb-4">{para.trim()}</p>
                ))}
                <Link href="/contact" className="btn-primary mt-4 inline-flex">
                  Get Started
                </Link>
              </div>

              {/* Features card */}
              <div className={`card ${i % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="icon-wrap mb-6">
                  {service.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-5">{service.title} — What&apos;s Included</h3>
                <ul className="space-y-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                      <IconCheck />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <Link href="/pricing" className="text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors">
                    View pricing for this service →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA — Dark navy */}
      <section
        className="section-pad relative overflow-hidden"
        style={{ background: '#0F0F1A' }}
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
        </div>
      </section>
    </>
  )
}
