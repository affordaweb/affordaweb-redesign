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
    plan: 'Standard',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80',
    imageAlt: 'Virtual assistant services website — Web VA Experts Hub',
    tags: ['Website Design', 'SEO', 'Lead Generation'],
    result: 'Professional online presence launched',
    url: 'https://webvaexperts.com',
  },
  {
    id: 2,
    title: 'Empower Queer Hub',
    category: 'Community & Advocacy',
    plan: 'Standard',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=80',
    imageAlt: 'LGBTQ+ community hub and advocacy website',
    tags: ['Website Design', 'Community', 'Mobile-First'],
    result: 'Inclusive community platform built',
    url: 'https://empowerqueerhub.com',
  },
  {
    id: 3,
    title: 'Argentum Private Wealth',
    category: 'Finance',
    plan: 'Premium',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&auto=format&fit=crop&q=80',
    imageAlt: 'Private wealth management firm website',
    tags: ['Premium Design', 'SEO', 'Lead Capture'],
    result: 'High-trust brand presence online',
    url: 'https://argentumprivatewealth.com',
  },
  {
    id: 4,
    title: 'Local Plumbing Company',
    category: 'Service Business',
    plan: 'Standard',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&auto=format&fit=crop&q=80',
    imageAlt: 'Plumber working on pipes — local service business website',
    tags: ['Website Design', 'SEO', 'Contact Forms'],
    result: '3x more leads in 60 days',
  },
  {
    id: 5,
    title: 'Freelance Photographer',
    category: 'Portfolio',
    plan: 'Basic',
    image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&auto=format&fit=crop&q=80',
    imageAlt: 'Photographer portfolio website design',
    tags: ['Portfolio Design', 'Gallery', 'Booking Form'],
    result: 'Fully booked within a month',
  },
  {
    id: 6,
    title: 'Online Boutique Store',
    category: 'E-Commerce',
    plan: 'Premium',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&auto=format&fit=crop&q=80',
    imageAlt: 'Fashion boutique e-commerce website',
    tags: ['E-Commerce', 'Payments', 'SEO'],
    result: '40+ orders in first week',
  },
  {
    id: 7,
    title: 'Dental Practice',
    category: 'Healthcare',
    plan: 'Standard',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&auto=format&fit=crop&q=80',
    imageAlt: 'Dental clinic website with appointment booking',
    tags: ['Appointment Booking', 'SEO', 'Mobile Design'],
    result: 'Page 1 for local searches',
  },
  {
    id: 8,
    title: 'Real Estate Agent',
    category: 'Real Estate',
    plan: 'Standard',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop&q=80',
    imageAlt: 'Real estate agent website with property listings',
    tags: ['Listings', 'Lead Capture', 'SEO'],
    result: '200% increase in inquiries',
  },
  {
    id: 9,
    title: 'Fitness Coach',
    category: 'Health & Wellness',
    plan: 'Basic',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=80',
    imageAlt: 'Fitness coach personal brand website',
    tags: ['Personal Brand', 'Programs', 'Contact'],
    result: 'Sold out first online program',
  },
]

const categories = ['All', 'Professional Services', 'Community & Advocacy', 'Finance', 'Service Business', 'Portfolio', 'E-Commerce', 'Healthcare', 'Real Estate', 'Health & Wellness']

export default function PortfolioPage() {
  return (
    <>
      {/* Hero — Dark navy */}
      <section
        className="relative overflow-hidden pt-[200px] pb-[100px] text-center"
        style={{ background: '#091829' }}
      >
        <InnerHeroBg />
        <div className="container-tight relative z-10">
          <p className="section-label-white">Our Work</p>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
            style={{ letterSpacing: '-0.025em' }}
          >
            Real Results for Real Businesses
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Every website we build is designed with one goal: to help your business grow. Browse our recent projects and see what is possible.
          </p>
          {/* Results summary */}
          <div className="flex flex-wrap items-center justify-center gap-10 mt-10">
            {[{ n: '50+', l: 'Sites Built' }, { n: '4.9★', l: 'Avg Rating' }, { n: '10–15', l: 'Day Delivery' }].map(({ n, l }) => (
              <div key={l} className="text-center">
                <div className="text-2xl font-bold text-white">{n}</div>
                <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>{l}</div>
              </div>
            ))}
          </div>
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
                      {item.plan} Plan
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-1">
                    {item.category}
                  </p>
                  <h3 className="font-bold text-gray-900 text-lg mb-3">{item.title}</h3>

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

                  {/* Result */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-green-700">
                      ↑ {item.result}
                    </p>
                    {'url' in item && item.url && (
                      <a
                        href={(item as { url: string }).url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-white px-3 py-1.5 rounded-full shrink-0 transition-colors hover:opacity-90"
                        style={{ background: '#2878C4' }}
                      >
                        Live Site →
                      </a>
                    )}
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
        style={{ background: '#091829' }}
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
            Want Results Like These for Your Business?
          </h2>
          <p className="text-lg max-w-xl mx-auto mb-10" style={{ color: 'rgba(255,255,255,0.55)' }}>
            We have built a streamlined process so you get a professional website fast — without sacrificing quality.
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
