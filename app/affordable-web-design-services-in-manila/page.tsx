import type { Metadata } from 'next'
import Link from 'next/link'
import InnerHeroBg from '@/components/InnerHeroBg'

export const metadata: Metadata = {
  title: { absolute: 'Affordable Web Design Services in Manila, Philippines | $39/mo' },
  description:
    'Affordable web design services in Manila and across the Philippines from $39/mo. Top-rated Filipino web designers offering monthly website design packages with hosting and SSL included.',
  alternates: { canonical: 'https://www.affordawebsolutions.com/affordable-web-design-services-in-manila' },
  openGraph: {
    type: 'website',
    title: 'Affordable Web Design Services in Manila, Philippines | $39/mo',
    description:
      'Affordable web design services in Manila — monthly website design packages from $39/mo. Custom design, hosting, and SSL included. Built by top-rated Filipino web designers.',
    url: 'https://www.affordawebsolutions.com/affordable-web-design-services-in-manila',
    images: [{ url: 'https://www.affordawebsolutions.com/og-image.png', width: 1200, height: 630, alt: 'Affordable Web Design Manila Philippines' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Affordable Web Design Services in Manila, Philippines | $39/mo',
    description: 'Affordable web design services in Manila — monthly website design packages from $39/mo. Setup fees are currently waived.',
    images: ['https://www.affordawebsolutions.com/og-image.png'],
  },
  keywords: [
    'affordable web design philippines',
    'affordable web design services in manila',
    'web design manila',
    'affordable web design manila',
    'web design philippines',
    'filipino web designer',
    'affordable website design philippines',
    'cheap web design philippines',
    'website design manila philippines',
    'monthly website design packages',
    'pay monthly website design',
    'no upfront cost web design',
    'affordable web design company',
  ],
}

const manilaAreas = [
  'Makati', 'BGC (Bonifacio Global City)', 'Quezon City', 'Pasig', 'Mandaluyong',
  'San Juan', 'Parañaque', 'Las Piñas', 'Muntinlupa', 'Taguig',
  'Caloocan', 'Marikina', 'Pasay', 'Valenzuela', 'Malabon',
  'Navotas', 'Pateros', 'Manila (Ermita / Malate / Binondo)',
]

const regions = [
  { name: 'Metro Manila (NCR)', desc: 'Makati, BGC, Quezon City, Pasig, and all 17 cities in the National Capital Region.' },
  { name: 'Central Luzon (Region III)', desc: 'Angeles, Pampanga, Olongapo, Bulacan, and surrounding provinces.' },
  { name: 'CALABARZON (Region IV-A)', desc: 'Cavite, Laguna, Batangas, Rizal, and Quezon province.' },
  { name: 'Visayas', desc: 'Cebu City, Iloilo, Bacolod, Dumaguete, and surrounding areas.' },
  { name: 'Mindanao', desc: 'Davao City, Cagayan de Oro, Zamboanga, and across the region.' },
]

const services = [
  {
    title: 'Custom Website Design',
    desc: 'Mobile-first, SEO-ready websites built for Philippine businesses. Launched in 10–15 business days with pixel-perfect design.',
    href: '/services/design',
    accent: '#5636D1',
  },
  {
    title: 'Local & International SEO',
    desc: 'Rank for "affordable web design Philippines" and service-specific searches. Schema markup and Google-optimized structure included.',
    href: '/services/seo',
    accent: '#E2498A',
  },
  {
    title: 'Website Hosting & SSL',
    desc: 'Managed hosting with guaranteed uptime, free SSL certificate, and a 1GB professional email. No extra setup.',
    href: '/services/hosting',
    accent: '#06B6D4',
  },
  {
    title: 'Ongoing Website Maintenance',
    desc: 'Monthly content updates, security monitoring, and design changes — all handled within 24–48 hours.',
    href: '/services/maintenance',
    accent: '#10B981',
  },
]

const faqs = [
  {
    q: 'Are you based in the Philippines?',
    a: 'Yes. AffordaWeb Solutions is a team of top-rated Filipino web designers and virtual assistants based in the Philippines. We also serve clients internationally through Upwork and our own platform — bringing world-class design at Philippine-friendly rates.',
  },
  {
    q: 'How much does a website cost in the Philippines?',
    a: 'Starter is $39/month, Business is $69/month, and Virtual Employee is $149/month. Normal setup fees are currently waived; see the pricing page for exact inclusions.',
  },
  {
    q: 'Do you design websites for small businesses in Manila?',
    a: 'Absolutely. We specialize in affordable web design for SMEs, freelancers, startups, and local businesses across Metro Manila, Cebu, Davao, and all regions of the Philippines. Remote-first — we handle everything online from design to launch.',
  },
  {
    q: 'Can our website rank on Google Philippines?',
    a: 'Every site includes basic SEO setup. Business and Virtual Employee also include SEO optimization for location-specific searches.',
  },
  {
    q: 'How long does it take to build a website?',
    a: 'Most websites are designed and launched within 10–15 business days after you submit your content, logo, and preferences. We handle design, development, hosting, and launch — you just review and approve.',
  },
  {
    q: 'Is this different from hiring a freelancer on Upwork?',
    a: 'Yes and no. Our team is a Top Rated agency on Upwork — but through AffordaWeb Solutions, you get an ongoing monthly partnership with unlimited support, versus a one-time project hire. You get a dedicated team that knows your brand, at one flat monthly rate.',
  },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.affordawebsolutions.com' },
    { '@type': 'ListItem', position: 2, name: 'Web Design Philippines', item: 'https://www.affordawebsolutions.com/affordable-web-design-services-in-manila' },
  ],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://www.affordawebsolutions.com/#business',
  name: 'AffordaWeb Solutions',
  url: 'https://www.affordawebsolutions.com',
  description: 'Top-rated Filipino web designers offering affordable website design services in Manila and across the Philippines.',
  areaServed: [
    { '@type': 'Country', name: 'Philippines' },
    { '@type': 'City', name: 'Manila' },
    { '@type': 'City', name: 'Makati' },
    { '@type': 'City', name: 'Quezon City' },
    { '@type': 'City', name: 'Cebu City' },
    { '@type': 'City', name: 'Davao City' },
  ],
  knowsAbout: ['Website Design', 'SEO Optimization', 'Web Hosting', 'Website Maintenance', 'E-commerce'],
  priceRange: '$39–$149/month',
  email: 'hello@affordawebsolutions.com',
  sameAs: ['https://www.upwork.com/agencies/1394499845794119680/'],
}

export default function ManilaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden pt-[200px] pb-[100px] text-center" style={{ background: '#0F0F1A' }}>
        <InnerHeroBg page="services" />
        <div className="container-tight relative z-10">
          <p className="section-label-white">Philippines &amp; Manila</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6" style={{ letterSpacing: '-0.025em' }}>
            Affordable Web Design Services<br className="hidden sm:block" /> in Manila &amp; the Philippines
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Top-rated Filipino web designers delivering professional websites from{' '}
            <strong className="text-white">$39/month</strong> — custom design, hosting, and SSL.
            Normal setup fees are currently waived.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['Metro Manila', 'Cebu City', 'Davao City', 'Quezon City', 'Makati', 'BGC'].map(label => (
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
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container-tight">
          <div className="flex flex-wrap justify-center gap-8 items-center text-center">
            {[
              { val: 'Top Rated', lbl: 'Upwork Agency', accent: '#5636D1' },
              { val: '100+', lbl: 'Sites Launched', accent: '#10B981' },
              { val: '90+', lbl: 'PageSpeed Score', accent: '#E2498A' },
              { val: '$0', lbl: 'Setup Fee', accent: '#F59E0B' },
              { val: '10–15', lbl: 'Days to Launch', accent: '#06B6D4' },
            ].map(({ val, lbl, accent }) => (
              <div key={lbl} className="text-center">
                <div className="text-2xl font-black mb-0.5" style={{ color: accent }}>{val}</div>
                <div className="text-xs text-gray-400 font-medium">{lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Team */}
      <section className="section-pad bg-white" aria-labelledby="ph-team-heading">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label">Who We Are</p>
              <h2 id="ph-team-heading" className="section-title mb-6">
                A Team of Top-Rated Filipino Web Designers
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                AffordaWeb Solutions is a group of professional Filipino web designers and VAs — recognized as a{' '}
                <a
                  href="https://www.upwork.com/agencies/1394499845794119680/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 font-medium hover:underline"
                >
                  Top Rated agency on Upwork
                </a>
                . We combine the talent of the Philippines with world-class web standards to deliver affordable, high-performance websites.
              </p>
              <p className="text-gray-500 leading-relaxed mb-6">
                Every website we build is coded in Next.js and Tailwind CSS — the same stack used by top tech companies — guaranteeing fast load times, mobile-first design, and Google-ready SEO structure from day one.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Top Rated agency on Upwork',
                  'Filipino team, global web standards',
                  'Next.js + Tailwind CSS — no WordPress plugins',
                  '90+ Google PageSpeed on every site',
                  'Local SEO for PH & international markets',
                  'Cancel anytime — no long-term lock-in',
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
                { stat: '$39/mo', label: 'Starting Price', accent: '#5636D1' },
                { stat: 'Waived', label: 'Setup Fee Promotion', accent: '#10B981' },
                { stat: '90+', label: 'PageSpeed Score', accent: '#E2498A' },
                { stat: 'Top Rated', label: 'On Upwork', accent: '#F59E0B' },
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

      {/* Services */}
      <section className="section-pad relative overflow-hidden" style={{ background: '#0F0F1A' }} aria-labelledby="ph-services-heading">
        <div className="absolute inset-x-0 top-0 h-px pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, #5636D1 40%, transparent)' }} />
        <div className="container-tight relative z-10">
          <div className="text-center mb-14">
            <p className="section-label-white">What We Offer</p>
            <h2 id="ph-services-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
              Everything Your Philippine Business Needs Online
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Custom web design, SEO, hosting, and maintenance — bundled into one affordable monthly plan built for Filipino entrepreneurs and businesses.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map(({ title, desc, href, accent }) => (
              <Link
                key={title}
                href={href}
                className="group relative overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${accent}30` }}
              >
                <div className="absolute inset-x-0 top-0 h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />
                <h3 className="font-bold text-white text-lg mb-2">{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="btn-outline-white">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Service Area — Regions + Manila Areas */}
      <section className="section-pad bg-white" aria-labelledby="ph-areas-heading">
        <div className="container-tight">
          <div className="text-center mb-14">
            <p className="section-label">Service Area</p>
            <h2 id="ph-areas-heading" className="section-title">
              Serving All Regions of the Philippines
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              We work remotely with businesses across every region. If you&rsquo;re in the Philippines, we can build your website — no in-person meeting required.
            </p>
          </div>

          {/* Regions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {regions.map(({ name, desc }, i) => {
              const colors = ['#5636D1', '#E2498A', '#06B6D4', '#F59E0B', '#10B981']
              const accent = colors[i % colors.length]
              return (
                <div
                  key={name}
                  className="relative overflow-hidden rounded-2xl p-6"
                  style={{ background: '#FAFBFF', border: `1px solid ${accent}22` }}
                >
                  <div className="absolute inset-x-0 top-0 h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />
                  <h3 className="font-bold text-gray-900 mb-1">{name}</h3>
                  <p className="text-sm text-gray-500">{desc}</p>
                </div>
              )
            })}
          </div>

          {/* Manila districts */}
          <div className="text-center">
            <p className="text-sm font-semibold mb-4 text-gray-400 uppercase tracking-widest">
              Metro Manila Cities &amp; Areas We Serve
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {manilaAreas.map(area => (
                <span
                  key={area}
                  className="text-sm px-3 py-1 rounded-full bg-gray-50 text-gray-500 border border-gray-200"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Us vs Local Agencies */}
      <section className="section-pad relative overflow-hidden" style={{ background: '#0F0F1A' }} aria-labelledby="ph-why-heading">
        <div className="absolute inset-x-0 top-0 h-px pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, #06B6D4 40%, transparent)' }} />
        <div className="container-tight relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label-white">Why AffordaWeb</p>
              <h2 id="ph-why-heading" className="text-3xl sm:text-4xl font-bold text-white mb-6" style={{ letterSpacing: '-0.02em' }}>
                Better Than Hiring a Local<br /> Manila Web Design Agency
              </h2>
              <p className="leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Manila web design agencies typically charge ₱30,000–₱120,000+ for a basic website — and that&rsquo;s just the upfront cost. AffordaWeb plans start at <strong className="text-white">$39/month</strong>.
              </p>
              <p className="leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.55)' }}>
                We build on Next.js — not WordPress — which means 90+ PageSpeed scores, zero plugin headaches, and a site that stays fast and secure without paying for extra plugins or security tools.
              </p>
              <div className="overflow-x-auto rounded-xl border border-white/10">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: 'rgba(255,255,255,0.04)' }}>
                      <th className="text-left p-4 font-semibold text-white/60"></th>
                      <th className="p-4 font-semibold text-center" style={{ color: '#5636D1' }}>AffordaWeb</th>
                      <th className="p-4 font-semibold text-center text-white/40">Local Agency</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Starting Price', '$39/mo', '₱30,000+ upfront'],
                      ['Setup Fee', 'Currently waived', '₱5,000–₱20,000'],
                      ['PageSpeed Score', '90+', 'Varies (often 50–65)'],
                      ['Ongoing Updates', 'Included', 'Billed separately'],
                      ['Hosting & SSL', 'Included', 'Extra monthly cost'],
                      ['Long-term contract', 'None', 'Often 1 year'],
                    ].map(([label, ours, theirs]) => (
                      <tr key={label} className="border-t border-white/05">
                        <td className="p-4 text-white/50">{label}</td>
                        <td className="p-4 text-center font-semibold" style={{ color: '#10B981' }}>{ours}</td>
                        <td className="p-4 text-center text-white/30">{theirs}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { title: 'No WordPress Plugins', body: 'Built in Next.js — no plugin conflicts, no security patches, no monthly plugin fees. Clean code that stays fast and secure.', accent: '#5636D1' },
                { title: '90+ PageSpeed Guaranteed', body: 'Every site we build scores 90+ on Google PageSpeed — a direct factor in rankings and user experience.', accent: '#E2498A' },
                { title: 'Unlimited Revisions Included', body: 'Need a content update or design change? It&rsquo;s included in your monthly plan. No extra billing per request.', accent: '#06B6D4' },
                { title: 'Rank in Google Philippines', body: 'Local SEO, schema markup, and Google Search Console setup included — so your Philippine business gets found online.', accent: '#10B981' },
              ].map(({ title, body, accent }) => (
                <div
                  key={title}
                  className="relative overflow-hidden rounded-2xl p-6"
                  style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${accent}30` }}
                >
                  <div className="absolute inset-x-0 top-0 h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />
                  <h3 className="font-bold text-white mb-2">{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-white" aria-labelledby="ph-faq-heading">
        <div className="container-tight max-w-3xl">
          <div className="text-center mb-12">
            <p className="section-label">Questions</p>
            <h2 id="ph-faq-heading" className="section-title">
              Web Design Philippines FAQ
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map(({ q, a }, idx) => {
              const colors = ['#5636D1', '#E2498A', '#06B6D4', '#10B981', '#F59E0B', '#5636D1']
              const accent = colors[idx % colors.length]
              return (
                <details key={q} className="group overflow-hidden rounded-2xl" style={{ border: `1px solid ${accent}25` }}>
                  <summary className="relative flex items-center justify-between gap-4 cursor-pointer select-none p-6 font-semibold text-base list-none [&::-webkit-details-marker]:hidden text-gray-900">
                    <div className="flex items-center gap-3">
                      <span className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: `${accent}18`, color: accent, border: `1px solid ${accent}30` }}>
                        {idx + 1}
                      </span>
                      <span className="pr-2">{q}</span>
                    </div>
                    <svg className="w-5 h-5 shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: accent }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <div className="w-full h-px mb-4 bg-gray-100" />
                    <p className="text-sm text-gray-500 leading-relaxed">{a}</p>
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
          <p className="section-label-white">Ready to Launch?</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6" style={{ letterSpacing: '-0.025em' }}>
            Let&rsquo;s Build Your Philippine Business Website
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Tell us about your business and we&rsquo;ll have your professional website live in 10–15 days. No upfront cost, no contracts — just a fast, affordable website that ranks.
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
