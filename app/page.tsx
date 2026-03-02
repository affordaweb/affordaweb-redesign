import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'AffordaWeb Solutions | Affordable Website Design Services from $69/mo',
  description:
    'AffordaWeb Solutions offers affordable website design services for small businesses starting at $69/month. Cheap web design with hosting, SSL, and unlimited updates included. Get a free quote today.',
  alternates: { canonical: 'https://affordawebsolutions.com' },
  keywords: 'affordable website design, website design services, cheap web design, budget web design, website design near me, small business website design',
}

// ─── Icons ──────────────────────────────────────────────────────────────────
function IconCheck() {
  return (
    <svg className="w-5 h-5 text-primary-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  )
}

function IconArrow() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  )
}

// ─── Service cards data ──────────────────────────────────────────────────────
const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Website Design',
    desc: 'Custom, mobile-first websites built to convert visitors into customers — delivered in 10–15 business days.',
    href: '/services#design',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Website Redesign',
    desc: "Transform your outdated site into a modern, high-performance presence that matches your brand's ambitions.",
    href: '/services#redesign',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'SEO Optimization',
    desc: 'Rank higher on Google with on-page SEO, keyword strategy, and technical optimization built into every page.',
    href: '/services#seo',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Website Maintenance',
    desc: 'Never worry about updates, backups, or security again. We handle everything so you can focus on your business.',
    href: '/services#maintenance',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    title: 'Web Hosting',
    desc: 'Reliable shared hosting with every plan — SSL certificate, 1GB business email, and 99.9% uptime guaranteed.',
    href: '/services#hosting',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'E-Commerce Design',
    desc: 'Launch your online store with up to 30 products, payment integration, and a shopping experience customers love.',
    href: '/services#ecommerce',
  },
]

// ─── Process steps ───────────────────────────────────────────────────────────
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

// ─── FAQ ─────────────────────────────────────────────────────────────────────
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

// ─── Why choose us ───────────────────────────────────────────────────────────
const reasons = [
  { title: 'All-Inclusive Plans',  desc: 'Hosting, SSL, maintenance, and updates — one monthly price, zero surprises.' },
  { title: 'SEO-First Approach',   desc: 'Every site is built to rank. We follow Google best practices from day one.' },
  { title: 'Fast Delivery',        desc: 'From kickoff to live website in 10–15 business days — not months.' },
  { title: 'Mobile-First Design',  desc: 'Over 60% of traffic is mobile. Your site is built for every screen size.' },
  { title: 'Dedicated Support',    desc: 'Real humans respond to your emails within 24 hours, every time.' },
  { title: 'No Long-Term Contracts', desc: 'Month-to-month plans. No lock-in. Stay because you love the results.' },
]

