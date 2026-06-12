import { NextResponse } from 'next/server'

const BASE_URL = 'https://www.affordawebsolutions.com'

const posts = [
  {
    slug: 'how-much-does-a-website-cost',
    title: 'How Much Does a Website Cost? A Small Business Guide for 2025',
    excerpt: 'Agency quotes, DIY builders, and subscription services all charge very different amounts. Here is an honest breakdown of website costs so you can make the right call for your business.',
    date: 'November 15, 2025',
    isoDate: '2025-11-15T00:00:00Z',
    category: 'Pricing',
  },
  {
    slug: 'mobile-website-design-guide',
    title: 'Mobile Website Design: Why It Is Your #1 Priority in 2025',
    excerpt: 'Over 60% of web traffic comes from mobile devices. If your website is not optimized for phones, you are losing customers every single day. Here is what mobile-first design actually means.',
    date: 'August 20, 2025',
    isoDate: '2025-08-20T00:00:00Z',
    category: 'Web Design',
  },
  {
    slug: 'website-maintenance-why-it-matters',
    title: 'Website Maintenance: Why It Matters More Than You Think',
    excerpt: 'Most small business owners launch a website and forget about it. That is a costly mistake. Here is what website maintenance actually covers and why skipping it can hurt your business.',
    date: 'June 10, 2025',
    isoDate: '2025-06-10T00:00:00Z',
    category: 'Maintenance',
  },
  {
    slug: 'how-to-choose-web-design-company-small-business',
    title: 'How to Choose a Web Design Company for Your Small Business',
    excerpt: 'With thousands of web design agencies out there, choosing the right one is overwhelming. Here are the 7 questions every small business owner should ask before signing anything.',
    date: 'April 8, 2025',
    isoDate: '2025-04-08T00:00:00Z',
    category: 'Business Growth',
  },
  {
    slug: 'local-seo-guide-small-businesses',
    title: 'The Complete Local SEO Guide for Small Business Owners',
    excerpt: 'Want to appear at the top of Google searches in your area? This local SEO guide covers everything from Google Business Profile to local citations and reviews.',
    date: 'March 1, 2025',
    isoDate: '2025-03-01T00:00:00Z',
    category: 'SEO',
  },
  {
    slug: 'website-speed-matters-small-business',
    title: 'Why Website Speed Matters and How to Fix It',
    excerpt: 'A slow website costs you customers. Research shows 53% of mobile users abandon sites that take more than 3 seconds to load. Here is how to speed yours up.',
    date: 'February 20, 2025',
    isoDate: '2025-02-20T00:00:00Z',
    category: 'Performance',
  },
  {
    slug: 'website-design-subscription-model-explained',
    title: 'What Is a Website Design Subscription? A Complete Guide',
    excerpt: 'Monthly website design subscriptions are changing how small businesses get online. Learn what they include, how pricing works, and whether it is right for you.',
    date: 'February 12, 2025',
    isoDate: '2025-02-12T00:00:00Z',
    category: 'Pricing',
  },
  {
    slug: 'seo-tips-small-business-website',
    title: '10 SEO Tips to Rank Your Small Business Website Higher',
    excerpt: 'SEO does not have to be complicated. These 10 actionable tips will help your small business website rank higher on Google and attract more customers.',
    date: 'February 5, 2025',
    isoDate: '2025-02-05T00:00:00Z',
    category: 'SEO',
  },
  {
    slug: 'affordable-website-design-vs-diy-website-builder',
    title: 'Affordable Website Design vs. DIY Website Builders',
    excerpt: 'Wix, Squarespace, and WordPress.com all promise an easy website. But how do they compare to professionally designed sites? We break down the real differences.',
    date: 'January 28, 2025',
    isoDate: '2025-01-28T00:00:00Z',
    category: 'Web Design',
  },
  {
    slug: 'why-small-businesses-need-professional-website',
    title: 'Why Small Businesses Need a Professional Website in 2025',
    excerpt: 'Still on the fence about investing in a professional website? Discover the real cost of not having one and how an affordable website can transform your business.',
    date: 'January 15, 2025',
    isoDate: '2025-01-15T00:00:00Z',
    category: 'Business Growth',
  },
]

function escapeXml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  const items = posts
    .map(
      (p) => `
    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${BASE_URL}/blog/${p.slug}</link>
      <guid isPermaLink="true">${BASE_URL}/blog/${p.slug}</guid>
      <description>${escapeXml(p.excerpt)}</description>
      <pubDate>${new Date(p.isoDate).toUTCString()}</pubDate>
      <category>${escapeXml(p.category)}</category>
    </item>`
    )
    .join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>AffordaWeb Solutions Blog</title>
    <link>${BASE_URL}/blog</link>
    <description>Web design tips, SEO guides, and digital marketing advice for small businesses.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date(posts[0].isoDate).toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${BASE_URL}/logo.webp</url>
      <title>AffordaWeb Solutions Blog</title>
      <link>${BASE_URL}/blog</link>
    </image>${items}
  </channel>
</rss>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  })
}
