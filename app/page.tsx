import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import HeroBackground from '@/components/HeroBackground'

export const metadata: Metadata = {
  title: 'Affordable Website Design for Small Businesses | AffordaWeb Solutions',
  description:
    'Professional website design starting at $69/month. Hosting, SSL, SEO, and unlimited updates included. No setup fees. No contracts. Design, hosting, and support in one plan.',
  alternates: { canonical: 'https://affordawebsolutions.com' },
  openGraph: {
    title: 'Affordable Website Design for Small Businesses | AffordaWeb Solutions',
    description: 'Professional website design starting at $69/month. Hosting, SSL, SEO included.',
    url: 'https://affordawebsolutions.com',
  },
}

// ── Icon components ───────────────────────────────────────────────

function IconDesign() {
  return (
    <svg width="28" height="28" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function IconRedesign() {
  return (
    <svg width="28" height="28" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  )
}

function IconSeo() {
  return (
    <svg width="28" height="28" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  )
}

function IconMaint() {
  return (
    <svg width="28" height="28" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function IconHosting() {
  return (
    <svg width="28" height="28" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
  )
}

function IconEcom() {
  return (
    <svg width="28" height="28" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  )
}

function IconCheck() {
  return (
    <svg width="12" height="12" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  )
}

// ── Data ──────────────────────────────────────────────────────────

const services = [
  { Icon: IconDesign,   title: 'Website Design',      desc: 'Custom, mobile-first websites built to convert visitors into customers.', href: '/services#design' },
  { Icon: IconRedesign, title: 'Website Redesign',    desc: 'Transform your outdated site into a modern, high-performing experience.', href: '/services#redesign' },
  { Icon: IconSeo,      title: 'SEO Optimization',    desc: 'Rank higher on Google and get found by the customers who matter.', href: '/services#seo' },
  { Icon: IconMaint,    title: 'Website Maintenance', desc: 'We handle updates, backups, and security — so you can focus on business.', href: '/services#maintenance' },
  { Icon: IconHosting,  title: 'Shared Hosting',      desc: 'Fast, reliable managed hosting with SSL included in every plan.', href: '/services#hosting' },
  { Icon: IconEcom,     title: 'E-Commerce Design',   desc: 'Launch your online store with up to 30 products and payment processing.', href: '/services#ecommerce' },
]

const whoWeHelp = [
  { title: 'Freelancers',        desc: 'You do the work. Your site should sell it. A professional online presence starting at $69/month keeps you from losing clients to someone with a better-looking site.',                     Icon: IconDesign  },
  { title: 'Startups',           desc: 'First impressions matter and you only get one. Launch with a site that looks credible from day one, without a five-figure agency bill.',                                                    Icon: IconRedesign },
  { title: 'Small Businesses',   desc: 'Local service providers need leads, not just traffic. We build sites structured to show up on Google and convert the people who find them.',                                                Icon: IconSeo     },
  { title: 'Established Brands', desc: 'You have outgrown your current site. We redesign with care and keep your existing content and search rankings intact throughout.',                                                          Icon: IconMaint   },
  { title: 'Online Stores',      desc: 'The Premium plan includes e-commerce for up to 30 products with payment processing and a mobile-optimized checkout. Built to sell.',                                                       Icon: IconEcom    },
]

const portfolioItems = [
  { category: 'Website Design',   title: 'Web VA Experts Hub',       desc: 'A virtual assistant network needed a clean, modern online presence that matched its professionalism. We delivered focused service pages with a clear call to action.',    PortfolioIcon: IconDesign  },
  { category: 'Web Development',  title: 'Empower Queer Hub',        desc: 'A community resource site serving multiple roles at once. We built a flexible, mobile-first site with a structure that holds up under real traffic and real use.',         PortfolioIcon: IconRedesign },
  { category: 'Web Design',       title: 'Argentum Private Wealth',  desc: 'A financial advisory firm required a site built to the standard of its clients. We delivered a high-value, tailor-made presence that conveys trust on first load.',        PortfolioIcon: IconSeo    },
]

const faqs = [
  {
    q: 'What is included in the monthly price?',
    a: 'Every plan includes professional website design, managed web hosting, an SSL certificate, business email, and ongoing maintenance. Standard and Premium plans also include unlimited content updates and full SEO optimization.',
  },
  {
    q: 'Are there any setup fees or hidden costs?',
    a: 'No setup fees and no hidden costs. You pay one flat monthly rate and everything listed in your plan is included. The price you see is the price you pay.',
  },
  {
    q: 'How long does it take to build my website?',
    a: 'Most websites are designed and launched within 10–15 business days after we receive your content and feedback. E-commerce projects may take a few days longer depending on complexity.',
  },
  {
    q: 'Can I cancel my plan at any time?',
    a: 'Yes. All our plans are month-to-month with no long-term contracts. You can cancel at any time with 30 days notice. We will export your content so you are never left stranded.',
  },
  {
    q: 'Do I need to provide the content for my website?',
    a: 'We guide you through what we need — business details, services, photos, and goals. We can also help write or improve your content. Many clients send us basic information and we take it from there.',
  },
  {
    q: 'Is the domain name included in the price?',
    a: 'Domain registration is not included in the monthly plan but we help you register and connect it to your new website. Domain registration typically costs $10–15/year.',
  },
]

const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      name: 'AffordaWeb Solutions',
      description: 'Affordable website design, hosting, SEO, and maintenance for small businesses.',
      url: 'https://affordawebsolutions.com',
      email: 'hello@affordawebsolutions.com',
      priceRange: '$69-$149/month',
      areaServed: 'United States',
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: a,
        },
      })),
    },
  ],
}

