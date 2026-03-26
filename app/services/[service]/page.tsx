import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import InnerHeroBg from '@/components/InnerHeroBg'
import { services } from '@/lib/services-data'

export async function generateStaticParams() {
  return services.map((s) => ({ service: s.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>
}): Promise<Metadata> {
  const { service } = await params
  const s = services.find((s) => s.id === service)
  if (!s) return {}
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: `https://www.affordawebsolutions.com/services/${s.id}` },
    openGraph: {
      type: 'website',
      title: s.metaTitle,
      description: s.metaDescription,
      url: `https://www.affordawebsolutions.com/services/${s.id}`,
      images: [{ url: 'https://www.affordawebsolutions.com/og-image.png', width: 1200, height: 630, alt: s.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: s.metaTitle,
      description: s.metaDescription,
      images: ['https://www.affordawebsolutions.com/og-image.png'],
    },
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>
}) {
  const { service } = await params
  const s = services.find((s) => s.id === service)
  if (!s) notFound()

  const c = s.color
  const related = services.filter((r) => r.id !== s.id)

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.affordawebsolutions.com' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.affordawebsolutions.com/services' },
      { '@type': 'ListItem', position: 3, name: s.title, item: `https://www.affordawebsolutions.com/services/${s.id}` },
    ],
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.title,
    description: s.description[0],
    provider: { '@type': 'Organization', name: 'AffordaWeb Solutions', url: 'https://www.affordawebsolutions.com' },
    url: `https://www.affordawebsolutions.com/services/${s.id}`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden pt-[200px] pb-[100px] text-center"
        style={{ background: '#0F0F1A' }}
      >
        <InnerHeroBg page="services" />
        <div className="container-tight relative z-10">
          <div className="flex items-center justify-center gap-2 mb-5">
            <Link
              href="/services"
              className="text-xs font-medium transition-colors text-white/40 hover:text-white/70"
            >
              ← All Services
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-xs font-medium text-white/50">{s.title}</span>
          </div>
          <span
            className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full mb-6"
            style={{ background: `${c.accent}22`, color: c.accent, border: `1px solid ${c.accent}44` }}
          >
            {s.tag}
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
            style={{ letterSpacing: '-0.025em' }}
          >
            {s.headline}
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: 'rgba(255,255,255,0.55)' }}>
            {s.description[0]}
          </p>
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

      {/* ── Service Detail ── */}
      <section className="section-pad relative overflow-hidden" style={{ background: '#ffffff' }}>
        {/* Top accent line */}
        <div
          className="absolute inset-x-0 top-0 h-px pointer-events-none"
          style={{ background: `linear-gradient(90deg, transparent, ${c.accent} 40%, transparent)` }}
        />
        {/* Ambient glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${c.glow}, transparent 65%)`,
            top: '50%',
            left: '-200px',
            transform: 'translateY(-50%)',
          }}
        />

        <div className="container-tight relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* Content */}
            <div>
              <span
                className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5"
                style={{ background: c.light, color: c.accent, border: `1px solid ${c.border}` }}
              >
                {s.tag}
              </span>
              <h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5"
                style={{ letterSpacing: '-0.02em', lineHeight: 1.15 }}
              >
                {s.title} — What to Expect
              </h2>
              {(s.paragraphs ?? s.description).map((para, j) => (
                <p key={j} className="text-gray-500 leading-relaxed mb-4 text-[15px]">{para}</p>
              ))}
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 font-bold rounded-full px-7 py-3.5 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg text-white"
                style={{
                  background: `linear-gradient(135deg, ${c.accent}, ${c.accent}cc)`,
                  boxShadow: `0 4px 20px ${c.glow}`,
                }}
              >
                Get Started
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Features card */}
            <div
              className="relative rounded-3xl p-8"
              style={{
                background: '#0F0F1A',
                border: `1px solid ${c.border}`,
                boxShadow: `0 0 0 1px ${c.border}, 0 24px 80px rgba(0,0,0,0.12)`,
              }}
            >
              <div
                className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none"
                style={{ background: `radial-gradient(circle, ${c.accent}30, transparent 65%)` }}
              />
              <div
                className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{
                  background: `linear-gradient(135deg, ${c.accent}25, ${c.accent}10)`,
                  border: `1px solid ${c.border}`,
                  color: c.accent,
                }}
              >
                {s.icon}
              </div>
              <h3 className="relative z-10 font-bold text-white text-base mb-5">
                {s.title} — What&apos;s Included
              </h3>
              <ul className="relative z-10 space-y-3">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                    <span
                      className="shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center"
                      style={{ background: `${c.accent}30`, color: c.accent }}
                    >
                      <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="relative z-10 mt-6 pt-6" style={{ borderTop: `1px solid rgba(255,255,255,0.07)` }}>
                <Link
                  href="/pricing"
                  className="text-sm font-semibold transition-colors hover:opacity-80"
                  style={{ color: c.accent }}
                >
                  View pricing for this service →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Other Services ── */}
      <section className="section-pad relative overflow-hidden" style={{ background: '#FAFBFF' }}>
        <div className="absolute inset-x-0 top-0 h-px pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, rgba(86,54,209,0.3) 40%, transparent)' }} />
        <div className="container-tight relative z-10">
          <div className="text-center mb-12">
            <p className="section-label">More Services</p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-gray-900"
              style={{ letterSpacing: '-0.025em' }}
            >
              Everything Your Business Needs Online
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {related.map((r) => (
              <Link
                key={r.id}
                href={`/services/${r.id}`}
                className="group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  background: '#ffffff',
                  border: `1.5px solid ${r.color.border}`,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${r.color.accent}22, ${r.color.accent}10)`,
                    border: `1px solid ${r.color.border}`,
                    color: r.color.accent,
                  }}
                >
                  {r.icon}
                </div>
                <span
                  className="inline-block text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full mb-3"
                  style={{ background: r.color.light, color: r.color.accent }}
                >
                  {r.tag}
                </span>
                <h3 className="font-bold text-gray-900 text-sm mb-2 group-hover:text-gray-700 transition-colors">
                  {r.title}
                </h3>
                <p className="text-xs leading-relaxed text-gray-500 line-clamp-2">{r.description[0]}</p>
                <span
                  className="inline-flex items-center gap-1 mt-4 text-xs font-semibold transition-colors"
                  style={{ color: r.color.accent }}
                >
                  Learn more
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-pad relative overflow-hidden" style={{ background: '#0F0F1A' }}>
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
            <Link
              href="/recommendation"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-white/70 text-sm font-medium hover:bg-white/10 hover:text-white transition-all"
            >
              🎨 Free Website Recommendation
            </Link>
            <Link
              href="/seo-audit"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-white/70 text-sm font-medium hover:bg-white/10 hover:text-white transition-all"
            >
              🔍 Free SEO Audit
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
