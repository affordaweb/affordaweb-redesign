import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AffordaWeb Solutions | Affordable Website Design Services from $69/mo',
  description:
    'AffordaWeb Solutions offers affordable website design services for small businesses starting at $69/month. Cheap web design with hosting, SSL, and unlimited updates included. Get a free quote today.',
  alternates: { canonical: 'https://affordawebsolutions.com' },
  keywords: 'affordable website design, website design services, cheap web design, budget web design, website design near me, small business website design',
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

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: 'linear-gradient(150deg, #F0F7FF 0%, #FFFFFF 55%, #EBF5FF 100%)' }}
        aria-label="Hero section"
      >
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(40,120,196,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(40,120,196,0.04) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        {/* Gradient orbs */}
        <div
          className="absolute pointer-events-none animate-pulse-glow"
          style={{ top: '10%', right: '8%', width: '600px', height: '600px', background: 'rgba(40,120,196,0.09)', borderRadius: '50%', filter: 'blur(120px)' }}
        />
        <div
          className="absolute pointer-events-none animate-pulse-glow"
          style={{ bottom: '5%', left: '5%', width: '480px', height: '480px', background: 'rgba(40,120,196,0.06)', borderRadius: '50%', filter: 'blur(100px)', animationDelay: '2s' }}
        />

        <div className="container-tight relative z-10 pt-40 pb-28 text-center">

          {/* Eyebrow badge */}
          <div
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-10"
            style={{ background: 'rgba(40,120,196,0.07)', border: '1px solid rgba(40,120,196,0.18)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
            <span className="text-primary-700 text-sm font-medium">Professional Website Design for Small Businesses</span>
          </div>

          {/* H1 */}
          <h1
            className="font-bold text-dark tracking-tight mb-8 text-balance"
            style={{ fontSize: 'clamp(2.75rem, 7vw, 5.5rem)', lineHeight: 1.05 }}
          >
            Less Talk.{' '}
            <span
              className="block sm:inline"
              style={{
                background: 'linear-gradient(135deg, #2878C4 0%, #4D9BE5 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Let&apos;s Build.
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="mb-12 max-w-[540px] mx-auto leading-relaxed"
            style={{ fontSize: '1.2rem', color: '#595959' }}
          >
            Fully managed website design with hosting, SSL, and unlimited updates — all for one affordable monthly rate. No technical skills needed. No hidden fees.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/contact" className="btn-primary px-9 py-4 text-[15px]">
              Get My Free Quote
              <IconArrow />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full font-semibold text-[15px] border-2 border-primary-600 text-primary-700 transition-all duration-300 hover:bg-primary-600 hover:text-white"
            >
              View Plans &amp; Pricing
            </Link>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm" style={{ color: '#595959' }}>
            {['No long-term contracts', 'Setup in 10–15 days', 'Hosting included', 'Cancel anytime'].map(item => (
              <span key={item} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-primary-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom fade to white */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #ffffff 0%, transparent 100%)' }}
        />
      </section>

      {/* ── STATS BAR ───────────────────────────────────────────────── */}
      <section className="bg-white py-14 border-b border-gray-100" aria-label="Key stats">
        <div className="container-tight">
          <dl className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map(({ value, label }, index) => (
              <div key={label} className="relative text-center py-4 px-6 lg:px-10">
                {index > 0 && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 h-10 w-px bg-gray-200 hidden lg:block" />
                )}
                <dt className="text-4xl sm:text-5xl font-bold gradient-text mb-2 tabular-nums">{value}</dt>
                <dd className="text-sm text-gray-400 font-medium tracking-wide">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────────────── */}
      <section
        className="section-pad relative overflow-hidden"
        id="services"
        aria-labelledby="services-heading"
        style={{ background: '#F7FAFE' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(40,120,196,0.05) 1.5px, transparent 1.5px)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="container-tight relative">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ icon, title, desc, href }) => (
              <article
                key={title}
                className="group bg-white rounded-[20px] p-8 border border-gray-100/80 transition-all duration-300 hover:-translate-y-2
                           shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(40,120,196,0.1)]
                           hover:border-primary-100"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-primary-700 transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'linear-gradient(135deg, #D6EBFF 0%, #ADCFF5 100%)' }}
                >
                  {icon}
                </div>
                <h3 className="text-[1.05rem] font-bold text-dark mb-2.5">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{desc}</p>
                <Link
                  href={href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 group-hover:gap-3 transition-all duration-200"
                >
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link href="/services" className="btn-primary">
              Explore All Services
              <IconArrow />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ───────────────────────────────────────────── */}
      <section
        className="section-pad relative overflow-hidden"
        aria-labelledby="why-heading"
        style={{ background: 'linear-gradient(135deg, #091829 0%, #0F2040 50%, #091829 100%)' }}
      >
        <div className="absolute pointer-events-none" style={{ top: '-10%', left: '-5%', width: '600px', height: '600px', background: 'rgba(40,120,196,0.18)', borderRadius: '50%', filter: 'blur(130px)' }} />
        <div className="absolute pointer-events-none" style={{ bottom: '-10%', right: '-5%', width: '500px', height: '500px', background: 'rgba(40,120,196,0.12)', borderRadius: '50%', filter: 'blur(110px)' }} />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reasons.map(({ title, desc }) => (
              <div key={title} className="card-glass group">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 shrink-0"
                  style={{ background: 'rgba(40,120,196,0.28)' }}
                >
                  <IconCheck className="w-5 h-5 text-primary-300" />
                </div>
                <h3 className="text-white font-bold text-[1rem] mb-2">{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING PREVIEW ─────────────────────────────────────────── */}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-center">

            {/* Basic */}
            <div
              className="bg-white rounded-[20px] p-8 border border-gray-100 flex flex-col"
              style={{ boxShadow: '0 2px 20px rgba(0,0,0,0.05)' }}
            >
              <div className="mb-7">
                <p className="text-xs font-bold text-gray-400 tracking-[0.15em] uppercase mb-3">Basic</p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-5xl font-bold text-dark">$69</span>
                  <span className="text-gray-400 text-sm">/month</span>
                </div>
                <p className="text-sm text-gray-500">Perfect for getting online fast</p>
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
              <Link href="/contact" className="btn-secondary w-full justify-center py-3.5 text-[15px]">
                Get Started
              </Link>
            </div>

            {/* Standard — deep blue featured card */}
            <div
              className="relative rounded-[20px] p-8 flex flex-col md:-my-5"
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

              <div className="mb-7 mt-4">
                <p className="text-xs font-bold tracking-[0.15em] uppercase mb-3" style={{ color: 'rgba(173,207,245,0.9)' }}>Standard</p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-5xl font-bold text-white">$99</span>
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>/month</span>
                </div>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>Best for growing businesses</p>
              </div>

              <ul className="space-y-3.5 mb-9 flex-grow">
                {['Up to 10 pages', 'Everything in Basic', 'Unlimited updates', 'SEO optimization', 'Google Analytics', 'Contact forms', 'Priority support'].map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.88)' }}>
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(255,255,255,0.2)' }}
                    >
                      <IconCheck className="w-3 h-3 text-white" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="w-full justify-center py-3.5 rounded-full font-semibold text-[15px] inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: '#ffffff', color: '#2878C4', boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}
              >
                Get Started
              </Link>
            </div>

            {/* Premium */}
            <div
              className="bg-white rounded-[20px] p-8 border border-gray-100 flex flex-col"
              style={{ boxShadow: '0 2px 20px rgba(0,0,0,0.05)' }}
            >
              <div className="mb-7">
                <p className="text-xs font-bold text-gray-400 tracking-[0.15em] uppercase mb-3">Premium</p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-5xl font-bold text-dark">$149</span>
                  <span className="text-gray-400 text-sm">/month</span>
                </div>
                <p className="text-sm text-gray-500">For e-commerce &amp; full-scale brands</p>
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
              <Link href="/contact" className="btn-secondary w-full justify-center py-3.5 text-[15px]">
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

      {/* ── PROCESS ─────────────────────────────────────────────────── */}
      <section
        className="section-pad relative overflow-hidden"
        aria-labelledby="process-heading"
        style={{ background: '#F7FAFE' }}
      >
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map(({ step, title, desc }) => (
              <div
                key={step}
                className="relative bg-white rounded-[20px] p-8 border border-gray-100 transition-all duration-300 hover:-translate-y-1
                           shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_48px_rgba(40,120,196,0.1)]"
              >
                <div
                  className="absolute top-6 right-6 font-black leading-none select-none pointer-events-none"
                  style={{ fontSize: '5rem', color: 'rgba(40,120,196,0.06)' }}
                >
                  {step}
                </div>
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-base mb-6 relative z-10"
                  style={{ background: 'linear-gradient(135deg, #1E66A8, #4D9BE5)' }}
                >
                  {step}
                </div>
                <h3 className="text-[1.05rem] font-bold text-dark mb-3 relative z-10">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed relative z-10">{desc}</p>
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

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      <section className="section-pad bg-white" id="faq" aria-labelledby="faq-heading">
        <div className="container-tight max-w-3xl">
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

          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <details
                key={q}
                className="group bg-white border border-gray-100 rounded-[16px] overflow-hidden transition-colors duration-200 hover:border-primary-200"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer select-none p-7 text-dark font-semibold text-[0.95rem] list-none [&::-webkit-details-marker]:hidden">
                  <span>{q}</span>
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 group-open:bg-primary-500"
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
                  <p className="text-gray-500 leading-relaxed text-sm">{a}</p>
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

      {/* ── FINAL CTA ───────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-28 lg:py-36"
        aria-label="Call to action"
        style={{ background: 'linear-gradient(135deg, #091829 0%, #0F2040 50%, #091829 100%)' }}
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div style={{ width: '800px', height: '600px', background: 'rgba(40,120,196,0.18)', borderRadius: '50%', filter: 'blur(100px)' }} />
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        <div className="container-tight relative z-10 text-center max-w-4xl mx-auto">
          <p className="section-label text-primary-400">Less Talk. Let&apos;s Build.</p>
          <h2
            className="font-bold text-white tracking-tight mb-6 text-balance"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)', lineHeight: 1.1 }}
          >
            Ready for a Website That Works for Your Business?
          </h2>
          <p className="mb-12 max-w-xl mx-auto leading-relaxed" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.55)' }}>
            Join hundreds of small businesses that trust AffordaWeb Solutions for professional, affordable website design. Get started today — no commitment required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary text-[15px] px-10 py-4">
              Get My Free Quote
              <IconArrow />
            </Link>
            <Link href="/pricing" className="btn-outline-white text-[15px] px-10 py-4">
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
