import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AffordaWeb Solutions | Affordable Website Design Services from $69/mo',
  description:
    'AffordaWeb Solutions offers affordable website design services for small businesses starting at $69/month. Cheap web design with hosting, SSL, and unlimited updates included. Get a free quote today.',
  alternates: { canonical: 'https://affordawebsolutions.com' },
  keywords:
    'affordable website design, website design services, cheap web design, budget web design, website design near me, small business website design',
}

function IconArrow() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  )
}

function IconCheck({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  )
}

function IconChevronRight() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  )
}

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Website Design',
    desc: 'Custom, mobile-first websites that convert visitors into customers.',
    href: '/services#design',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Website Redesign',
    desc: 'Transform your outdated site into a modern, high-performance presence.',
    href: '/services#redesign',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'SEO Optimization',
    desc: 'Rank higher on Google with on-page SEO and keyword strategy.',
    href: '/services#seo',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Website Maintenance',
    desc: 'Updates, backups, and security handled — so you can focus on business.',
    href: '/services#maintenance',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    title: 'Web Hosting',
    desc: 'Reliable hosting with SSL certificate and 99.9% uptime guaranteed.',
    href: '/services#hosting',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'E-Commerce Design',
    desc: 'Launch your online store with payment integration and up to 30 products.',
    href: '/services#ecommerce',
  },
]

const reasons = [
  { title: 'All-Inclusive Plans',    desc: 'Hosting, SSL, maintenance, and updates — one monthly price, zero surprises.' },
  { title: 'SEO-First Approach',     desc: 'Every site is built to rank. We follow Google best practices from day one.' },
  { title: 'Fast Delivery',          desc: 'From kickoff to live website in 10–15 business days — not months.' },
  { title: 'Mobile-First Design',    desc: 'Over 60% of traffic is mobile. Your site is built for every screen size.' },
  { title: 'Dedicated Support',      desc: 'Real humans respond to your emails within 24 hours, every time.' },
  { title: 'No Long-Term Contracts', desc: 'Month-to-month plans. No lock-in. Stay because you love the results.' },
]

const stats = [
  { value: '100+',  label: 'Websites Launched' },
  { value: '10–15', label: 'Day Delivery' },
  { value: '99.9%', label: 'Uptime Guaranteed' },
  { value: '$69',   label: 'Starting Monthly' },
]

const steps = [
  {
    step: '01',
    title: 'Share Your Vision',
    desc: 'Tell us about your business, goals, and style preferences. We gather everything needed to build the perfect website for you.',
  },
  {
    step: '02',
    title: 'We Build It',
    desc: 'Our team designs and develops your custom website in 10–15 business days. You review and approve before we go live.',
  },
  {
    step: '03',
    title: 'Launch & Grow',
    desc: 'Your site goes live with hosting, SSL, and ongoing support. We handle all updates — you focus on growing your business.',
  },
]

const faqs = [
  {
    q: 'What is included in the monthly fee?',
    a: 'Every plan includes website hosting, SSL security certificate, a business email address, and regular maintenance. The Standard and Premium plans also include unlimited content updates, SEO optimization, and priority support.',
  },
  {
    q: 'How long does it take to build my website?',
    a: 'Most websites are completed in 10–15 business days. The timeline depends on how quickly you provide your content (text, images, logo) and how many revision rounds are needed.',
  },
  {
    q: 'Can I make changes to my website after it launches?',
    a: 'Yes. Standard and Premium plan subscribers get unlimited monthly updates — just send us your changes and we will handle everything. Basic plan clients receive one update per month.',
  },
  {
    q: 'Do you offer SEO with website design?',
    a: 'Yes. All Standard and Premium websites are built with on-page SEO best practices: optimized meta titles and descriptions, proper heading structure, schema markup, fast load times, and mobile responsiveness — all factors Google rewards.',
  },
  {
    q: 'Is there a contract or long-term commitment?',
    a: 'No long-term contracts. Our plans are month-to-month and you can cancel anytime. We earn your business every month by delivering results.',
  },
  {
    q: 'Can you redesign my existing website?',
    a: 'Absolutely. Website redesign is one of our most popular services. We modernize your existing site while keeping your brand identity, improving speed, and optimizing for search engines.',
  },
]

