import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import InnerHeroBg from '@/components/InnerHeroBg'

export const metadata: Metadata = {
  title: 'Website Design Portfolio | AffordaWeb Solutions',
  description:
    'Browse our portfolio of affordable website design projects for small businesses — service companies, freelancers, e-commerce stores, and local businesses.',
  alternates: { canonical: 'https://affordawebsolutions.com/portfolio' },
  openGraph: {
    title: 'Website Design Portfolio | AffordaWeb Solutions',
    description: 'See our work — affordable, professional website designs for small businesses.',
    url: 'https://affordawebsolutions.com/portfolio',
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
    url: 'https://webvaexperts.com',
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
    url: 'https://empowerqueerhub.com',
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
  },
]

const categories = ['All', 'Professional Services', 'Community & Advocacy', 'Finance']

export default function PortfolioPage() {
  return (
    <>
      {/* Hero — Dark navy */}
      <section
        className="relative overflow-hidden pt-[200px] pb-[100px] text-center"
        style={{ background: '#0F0F1A' }}
      >
        <InnerHeroBg />
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

      {/* Portfolio grid — White */}
      <section className="section-pad bg-white" aria-labelledby="portfolio-heading">
        <div className="container-tight">
          <div className="sr-only" id="portfolio-heading">Portfolio Projects</div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all ${
                  cat === 'All'
                    ? 'text-white shadow-glow'
                    : 'bg-white text-gray-500 border border-gray-200 hover:border-primary-300 hover:text-primary-600'
                }`}
                style={cat === 'All' ? { background: '#2878C4' } : {}}
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <article key={item.id} className="card overflow-hidden group p-0">
                {/* Portfolio image */}
                <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(9,24,41,0.45), transparent)' }} />
                  <div className="absolute top-3 right-3">
                    <span
                      className="text-white text-xs font-semibold px-3 py-1.5 rounded-full"
                      style={{ background: 'rgba(9,24,41,0.6)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.15)' }}
                    >
                      {item.type}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-1">
                    {item.category}
                  </p>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>

                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{item.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-gray-500 px-2.5 py-1 rounded-full"
                        style={{ background: '#F7FBFF', border: '1px solid #E2EDF8' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-end">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-white px-3 py-1.5 rounded-full shrink-0 transition-colors hover:opacity-90"
                      style={{ background: '#2878C4' }}
                    >
                      Live Site →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-14">
            <p className="text-gray-400 text-sm mb-6">Want results like these for your business?</p>
            <Link href="/contact" className="btn-primary">
              Start Your Project
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA — Dark navy */}
      <section
        className="section-pad relative overflow-hidden"
        style={{ background: '#0F0F1A' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(40,120,196,0.18) 1.5px, transparent 1.5px)',
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