// ── Page ──────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* ── A. HERO ── Dark navy, premium ──────────────────────────── */}
      <section
        className="relative overflow-hidden pt-[176px] pb-[100px]"
        style={{ background: '#0F0F1A' }}
        aria-labelledby="hero-heading"
      >
        <HeroBackground />

        <div className="container-tight relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* Left: Text */}
            <div>
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-7"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <span className="text-cyan-400 text-xs font-semibold tracking-wide uppercase">All-in-One</span>
                <span className="text-white/60 text-xs font-medium">Design, hosting, and support in one plan</span>
              </div>

              <h1
                id="hero-heading"
                className="font-bold text-white leading-[1.12] mb-6"
                style={{ letterSpacing: '-0.025em', fontSize: '45px' }}
              >
                Less Talk. Let&apos;s Build.{' '}
                <span className="gradient-text">Starting at $69/mo</span>
              </h1>

              <p className="text-xl leading-relaxed mb-9 max-w-lg" style={{ color: 'rgba(255,255,255,0.58)' }}>
                You get design, hosting, SSL, and unlimited content updates in one flat monthly price. No setup fees. No contracts. Just a website that works.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-9">
                <Link href="/contact" className="btn-primary">
                  Get a Free Quote
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/pricing" className="btn-outline-white">View Pricing</Link>
              </div>

              <div className="flex flex-wrap gap-5 text-sm" style={{ color: 'rgba(255,255,255,0.38)' }}>
                {['No contracts', 'Hosting included', 'SSL included', 'Cancel anytime'].map(t => (
                  <span key={t} className="flex items-center gap-1.5">
                    <span style={{ color: '#06B6D4' }}>✓</span>{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Browser mockup */}
            <div className="relative hidden lg:block">
              <div
                className="absolute -inset-8 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(86,54,209,0.18), transparent 70%)' }}
              />

              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  background: '#16142A',
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 24px 80px rgba(0,0,0,0.5)',
                }}
              >
                {/* Browser chrome */}
                <div
                  className="flex items-center gap-2 px-4 py-3"
                  style={{ background: '#1C1830', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full" style={{ background: 'rgba(248,113,113,0.7)' }} />
                    <div className="w-3 h-3 rounded-full" style={{ background: 'rgba(251,191,36,0.7)' }} />
                    <div className="w-3 h-3 rounded-full" style={{ background: 'rgba(74,222,128,0.7)' }} />
                  </div>
                  <div
                    className="flex-1 rounded-full px-3 py-1 mx-4"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <span className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>yourbusiness.com</span>
                  </div>
                </div>

                {/* Website hero image */}
                <div className="relative" style={{ height: '220px' }}>
                  <Image
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&auto=format&fit=crop&q=80"
                    alt="Professional small business website"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="500px"
                  />
                  {/* Simulated nav overlay */}
                  <div
                    className="absolute top-0 left-0 right-0 px-4 py-3 flex items-center justify-between"
                    style={{ background: 'rgba(9,24,41,0.72)', backdropFilter: 'blur(8px)' }}
                  >
                    <div className="h-2.5 bg-white/70 rounded w-20" />
                    <div className="flex gap-3">
                      {[1,2,3].map(n => <div key={n} className="h-1.5 bg-white/35 rounded w-10" />)}
                    </div>
                    <div className="h-6 rounded-full w-16" style={{ background: '#5636D1' }} />
                  </div>
                  {/* Bottom overlay */}
                  <div
                    className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-12"
                    style={{ background: 'linear-gradient(to top, rgba(15,15,26,0.88), transparent)' }}
                  >
                    <div className="h-4 bg-white/80 rounded w-3/5 mb-2" />
                    <div className="h-2 bg-white/40 rounded w-4/5 mb-3" />
                    <div className="h-7 rounded-full w-1/3" style={{ background: '#5636D1' }} />
                  </div>
                </div>

                {/* Service cards strip */}
                <div className="p-4" style={{ background: '#16142A' }}>
                  <div className="grid grid-cols-3 gap-2">
                    {[1,2,3].map(n => (
                      <div
                        key={n}
                        className="rounded-xl p-3"
                        style={{ background: '#1C1830', border: '1px solid rgba(255,255,255,0.06)' }}
                      >
                        <div
                          className="w-7 h-7 rounded-lg mb-2"
                          style={{ background: 'rgba(86,54,209,0.25)', border: '1px solid rgba(86,54,209,0.3)' }}
                        />
                        <div className="h-2 rounded w-full mb-1.5" style={{ background: 'rgba(255,255,255,0.15)' }} />
                        <div className="h-1.5 rounded w-3/4" style={{ background: 'rgba(255,255,255,0.08)' }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating chips */}
              <div className="absolute -left-10 top-16 bg-white rounded-xl px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.18)]">
                <div className="text-2xl font-bold leading-none" style={{ color: '#5636D1' }}>$69</div>
                <div className="text-xs text-gray-400 font-medium mt-0.5">Per month</div>
              </div>
              <div className="absolute -right-8 bottom-16 bg-white rounded-xl px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.18)]">
                <div className="text-2xl font-bold leading-none" style={{ color: '#5636D1' }}>$0</div>
                <div className="text-xs text-gray-400 font-medium mt-0.5">Setup fees</div>
              </div>
              <div
                className="absolute -right-6 top-8 rounded-xl px-3 py-2 animate-float"
                style={{
                  background: '#F0FDF4',
                  border: '1px solid rgba(74,222,128,0.3)',
                  boxShadow: '0 4px 16px rgba(74,222,128,0.12)',
                }}
              >
                <div className="text-green-600 text-xs font-bold">SSL</div>
                <div className="text-green-700 text-xs font-semibold mt-0.5">Included free</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── B. STATS BAR ──────────────────────────────────────────── */}
      <section className="relative bg-white" aria-label="Key statistics">
        {/* Top accent line */}
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(86,54,209,0.3) 40%, rgba(6,182,212,0.3) 60%, transparent)' }} />
        {/* Bottom accent line */}
        <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(86,54,209,0.3) 40%, rgba(6,182,212,0.3) 60%, transparent)' }} />

        <div className="container-tight">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {([
              { number: '$69/mo', label: 'Starting Price',   sublabel: 'No hidden fees' },
              { number: '24 hrs', label: 'Response Time',    sublabel: 'Mon to Fri' },
              { number: '$0',     label: 'Setup Fees',       sublabel: 'Get started free' },
              { number: '99.9%', label: 'Uptime Guarantee', sublabel: 'Always online' },
            ]).map(({ number, label, sublabel }, i) => (
              <div key={label} className={`group text-center py-12 px-6 ${i > 0 ? 'border-l border-gray-100' : ''}`}>
                {/* Thin accent dot */}
                <div className="w-1.5 h-1.5 rounded-full mx-auto mb-5 transition-all duration-300 group-hover:scale-125" style={{ background: 'linear-gradient(135deg, #5636D1, #06B6D4)' }} />
                <div className="text-4xl lg:text-5xl font-light tracking-tight text-gray-900 leading-none mb-3">{number}</div>
                <div className="uppercase tracking-widest text-[11px] font-semibold text-gray-400 mb-1">{label}</div>
                <div className="text-xs text-gray-300 tracking-wide">{sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── D. HOW IT WORKS ─── Gradient blue ──────────────────────── */}
      <section
        className="section-pad relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #F0EDFD 0%, #F7F5FF 50%, #F0EDFD 100%)' }}
        aria-labelledby="process-heading"
      >
        {/* Top accent line */}
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(86,54,209,0.25) 50%, transparent)' }} />
        {/* Radial glow top-left */}
        <div className="absolute -top-24 -left-24 w-[500px] h-[500px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(86,54,209,0.08), transparent 65%)' }} />
        {/* Radial glow bottom-right */}
        <div className="absolute -bottom-24 -right-24 w-[400px] h-[400px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(86,54,209,0.06), transparent 65%)' }} />
        <div className="container-tight relative z-10">
          <div className="text-center mb-14">
            <p className="section-label">Our Process</p>
            <h2
              id="process-heading"
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
              style={{ letterSpacing: '-0.01em' }}
            >
              Three Steps. One Monthly Price.
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Tell us what you need, we build and launch it, then we stay on to keep it running. That is the whole plan.
            </p>
          </div>

          <div className="relative">
            {/* Connector line — desktop only */}
            <div
              className="hidden md:block absolute border-t-2 border-dashed border-gray-200"
              style={{ top: '44px', left: '21%', right: '21%' }}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
              {[
                { step: '1', title: 'Share Your Goals',   desc: 'Tell us your goals, preferred style, and the features you need. No technical knowledge required — we guide you through it.' },
                { step: '2', title: 'Website Creation',   desc: 'We design and launch a professional, SEO-friendly website built for your business and optimized for search from day one.' },
                { step: '3', title: 'Ongoing Support',    desc: 'We provide hosting, maintenance, updates, and a free business email account. You never deal with technical issues on your own.' },
              ].map(({ step, title, desc }) => (
                <div key={step} className="text-center">
                  <div
                    className="w-[88px] h-[88px] rounded-full flex items-center justify-center text-white font-bold text-3xl mx-auto mb-6"
                    style={{
                      background: 'linear-gradient(135deg, #5636D1 0%, #7B55F0 100%)',
                      boxShadow: '0 0 0 8px rgba(86,54,209,0.15)',
                    }}
                  >
                    {step}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-3">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/contact" className="btn-primary">Start Your Project</Link>
          </div>
        </div>
      </section>

      {/* ── E. WHO WE HELP ─── Dark navy ───────────────────────────── */}
      <section className="section-pad relative overflow-hidden" style={{ background: '#0F0F1A' }} aria-labelledby="clients-heading">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(86,54,209,0.18) 1.5px, transparent 1.5px)', backgroundSize: '28px 28px', opacity: 0.25 }} />
        <div className="container-tight relative z-10">
          <div className="text-center mb-14">
            <p className="section-label-white">Who We Serve</p>
            <h2
              id="clients-heading"
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
              style={{ letterSpacing: '-0.01em' }}
            >
              Built for Businesses That Can&apos;t Afford to Wait
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Professional websites shouldn&apos;t cost a fortune. Quality and affordability are not mutually exclusive.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whoWeHelp.map(({ title, desc, Icon }) => (
              <div
                key={title}
                className="rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <div className="icon-wrap mb-5" style={{ background: 'rgba(255,255,255,0.08)', color: '#06B6D4' }}>
                  <Icon />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── F. PRICING PREVIEW ─── Light ───────────────────────────── */}
      <section className="section-pad" style={{ background: '#F7FBFF' }} aria-labelledby="pricing-heading">
        <div className="container-tight">
          <div className="text-center mb-14">
            <p className="section-label">Simple Pricing</p>
            <h2
              id="pricing-heading"
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
              style={{ letterSpacing: '-0.01em' }}
            >
              Transparent Pricing. No Surprises.
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              All plans include hosting, SSL, maintenance, and a professionally designed website.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">

            {/* Basic */}
            <div
              className="bg-white rounded-2xl p-8 border border-gray-100 flex flex-col"
              style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.05)', borderTop: '3px solid #CBD5E1' }}
            >
              <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">Basic</p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-5xl font-bold text-gray-900">$69</span>
                <span className="text-gray-400 text-sm">/mo</span>
              </div>
              <p className="text-sm text-gray-500 mb-6">Perfect for getting online fast</p>
              <ul className="space-y-3 mb-8 flex-grow">
                {['1–5 page website', 'Custom mobile-responsive design', 'Hosting + SSL included', '1 business email', '1 content update/month', 'Basic security maintenance'].map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                    <span
                      className="rounded-full flex items-center justify-center text-primary-600 shrink-0 mt-0.5"
                      style={{ width: '18px', height: '18px', minWidth: '18px', background: '#F0EDFD' }}
                    >
                      <IconCheck />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-secondary w-full justify-center">Get Started — $69/mo</Link>
            </div>

            {/* Standard — Featured */}
            <div
              className="rounded-2xl p-8 flex flex-col relative md:-my-4 overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #5636D1 0%, #7B55F0 100%)',
                boxShadow: '0 24px 60px rgba(86,54,209,0.4)',
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1.5px, transparent 1.5px)',
                  backgroundSize: '24px 24px',
                  opacity: 0.06,
                }}
              />
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <span className="text-xs font-bold tracking-wide uppercase px-4 py-1.5 rounded-full shadow-md inline-block" style={{ background: '#fff', color: '#5636D1' }}>
                  ✦ Most Popular
                </span>
              </div>
              <p className="text-xs font-bold tracking-widest uppercase text-white/60 mb-3 mt-2 relative z-10">Standard</p>
              <div className="flex items-baseline gap-1 mb-1 relative z-10">
                <span className="text-5xl font-bold text-white">$99</span>
                <span className="text-white/50 text-sm">/mo</span>
              </div>
              <p className="text-sm text-white/65 mb-6 relative z-10">Best for growing businesses</p>
              <ul className="space-y-3 mb-8 flex-grow relative z-10">
                {['Up to 10 pages', 'Custom mobile-responsive design', 'Hosting + SSL included', '1 business email', 'Unlimited content updates', 'Full SEO optimization', 'Google Analytics setup', 'Booking / inquiry forms'].map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm text-white">
                    <span
                      className="rounded-full flex items-center justify-center text-white shrink-0 mt-0.5"
                      style={{ width: '18px', height: '18px', minWidth: '18px', background: 'rgba(255,255,255,0.2)' }}
                    >
                      <IconCheck />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="w-full justify-center inline-flex items-center rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 relative z-10"
                style={{ background: '#ffffff', color: '#5636D1', padding: '14px 32px', fontSize: '15px' }}
              >
                Get Started — $99/mo
              </Link>
            </div>

            {/* Premium */}
            <div
              className="bg-white rounded-2xl p-8 border border-gray-100 flex flex-col"
              style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.05)', borderTop: '3px solid #5636D1' }}
            >
              <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">Premium</p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-5xl font-bold text-gray-900">$149</span>
                <span className="text-gray-400 text-sm">/mo</span>
              </div>
              <p className="text-sm text-gray-500 mb-6">For e-commerce &amp; full-scale brands</p>
              <ul className="space-y-3 mb-8 flex-grow">
                {['Unlimited pages', 'Custom mobile-responsive design', 'Hosting + SSL included', '1 business email', 'Unlimited content updates', 'Full SEO optimization', 'E-commerce (up to 30 products)', '24/7 priority support'].map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                    <span
                      className="rounded-full flex items-center justify-center text-primary-600 shrink-0 mt-0.5"
                      style={{ width: '18px', height: '18px', minWidth: '18px', background: '#F0EDFD' }}
                    >
                      <IconCheck />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-secondary w-full justify-center">Get Started — $149/mo</Link>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-gray-400">
            {['✓ No setup fees', '✓ Cancel anytime', '✓ Month-to-month', '✓ Respond within 24 hrs'].map(t => (
              <span key={t}>{t}</span>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/pricing" className="text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors">
              View full pricing details →
            </Link>
          </div>
        </div>
      </section>

      {/* ── G. PORTFOLIO HIGHLIGHTS ─── White + pattern ─────────────── */}
      <section className="section-pad bg-white relative overflow-hidden" aria-labelledby="portfolio-heading">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(86,54,209,0.065) 1.5px, transparent 1.5px)', backgroundSize: '28px 28px' }} />
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(86,54,209,0.18) 50%, transparent)' }} />
        <div className="container-tight relative z-10">
          <div className="text-center mb-14">
            <p className="section-label">Our Work</p>
            <h2
              id="portfolio-heading"
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
              style={{ letterSpacing: '-0.01em' }}
            >
              A Few Sites We Built
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Different industries, same standard. Every project ships with clean code, mobile-responsive design, and SEO built in.
            </p>
          </div>

          <div className="space-y-5">
            {portfolioItems.map(({ category, title, desc, PortfolioIcon }) => (
              <div
                key={title}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col sm:flex-row transition-all duration-300 hover:-translate-y-0.5"
                style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.05)', borderLeft: '4px solid #5636D1' }}
              >
                <div
                  className="sm:w-36 lg:w-48 flex items-center justify-center shrink-0 p-8"
                  style={{ background: '#F7FBFF' }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-white"
                    style={{ background: '#5636D1' }}
                  >
                    <PortfolioIcon />
                  </div>
                </div>
                <div className="p-7 flex-1">
                  <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-2">{category}</p>
                  <h3 className="font-bold text-gray-900 text-xl mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
                  <Link href="/portfolio" className="text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors">
                    View all projects →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── H. FAQ ─── Light + texture ─────────────────────────────── */}
      <section className="section-pad relative overflow-hidden" style={{ background: '#F7FBFF' }} aria-labelledby="faq-heading">
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(86,54,209,0.05) 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />
        {/* Center glow */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(86,54,209,0.05), transparent)' }} />
        <div className="container-tight max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <p className="section-label">Common Questions</p>
            <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold text-gray-900" style={{ letterSpacing: '-0.01em' }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <details
                key={q}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-primary-200 transition-colors"
                style={{ boxShadow: '0 1px 8px rgba(0,0,0,0.04)' }}
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer select-none p-6 text-gray-900 font-semibold text-base list-none [&::-webkit-details-marker]:hidden">
                  <span>{q}</span>
                  <span
                    className="rounded-full flex items-center justify-center shrink-0 transition-all duration-300 group-open:bg-primary-500 group-open:text-white text-primary-500"
                    style={{ width: '32px', height: '32px', minWidth: '32px', background: '#F0EDFD' }}
                  >
                    <svg
                      className="w-3.5 h-3.5 transition-transform duration-300 group-open:rotate-180"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <div className="w-full h-px bg-gray-100 mb-4" />
                  <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-400 text-sm mb-4">Still have questions?</p>
            <Link href="/contact" className="btn-primary">Ask Us Anything</Link>
          </div>
        </div>
      </section>

      {/* ── I. FINAL CTA ─── Dark navy ─────────────────────────────── */}
      <section
        className="section-pad relative overflow-hidden"
        style={{ background: '#0F0F1A' }}
        aria-label="Call to action"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(86,54,209,0.2) 1.5px, transparent 1.5px)',
            backgroundSize: '28px 28px',
            opacity: 0.3,
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(86,54,209,0.12), transparent)' }}
        />

        <div className="container-tight relative z-10 text-center">
          <p className="section-label-white">Get Started Today</p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5"
            style={{ letterSpacing: '-0.025em' }}
          >
            Ready to Grow Your Business Online?
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Get a free, no-obligation quote within 24 hours. No commitment required — just tell us about your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact" className="btn-white px-9 py-4">
              Get a Free Quote
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/pricing" className="btn-outline-white px-9 py-4">View Pricing</Link>
          </div>

          {/* Trust line */}
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>
            No commitment required. We respond within 24 hours.
          </p>
        </div>
      </section>
    </>
  )
}