// ─── Trusted by stats ────────────────────────────────────────────────────────
const stats = [
  { value: '100+', label: 'Websites Launched' },
  { value: '10–15', label: 'Day Delivery' },
  { value: '99.9%', label: 'Uptime Guaranteed' },
  { value: '$69',   label: 'Starting Monthly' },
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

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden"
        aria-label="Hero section"
      >
        {/* Background photo */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&auto=format&fit=crop&q=60"
            alt=""
            fill
            priority
            className="object-cover opacity-10"
            aria-hidden="true"
          />
        </div>

        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-[120px] animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-500/15 rounded-full blur-[100px] animate-pulse-glow [animation-delay:1.5s]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-[150px]" />
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="container-tight relative z-10 pt-28 pb-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                          bg-white/5 border border-white/10 text-white/80 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            Professional Websites for Small Businesses
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white
                         leading-[1.05] tracking-tight mb-6 text-balance">
            Less Talk.{' '}
            <span className="gradient-text">Let&apos;s Build.</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
            Fully managed website design with hosting, SSL, and unlimited updates — all for one affordable monthly rate.
            No technical skills needed. No hidden fees. Just results.
          </p>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Get My Free Quote
              <IconArrow />
            </Link>
            <Link href="/pricing" className="btn-outline-white text-base px-8 py-4">
              View Plans & Pricing
            </Link>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/50 text-sm">
            {[
              'No long-term contracts',
              'Setup in 10–15 days',
              'Hosting included',
              'Cancel anytime',
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ── Stats bar ────────────────────────────────────────────────── */}
      <section className="bg-white py-12 border-b border-gray-100" aria-label="Key stats">
        <div className="container-tight">
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <dt className="text-3xl sm:text-4xl font-bold gradient-text mb-1">{value}</dt>
                <dd className="text-sm text-gray-500 font-medium">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Services overview ─────────────────────────────────────────── */}
      <section className="section-pad bg-surface" id="services" aria-labelledby="services-heading">
        <div className="container-tight">
          {/* Heading */}
          <div className="text-center mb-16">
            <p className="section-label">What We Do</p>
            <h2 id="services-heading" className="section-title">
              Everything Your Business Needs Online
            </h2>
            <p className="section-subtitle mx-auto text-center">
              From custom website design to ongoing SEO and maintenance — we offer a complete, affordable web presence solution for small businesses.
            </p>
            <div className="divider-glow" />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon, title, desc, href }) => (
              <article key={title} className="card group">
                <div className="icon-wrap group-hover:scale-110 transition-transform duration-300">
                  {icon}
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
                <Link
                  href={href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold
                             text-primary-500 hover:text-primary-500 transition-colors group-hover:gap-2.5"
                >
                  Learn more
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary">
              Explore All Services
              <IconArrow />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why choose us ─────────────────────────────────────────────── */}
      <section className="section-pad bg-dark relative overflow-hidden" aria-labelledby="why-heading">
        {/* Glow */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary-500/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="container-tight relative z-10">
          <div className="text-center mb-16">
            <p className="section-label">Why AffordaWeb</p>
            <h2 id="why-heading" className="section-title-white">
              Built for Small Business Success
            </h2>
            <p className="section-subtitle-white mx-auto text-center">
              We understand the challenges of running a small business. That is why we built an affordable, all-in-one website solution that works as hard as you do.
            </p>
            <div className="divider-glow" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map(({ title, desc }) => (
              <div key={title} className="card-glass group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-400/20 to-primary-500/20
                                flex items-center justify-center mb-4">
                  <IconCheck />
                </div>
                <h3 className="text-white font-bold mb-2">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing preview ───────────────────────────────────────────── */}
      <section className="section-pad bg-white" id="pricing" aria-labelledby="pricing-heading">
        <div className="container-tight">
          <div className="text-center mb-16">
            <p className="section-label">Simple Pricing</p>
            <h2 id="pricing-heading" className="section-title">
              One Monthly Rate. Everything Included.
            </h2>
            <p className="section-subtitle mx-auto text-center">
              No setup fees, no hidden costs. Choose the plan that fits your business and cancel anytime.
            </p>
            <div className="divider-glow" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Basic */}
            <div id="basic" className="card border-gray-100 flex flex-col">
              <div className="mb-6">
                <p className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-2">Basic</p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-bold text-dark">$69</span>
                  <span className="text-gray-400 text-sm">/month</span>
                </div>
                <p className="text-sm text-gray-500">Perfect for getting online fast</p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {['1–5 page website','Mobile-responsive design','Hosting & SSL included','1 business email','1 update per month','Basic maintenance'].map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-gray-600">
                    <IconCheck />{f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-secondary w-full justify-center">Get Started</Link>
            </div>

            {/* Standard — highlighted */}
            <div id="standard" className="card pricing-popular flex flex-col bg-gradient-to-b from-primary-50 to-white">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="badge bg-primary-500 text-white px-4 py-1.5 text-xs font-bold tracking-wide uppercase shadow-btn">
                  Most Popular
                </span>
              </div>
              <div className="mb-6 mt-2">
                <p className="text-sm font-bold text-primary-500 tracking-widest uppercase mb-2">Standard</p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-bold gradient-text">$99</span>
                  <span className="text-gray-400 text-sm">/month</span>
                </div>
                <p className="text-sm text-gray-500">Best for growing businesses</p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {['Up to 10 pages','Everything in Basic','Unlimited updates','SEO optimization','Google Analytics','Contact forms','Priority support'].map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <IconCheck />{f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary w-full justify-center">Get Started</Link>
            </div>

            {/* Premium */}
            <div id="premium" className="card border-gray-100 flex flex-col">
              <div className="mb-6">
                <p className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-2">Premium</p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-bold text-dark">$149</span>
                  <span className="text-gray-400 text-sm">/month</span>
                </div>
                <p className="text-sm text-gray-500">For e-commerce &amp; full-scale brands</p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {['Everything in Standard','E-commerce (30 products)','Speed optimization','Advanced SEO','24/7 support','Monthly reports'].map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-gray-600">
                    <IconCheck />{f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-secondary w-full justify-center">Get Started</Link>
            </div>
          </div>

          <p className="text-center text-sm text-gray-400 mt-8">
            All plans include a 15-day satisfaction period. · No long-term contracts. ·{' '}
            <Link href="/pricing" className="text-primary-500 hover:text-primary-500 font-semibold transition-colors">
              Compare all plan features →
            </Link>
          </p>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────────────────────── */}
      <section className="section-pad bg-surface" aria-labelledby="process-heading">
        <div className="container-tight">
          <div className="text-center mb-16">
            <p className="section-label">How It Works</p>
            <h2 id="process-heading" className="section-title">
              Your Website in 3 Simple Steps
            </h2>
            <p className="section-subtitle mx-auto text-center">
              We have simplified the entire process so you can get a professional website online fast — without the stress.
            </p>
            <div className="divider-glow" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-10 left-[calc(16.6%+1.5rem)] right-[calc(16.6%+1.5rem)] h-px bg-gradient-to-r from-primary-500/30 via-primary-400/50 to-primary-500/30" />

            {steps.map(({ step, title, desc }) => (
              <div key={step} className="relative flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-cta text-dark font-bold text-xl
                                flex items-center justify-center mb-6 shadow-cta relative z-10">
                  {step}
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
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
      <section className="section-pad bg-white" id="faq" aria-labelledby="faq-heading">
        <div className="container-tight max-w-4xl">
          <div className="text-center mb-16">
            <p className="section-label">FAQ</p>
            <h2 id="faq-heading" className="section-title">
              Frequently Asked Questions
            </h2>
            <p className="section-subtitle mx-auto text-center">
              Everything you need to know about our affordable website design and hosting plans.
            </p>
            <div className="divider-glow" />
          </div>

          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <details
                key={q}
                className="group card border border-gray-100 p-0 overflow-hidden
                           hover:border-primary-200 transition-colors"
              >
                <summary
                  className="flex items-center justify-between gap-4 cursor-pointer
                             select-none p-6 text-dark font-semibold text-base
                             list-none [&::-webkit-details-marker]:hidden"
                >
                  <span>{q}</span>
                  <svg
                    className="w-5 h-5 text-primary-500 shrink-0 transition-transform duration-300
                               group-open:rotate-180"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <div className="w-full h-px bg-gray-100 mb-4" />
                  <p className="text-gray-500 leading-relaxed text-sm">{a}</p>
                </div>
              </details>
            ))}
          </div>

          <p className="text-center text-sm text-gray-400 mt-8">
            Still have questions?{' '}
            <Link href="/contact" className="text-primary-500 font-semibold hover:text-primary-500 transition-colors">
              Contact us →
            </Link>
          </p>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────── */}
      <section
        className="section-pad bg-gradient-hero relative overflow-hidden"
        aria-label="Call to action"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                          w-[700px] h-[400px] bg-primary-500/20 rounded-full blur-[150px]" />
        </div>
        <div className="container-tight relative z-10 text-center">
          <p className="section-label text-primary-400">Less Talk. Let&apos;s Build.</p>
          <h2 className="section-title-white mb-6">
            Ready for a Website That Works for Your Business?
          </h2>
          <p className="section-subtitle-white mx-auto text-center mb-10">
            Join hundreds of small businesses that trust AffordaWeb Solutions for professional, affordable website design. Get started today — no commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Get My Free Quote
              <IconArrow />
            </Link>
            <Link href="/pricing" className="btn-outline-white text-base px-8 py-4">
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
