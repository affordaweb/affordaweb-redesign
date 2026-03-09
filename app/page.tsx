import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import HeroBackground from '@/components/HeroBackground'

export const metadata: Metadata = {
  title: 'Affordable Website Design for Small Businesses | AffordaWeb Solutions',
  description:
    'Affordable website design for small businesses starting at $69/month. Custom design, managed hosting, SSL, SEO, and unlimited updates — no setup fees, no contracts.',
  alternates: { canonical: 'https://affordawebsolutions.com' },
  openGraph: {
    title: 'Affordable Website Design for Small Businesses | AffordaWeb Solutions',
    description: 'Affordable website design for small businesses starting at $69/month. Hosting, SSL, SEO, and unlimited updates included.',
    url: 'https://affordawebsolutions.com',
    images: [{ url: 'https://affordawebsolutions.com/og-image.png', width: 1200, height: 630, alt: 'AffordaWeb Solutions — Affordable Website Design for Small Businesses' }],
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
  { Icon: IconDesign,   title: 'Website Design',      desc: 'Custom, mobile-first small business website design built to convert visitors into paying customers.', href: '/services#design' },
  { Icon: IconRedesign, title: 'Website Redesign',    desc: 'Transform your outdated site into a fast, modern, high-performing website without losing your rankings.', href: '/services#redesign' },
  { Icon: IconSeo,      title: 'SEO Optimization',    desc: 'Local SEO built into every site so your small business ranks on Google and gets found by nearby customers.', href: '/services#seo' },
  { Icon: IconMaint,    title: 'Website Maintenance', desc: 'Managed website maintenance — updates, backups, and security monitoring — so you can focus on running your business.', href: '/services#maintenance' },
  { Icon: IconHosting,  title: 'Shared Hosting',      desc: 'Fast, reliable managed web hosting with a free SSL certificate included in every website design plan.', href: '/services#hosting' },
  { Icon: IconEcom,     title: 'E-Commerce Design',   desc: 'Launch your online store with up to 30 products, secure payment processing, and a mobile-optimized checkout.', href: '/services#ecommerce' },
]

const whoWeHelp = [
  { title: 'Freelancers',        tag: 'Solo professionals',     color: '#7C3AED', pastelBg: 'rgba(124,58,237,0.14)',   desc: 'A professional freelancer website starting at $69/month keeps you from losing clients to someone with a better-looking site. Your skills deserve a site that sells them.',              Icon: IconDesign  },
  { title: 'Startups',           tag: 'Early-stage ventures',   color: '#06B6D4', pastelBg: 'rgba(6,182,212,0.14)',    desc: 'Launch with a credible startup website from day one — without the five-figure agency bill. First impressions define early traction, and yours only happens once.',                        Icon: IconRedesign },
  { title: 'Small Businesses',   tag: 'Local service providers',color: '#10B981', pastelBg: 'rgba(16,185,129,0.14)',  desc: 'Local small business website design built to rank on Google and generate leads — not just traffic. Every site includes local SEO so customers in your area can actually find you.',     Icon: IconSeo     },
  { title: 'Established Brands', tag: 'Growing companies',      color: '#F59E0B', pastelBg: 'rgba(245,158,11,0.14)',  desc: 'You have outgrown your current site. Our website redesign service preserves your search rankings and existing content while delivering a modern, high-converting experience.',           Icon: IconMaint   },
  { title: 'Online Stores',      tag: 'E-commerce businesses',  color: '#F43F5E', pastelBg: 'rgba(244,63,94,0.14)',   desc: 'Affordable e-commerce website design with up to 30 products, secure payment processing, and a mobile-optimized checkout. Built for small online stores that need to sell from day one.',  Icon: IconEcom    },
]

const portfolioItems = [
  { category: 'Website Design',   title: 'Web VA Experts Hub',       desc: 'A virtual assistant network needed a clean, modern online presence that matched its professionalism. We delivered focused service pages with a clear call to action.',    PortfolioIcon: IconDesign,   color: '#5636D1', bg: 'linear-gradient(135deg, #EDE9FD 0%, #DDD6FE 100%)' },
  { category: 'Web Development',  title: 'Empower Queer Hub',        desc: 'A community resource site serving multiple roles at once. We built a flexible, mobile-first site with a structure that holds up under real traffic and real use.',         PortfolioIcon: IconRedesign, color: '#E2498A', bg: 'linear-gradient(135deg, #FDE8F2 0%, #FBCFE8 100%)' },
  { category: 'Web Design',       title: 'Argentum Private Wealth',  desc: 'A financial advisory firm required a site built to the standard of its clients. We delivered a high-value, tailor-made presence that conveys trust on first load.',        PortfolioIcon: IconSeo,      color: '#0891B2', bg: 'linear-gradient(135deg, #E0F7FA 0%, #BAE6FD 100%)' },
]

const faqs = [
  {
    q: 'What does your affordable website design package include?',
    a: 'Every plan includes a professionally designed small business website, managed web hosting, a free SSL certificate, business email, and ongoing maintenance. Standard and Premium plans also include unlimited content updates and full on-page SEO optimization — everything in one flat monthly price.',
  },
  {
    q: 'Are there any setup fees or hidden costs with your website design plans?',
    a: 'No setup fees and no hidden costs. You pay one flat monthly rate and everything listed in your plan is included. The price you see is the price you pay — no surprise invoices.',
  },
  {
    q: 'How long does it take to design and launch a small business website?',
    a: 'Most small business websites are designed and launched within 10 to 15 business days after we receive your content and feedback. E-commerce website projects may take a few days longer depending on the number of products and complexity.',
  },
  {
    q: 'Can I cancel my website design plan at any time?',
    a: 'Yes. All our website design plans are month-to-month with no long-term contracts. You can cancel at any time with 30 days notice. We will export your content and files so you are never left stranded.',
  },
  {
    q: 'Do I need to write my own website content?',
    a: 'No. We guide you through what we need — your business details, services, photos, and goals. We can also help write or refine your copy. Many clients provide basic information and we handle the rest, including structuring content for SEO.',
  },
  {
    q: 'Does website design with hosting mean I do not need a separate web host?',
    a: 'Correct. Every plan includes fully managed web hosting — you do not need to buy or manage a separate hosting account. Your website design, hosting, SSL certificate, and maintenance are all bundled into one monthly price.',
  },
]

const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': 'https://affordawebsolutions.com/#business',
      name: 'AffordaWeb Solutions',
      description: 'Affordable website design for small businesses — custom design, managed hosting, SSL, SEO, and unlimited updates in one monthly plan starting at $69/month.',
      url: 'https://affordawebsolutions.com',
      email: 'hello@affordawebsolutions.com',
      priceRange: '$69–$149/month',
      areaServed: 'United States',
      openingHours: 'Mo-Fr 09:00-17:00',
      currenciesAccepted: 'USD',
      paymentAccepted: 'Credit Card',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Website Design Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Small Business Website Design', description: 'Custom, mobile-first website design for small businesses starting at $69/month.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Redesign', description: 'Modernize your existing website without losing search rankings.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Optimization', description: 'Local SEO built into every website to help small businesses rank on Google.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Managed Web Hosting', description: 'Fast, reliable managed hosting with SSL included in every plan.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Maintenance', description: 'Ongoing website updates, security monitoring, and backups.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-Commerce Website Design', description: 'Online store design with up to 30 products and secure payment processing.' } },
        ],
      },
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
    {
      '@type': 'WebPage',
      '@id': 'https://affordawebsolutions.com/#webpage',
      url: 'https://affordawebsolutions.com',
      name: 'Affordable Website Design for Small Businesses | AffordaWeb Solutions',
      description: 'Affordable website design for small businesses starting at $69/month. Custom design, managed hosting, SSL, SEO, and unlimited updates — no setup fees, no contracts.',
      isPartOf: { '@id': 'https://affordawebsolutions.com/#business' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://affordawebsolutions.com' }],
      },
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
                Affordable Website Design for Small Businesses.{' '}
                <span className="gradient-text">Starting at $69/mo</span>
              </h1>

              <p className="text-xl leading-relaxed mb-9 max-w-lg" style={{ color: 'rgba(255,255,255,0.58)' }}>
                Professional small business website design with hosting, SSL, and unlimited content updates in one flat monthly price. No setup fees. No contracts. Just a website that works.
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
                <div className="relative flex items-center justify-center" style={{ height: '260px', background: '#f8f8fc' }}>
                  <Image
                    src="/hero-mockup.png"
                    alt="Professional website designs on a monitor"
                    fill
                    className="object-contain object-center p-3"
                    priority
                    sizes="500px"
                  />
                  {/* Bottom overlay — subtle fade into browser bottom */}
                  <div
                    className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-12"
                    style={{ background: 'linear-gradient(to top, rgba(22,20,42,0.5), transparent)' }}
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

      {/* ── B. STATS MARQUEE ──────────────────────────────────────── */}
      <section className="relative overflow-hidden py-7 group bg-white" aria-label="Key statistics">
        {/* Exact same bg as Three Steps section below */}
        <div className="absolute inset-x-0 top-0 h-[500px] pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% -10%, rgba(86,54,209,0.06) 0%, transparent 70%)' }} />
        {/* Top / bottom accent lines */}
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(86,54,209,0.2) 40%, rgba(6,182,212,0.2) 60%, transparent)' }} />
        <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(86,54,209,0.2) 40%, rgba(6,182,212,0.2) 60%, transparent)' }} />
        {/* Left / right fade masks — match bg-white */}
        <div className="absolute inset-y-0 left-0 w-28 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #ffffff, transparent)' }} />
        <div className="absolute inset-y-0 right-0 w-28 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #ffffff, transparent)' }} />

        {/* Scrolling track — duplicated for seamless loop */}
        <div
          className="flex animate-marquee group-hover:[animation-play-state:paused]"
          style={{ width: 'max-content', willChange: 'transform' }}
        >
          {[0, 1].map((pass) =>
            ([
              { number: '$69/mo', label: 'Starting Price',   sublabel: 'No hidden fees',    bg: '#F5F3FF', border: '#C4B5FD', iconBg: '#7C3AED', iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 6v1m0 4v1m-4-8H6m12 0h-2m2 8H6m0 0a9 9 0 110-18 9 9 0 010 18z' },
              { number: '24 hrs', label: 'Response Time',    sublabel: 'Mon to Fri',         bg: '#ECFEFF', border: '#67E8F9', iconBg: '#0EA5E9', iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
              { number: '$0',     label: 'Setup Fees',       sublabel: 'Get started free',   bg: '#ECFDF5', border: '#6EE7B7', iconBg: '#059669', iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
              { number: '99.9%', label: 'Uptime Guarantee', sublabel: 'Always online',       bg: '#FFF1F2', border: '#FDA4AF', iconBg: '#E11D48', iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
              { number: '100+',  label: 'Sites Launched',   sublabel: 'Happy clients',       bg: '#FFFBEB', border: '#FCD34D', iconBg: '#D97706', iconPath: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' },
              { number: '15 yrs', label: 'In Business',      sublabel: 'Est. 2010',           bg: '#FAF5FF', border: '#D8B4FE', iconBg: '#9333EA', iconPath: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
            ] as { number: string; label: string; sublabel: string; bg: string; border: string; iconBg: string; iconPath: string }[]).map((item, i) => (
              <div key={`${pass}-${i}`} className="px-3 shrink-0">
                <div
                  className="flex items-center gap-4 px-5 py-3.5 rounded-2xl border cursor-default select-none transition-all duration-300 hover:scale-[1.04] hover:shadow-lg"
                  style={{ background: item.bg, borderColor: item.border, minWidth: '210px' }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: item.iconBg }}
                  >
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.iconPath} />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xl font-semibold text-gray-800 leading-none">{item.number}</div>
                    <div className="text-sm font-medium text-gray-600 mt-0.5">{item.label}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{item.sublabel}</div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>


      {/* ── D. HOW IT WORKS ──────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden bg-white" aria-labelledby="process-heading">
        {/* Soft radial top glow */}
        <div className="absolute inset-x-0 top-0 h-[500px] pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% -10%, rgba(86,54,209,0.06) 0%, transparent 70%)' }} />

        <div className="container-tight relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="section-label">Our Process</p>
            <h2
              id="process-heading"
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
              style={{ letterSpacing: '-0.02em' }}
            >
              How Our Website Design Process Works
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
              Tell us your goals, we design and launch your site, then we manage everything ongoing — all in one flat monthly price.
            </p>
          </div>

          {/* Steps grid */}
          <div className="relative">
            {/* Connector line — desktop */}
            <div
              className="hidden md:block absolute h-px"
              style={{
                top: '52px',
                left: 'calc(16.66% + 28px)',
                right: 'calc(16.66% + 28px)',
                background: 'linear-gradient(90deg, #5636D1, #06B6D4, #10B981)',
              }}
            />
            {/* Connector dots */}
            <div className="hidden md:block absolute w-2 h-2 rounded-full bg-primary-500" style={{ top: '47px', left: 'calc(50% - 4px)' }} />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              {([
                {
                  step: '01', title: 'Share Your Goals',
                  desc: 'Tell us your goals, preferred style, and the features you need. No technical knowledge required.',
                  perks: ['Free consultation call', 'Style questionnaire', 'Goal planning session'],
                  iconPath: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
                  color: '#5636D1', pastelBg: 'rgba(86,54,209,0.07)', ringColor: 'rgba(86,54,209,0.15)',
                },
                {
                  step: '02', title: 'Website Creation',
                  desc: 'We design and launch a professional, SEO-friendly website built for your business from day one.',
                  perks: ['Custom professional design', 'SEO-ready from launch', 'Mobile-first build'],
                  iconPath: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
                  color: '#0EA5E9', pastelBg: 'rgba(14,165,233,0.07)', ringColor: 'rgba(14,165,233,0.15)',
                },
                {
                  step: '03', title: 'Ongoing Support',
                  desc: 'We provide hosting, maintenance, updates, and a free business email. You focus on your business.',
                  perks: ['Hosting included', 'Monthly updates', 'Free business email'],
                  iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                  color: '#10B981', pastelBg: 'rgba(16,185,129,0.07)', ringColor: 'rgba(16,185,129,0.15)',
                },
              ] as { step: string; title: string; desc: string; perks: string[]; iconPath: string; color: string; pastelBg: string; ringColor: string }[]).map(({ step, title, desc, perks, iconPath, color, pastelBg, ringColor }) => (
                <div
                  key={step}
                  className="group bg-white rounded-3xl border border-gray-100 p-8 hover:-translate-y-1.5 hover:shadow-card-hover transition-all duration-300 shadow-card"
                >
                  {/* Step circle */}
                  <div
                    className="w-[60px] h-[60px] rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-6"
                    style={{
                      background: `linear-gradient(135deg, ${color}, ${color}cc)`,
                      boxShadow: `0 0 0 8px ${ringColor}`,
                    }}
                  >
                    {step}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: pastelBg }}
                  >
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d={iconPath} />
                    </svg>
                  </div>

                  {/* Text */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed text-center mb-6">{desc}</p>

                  {/* Divider */}
                  <div className="h-px mb-5 mx-4" style={{ background: `linear-gradient(90deg, transparent, ${color}30, transparent)` }} />

                  {/* Perks */}
                  <ul className="space-y-2.5">
                    {perks.map(perk => (
                      <li key={perk} className="flex items-center gap-3 text-sm text-gray-600">
                        <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: pastelBg }}>
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color }}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {perk}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-14">
            <Link href="/contact" className="btn-cyan">Start Your Project
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── E. WHO WE HELP ─── Dark navy ───────────────────────────── */}
      <section className="section-pad relative overflow-hidden" style={{ background: '#0F0F1A' }} aria-labelledby="clients-heading">
        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(86,54,209,0.18) 1.5px, transparent 1.5px)', backgroundSize: '28px 28px', opacity: 0.2 }} />
        {/* Glow top-left */}
        <div className="absolute -top-32 -left-16 w-[700px] h-[700px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(86,54,209,0.1), transparent 60%)' }} />
        {/* Glow bottom-right */}
        <div className="absolute -bottom-32 -right-16 w-[500px] h-[500px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.07), transparent 60%)' }} />

        <div className="container-tight relative z-10">
          <div className="text-center mb-14">
            <p className="section-label-white">Who We Serve</p>
            <h2
              id="clients-heading"
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
              style={{ letterSpacing: '-0.01em' }}
            >
              Affordable Website Design for Every Type of Business
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Professional website design should not cost a fortune. We serve freelancers, startups, local businesses, and online stores — all at one flat monthly price.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whoWeHelp.map(({ title, tag, desc, color, pastelBg, Icon }) => (
              <div
                key={title}
                className="group relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden flex flex-col"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                {/* Colored top accent line */}
                <div
                  className="absolute inset-x-0 top-0 h-0.5 rounded-t-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: color }}
                />

                {/* Icon + tag row */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ background: pastelBg, color }}
                  >
                    <Icon />
                  </div>
                  <span
                    className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
                    style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.4)' }}
                  >
                    {tag}
                  </span>
                </div>

                <h3 className="font-bold text-white text-lg mb-3">{title}</h3>
                <p className="text-sm leading-relaxed mb-6 flex-grow" style={{ color: 'rgba(255,255,255,0.5)' }}>{desc}</p>

                {/* Learn more footer */}
                <div
                  className="flex items-center gap-1.5 text-xs font-semibold transition-all duration-300 group-hover:gap-2.5"
                  style={{ color }}
                >
                  Learn how we help
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

                {/* Hover inset border glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: `inset 0 0 0 1px ${color}35` }}
                />
              </div>
            ))}

            {/* 6th card — CTA */}
            <div
              className="group relative rounded-2xl p-7 overflow-hidden flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #3D22B0 0%, #5636D1 50%, #0EA5E9 100%)' }}
            >
              {/* Subtle dot pattern overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
              {/* Glow */}
              <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.12), transparent 70%)' }} />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(255,255,255,0.15)' }}>
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full mb-4 inline-block" style={{ background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)' }}>
                  Get started today
                </span>
                <h3 className="font-bold text-white text-xl mb-3 mt-2">Ready to Get Started?</h3>
                <p className="text-sm leading-relaxed mb-7" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  No contracts, no setup fees, no technical headaches. A professional website from $69/month, live within days.
                </p>
              </div>

              <Link
                href="/contact"
                className="relative z-10 inline-flex items-center justify-center gap-2 bg-white font-bold text-sm px-5 py-3 rounded-xl hover:bg-gray-50 transition-colors"
                style={{ color: '#5636D1' }}
              >
                Get a Free Quote
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="text-center mt-14">
            <Link href="/contact" className="btn-cyan">
              Start Your Project
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── F. PRICING PREVIEW ──────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden" aria-labelledby="pricing-heading">
        {/* Background gradient */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #EEE9FB 100%)' }} />
        {/* Radial top glow */}
        <div className="absolute inset-x-0 top-0 h-[600px] pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(86,54,209,0.13) 0%, transparent 65%)' }} />
        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(86,54,209,0.07) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

        <div className="container-tight relative z-10">
          <div className="text-center mb-16">
            <p className="section-label">Simple Pricing</p>
            <h2
              id="pricing-heading"
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
              style={{ letterSpacing: '-0.02em' }}
            >
              Website Design Pricing With No Surprises
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
              Every website design plan includes managed hosting, SSL, ongoing maintenance, and a professionally designed website — all in one flat monthly rate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-end pb-8">

            {/* Basic */}
            <div
              className="group bg-white rounded-3xl p-8 flex flex-col border border-gray-100 hover:-translate-y-1 transition-all duration-300"
              style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.06)', borderTop: '3px solid #94A3B8' }}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-gray-100 text-gray-500">Basic</span>
              </div>
              <div className="mb-1">
                <span className="text-6xl font-extrabold text-gray-900 tracking-tight">$69</span>
                <span className="text-gray-400 text-base ml-1">/mo</span>
              </div>
              <p className="text-sm text-gray-400 mt-1 mb-7">Perfect for getting online fast</p>
              <ul className="space-y-3 mb-8 flex-grow">
                {['1–5 page website', 'Custom mobile-responsive design', 'Hosting + SSL included', '1 business email', '1 content update/month', 'Basic security maintenance'].map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="rounded-full flex items-center justify-center text-primary-600 shrink-0 mt-0.5" style={{ width: '18px', height: '18px', minWidth: '18px', background: '#F0EDFD' }}>
                      <IconCheck />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-secondary w-full justify-center">Get Started</Link>
            </div>

            {/* Standard — Featured */}
            <div
              className="relative rounded-3xl p-8 flex flex-col md:-my-8 overflow-hidden"
              style={{
                background: 'linear-gradient(155deg, #2D18A0 0%, #5636D1 45%, #7B55F0 100%)',
                boxShadow: '0 40px 100px rgba(86,54,209,0.55), 0 0 0 1px rgba(255,255,255,0.08)',
              }}
            >
              {/* Glow blob top-right */}
              <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(123,85,240,0.6), transparent 70%)' }} />
              {/* Glow blob bottom-left */}
              <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.25), transparent 70%)' }} />
              {/* Dot pattern */}
              <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.25) 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.12 }} />

              <div className="relative z-10 flex items-center justify-between mb-6">
                <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full" style={{ background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.85)' }}>Standard</span>
                <span className="text-xs font-bold px-3 py-1.5 rounded-full inline-flex items-center gap-1" style={{ background: '#ffffff', color: '#5636D1' }}>
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  Most Popular
                </span>
              </div>
              <div className="relative z-10 mb-1">
                <span className="text-6xl font-extrabold text-white tracking-tight">$99</span>
                <span className="text-white/50 text-base ml-1">/mo</span>
              </div>
              <p className="text-sm relative z-10 mt-1 mb-7" style={{ color: 'rgba(255,255,255,0.6)' }}>Best for growing businesses</p>
              <ul className="space-y-3 mb-8 flex-grow relative z-10">
                {['Up to 10 pages', 'Custom mobile-responsive design', 'Hosting + SSL included', '1 business email', 'Unlimited content updates', 'Full SEO optimization', 'Google Analytics setup', 'Booking / inquiry forms'].map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm text-white">
                    <span className="rounded-full flex items-center justify-center text-white shrink-0 mt-0.5" style={{ width: '18px', height: '18px', minWidth: '18px', background: 'rgba(255,255,255,0.2)' }}>
                      <IconCheck />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="relative z-10 w-full inline-flex items-center justify-center gap-2 font-bold rounded-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ background: '#ffffff', color: '#5636D1', padding: '14px 32px', fontSize: '15px' }}
              >
                Get Started
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Premium */}
            <div
              className="group bg-white rounded-3xl p-8 flex flex-col border border-gray-100 hover:-translate-y-1 transition-all duration-300"
              style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.06)', borderTop: '3px solid #06B6D4' }}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full" style={{ background: 'rgba(6,182,212,0.08)', color: '#0EA5E9' }}>Premium</span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full" style={{ background: 'rgba(6,182,212,0.1)', color: '#0EA5E9' }}>E-Commerce</span>
              </div>
              <div className="mb-1">
                <span className="text-6xl font-extrabold text-gray-900 tracking-tight">$149</span>
                <span className="text-gray-400 text-base ml-1">/mo</span>
              </div>
              <p className="text-sm text-gray-400 mt-1 mb-7">For e-commerce &amp; full-scale brands</p>
              <ul className="space-y-3 mb-8 flex-grow">
                {['Unlimited pages', 'Custom mobile-responsive design', 'Hosting + SSL included', '1 business email', 'Unlimited content updates', 'Full SEO optimization', 'E-commerce (up to 30 products)', '24/7 priority support'].map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ width: '18px', height: '18px', minWidth: '18px', background: 'rgba(6,182,212,0.1)', color: '#06B6D4' }}>
                      <IconCheck />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-secondary w-full justify-center">Get Started</Link>
            </div>
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-6">
            {[
              { icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', text: 'No setup fees' },
              { icon: 'M6 18L18 6M6 6l12 12', text: 'Cancel anytime' },
              { icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', text: 'Month-to-month' },
              { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', text: 'Response within 24 hrs' },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm text-gray-400">
                <svg className="w-4 h-4 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                </svg>
                {text}
              </div>
            ))}
          </div>

          <div className="text-center mt-7">
            <Link href="/pricing" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors">
              View full pricing details
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
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
              Small Business Website Design Portfolio
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Different industries, same standard. Every website we design ships with clean code, mobile-responsive layouts, and on-page SEO built in from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {portfolioItems.map(({ category, title, desc, PortfolioIcon, color, bg }) => (
              <div
                key={title}
                className="bg-white rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 group"
                style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.07)', border: '1px solid rgba(0,0,0,0.06)' }}
              >
                {/* Card header — browser chrome + icon */}
                <div className="relative" style={{ background: bg, padding: '20px 20px 0' }}>
                  {/* Browser dots */}
                  <div className="flex items-center gap-1.5 mb-4">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(0,0,0,0.12)' }} />
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(0,0,0,0.12)' }} />
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(0,0,0,0.12)' }} />
                    <div className="ml-2 flex-1 h-4 rounded-full" style={{ background: 'rgba(255,255,255,0.55)' }} />
                  </div>
                  {/* Icon centered in a "screen" area */}
                  <div
                    className="mx-auto rounded-xl flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-105"
                    style={{ width: 64, height: 64, background: color, boxShadow: `0 8px 24px ${color}40` }}
                  >
                    <PortfolioIcon />
                  </div>
                  {/* Bottom curve that blends into card body */}
                  <div className="h-5 mt-4 -mb-px" style={{ background: 'white', borderRadius: '12px 12px 0 0' }} />
                </div>

                {/* Card body */}
                <div className="px-6 pb-6 flex-1 flex flex-col">
                  <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color }}>{category}</p>
                  <h3 className="font-bold text-gray-900 text-lg leading-snug mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Single CTA */}
          <div className="text-center mt-10">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded-full border-2 transition-all duration-200 hover:-translate-y-0.5"
              style={{ borderColor: '#5636D1', color: '#5636D1' }}
            >
              View all our work
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
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
              Frequently Asked Questions About Our Website Design Services
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

    </>
  )
}