export default function HomePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden flex items-center"
        style={{
          background: 'linear-gradient(135deg, #091829 0%, #0D2040 50%, #091829 100%)',
          paddingTop: '9rem',
          paddingBottom: '10rem',
          minHeight: '88vh',
        }}
        aria-label="Hero section"
      >
        {/* Subtle grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(40,120,196,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(40,120,196,0.05) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        {/* Glow orbs */}
        <div
          className="absolute pointer-events-none animate-pulse-glow"
          style={{ top: '15%', right: '8%', width: '640px', height: '640px', background: 'rgba(40,120,196,0.16)', borderRadius: '50%', filter: 'blur(140px)' }}
        />
        <div
          className="absolute pointer-events-none animate-pulse-glow"
          style={{ bottom: '0%', left: '3%', width: '480px', height: '480px', background: 'rgba(40,120,196,0.10)', borderRadius: '50%', filter: 'blur(110px)', animationDelay: '2s' }}
        />

        <div className="container-tight relative z-10 text-center w-full">

          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-10"
            style={{ background: 'rgba(40,120,196,0.14)', border: '1px solid rgba(40,120,196,0.3)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse" />
            <span className="text-primary-300 text-sm font-medium tracking-wide">
              Professional Website Design for Small Businesses
            </span>
          </div>

          {/* H1 */}
          <h1
            className="font-extrabold text-white tracking-tight mb-8 text-balance"
            style={{ fontSize: 'clamp(3rem, 7vw, 5.25rem)', lineHeight: 1.0 }}
          >
            Less Talk.{' '}
            <span
              className="block sm:inline"
              style={{
                background: 'linear-gradient(135deg, #7AB5EE 0%, #ADCFF5 55%, #ffffff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Let&apos;s Build.
            </span>
          </h1>

          {/* Subtitle — light weight for contrast with bold heading */}
          <p
            className="max-w-[560px] mx-auto leading-relaxed mb-12"
            style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.55)', fontWeight: 300 }}
          >
            Fully managed website design with hosting, SSL, and unlimited updates —
            all for one affordable monthly rate. No technical skills needed. No hidden fees.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/contact" className="btn-primary px-9 py-4 text-base">
              Get My Free Quote
              <IconArrow />
            </Link>
            <Link href="/pricing" className="btn-outline-white px-9 py-4 text-base">
              View Plans &amp; Pricing
            </Link>
          </div>

          {/* Trust row */}
          <div
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm"
            style={{ color: 'rgba(255,255,255,0.35)' }}
          >
            {['No long-term contracts', 'Setup in 10–15 days', 'Hosting included', 'Cancel anytime'].map(item => (
              <span key={item} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-primary-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FLOATING FEATURE CARDS — overlap hero ─────────────────────── */}
      <div className="relative z-20" style={{ marginTop: '-80px' }}>
        <div className="container-tight">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Custom Website Design',
                desc: 'Mobile-first, SEO-ready websites tailored to your brand — delivered in 10–15 business days.',
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                ),
                title: 'SEO & Search Rankings',
                desc: 'Built-in optimization on every page to rank higher on Google and drive organic traffic.',
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: 'Fully Managed Support',
                desc: 'Hosting, SSL, security, and unlimited updates all included — we handle the technical side.',
              },
            ].map(card => (
              <div
                key={card.title}
                className="bg-white rounded-[10px] p-8 transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: '0 8px 48px rgba(40,120,196,0.14)' }}
              >
                {/* Thin blue accent line — BeWebDeveloper signature */}
                <div className="w-12 h-0.5 bg-primary-500 mb-6" />
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-primary-700 mb-5"
                  style={{ background: 'linear-gradient(135deg, #D6EBFF 0%, #ADCFF5 100%)' }}
                >
                  {card.icon}
                </div>
                <h3 className="text-[1.1rem] font-bold text-dark mb-3">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── TWO-COLUMN: SERVICES LEFT / SERVICE LIST RIGHT ────────────── */}
      <section
        className="relative overflow-hidden"
        id="services"
        aria-labelledby="services-heading"
        style={{ background: '#F7FAFE', paddingTop: '7rem', paddingBottom: '7rem' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(40,120,196,0.05) 1.5px, transparent 1.5px)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="container-tight relative">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left column: heading + bullets + CTA */}
            <div>
              <div className="w-12 h-0.5 bg-primary-500 mb-6" />
              <p className="section-label">What We Do</p>
              <h2 id="services-heading" className="section-title mb-6">
                Everything Your Business Needs Online
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8 text-lg" style={{ fontWeight: 300 }}>
                From custom website design to ongoing SEO and maintenance — a complete,
                affordable web presence solution built specifically for small businesses.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Custom, brand-matched website design',
                  'On-page SEO built into every page',
                  'Fast 10–15 business day delivery',
                  'Ongoing hosting, SSL & maintenance',
                ].map(f => (
                  <li key={f} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center shrink-0">
                      <IconCheck className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/services" className="btn-primary">
                Explore All Services
                <IconArrow />
              </Link>
            </div>

            {/* Right column: service rows */}
            <div className="space-y-3">
              {services.map(({ icon, title, desc, href }) => (
                <Link
                  key={title}
                  href={href}
                  className="group flex items-center gap-4 bg-white rounded-[10px] p-5
                             transition-all duration-300 hover:-translate-y-0.5"
                  style={{ boxShadow: '0 2px 20px rgba(40,120,196,0.06)' }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-primary-700 shrink-0
                               group-hover:scale-110 transition-transform duration-300"
                    style={{ background: 'linear-gradient(135deg, #D6EBFF 0%, #ADCFF5 100%)' }}
                  >
                    {icon}
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="font-bold text-dark text-[0.95rem]">{title}</div>
                    <div className="text-xs text-gray-400 leading-snug mt-0.5 font-light line-clamp-1">{desc}</div>
                  </div>
                  <div className="text-gray-300 group-hover:text-primary-500 transition-colors">
                    <IconChevronRight />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TWO-COLUMN REVERSED: STATS LEFT / WHY US RIGHT ───────────── */}
      <section
        className="bg-white"
        aria-labelledby="why-col-heading"
        style={{ paddingTop: '7rem', paddingBottom: '7rem' }}
      >
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left column: 2x2 stat boxes */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { value: '100+',  label: 'Websites Launched',  color: '#2878C4' },
                { value: '10–15', label: 'Day Delivery',       color: '#1E66A8' },
                { value: '99.9%', label: 'Uptime Guaranteed',  color: '#4D9BE5' },
                { value: '$69',   label: 'Starting / Month',   color: '#091829' },
              ].map(({ value, label, color }) => (
                <div
                  key={label}
                  className="rounded-[12px] p-7 border-2 border-primary-100 text-center
                             transition-all duration-300 hover:border-primary-300 hover:-translate-y-0.5"
                  style={{ background: 'linear-gradient(135deg, #F0F7FF 0%, #FFFFFF 100%)' }}
                >
                  <div style={{ fontSize: '2.75rem', fontWeight: 800, lineHeight: 1, color, fontVariantNumeric: 'tabular-nums' }}>
                    {value}
                  </div>
                  <div className="text-gray-500 text-sm font-medium mt-2 leading-snug">{label}</div>
                </div>
              ))}
            </div>

            {/* Right column: heading + bullets + CTA */}
            <div>
              <div className="w-12 h-0.5 bg-primary-500 mb-6" />
              <p className="section-label">Why AffordaWeb</p>
              <h2 id="why-col-heading" className="section-title mb-6">
                Built for Small Business Success
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8 text-lg" style={{ fontWeight: 300 }}>
                We understand the challenges of running a small business. That is why we built
                an affordable, all-in-one website solution that works as hard as you do.
              </p>
              <ul className="space-y-5 mb-10">
                {reasons.slice(0, 4).map(({ title, desc }) => (
                  <li key={title} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center shrink-0 mt-0.5">
                      <IconCheck className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div>
                      <span className="font-semibold text-dark">{title}</span>
                      <span className="text-gray-500 font-light"> — {desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <Link href="/about" className="btn-secondary">
                Learn About Us
                <IconArrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS IN BORDERED BOXES (full-width) ─────────────────────── */}
      <section
        aria-label="Key statistics"
        style={{ background: '#F7FAFE', paddingTop: '5rem', paddingBottom: '5rem' }}
      >
        <div className="container-tight">
          <div className="text-center mb-14">
            <div className="w-12 h-0.5 bg-primary-500 mx-auto mb-6" />
            <p className="section-label">By the Numbers</p>
            <h2 className="section-title">Our Track Record Speaks for Itself</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {[
              { value: '100+',  label: 'Websites Launched',  color: '#2878C4' },
              { value: '10–15', label: 'Business Day Delivery', color: '#1E66A8' },
              { value: '99.9%', label: 'Uptime Guaranteed',  color: '#4D9BE5' },
              { value: '$69',   label: 'Starting Per Month', color: '#091829' },
            ].map(({ value, label, color }) => (
              <div
                key={label}
                className="text-center bg-white rounded-[10px] py-10 px-6 border-2 border-primary-100
                           hover:border-primary-300 transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: '0 2px 20px rgba(40,120,196,0.05)' }}
              >
                <div
                  style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1, color, fontVariantNumeric: 'tabular-nums' }}
                >
                  {value}
                </div>
                <div className="text-gray-500 font-medium text-sm mt-3 leading-snug">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DARK FEATURES SECTION ────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="features-heading"
        style={{ background: 'linear-gradient(135deg, #091829 0%, #0D2040 50%, #091829 100%)', paddingTop: '7rem', paddingBottom: '7rem' }}
      >
        <div className="absolute pointer-events-none" style={{ top: '-10%', left: '-5%', width: '600px', height: '600px', background: 'rgba(40,120,196,0.15)', borderRadius: '50%', filter: 'blur(130px)' }} />
        <div className="absolute pointer-events-none" style={{ bottom: '-10%', right: '-5%', width: '500px', height: '500px', background: 'rgba(40,120,196,0.10)', borderRadius: '50%', filter: 'blur(110px)' }} />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />

        <div className="container-tight relative z-10">
          <div className="text-center mb-16">
            <div className="w-12 h-0.5 bg-primary-400 mx-auto mb-6" />
            <p className="section-label">Why Small Businesses Choose Us</p>
            <h2 id="features-heading" className="section-title-white mb-5">
              An All-In-One Website Solution
            </h2>
            <p className="section-subtitle-white mx-auto text-center">
              Everything you need for a professional web presence — bundled into one simple,
              affordable monthly plan. No surprises. No contracts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reasons.map(({ title, desc }) => (
              <div key={title} className="card-glass group p-7">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 shrink-0"
                  style={{ background: 'rgba(40,120,196,0.28)' }}
                >
                  <IconCheck className="w-5 h-5 text-primary-300" />
                </div>
                <h3 className="text-white font-bold text-[1rem] mb-2">{title}</h3>
                <p className="text-sm leading-relaxed font-light" style={{ color: 'rgba(255,255,255,0.52)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ───────────────────────────────────────────────────── */}
      <section
        className="bg-white"
        id="pricing"
        aria-labelledby="pricing-heading"
        style={{ paddingTop: '7rem', paddingBottom: '7rem' }}
      >
        <div className="container-tight">
          <div className="text-center mb-16">
            <div className="w-12 h-0.5 bg-primary-500 mx-auto mb-6" />
            <p className="section-label">Simple Pricing</p>
            <h2 id="pricing-heading" className="section-title">
              One Monthly Rate. Everything Included.
            </h2>
            <p className="section-subtitle mx-auto text-center">
              No setup fees, no hidden costs. Choose the plan that fits your business and cancel anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-center">

            {/* Basic */}
            <div
              className="bg-white rounded-[12px] p-8 border border-gray-100 flex flex-col hover:-translate-y-1 transition-all duration-300"
              style={{ boxShadow: '0 2px 24px rgba(0,0,0,0.05)' }}
            >
              <div className="w-10 h-0.5 bg-primary-200 mb-6" />
              <div className="mb-7">
                <p className="text-xs font-bold text-gray-400 tracking-[0.15em] uppercase mb-3">Basic</p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-5xl font-extrabold text-dark">$69</span>
                  <span className="text-gray-400 text-sm">/month</span>
                </div>
                <p className="text-sm text-gray-500 font-light">Perfect for getting online fast</p>
              </div>
              <ul className="space-y-3.5 mb-9 flex-grow">
                {['1–5 page website', 'Mobile-responsive design', 'Hosting & SSL included', '1 business email', '1 update per month', 'Basic maintenance'].map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                      <IconCheck className="w-3 h-3 text-gray-500" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-secondary w-full justify-center py-3.5">
                Get Started
              </Link>
            </div>

            {/* Standard — deep blue featured */}
            <div
              className="relative rounded-[12px] p-8 flex flex-col md:-my-5"
              style={{
                background: 'linear-gradient(135deg, #134878 0%, #1E66A8 50%, #2878C4 100%)',
                boxShadow: '0 32px 80px rgba(40,120,196,0.4), inset 0 1px 0 rgba(255,255,255,0.12)',
              }}
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <span
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-bold tracking-wide uppercase"
                  style={{ background: '#ffffff', color: '#2878C4', boxShadow: '0 4px 20px rgba(40,120,196,0.3)' }}
                >
                  ✦ Most Popular
                </span>
              </div>

              <div className="w-10 h-0.5 mb-6" style={{ background: 'rgba(173,207,245,0.6)' }} />
              <div className="mb-7 mt-2">
                <p className="text-xs font-bold tracking-[0.15em] uppercase mb-3" style={{ color: 'rgba(173,207,245,0.9)' }}>Standard</p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-5xl font-extrabold text-white">$99</span>
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>/month</span>
                </div>
                <p className="text-sm font-light" style={{ color: 'rgba(255,255,255,0.65)' }}>Best for growing businesses</p>
              </div>

              <ul className="space-y-3.5 mb-9 flex-grow">
                {['Up to 10 pages', 'Everything in Basic', 'Unlimited updates', 'SEO optimization', 'Google Analytics', 'Contact forms', 'Priority support'].map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.88)' }}>
                    <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(255,255,255,0.2)' }}>
                      <IconCheck className="w-3 h-3 text-white" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="w-full justify-center py-3.5 rounded-full font-semibold inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: '#ffffff', color: '#2878C4', boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}
              >
                Get Started
              </Link>
            </div>

            {/* Premium */}
            <div
              className="bg-white rounded-[12px] p-8 border border-gray-100 flex flex-col hover:-translate-y-1 transition-all duration-300"
              style={{ boxShadow: '0 2px 24px rgba(0,0,0,0.05)' }}
            >
              <div className="w-10 h-0.5 bg-primary-200 mb-6" />
              <div className="mb-7">
                <p className="text-xs font-bold text-gray-400 tracking-[0.15em] uppercase mb-3">Premium</p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-5xl font-extrabold text-dark">$149</span>
                  <span className="text-gray-400 text-sm">/month</span>
                </div>
                <p className="text-sm text-gray-500 font-light">For e-commerce &amp; full-scale brands</p>
              </div>
              <ul className="space-y-3.5 mb-9 flex-grow">
                {['Everything in Standard', 'E-commerce (30 products)', 'Speed optimization', 'Advanced SEO', '24/7 support', 'Monthly reports'].map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                      <IconCheck className="w-3 h-3 text-gray-500" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-secondary w-full justify-center py-3.5">
                Get Started
              </Link>
            </div>
          </div>

          <p className="text-center text-sm text-gray-400 mt-10">
            All plans include a 15-day satisfaction period · No long-term contracts ·{' '}
            <Link href="/pricing" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
              Compare all plan features →
            </Link>
          </p>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────── */}
      <section
        aria-labelledby="process-heading"
        style={{ background: '#F7FAFE', paddingTop: '7rem', paddingBottom: '7rem' }}
      >
        <div className="container-tight">
          <div className="text-center mb-16">
            <div className="w-12 h-0.5 bg-primary-500 mx-auto mb-6" />
            <p className="section-label">How It Works</p>
            <h2 id="process-heading" className="section-title">
              Your Website in 3 Simple Steps
            </h2>
            <p className="section-subtitle mx-auto text-center">
              We have simplified the entire process so you can get a professional website
              online fast — without the stress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map(({ step, title, desc }) => (
              <div
                key={step}
                className="relative bg-white rounded-[12px] p-9 border border-gray-100 overflow-hidden
                           transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: '0 2px 24px rgba(40,120,196,0.05)' }}
              >
                {/* Large decorative step number */}
                <div
                  className="absolute top-4 right-5 font-black leading-none select-none pointer-events-none"
                  style={{ fontSize: '6rem', color: 'rgba(40,120,196,0.05)' }}
                >
                  {step}
                </div>
                <div className="w-10 h-0.5 bg-primary-500 mb-6" />
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-base mb-6 relative z-10"
                  style={{ background: 'linear-gradient(135deg, #1E66A8, #4D9BE5)' }}
                >
                  {step}
                </div>
                <h3 className="text-[1.05rem] font-bold text-dark mb-3 relative z-10">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light relative z-10">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link href="/contact" className="btn-primary">
              Start My Website
              <IconArrow />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section
        className="bg-white"
        id="faq"
        aria-labelledby="faq-heading"
        style={{ paddingTop: '7rem', paddingBottom: '7rem' }}
      >
        <div className="container-tight max-w-3xl">
          <div className="text-center mb-16">
            <div className="w-12 h-0.5 bg-primary-500 mx-auto mb-6" />
            <p className="section-label">FAQ</p>
            <h2 id="faq-heading" className="section-title">
              Frequently Asked Questions
            </h2>
            <p className="section-subtitle mx-auto text-center">
              Everything you need to know about our affordable website design and hosting plans.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <details
                key={q}
                className="group bg-white border border-gray-100 rounded-[12px] overflow-hidden
                           transition-colors duration-200 hover:border-primary-200"
                style={{ boxShadow: '0 2px 16px rgba(40,120,196,0.05)' }}
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer select-none p-7
                                   text-dark font-semibold text-[0.95rem] list-none [&::-webkit-details-marker]:hidden">
                  <span>{q}</span>
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0
                               transition-all duration-200 group-open:bg-primary-500"
                    style={{ background: 'rgba(40,120,196,0.08)' }}
                  >
                    <svg
                      className="w-4 h-4 text-primary-600 group-open:text-white transition-transform duration-300 group-open:rotate-180"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-7 pb-7">
                  <div className="h-px bg-gray-100 mb-5" />
                  <p className="text-gray-500 leading-relaxed text-sm font-light">{a}</p>
                </div>
              </details>
            ))}
          </div>

          <p className="text-center text-sm text-gray-400 mt-10">
            Still have questions?{' '}
            <Link href="/contact" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
              Contact us →
            </Link>
          </p>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-label="Call to action"
        style={{
          background: 'linear-gradient(135deg, #091829 0%, #0D2040 50%, #091829 100%)',
          paddingTop: '7rem',
          paddingBottom: '7rem',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div style={{ width: '800px', height: '600px', background: 'rgba(40,120,196,0.18)', borderRadius: '50%', filter: 'blur(100px)' }} />
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        <div className="container-tight relative z-10 text-center max-w-4xl mx-auto">
          <div className="w-12 h-0.5 bg-primary-400 mx-auto mb-6" />
          <p className="section-label text-primary-400">Less Talk. Let&apos;s Build.</p>
          <h2
            className="font-extrabold text-white tracking-tight mb-6 text-balance"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)', lineHeight: 1.1 }}
          >
            Ready for a Website That Works for Your Business?
          </h2>
          <p className="mb-12 max-w-xl mx-auto leading-relaxed font-light" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.52)' }}>
            Join hundreds of small businesses that trust AffordaWeb Solutions for professional,
            affordable website design. Get started today — no commitment required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary text-base px-10 py-4">
              Get My Free Quote
              <IconArrow />
            </Link>
            <Link href="/pricing" className="btn-outline-white text-base px-10 py-4">
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
