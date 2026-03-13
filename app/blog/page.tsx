import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import InnerHeroBg from '@/components/InnerHeroBg'
import NewsletterForm from '@/components/NewsletterForm'

export const metadata: Metadata = {
  title: 'Web Design Blog | Tips & Guides for Small Businesses | AffordaWeb Solutions',
  description:
    'Expert web design tips, SEO guides, and digital marketing advice for small business owners. Learn how to grow your business online with AffordaWeb Solutions.',
  alternates: { canonical: 'https://affordawebsolutions.com/blog' },
  openGraph: {
    title: 'Web Design Blog | AffordaWeb Solutions',
    description: 'Expert tips on web design, SEO, and growing your small business online.',
    url: 'https://affordawebsolutions.com/blog',
  },
}

const posts = [
  {
    slug: 'why-small-businesses-need-professional-website',
    title: 'Why Every Small Business Needs a Professional Website in 2025',
    excerpt:
      'Still on the fence about investing in a professional website? Discover the real cost of not having one — and how an affordable website can transform your business.',
    category: 'Business Growth',
    date: 'January 15, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    imageAlt: 'Laptop showing business analytics — why small businesses need a website',
    featured: true,
  },
  {
    slug: 'affordable-website-design-vs-diy-website-builder',
    title: 'Affordable Website Design vs. DIY Website Builders: Which Is Right for You?',
    excerpt:
      'Wix, Squarespace, and WordPress.com all promise an easy website. But how do they compare to professionally designed sites? We break down the real differences.',
    category: 'Web Design',
    date: 'January 28, 2025',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&auto=format&fit=crop&q=80',
    imageAlt: 'Laptop on clean desk — professional web design vs DIY website builders',
    featured: false,
  },
  {
    slug: 'seo-tips-small-business-website',
    title: '10 SEO Tips to Help Your Small Business Website Rank Higher on Google',
    excerpt:
      'Search engine optimization does not have to be complicated. These 10 actionable SEO tips will help your small business website rank higher and attract more customers.',
    category: 'SEO',
    date: 'February 5, 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&auto=format&fit=crop&q=80',
    imageAlt: 'SEO analytics dashboard — tips for ranking on Google',
    featured: false,
  },
  {
    slug: 'website-design-subscription-model-explained',
    title: 'What Is a Website Design Subscription? Everything You Need to Know',
    excerpt:
      'Monthly website design subscriptions are changing how small businesses get online. Learn what they include, how pricing works, and whether it is right for you.',
    category: 'Pricing',
    date: 'February 12, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80',
    imageAlt: 'Data and pricing charts — website design subscription model explained',
    featured: false,
  },
  {
    slug: 'website-speed-matters-small-business',
    title: 'Why Website Speed Matters More Than You Think (And How to Fix It)',
    excerpt:
      'A slow website costs you customers. Research shows 53% of mobile users abandon sites that take more than 3 seconds to load. Here is how to speed yours up.',
    category: 'Performance',
    date: 'February 20, 2025',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600',
    imageAlt: 'Developer optimizing website speed on laptop',
    featured: false,
  },
  {
    slug: 'local-seo-guide-small-businesses',
    title: 'The Complete Local SEO Guide for Small Business Owners',
    excerpt:
      'Want to appear at the top of Google searches in your area? This local SEO guide covers everything from Google Business Profile to local citations and reviews.',
    category: 'SEO',
    date: 'March 1, 2025',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&auto=format&fit=crop&q=80',
    imageAlt: 'Local business map and search results — local SEO guide',
    featured: false,
  },
]

const categories = ['All', 'Web Design', 'SEO', 'Business Growth', 'Pricing', 'Performance']

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://affordawebsolutions.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://affordawebsolutions.com/blog' },
  ],
}

export default function BlogPage() {
  const featured = posts.find(p => p.featured)
  const rest = posts.filter(p => !p.featured)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Hero — Dark navy */}
      <section
        className="relative overflow-hidden pt-[200px] pb-[100px] text-center"
        style={{ background: '#0F0F1A' }}
      >
        <InnerHeroBg page="blog" />
        <div className="container-tight relative z-10">
          <p className="section-label-white">Resources &amp; Tips</p>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
            style={{ letterSpacing: '-0.025em' }}
          >
            Web Design &amp; SEO Insights for Small Businesses
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Practical advice on website design, SEO, and digital marketing — written for small business owners who want to grow online without the jargon.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Web Design', 'SEO Tips', 'Business Growth', 'Pricing', 'Performance', 'Local SEO'].map(cat => (
              <div
                key={cat}
                className="flex items-center gap-2 rounded-full px-4 py-2"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.14)' }}
              >
                <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#2577C9' }} />
                <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.75)' }}>{cat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog content — White */}
      <section className="section-pad bg-white" aria-labelledby="blog-heading">
        <div className="container-tight">
          <div className="sr-only" id="blog-heading">Blog Posts</div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map(cat => (
              <span
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all ${
                  cat === 'All'
                    ? 'text-white'
                    : 'bg-white text-gray-500 border border-gray-200 hover:border-primary-300 hover:text-primary-600'
                }`}
                style={cat === 'All' ? { background: '#2577C9' } : {}}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Featured post */}
          {featured && (
            <article className="card mb-10 overflow-hidden group p-0">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 items-stretch">
                <div
                  className="lg:col-span-2 relative overflow-hidden"
                  style={{ aspectRatio: '16/9', minHeight: '240px' }}
                >
                  <Image
                    src={featured.image}
                    alt={featured.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to right, rgba(9,24,41,0.3), transparent)' }}
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className="text-white text-xs font-semibold px-3 py-1.5 rounded-full"
                      style={{ background: '#2577C9' }}
                    >
                      Featured
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-3 p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="badge bg-primary-50 text-primary-600 text-xs">{featured.category}</span>
                    <span className="text-gray-400 text-xs">{featured.date}</span>
                    <span className="text-gray-300 text-xs">·</span>
                    <span className="text-gray-400 text-xs">{featured.readTime}</span>
                  </div>
                  <h2
                    className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors"
                    style={{ letterSpacing: '-0.01em' }}
                  >
                    <Link href={`/blog/${featured.slug}`}>{featured.title}</Link>
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{featured.excerpt}</p>
                  <Link
                    href={`/blog/${featured.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    Read Article
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          )}

          {/* Post grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <article key={post.slug} className="card group flex flex-col p-0 overflow-hidden">
                {/* Blog image */}
                <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(9,24,41,0.25), transparent)' }}
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="badge bg-primary-50 text-primary-600 text-xs">{post.category}</span>
                    <span className="text-gray-400 text-xs">{post.readTime}</span>
                  </div>

                  <h3
                    className="font-bold text-gray-900 text-base mb-2 flex-grow group-hover:text-primary-600 transition-colors"
                    style={{ letterSpacing: '-0.01em' }}
                  >
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-xs font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA — Dark navy */}
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
        <div className="container-tight relative z-10 max-w-2xl text-center">
          <p className="section-label-white">Stay Updated</p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ letterSpacing: '-0.025em' }}
          >
            Get Web Design Tips in Your Inbox
          </h2>
          <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Join small business owners who get our best web design and SEO tips every month. No spam — just useful content.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </>
  )
}
