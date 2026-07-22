import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import InnerHeroBg from '@/components/InnerHeroBg'

export const metadata: Metadata = {
  title: 'About | Affordable Web Design Company for Small Businesses',
  description:
    'AffordaWeb Solutions is an affordable web design company delivering professional, custom websites for small businesses. Filipino web design team. Plans start at $69/month with hosting, SSL, and maintenance included.',
  keywords: [
    'affordable web design company',
    'small business web design company',
    'web design company for small business',
    'Filipino web designers',
    'affordable website design company',
    'professional website design',
    'cheap web design company',
    'affordable web design agency',
  ],
  alternates: { canonical: 'https://www.affordawebsolutions.com/about' },
  openGraph: {
    type: 'website',
    title: 'About | Affordable Web Design Company for Small Businesses',
    description: 'AffordaWeb Solutions is an affordable web design company delivering professional, custom websites for small businesses. Filipino web design team. Plans start at $69/month.',
    url: 'https://www.affordawebsolutions.com/about',
    images: [{ url: 'https://www.affordawebsolutions.com/og-image.png', width: 1200, height: 630, alt: 'About AffordaWeb Solutions Affordable Web Design Company' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Affordable Web Design Company for Small Businesses',
    description: 'AffordaWeb Solutions is an affordable web design company delivering professional, custom websites for small businesses. Filipino web design team. Plans start at $69/month.',
    images: ['https://www.affordawebsolutions.com/og-image.png'],
  },
}

const values = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Results-Driven',
    desc: 'We build websites with one goal in mind: helping your business grow. Every design decision is made with your customers and conversion rate in mind.',
    accent: '#5636D1',
    accentLight: 'rgba(86,54,209,0.10)',
    accentBorder: 'rgba(86,54,209,0.22)',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Transparent & Honest',
    desc: 'No confusing contracts, no hidden fees, no technical jargon. We communicate clearly and deliver exactly what we promise.',
    accent: '#E2498A',
    accentLight: 'rgba(226,73,138,0.10)',
    accentBorder: 'rgba(226,73,138,0.22)',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Client-First',
    desc: 'Your success is our success. We treat every client as a long-term partner, not just a transaction. We are invested in your growth.',
    accent: '#06B6D4',
    accentLight: 'rgba(6,182,212,0.10)',
    accentBorder: 'rgba(6,182,212,0.22)',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: 'Quality-Driven',
    desc: 'We take pride in our craft. Every website is built with precision, clean code, and attention to detail — because the details are what set you apart.',
    accent: '#F59E0B',
    accentLight: 'rgba(245,158,11,0.10)',
    accentBorder: 'rgba(245,158,11,0.22)',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Truly Affordable',
    desc: 'Professional website design should not be out of reach for small businesses. Our model is built to deliver premium quality at a price that makes sense.',
    accent: '#10B981',
    accentLight: 'rgba(16,185,129,0.10)',
    accentBorder: 'rgba(16,185,129,0.22)',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: 'Always Evolving',
    desc: 'The web never stands still and neither do we. We stay current with the latest design trends, SEO updates, and performance best practices.',
    accent: '#5636D1',
    accentLight: 'rgba(86,54,209,0.10)',
    accentBorder: 'rgba(86,54,209,0.22)',
  },
]

