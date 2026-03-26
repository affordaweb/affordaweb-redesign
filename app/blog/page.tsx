import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import InnerHeroBg from '@/components/InnerHeroBg'
import NewsletterForm from '@/components/NewsletterForm'

export const metadata: Metadata = {
  title: 'Web Design Blog | Tips for Small Businesses',
  description:
    'Expert web design tips, SEO guides, and digital marketing advice for small business owners. Learn how to grow your business online with AffordaWeb Solutions.',
  alternates: { canonical: 'https://www.affordawebsolutions.com/blog' },
  openGraph: {
    type: 'website',
    title: 'Web Design Blog | AffordaWeb Solutions',
    description: 'Practical web design tips, SEO guides, and digital marketing advice for small business owners. Learn how to grow your business online with AffordaWeb Solutions.',
    url: 'https://www.affordawebsolutions.com/blog',
    images: [{ url: 'https://www.affordawebsolutions.com/og-image.png', width: 1200, height: 630, alt: 'AffordaWeb Solutions Blog' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Blog | AffordaWeb Solutions',
    description: 'Practical web design tips, SEO guides, and digital marketing advice for small business owners. Learn how to grow your business online with AffordaWeb Solutions.',
    images: ['https://www.affordawebsolutions.com/og-image.png'],
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
    accent: '#5636D1',
    accentLight: 'rgba(86,54,209,0.10)',
    accentBorder: 'rgba(86,54,209,0.22)',
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
    accent: '#E2498A',
    accentLight: 'rgba(226,73,138,0.10)',
    accentBorder: 'rgba(226,73,138,0.22)',
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
    accent: '#06B6D4',
    accentLight: 'rgba(6,182,212,0.10)',
    accentBorder: 'rgba(6,182,212,0.22)',
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
    accent: '#F59E0B',
    accentLight: 'rgba(245,158,11,0.10)',
    accentBorder: 'rgba(245,158,11,0.22)',
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
    accent: '#10B981',
    accentLight: 'rgba(16,185,129,0.10)',
    accentBorder: 'rgba(16,185,129,0.22)',
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
    accent: '#5636D1',
    accentLight: 'rgba(86,54,209,0.10)',
    accentBorder: 'rgba(86,54,209,0.22)',
  },
]

const categories = ['All', 'Web Design', 'SEO', 'Business Growth', 'Pricing', 'Performance']

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.affordawebsolutions.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.affordawebsolutions.com/blog' },
  ],
}

export default function BlogPage() {
  const featured = posts.find(p => p.featured)
  const rest = posts.filter(p => !p.featured)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
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
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
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
        </div>
      </section>

      {/* Blog content */}
      <section className="section-pad relative overflow-hidden" style={{ background: '#0F0F1A' }} aria-labelledby="blog-heading">
        {/* Ambient glows */}
        <div className="absolute pointer-events-none" style={{ width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(86,54,209,0.08), transparent 65%)', top: '20%', right: '-200px' }} />
        <div className="absolute pointer-events-none" style={{ width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(226,73,138,0.06), transparent 65%)', bottom: '20%', left: '-150px' }} />

        <div className="container-tight relative z-10">
          <h2 className="sr-only" id="blog-heading">Blog Posts</h2>

          {/* Featured post */}
          {featured && (
            <article
              className="mb-12 overflow-hidden rounded-3xl group"
              style={{
                background: '#0F0F1A',
                border: `1px solid ${featured.accentBorder}`,
                boxShadow: `0 0 0 1px ${featured.accentBorder}, 0 24px 80px rgba(0,0,0,0.20)`,
              }}
            >
              {/* Top accent line */}
              <div className="absolute inset-x-0 top-0 h-0.5 pointer-events-none rounded-t-3xl" style={{ background: `linear-gradient(90deg, transparent, ${featured.accent}, transparent)` }} />
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 items-stretch">
                <div
                  className="lg:col-span-2 relative overflow-hidden"
                  style={{ minHeight: '280px' }}
                >
                  <Image
                    src={featured.image}
                    alt={featured.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(15,15,26,0.6), transparent)' }} />
                  <div className="absolute top-4 left-4">
                    <span
                      className="text-xs font-bold px-3 py-1.5 rounded-full"
                      style={{ background: featured.accentLight, color: featured.accent, border: `1px solid ${featured.accentBorder}` }}
                    >
                      Featured
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-3 p-8 flex flex-col justify-center">
                  {/* Card glow */}
                  <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full pointer-events-none" style={{ background: `radial-gradient(circle, ${featured.accent}20, transparent 65%)` }} />
                  <div className="relative z-10 flex items-center gap-3 mb-5">
                    <span
                      className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                      style={{ background: featured.accentLight, color: featured.accent, border: `1px solid ${featured.accentBorder}` }}
                    >
                      {featured.category}
                    </span>
                    <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>{featured.date}</span>
                    <span className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
                    <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>{featured.readTime}</span>
                  </div>
                  <h2
                    className="relative z-10 text-2xl font-bold text-white mb-4"
                    style={{ letterSpacing: '-0.015em', lineHeight: 1.25 }}
                  >
                    <Link href={`/blog/${featured.slug}`} className="hover:opacity-80 transition-opacity">
                      {featured.title}
                    </Link>
                  </h2>
                  <p className="relative z-10 text-sm leading-relaxed mb-7" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    {featured.excerpt}
                  </p>
                  <Link
                    href={`/blog/${featured.slug}`}
                    className="relative z-10 inline-flex items-center gap-2 text-sm font-bold rounded-full px-6 py-3 self-start transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: `linear-gradient(135deg, ${featured.accent}, ${featured.accent}cc)`,
                      color: '#fff',
                      boxShadow: `0 4px 16px ${featured.accentLight}`,
                    }}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {rest.map((post, idx) => (
              <article
                key={post.slug}
                className="group relative flex flex-col overflow-hidden rounded-3xl"
                style={{
                  background: '#0F0F1A',
                  border: `1px solid ${post.accentBorder}`,
                  boxShadow: `0 0 0 1px ${post.accentBorder}, 0 16px 48px rgba(0,0,0,0.15)`,
                }}
              >
                {/* Top accent line */}
                <div className="absolute inset-x-0 top-0 h-0.5 pointer-events-none" style={{ background: `linear-gradient(90deg, transparent, ${post.accent}, transparent)` }} />
                {/* Card glow */}
                <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full pointer-events-none" style={{ background: `radial-gradient(circle, ${post.accent}20, transparent 65%)` }} />

                {/* Image */}
                <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,15,26,0.7) 0%, transparent 60%)' }} />
                  {/* Index number on image */}
                  <div className="absolute bottom-3 right-4">
                    <span
                      className="text-3xl font-extrabold select-none"
                      style={{ color: `${post.accent}35`, letterSpacing: '-0.05em', lineHeight: 1 }}
                    >
                      {String(idx + 2).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                <div className="relative z-10 p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
                      style={{ background: post.accentLight, color: post.accent, border: `1px solid ${post.accentBorder}` }}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>{post.readTime}</span>
                  </div>

                  <h3
                    className="font-bold text-white text-base mb-3 leading-snug flex-grow"
                    style={{ letterSpacing: '-0.01em' }}
                  >
                    <Link href={`/blog/${post.slug}`} className="hover:opacity-80 transition-opacity">
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-sm leading-relaxed mb-5 line-clamp-2" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>{post.date}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-xs font-bold transition-opacity hover:opacity-70 flex items-center gap-1"
                      style={{ color: post.accent }}
                      aria-label={`Read more: ${post.title}`}
                    >
                      Read more
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
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
