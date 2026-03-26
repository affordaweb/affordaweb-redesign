import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import InnerHeroBg from '@/components/InnerHeroBg'

export const metadata: Metadata = {
  title: 'Website Design Portfolio | Small Business Sites We Built',
  description:
    'Browse our portfolio of affordable website design projects for small businesses — service companies, freelancers, e-commerce stores, and local businesses.',
  alternates: { canonical: 'https://www.affordawebsolutions.com/portfolio' },
  openGraph: {
    type: 'website',
    title: 'Website Design Portfolio | Small Business Websites We Built',
    description: 'See our work — affordable, professional website designs for small businesses.',
    url: 'https://www.affordawebsolutions.com/portfolio',
    images: [{ url: 'https://www.affordawebsolutions.com/og-image.png', width: 1200, height: 630, alt: 'AffordaWeb Solutions Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Design Portfolio | Small Business Websites We Built',
    description: 'See our work — affordable, professional website designs for small businesses.',
    images: ['https://www.affordawebsolutions.com/og-image.png'],
  },
}

const portfolioItems = [
  {
    id: 1,
    title: 'Web VA Experts Hub',
    category: 'Professional Services',
    type: 'Website Design',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80',
    imageAlt: 'Virtual assistant services website — Web VA Experts Hub',
    tags: ['Website Design', 'SEO', 'Lead Generation'],
    description: 'A virtual assistant services firm needed a homepage that communicated expertise without looking like everyone else\'s VA site. The result is clean, modern, and built to convert.',
    url: 'https://www.webvaexperts.com',
    accent: '#5636D1',
    accentLight: 'rgba(86,54,209,0.10)',
    accentBorder: 'rgba(86,54,209,0.22)',
    accentGlow: 'rgba(86,54,209,0.12)',
  },
  {
    id: 2,
    title: 'Empower Queer Hub',
    category: 'Community & Advocacy',
    type: 'Web Development',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=80',
    imageAlt: 'LGBTQ+ community hub and advocacy website — Empower Queer Hub',
    tags: ['Web Development', 'Community', 'Mobile-First'],
    description: 'Multi-role community platform built to serve advocacy, resources, and connection. One site, several audiences — all of it navigable.',
    url: 'https://www.empowerqueerhub.com',
    accent: '#E2498A',
    accentLight: 'rgba(226,73,138,0.10)',
    accentBorder: 'rgba(226,73,138,0.22)',
    accentGlow: 'rgba(226,73,138,0.10)',
  },
  {
    id: 3,
    title: 'Argentum Private Wealth',
    category: 'Finance',
    type: 'Web Design',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&auto=format&fit=crop&q=80',
    imageAlt: 'Private wealth advisory firm website — Argentum Private Wealth',
    tags: ['Premium Design', 'SEO', 'Lead Capture'],
    description: 'A wealth advisory firm required a site that signaled trust before anyone read a word. High-value design, purpose-built for a financial audience.',
    url: 'https://argentumprivatewealth.com',
    accent: '#06B6D4',
    accentLight: 'rgba(6,182,212,0.10)',
    accentBorder: 'rgba(6,182,212,0.22)',
    accentGlow: 'rgba(6,182,212,0.10)',
  },
]

const categories = ['All', 'Professional Services', 'Community & Advocacy', 'Finance']

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.affordawebsolutions.com' },
    { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://www.affordawebsolutions.com/portfolio' },
  ],
}

export default function PortfolioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-[200px] pb-[100px] text-center"
        style={{ background: '#0F0F1A' }}
      >
        <InnerHeroBg page="portfolio" />
        <div className="container-tight relative z-10">
          <p className="section-label-white">Our Work</p>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
            style={{ letterSpacing: '-0.025em' }}
          >
            Work That Speaks For Itself
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Three projects. Different industries, different goals. Each one built from scratch with a clear brief and a focus on real-world results.
          </p>
        </div>
      </section>

      {/* Portfolio grid */}
      <section className="section-pad relative overflow-hidden" style={{ background: '#0F0F1A' }} aria-labelledby="portfolio-heading">
        {/* Ambient glow */}
        <div className="absolute pointer-events-none" style={{ width: '700px', height: '700px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(86,54,209,0.08), transparent 65%)', top: '30%', right: '-250px' }} />
        <div className="absolute pointer-events-none" style={{ width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(226,73,138,0.06), transparent 65%)', bottom: '10%', left: '-150px' }} />

        <div className="container-tight relative z-10">
          <h2 className="sr-only" id="portfolio-heading">Portfolio Projects</h2>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-14">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all"
                style={cat === 'All'
                  ? { background: 'linear-gradient(135deg, #5636D1, #5636D1cc)', color: '#fff', boxShadow: '0 4px 16px rgba(86,54,209,0.35)' }
                  : { background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.55)', border: '1px solid rgba(255,255,255,0.1)' }
                }
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, idx) => (
              <article
                key={item.id}
                className="group relative flex flex-col overflow-hidden rounded-3xl"
                style={{
                  background: '#0F0F1A',
                  border: `1px solid ${item.accentBorder}`,
                  boxShadow: `0 0 0 1px ${item.accentBorder}, 0 24px 80px rgba(0,0,0,0.20)`,
                }}
              >
                {/* Top accent line */}
                <div className="absolute inset-x-0 top-0 h-0.5 pointer-events-none rounded-t-3xl" style={{ background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)` }} />
                {/* Card glow */}
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full pointer-events-none" style={{ background: `radial-gradient(circle, ${item.accent}25, transparent 65%)` }} />

                {/* Image */}
                <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading={idx === 0 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,15,26,0.85) 0%, rgba(15,15,26,0.2) 60%, transparent 100%)' }} />
                  {/* Type badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className="text-xs font-bold px-3 py-1.5 rounded-full"
                      style={{ background: item.accentLight, color: item.accent, border: `1px solid ${item.accentBorder}`, backdropFilter: 'blur(8px)' }}
                    >
                      {item.type}
                    </span>
                  </div>
                  {/* Index number */}
                  <div className="absolute bottom-4 left-4">
                    <span
                      className="text-4xl font-extrabold select-none"
                      style={{ color: `${item.accent}30`, letterSpacing: '-0.05em', lineHeight: 1 }}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-7 flex flex-col flex-grow">
                  {/* Category badge */}
                  <span
                    className="inline-flex self-start text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
                    style={{ background: item.accentLight, color: item.accent, border: `1px solid ${item.accentBorder}` }}
                  >
                    {item.category}
                  </span>

                  <h3 className="font-bold text-white text-xl mb-3" style={{ letterSpacing: '-0.01em' }}>
                    {item.title}
                  </h3>

                  <p className="text-sm leading-relaxed mb-5 flex-grow" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2.5 py-1 rounded-full"
                        style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.45)', border: '1px solid rgba(255,255,255,0.08)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold rounded-full px-5 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${item.accent}, ${item.accent}cc)`,
                        color: '#fff',
                        boxShadow: `0 4px 16px ${item.accentGlow}`,
                      }}
                    >
                      View Live Site
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.4)' }}>Want results like these for your business?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-bold rounded-full px-8 py-4 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg text-white"
              style={{ background: 'linear-gradient(135deg, #5636D1, #5636D1cc)', boxShadow: '0 4px 20px rgba(86,54,209,0.35)' }}
            >
              Start Your Project
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
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
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ letterSpacing: '-0.025em' }}
          >
            Ready to Build Yours?
          </h2>
          <p className="text-lg max-w-xl mx-auto mb-10" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Share your goals and we will get to work. Plans start at $69/month with no setup fees and no contracts.
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