const targetAudiences = [
  { label: 'Startups',           desc: 'Get online fast with a professional site that impresses investors and customers alike.', accent: '#5636D1', accentLight: 'rgba(86,54,209,0.10)',  accentBorder: 'rgba(86,54,209,0.22)'  },
  { label: 'Freelancers',        desc: 'Showcase your portfolio and attract better clients with a site that reflects your expertise.', accent: '#E2498A', accentLight: 'rgba(226,73,138,0.10)', accentBorder: 'rgba(226,73,138,0.22)' },
  { label: 'Service Providers',  desc: 'Plumbers, cleaners, consultants — if you serve customers, you need a website that brings them in.', accent: '#06B6D4', accentLight: 'rgba(6,182,212,0.10)',  accentBorder: 'rgba(6,182,212,0.22)'  },
  { label: 'Local Businesses',   desc: 'Rank in local search results and become the go-to business in your area.', accent: '#F59E0B', accentLight: 'rgba(245,158,11,0.10)', accentBorder: 'rgba(245,158,11,0.22)' },
  { label: 'Growing Brands',     desc: 'Level up your online presence as your business scales.', accent: '#10B981', accentLight: 'rgba(16,185,129,0.10)', accentBorder: 'rgba(16,185,129,0.22)' },
  { label: 'E-Commerce Sellers', desc: 'Open your online store and start selling with a site built for conversions.', accent: '#5636D1', accentLight: 'rgba(86,54,209,0.10)',  accentBorder: 'rgba(86,54,209,0.22)'  },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.affordawebsolutions.com' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://www.affordawebsolutions.com/about' },
  ],
}

const teamSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AffordaWeb Solutions',
  url: 'https://www.affordawebsolutions.com',
  description: 'A team of talented Filipino web designers, developers, and SEO specialists delivering affordable, professional website design for small businesses worldwide.',
  email: 'hello@affordawebsolutions.com',
  knowsAbout: ['Web Design', 'Website Development', 'SEO Optimization', 'Website Maintenance', 'Web Hosting'],
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }} />

      {/* Hero */}
      <section
        className="relative overflow-hidden pt-[200px] pb-[100px] text-center"
        style={{ background: '#0F0F1A' }}
      >
        <InnerHeroBg page="about" />
        <div className="container-tight relative z-10">
          <p className="section-label-white">Our Story</p>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
            style={{ letterSpacing: '-0.025em' }}
          >
            Affordable Web Design Company for Small Businesses
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: 'rgba(255,255,255,0.55)' }}>
            AffordaWeb Solutions was founded on a simple belief: every small business deserves a professional, high-performing website — regardless of budget. We make that possible.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { stat: '50+', label: 'Businesses Served' },
              { stat: '4.9', label: 'Average Rating' },
              { stat: '10–15', label: 'Day Delivery' },
              { stat: '$69/mo', label: 'Starting Price' },
            ].map(({ stat, label }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 rounded-full px-5 py-2.5"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
              >
                <span className="font-bold text-white text-sm">{stat}</span>
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-pad bg-white" aria-labelledby="mission-heading">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label">Who We Are</p>
              <h2 id="mission-heading" className="section-title mb-6">
                Built for Small Businesses That Deserve More
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                AffordaWeb Solutions was built on one simple belief. Professional, high-quality websites should not cost a fortune. Starting at <Link href="/pricing" className="text-primary-600 font-medium hover:underline">$69 a month</Link>, we deliver <Link href="/services" className="text-primary-600 font-medium hover:underline">design, hosting, SEO setup, and ongoing maintenance</Link> without asking small businesses to choose between quality and budget.
              </p>
              <p className="text-gray-500 leading-relaxed mb-6">
                One plan. One price. No hidden fees, no contracts, no separate providers to manage. You tell us what you need and we take it from there.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { label: 'Mission', color: '#5636D1', text: 'Every business deserves a professional website, no matter its size or budget. We simplify web design through affordable, effective, and visually appealing solutions.' },
                  { label: 'Vision', color: '#E2498A', text: 'To be the trusted partner for companies that seek more than just a website. They seek sustainable growth.' },
                  { label: 'Commitment', color: '#06B6D4', text: 'Every project is built with precision, purpose, and care, focused entirely on helping clients achieve real results.' },
                ].map(({ label, color, text }) => (
                  <div key={label} className="rounded-xl p-4" style={{ background: '#FAFBFF', borderLeft: `3px solid ${color}` }}>
                    <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color }}>{label}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services" className="btn-primary">Explore Our Services</Link>
                <Link href="/contact" className="btn-secondary">Get in Touch</Link>
              </div>
            </div>

            {/* Visual card */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden relative" style={{ aspectRatio: '4/3' }}>
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
                  alt="Small business team collaborating on website design"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(9,24,41,0.75) 0%, rgba(9,24,41,0.2) 50%, transparent 100%)' }} />
                <div className="absolute bottom-6 left-6 right-6">
                  <blockquote className="text-white text-base font-semibold leading-relaxed italic">
                    &ldquo;Every business deserves a professional website, no matter its size or budget.&rdquo;
                  </blockquote>
                  <p className="mt-2 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>AffordaWeb Solutions</p>
                </div>
              </div>
              {/* Floating stats */}
              <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl p-5 shadow-card-hover">
                <div className="text-2xl font-bold gradient-text">100+</div>
                <div className="text-xs text-gray-500 font-medium">Sites Launched</div>
              </div>
              <div className="absolute -top-5 -left-5 bg-white rounded-2xl p-5 shadow-card-hover">
                <div className="text-2xl font-bold gradient-text">$69</div>
                <div className="text-xs text-gray-500 font-medium">Starting Monthly</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad relative overflow-hidden" style={{ background: '#0F0F1A' }} aria-labelledby="values-heading">
        {/* Top accent line */}
        <div className="absolute inset-x-0 top-0 h-px pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, #5636D1 40%, transparent)' }} />
        {/* Ambient glows */}
        <div className="absolute pointer-events-none" style={{ width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(86,54,209,0.08), transparent 65%)', top: '20%', right: '-200px' }} />
        <div className="absolute pointer-events-none" style={{ width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(226,73,138,0.06), transparent 65%)', bottom: '10%', left: '-150px' }} />
        {/* Large decorative number */}
        <div
          className="absolute top-1/2 -translate-y-1/2 font-extrabold select-none pointer-events-none hidden lg:block"
          style={{ fontSize: '260px', lineHeight: 1, color: 'rgba(86,54,209,0.05)', left: '-20px', letterSpacing: '-0.05em' }}
        >
          01
        </div>

        <div className="container-tight relative z-10">
          <div className="text-center mb-14">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5"
              style={{ background: 'rgba(86,54,209,0.12)', color: '#5636D1', border: '1px solid rgba(86,54,209,0.25)' }}
            >
              Our Values
            </span>
            <h2 id="values-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
              What We Stand For
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.45)' }}>
              The principles that guide every project, every client, and every line of code we write.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ icon, title, desc, accent, accentLight, accentBorder }) => (
              <div
                key={title}
                className="relative overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: '#0F0F1A',
                  border: `1px solid ${accentBorder}`,
                  boxShadow: `0 0 0 1px ${accentBorder}`,
                }}
              >
                {/* Top accent line */}
                <div className="absolute inset-x-0 top-0 h-0.5 pointer-events-none" style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />
                {/* Card glow */}
                <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full pointer-events-none" style={{ background: `radial-gradient(circle, ${accent}20, transparent 65%)` }} />
                {/* Icon */}
                <div
                  className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: accentLight, border: `1px solid ${accentBorder}`, color: accent }}
                >
                  {icon}
                </div>
                <h3 className="relative z-10 text-white font-bold text-lg mb-2">{title}</h3>
                <p className="relative z-10 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad relative overflow-hidden" style={{ background: '#FAFBFF' }} aria-labelledby="team-heading">
        {/* Top accent line */}
        <div className="absolute inset-x-0 top-0 h-px pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, #E2498A 40%, transparent)' }} />
        {/* Ambient glow */}
        <div className="absolute pointer-events-none" style={{ width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(226,73,138,0.05), transparent 65%)', top: '50%', right: '-150px', transform: 'translateY(-50%)' }} />
        {/* Large decorative number */}
        <div
          className="absolute top-1/2 -translate-y-1/2 font-extrabold select-none pointer-events-none hidden lg:block"
          style={{ fontSize: '260px', lineHeight: 1, color: 'rgba(226,73,138,0.04)', right: '-20px', letterSpacing: '-0.05em' }}
        >
          02
        </div>

        <div className="container-tight relative z-10">
          <div className="text-center mb-14">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5"
              style={{ background: 'rgba(226,73,138,0.08)', color: '#E2498A', border: '1px solid rgba(226,73,138,0.2)' }}
            >
              Our Team
            </span>
            <h2
              id="team-heading"
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
              style={{ letterSpacing: '-0.02em' }}
            >
              Talented Filipino Web Designers, Built Around Your Business
            </h2>
            <p className="text-base max-w-2xl mx-auto text-gray-500">
              A dedicated group of Filipino web design specialists working together to deliver <Link href="/portfolio" className="text-primary-600 font-medium hover:underline">world-class websites</Link> at a price small businesses can actually afford.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
              <Image
                src="https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Filipino web designers and developers collaborating on website design projects"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(9,24,41,0.7) 0%, rgba(9,24,41,0.1) 60%, transparent 100%)' }} />
              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2"
                  style={{ background: 'rgba(226,73,138,0.85)', backdropFilter: 'blur(8px)' }}
                >
                  <span className="text-white text-xs font-bold tracking-wide">Talented Filipino Freelancers</span>
                </div>
              </div>
            </div>

            {/* Content card */}
            <div
              className="relative overflow-hidden rounded-3xl p-8 lg:p-10"
              style={{
                background: '#0F0F1A',
                border: '1px solid rgba(226,73,138,0.22)',
                boxShadow: '0 0 0 1px rgba(226,73,138,0.15), 0 24px 80px rgba(0,0,0,0.15)',
              }}
            >
              {/* Top accent line */}
              <div className="absolute inset-x-0 top-0 h-0.5 pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, #E2498A, transparent)' }} />
              {/* Card glow */}
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(226,73,138,0.15), transparent 65%)' }} />

              <div className="relative z-10">
                <p className="leading-relaxed mb-4 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  AffordaWeb Solutions is powered by a passionate group of talented Filipino freelancers — web designers, developers, SEO specialists, and digital strategists who share one goal: helping small businesses get online without breaking the bank.
                </p>
                <p className="leading-relaxed mb-4 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  The Philippines is recognized globally for producing some of the most skilled and creative digital professionals in the world. Our team brings that expertise directly to your project — combining strong design instincts, clean technical execution, and a deep understanding of <Link href="/portfolio" className="font-medium hover:opacity-90" style={{ color: '#E2498A' }}>what makes a website actually work for a business</Link>.
                </p>
                <p className="leading-relaxed mb-7 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  English-fluent, deadline-driven, and genuinely invested in your success — we work collaboratively across every project from first mockup to final launch and beyond.
                </p>

                {/* Skill tags */}
                <div className="grid grid-cols-2 gap-3 mb-7">
                  {[
                    { label: 'Web Design', href: '/services/design',      icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 010 2H5a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 010 2H5a1 1 0 01-1-1zm8-4a1 1 0 011-1h2l2 2-2 2h-2a1 1 0 01-1-1v-2z', color: '#E2498A' },
                    { label: 'SEO Strategy', href: '/services/seo',       icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', color: '#5636D1' },
                    { label: 'Web Hosting', href: '/services/hosting',    icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01', color: '#06B6D4' },
                    { label: 'Maintenance', href: '/services/maintenance', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15', color: '#10B981' },
                  ].map(({ label, href, icon, color }) => (
                    <Link
                      key={label}
                      href={href}
                      className="flex items-center gap-2.5 rounded-xl px-4 py-3 transition-opacity hover:opacity-75"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                    >
                      <span className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: `${color}22` }}>
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color }}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={icon} />
                        </svg>
                      </span>
                      <span className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.75)' }}>{label}</span>
                    </Link>
                  ))}
                </div>

                {/* Team traits */}
                <div className="grid grid-cols-1 gap-3 mb-8 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                  {[
                    { stat: 'English-Fluent', desc: 'Clear communication, zero language barriers on every project.' },
                    { stat: 'Remote-Ready', desc: 'Fully distributed team delivering consistent results across time zones.' },
                    { stat: 'Detail-Obsessed', desc: 'Every pixel, every line of code crafted with precision and purpose.' },
                  ].map(({ stat, desc }) => (
                    <div key={stat} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: '#E2498A' }} />
                      <div>
                        <p className="text-sm font-bold text-white">{stat}</p>
                        <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-bold rounded-full px-6 py-3 transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: 'linear-gradient(135deg, #E2498A, #E2498Acc)', color: '#fff', boxShadow: '0 4px 16px rgba(226,73,138,0.3)' }}
                >
                  Work With Our Team
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="section-pad relative overflow-hidden" style={{ background: '#0F0F1A' }} aria-labelledby="audience-heading">
        {/* Top accent line */}
        <div className="absolute inset-x-0 top-0 h-px pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, #06B6D4 40%, transparent)' }} />
        {/* Ambient glows */}
        <div className="absolute pointer-events-none" style={{ width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.07), transparent 65%)', top: '10%', right: '-200px' }} />
        <div className="absolute pointer-events-none" style={{ width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(86,54,209,0.07), transparent 65%)', bottom: '10%', left: '-100px' }} />
        {/* Large decorative number */}
        <div
          className="absolute top-1/2 -translate-y-1/2 font-extrabold select-none pointer-events-none hidden lg:block"
          style={{ fontSize: '260px', lineHeight: 1, color: 'rgba(6,182,212,0.05)', left: '-20px', letterSpacing: '-0.05em' }}
        >
          03
        </div>

        <div className="container-tight relative z-10">
          <div className="text-center mb-14">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5"
              style={{ background: 'rgba(6,182,212,0.10)', color: '#06B6D4', border: '1px solid rgba(6,182,212,0.22)' }}
            >
              Who We Serve
            </span>
            <h2 id="audience-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
              We Help All Types of Small Businesses
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Whether you are just starting out or ready to take your online presence to the next level, our <Link href="/services" className="font-medium hover:opacity-80" style={{ color: '#06B6D4' }}>affordable website design services</Link> are built for you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetAudiences.map(({ label, desc, accent, accentLight, accentBorder }, idx) => (
              <div
                key={label}
                className="relative overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: '#0F0F1A',
                  border: `1px solid ${accentBorder}`,
                  boxShadow: `0 0 0 1px ${accentBorder}`,
                }}
              >
                {/* Top accent line */}
                <div className="absolute inset-x-0 top-0 h-0.5 pointer-events-none" style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />
                {/* Card glow */}
                <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full pointer-events-none" style={{ background: `radial-gradient(circle, ${accent}20, transparent 65%)` }} />
                {/* Index number */}
                <div
                  className="absolute bottom-3 right-4 font-extrabold select-none text-5xl leading-none"
                  style={{ color: `${accent}12`, letterSpacing: '-0.05em' }}
                >
                  {String(idx + 1).padStart(2, '0')}
                </div>
                {/* Label badge */}
                <span
                  className="relative z-10 inline-flex text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
                  style={{ background: accentLight, color: accent, border: `1px solid ${accentBorder}` }}
                >
                  {label}
                </span>
                <p className="relative z-10 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
          <p className="section-label-white">Let&apos;s Work Together</p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
            style={{ letterSpacing: '-0.025em' }}
          >
            Your Website Journey Starts Here
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Tell us about your business and we will build you a website that works. No technical knowledge required — we handle everything from design to launch.
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
