import type { Metadata } from 'next'
import Link from 'next/link'

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

// Example portfolio items (replace with real screenshots/data)
const portfolioItems = [
  {
    id: 1,
    title: 'Local Plumbing Company',
    category: 'Service Business',
    plan: 'Standard',
    color: 'from-blue-500 to-cyan-500',
    tags: ['Website Design', 'SEO', 'Contact Forms'],
    result: '3x more leads in 60 days',
  },
  {
    id: 2,
    title: 'Freelance Photographer',
    category: 'Portfolio',
    plan: 'Basic',
    color: 'from-pink-500 to-rose-500',
    tags: ['Portfolio Design', 'Gallery', 'Booking Form'],
    result: 'Fully booked within a month',
  },
  {
    id: 3,
    title: 'Online Boutique Store',
    category: 'E-Commerce',
    plan: 'Premium',
    color: 'from-primary-500 to-purple-600',
    tags: ['E-Commerce', 'Payments', 'SEO'],
    result: '40+ orders in first week',
  },
  {
    id: 4,
    title: 'Dental Practice',
    category: 'Healthcare',
    plan: 'Standard',
    color: 'from-teal-500 to-green-500',
    tags: ['Appointment Booking', 'SEO', 'Mobile Design'],
    result: 'Page 1 for local searches',
  },
  {
    id: 5,
    title: 'Real Estate Agent',
    category: 'Real Estate',
    plan: 'Standard',
    color: 'from-amber-500 to-orange-500',
    tags: ['Listings', 'Lead Capture', 'SEO'],
    result: '200% increase in inquiries',
  },
  {
    id: 6,
    title: 'Fitness Coach',
    category: 'Health & Wellness',
    plan: 'Basic',
    color: 'from-violet-500 to-primary-500',
    tags: ['Personal Brand', 'Programs', 'Contact'],
    result: 'Sold out first online program',
  },
]

const categories = ['All', 'Service Business', 'Portfolio', 'E-Commerce', 'Healthcare', 'Real Estate', 'Health & Wellness']

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[600px] h-[400px] bg-primary-500/20 rounded-full blur-[150px] pointer-events-none" />
        <div className="container-tight relative z-10 text-center">
          <p className="section-label text-cyan-400">Our Work</p>
          <h1 className="section-title-white mb-6">
            Websites That Drive Real Results
          </h1>
          <p className="section-subtitle-white mx-auto text-center">
            Every website we build is designed with one goal: to help your business grow. Browse our recent projects and see what is possible with AffordaWeb Solutions.
          </p>
        </div>
      </section>

      {/* Portfolio grid */}
      <section className="section-pad bg-surface" aria-labelledby="portfolio-heading">
        <div className="container-tight">
          <div className="sr-only" id="portfolio-heading">Portfolio Projects</div>

          {/* Categories (static display — JS filter would require client component) */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all ${
                  cat === 'All'
                    ? 'bg-primary-500 text-white shadow-glow'
                    : 'bg-white text-gray-500 border border-gray-200 hover:border-primary-300 hover:text-primary-500'
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <article key={item.id} className="card overflow-hidden group">
                {/* Placeholder image area */}
                <div className={`bg-gradient-to-br ${item.color} rounded-2xl mb-6 relative overflow-hidden`}
                     style={{ aspectRatio: '16/10' }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white/80">
                      <svg className="w-12 h-12 mx-auto mb-2 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm font-medium">{item.title}</p>
                    </div>
                  </div>
                  {/* Plan badge */}
                  <div className="absolute top-3 right-3">
                    <span className="badge bg-white/20 text-white text-xs backdrop-blur-sm">
                      {item.plan} Plan
                    </span>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <p className="text-xs font-semibold text-cyan-500 uppercase tracking-widest mb-1">
                      {item.category}
                    </p>
                    <h3 className="font-bold text-dark text-lg">{item.title}</h3>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map(tag => (
                    <span key={tag} className="badge bg-surface text-gray-500 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Result */}
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm font-semibold text-primary-500">
                    Result: <span className="gradient-text">{item.result}</span>
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-14">
            <p className="text-gray-400 text-sm mb-6">
              Want results like these for your business?
            </p>
            <Link href="/contact" className="btn-primary">
              Start Your Project
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Process reminder */}
      <section className="section-pad bg-dark relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-primary-500/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="container-tight relative z-10 text-center">
          <p className="section-label">Our Process</p>
          <h2 className="section-title-white mb-4">
            From Brief to Launch in 10–15 Days
          </h2>
          <p className="section-subtitle-white mx-auto text-center mb-10">
            We have built a streamlined process so you get a professional website fast — without sacrificing quality or attention to detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Get a Free Quote</Link>
            <Link href="/pricing" className="btn-outline-white">View Pricing</Link>
          </div>
        </div>
      </section>
    </>
  )
}
