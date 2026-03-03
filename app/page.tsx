import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Affordable Website Design for Small Businesses | AffordaWeb Solutions',
  description:
    'Professional website design starting at $69/month. Hosting, SSL, SEO, and unlimited updates included. Setup in 10-15 days. No contracts. Trusted by 50+ small businesses.',
  alternates: { canonical: 'https://affordawebsolutions.com' },
  openGraph: {
    title: 'Affordable Website Design for Small Businesses | AffordaWeb Solutions',
    description: 'Professional website design starting at $69/month. Hosting, SSL, SEO included.',
    url: 'https://affordawebsolutions.com',
  },
}

// ── Icon components — all with explicit width/height ──────────────

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

function IconWrench() {
  return (
    <svg width="28" height="28" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function IconHome() {
  return (
    <svg width="28" height="28" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 22V12h6v10" />
    </svg>
  )
}

function IconMedical() {
  return (
    <svg width="28" height="28" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

// ── Data ─────────────────────────────────────────────────────────

const services = [
  { Icon: IconDesign,   title: 'Website Design',      desc: 'Custom, mobile-first websites built to convert visitors into customers.', href: '/services#design' },
  { Icon: IconRedesign, title: 'Website Redesign',    desc: 'Transform your outdated site into a modern, high-performing experience.', href: '/services#redesign' },
  { Icon: IconSeo,      title: 'SEO Optimization',    desc: 'Rank higher on Google and get found by the customers who matter.', href: '/services#seo' },
  { Icon: IconMaint,    title: 'Website Maintenance', desc: 'We handle updates, backups, and security — so you can focus on business.', href: '/services#maintenance' },
  { Icon: IconHosting,  title: 'Shared Hosting',      desc: 'Fast, reliable managed hosting with SSL included in every plan.', href: '/services#hosting' },
  { Icon: IconEcom,     title: 'E-Commerce Design',   desc: 'Launch your online store with up to 30 products and payment processing.', href: '/services#ecommerce' },
]

const testimonials = [
  {
    quote: 'AffordaWeb built our plumbing site in under 2 weeks. We went from almost no online presence to 3x more calls within 60 days. Best investment we\'ve made for the business.',
    name: 'Marcus T.',
    role: 'Owner',
    business: 'Local Plumbing Company',
    avatarColor: 'bg-blue-500',
    initial: 'M',
  },
  {
    quote: '200% more inquiry form submissions in the first 90 days after launch. The site looks professional, loads fast, and the team was easy to work with from start to finish.',
    name: 'Sandra K.',
    role: 'Real Estate Agent',
    business: 'Independent Realtor',
    avatarColor: 'bg-emerald-500',
    initial: 'S',
  },
  {
    quote: 'My online coaching program sold out within days of my new site going live. AffordaWeb took my brand to the next level — worth every single penny.',
    name: 'Priya M.',
    role: 'Fitness Coach',
    business: 'Online Coaching Business',
    avatarColor: 'bg-violet-500',
    initial: 'P',
  },
]

const portfolioItems = [
  { category: 'Service Business · Standard Plan', title: 'Local Plumbing Company',   desc: 'A local plumbing company needed more than a basic online presence. We delivered a fast, SEO-optimized site with clear service pages and a prominent call-to-action.', result: '3x more leads in 60 days',     bg: '#EBF5FF', PortfolioIcon: IconWrench  },
  { category: 'Real Estate · Standard Plan',      title: 'Real Estate Agent',         desc: 'An independent realtor wanted to stand out in a competitive market. We built a clean, professional site with strong local SEO and an easy inquiry form.',             result: '200% increase in inquiries', bg: '#F0FDF4', PortfolioIcon: IconHome    },
  { category: 'Healthcare · Standard Plan',       title: 'Dental Practice',            desc: 'A dental clinic needed to rank locally and make appointment booking easy. We delivered an optimized, trust-building site that moved them to page one.',              result: 'Page 1 for local searches',  bg: '#F0F8FF', PortfolioIcon: IconMedical },
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
  '@type': 'LocalBusiness',
  name: 'AffordaWeb Solutions',
  description: 'Affordable website design, hosting, SEO, and maintenance for small businesses.',
  url: 'https://affordawebsolutions.com',
  email: 'hello@affordawebsolutions.com',
  priceRange: '$69-$149/month',
  areaServed: 'United States',
}

// ── Page ─────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* ── A. HERO ────────────────────────────────────────────── */}
      <section className="bg-white pt-28 pb-16 relative overflow-hidden" aria-labelledby="hero-heading">
        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(40,120,196,0.10) 1.5px, transparent 1.5px)', backgroundSize: '28px 28px' }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, white 100%)' }} />

        <div className="container-tight relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left: Text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-2 mb-6 shadow-sm">
                <span className="text-amber-400 text-sm tracking-tight">★★★★★</span>
                <span className="text-amber-700 text-xs font-semibold">Trusted by 50+ small businesses</span>
              </div>

              <h1 id="hero-heading" className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight mb-5"
                style={{ letterSpacing: '-0.02em' }}>
                Professional Websites for Small Businesses —{' '}
                <span className="gradient-text-blue">Starting at $69/mo</span>
              </h1>

              <p className="text-xl text-gray-500 leading-relaxed mb-8 max-w-lg">
                Fully managed website design with hosting, SSL, and unlimited updates. We build it, we maintain it — you focus on running your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact" className="btn-primary">
                  Get a Free Quote
                  <svg width="16" height="16" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/pricing" className="btn-secondary">View Pricing</Link>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-400">
                {['No contracts', 'Hosting included', 'Setup in 10-15 days', 'Cancel anytime'].map(t => (
                  <span key={t} className="flex items-center gap-1.5">
                    <span className="text-primary-500">✓</span>{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Browser mockup */}
            <div className="relative hidden lg:block">
              {/* Soft glow behind mockup */}
              <div className="absolute inset-0 pointer-events-none -z-10"
                style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(40,120,196,0.12), transparent)' }} />

              <div className="bg-white rounded-2xl border border-gray-200 shadow-[0_8px_40px_rgba(0,0,0,0.10)] overflow-hidden">
                <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 bg-white border border-gray-200 rounded-full px-3 py-1 mx-4">
                    <span className="text-gray-400 text-xs">yourbusiness.com</span>
                  </div>
                </div>
                <div className="p-5 space-y-3" style={{ background: 'linear-gradient(180deg, #F0F8FF 0%, #ffffff 100%)' }}>
                  <div className="h-5 bg-primary-100 rounded w-2/3" />
                  <div className="h-3 bg-gray-100 rounded w-full" />
                  <div className="h-3 bg-gray-100 rounded w-4/5" />
                  <div className="h-8 bg-primary-500 rounded-full w-1/3 mt-2" />
                  <div className="grid grid-cols-3 gap-2 mt-3">
                    {[1, 2, 3].map(n => (
                      <div key={n} className="bg-white border border-gray-100 rounded-xl p-3 shadow-sm">
                        <div className="w-8 h-8 rounded-lg bg-primary-50 mb-2" />
                        <div className="h-2.5 bg-gray-100 rounded w-full mb-1.5" />
                        <div className="h-2 bg-gray-100 rounded w-3/4" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Floating chips */}
              <div className="absolute -left-8 top-16 bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                <div className="text-2xl font-bold text-primary-600 leading-none">3x</div>
                <div className="text-xs text-gray-400 font-medium mt-0.5">More leads</div>
              </div>
              <div className="absolute -right-6 bottom-16 bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                <div className="text-2xl font-bold text-primary-600 leading-none">10–15</div>
                <div className="text-xs text-gray-400 font-medium mt-0.5">Day setup</div>
              </div>
              <div className="absolute -right-4 top-8 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2 shadow-sm animate-float">
                <div className="text-amber-400 text-xs tracking-tight">★★★★★</div>
                <div className="text-amber-700 text-xs font-semibold mt-0.5">4.9 rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── B. STATS BAR ───────────────────────────────────────── */}
      <section className="border-y border-gray-100 bg-gradient-to-b from-[#F0F8FF] to-white" aria-label="Key statistics">
        <div className="container-tight py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
            {[
              { number: '50+',   label: 'Clients Served' },
              { number: '10–15', label: 'Day Setup' },
              { number: '4.9★', label: 'Avg Rating' },
              { number: '99.9%', label: 'Uptime Guarantee' },
            ].map(({ number, label }, i) => (
              <div key={label} className={`text-center py-6 ${i > 0 ? 'border-l border-gray-100' : ''}`}>
                <div className="text-3xl font-extrabold gradient-text-blue mb-1">{number}</div>
                <div className="text-sm text-gray-400 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── C. SERVICES ────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: '#F0F8FF' }} aria-labelledby="services-heading">
        <div className="container-tight">
          <div className="text-center mb-14">
            <p className="section-label">What We Offer</p>
            <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" style={{ letterSpacing: '-0.01em' }}>
              Everything You Need in One Monthly Plan
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Design, hosting, maintenance, and SEO — all bundled together so you never deal with multiple vendors or surprise bills.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ Icon, title, desc, href }) => (
              <div key={title} className="card-accent p-7 group">
                <div className="rounded-xl flex items-center justify-center text-primary-700 mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ width: '56px', height: '56px', minWidth: '56px', background: 'linear-gradient(135deg, #D6EBFF 0%, #ADCFF5 100%)' }}>
                  <Icon />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
                <Link href={href} className="text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors inline-flex items-center gap-1.5 hover:gap-2.5 duration-200">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── D. HOW IT WORKS ────────────────────────────────────── */}
      <section className="section-pad bg-white" aria-labelledby="process-heading">
        <div className="container-tight">
          <div className="text-center mb-14">
            <p className="section-label">Our Process</p>
            <h2 id="process-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" style={{ letterSpacing: '-0.01em' }}>
              Up and Running in 10–15 Days
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              A simple, proven process so you get a professional website fast — without sacrificing quality.
            </p>
          </div>
          <div className="relative">
            {/* Desktop connector line */}
            <div className="hidden md:block absolute border-t-2 border-dashed border-primary-100"
              style={{ top: '48px', left: '21%', right: '21%' }} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {[
                { step: '1', title: 'Tell Us About Your Business', desc: 'Fill out our short form and share your goals, services, and any examples you love. No technical knowledge required.' },
                { step: '2', title: 'We Build Your Site',          desc: 'Our team designs and develops your custom website, sending you a preview for review within 10–15 business days.' },
                { step: '3', title: 'Launch & Ongoing Support',    desc: 'We go live, connect your domain, and stay on to handle updates, maintenance, and any changes you need.' },
              ].map(({ step, title, desc }) => (
                <div key={step} className="text-center">
                  <div className="w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-3xl mx-auto mb-6 ring-4 ring-primary-100"
                    style={{ background: 'linear-gradient(135deg, #1E66A8 0%, #2878C4 100%)' }}>
                    {step}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-3">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/contact" className="btn-primary">Start Your Project</Link>
          </div>
        </div>
      </section>

      {/* ── E. TESTIMONIALS ────────────────────────────────────── */}
      <section className="section-pad" style={{ background: '#F0F8FF' }} aria-labelledby="testimonials-heading">
        <div className="container-tight">
          <div className="text-center mb-14">
            <p className="section-label">Client Stories</p>
            <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3" style={{ letterSpacing: '-0.01em' }}>
              What Our Clients Say
            </h2>
            <div className="flex items-center justify-center gap-2 mt-3">
              <span className="text-amber-400 text-xl tracking-tight">★★★★★</span>
              <span className="text-gray-500 text-sm font-medium">4.9 out of 5 · 50+ happy clients</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ quote, name, role, business, avatarColor, initial }) => (
              <div key={name}
                className="bg-white rounded-2xl p-7 border-l-4 border-primary-400 relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}>
                {/* Decorative quote mark */}
                <div className="absolute top-2 right-4 text-8xl font-black text-primary-100 leading-none pointer-events-none select-none" aria-hidden="true">
                  &ldquo;
                </div>
                <div className="text-amber-400 text-base tracking-widest mb-4">★★★★★</div>
                <blockquote className="text-gray-700 text-sm leading-relaxed mb-5 italic relative z-10">
                  &ldquo;{quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className={`avatar-initial ${avatarColor}`}>{initial}</div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{name}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{role} · {business}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── F. PRICING PREVIEW ─────────────────────────────────── */}
      <section className="section-pad bg-white" aria-labelledby="pricing-heading">
        <div className="container-tight">
          <div className="text-center mb-14">
            <p className="section-label">Simple Pricing</p>
            <h2 id="pricing-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" style={{ letterSpacing: '-0.01em' }}>
              Transparent Pricing. No Surprises.
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              All plans include hosting, SSL, maintenance, and a professionally designed website.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">

            {/* Basic */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 border-t-4 border-t-gray-200 flex flex-col" style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}>
              <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">Basic</p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-6xl font-bold text-gray-900">$69</span>
                <span className="text-gray-400 text-sm">/mo</span>
              </div>
              <p className="text-sm text-gray-500 mb-6">Perfect for getting online fast</p>
              <ul className="space-y-3 mb-8 flex-grow">
                {['1–5 page website', 'Custom mobile-responsive design', 'Hosting + SSL included', '1 business email', '1 content update/month', 'Basic security maintenance'].map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="rounded-full flex items-center justify-center text-primary-600 shrink-0 mt-0.5"
                      style={{ width: '18px', height: '18px', minWidth: '18px', background: '#EBF5FF' }}>
                      <IconCheck />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-secondary w-full justify-center">Get Started — $69/mo</Link>
            </div>

            {/* Standard — Featured */}
            <div className="rounded-2xl p-8 flex flex-col relative md:-my-4 overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #1E66A8 0%, #2878C4 100%)', boxShadow: '0 24px 60px rgba(40,120,196,0.35)' }}>
              {/* Dot grid overlay */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1.5px, transparent 1.5px)', backgroundSize: '24px 24px', opacity: 0.08 }} />
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <span className="bg-white text-primary-700 text-xs font-bold tracking-wide uppercase px-4 py-1.5 rounded-full shadow-md hover:scale-105 transition-transform inline-block">
                  ✦ Most Popular
                </span>
              </div>
              <p className="text-xs font-bold tracking-widest uppercase text-white/70 mb-2 mt-2 relative z-10">Standard</p>
              <div className="flex items-baseline gap-1 mb-1 relative z-10">
                <span className="text-6xl font-bold text-white">$99</span>
                <span className="text-white/60 text-sm">/mo</span>
              </div>
              <p className="text-sm text-white/70 mb-6 relative z-10">Best for growing businesses</p>
              <ul className="space-y-3 mb-8 flex-grow relative z-10">
                {['Up to 10 pages', 'Custom mobile-responsive design', 'Hosting + SSL included', '1 business email', 'Unlimited content updates', 'Full SEO optimization', 'Google Analytics setup', 'Booking / inquiry forms'].map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm text-white">
                    <span className="rounded-full flex items-center justify-center text-white shrink-0 mt-0.5"
                      style={{ width: '18px', height: '18px', minWidth: '18px', background: 'rgba(255,255,255,0.2)' }}>
                      <IconCheck />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact"
                className="w-full justify-center inline-flex items-center rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 relative z-10"
                style={{ background: '#ffffff', color: '#1E66A8', padding: '14px 32px', fontSize: '15px' }}>
                Get Started — $99/mo
              </Link>
            </div>

            {/* Premium */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 border-t-4 border-t-primary-300 flex flex-col" style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}>
              <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">Premium</p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-6xl font-bold text-gray-900">$149</span>
                <span className="text-gray-400 text-sm">/mo</span>
              </div>
              <p className="text-sm text-gray-500 mb-6">For e-commerce &amp; full-scale brands</p>
              <ul className="space-y-3 mb-8 flex-grow">
                {['Unlimited pages', 'Custom mobile-responsive design', 'Hosting + SSL included', '1 business email', 'Unlimited content updates', 'Full SEO optimization', 'E-commerce (up to 30 products)', '24/7 priority support'].map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="rounded-full flex items-center justify-center text-primary-600 shrink-0 mt-0.5"
                      style={{ width: '18px', height: '18px', minWidth: '18px', background: '#EBF5FF' }}>
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
        </div>
      </section>

      {/* ── G. PORTFOLIO HIGHLIGHTS ────────────────────────────── */}
      <section className="section-pad" style={{ background: '#F0F8FF' }} aria-labelledby="results-heading">
        <div className="container-tight">
          <div className="text-center mb-14">
            <p className="section-label">Real Results</p>
            <h2 id="results-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" style={{ letterSpacing: '-0.01em' }}>
              Websites That Drive Real Business
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              We do not just build websites — we build tools that grow your business.
            </p>
          </div>
          <div className="space-y-6">
            {portfolioItems.map(({ category, title, desc, result, bg, PortfolioIcon }) => (
              <div key={title}
                className="bg-white rounded-2xl border border-gray-100 border-l-4 border-l-primary-400 overflow-hidden flex flex-col sm:flex-row"
                style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}>
                <div className="sm:w-40 lg:w-56 flex items-center justify-center shrink-0 p-8" style={{ background: bg }}>
                  <div className="w-16 h-16 rounded-2xl bg-primary-600 flex items-center justify-center text-white">
                    <PortfolioIcon />
                  </div>
                </div>
                <div className="p-7 flex-1">
                  <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-2">{category}</p>
                  <h3 className="font-bold text-gray-900 text-xl mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 font-bold text-sm px-3 py-1.5 rounded-full border border-green-100 shadow-sm">
                      <svg width="14" height="14" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      {result}
                    </span>
                    <Link href="/portfolio" className="text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors">
                      View all projects →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── H. FAQ ─────────────────────────────────────────────── */}
      <section className="section-pad bg-white" aria-labelledby="faq-heading">
        <div className="container-tight max-w-3xl">
          <div className="text-center mb-12">
            <p className="section-label">Common Questions</p>
            <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold text-gray-900" style={{ letterSpacing: '-0.01em' }}>
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <details key={q}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-primary-200 transition-colors group-open:bg-primary-50/30"
                style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                <summary className="flex items-center justify-between gap-4 cursor-pointer select-none p-6
                                    text-gray-900 font-semibold text-base list-none [&::-webkit-details-marker]:hidden">
                  <span>{q}</span>
                  <span className="rounded-full flex items-center justify-center shrink-0 transition-all duration-300
                                   group-open:bg-primary-500 group-open:text-white text-primary-500"
                    style={{ width: '32px', height: '32px', minWidth: '32px', background: '#EBF5FF' }}>
                    <svg width="14" height="14" className="w-3.5 h-3.5 transition-transform duration-300 group-open:rotate-180"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

      {/* ── I. FINAL CTA ───────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1A5C99 0%, #2878C4 60%, #1E66A8 100%)' }}
        aria-label="Call to action">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1.5px, transparent 1.5px)', backgroundSize: '28px 28px' }} />
        {/* Radial white glow behind headline */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(255,255,255,0.08), transparent)' }} />
        <div className="container-tight relative z-10 text-center">
          <p className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-white/60 mb-4">
            Get Started Today
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5" style={{ letterSpacing: '-0.02em' }}>
            Ready to Grow Your Business Online?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Get a free, no-obligation quote within 24 hours. No commitment required — just tell us about your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 font-semibold
                         px-9 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-50 active:scale-[0.97]"
              style={{ fontSize: '15px' }}>
              Get a Free Quote
              <svg width="16" height="16" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/pricing" className="btn-outline-white px-9 py-4">View Pricing</Link>
          </div>
          {/* Avatar stack + trust text */}
          <div className="flex items-center justify-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white flex items-center justify-center text-white text-xs font-bold">M</div>
              <div className="w-8 h-8 rounded-full bg-emerald-400 border-2 border-white flex items-center justify-center text-white text-xs font-bold">S</div>
              <div className="w-8 h-8 rounded-full bg-violet-400 border-2 border-white flex items-center justify-center text-white text-xs font-bold">P</div>
            </div>
            <p className="text-white/40 text-sm">No commitment required · We respond within 24 hours</p>
          </div>
        </div>
      </section>
    </>
  )
}
