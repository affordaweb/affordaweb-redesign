import { NextResponse } from 'next/server'

const baseUrl = 'https://www.affordawebsolutions.com'

const posts = [
  {
    slug: 'why-small-businesses-need-professional-website',
    title: 'Why Every Small Business Needs a Professional Website in 2025',
    excerpt: 'Still on the fence about investing in a professional website? Discover the real cost of not having one — and how an affordable website can transform your business.',
    category: 'Business Growth',
    date: '2025-01-15',
    url: `${baseUrl}/blog/why-small-businesses-need-professional-website`,
  },
  {
    slug: 'affordable-website-design-vs-diy-website-builder',
    title: 'Affordable Website Design vs. DIY Website Builders: Which Is Right for You?',
    excerpt: 'Wix, Squarespace, and WordPress.com all promise an easy website. But how do they compare to professionally designed sites? We break down the real differences.',
    category: 'Web Design',
    date: '2025-01-28',
    url: `${baseUrl}/blog/affordable-website-design-vs-diy-website-builder`,
  },
  {
    slug: 'seo-tips-small-business-website',
    title: '10 SEO Tips to Help Your Small Business Website Rank Higher on Google',
    excerpt: 'Search engine optimization does not have to be complicated. These 10 actionable SEO tips will help your small business website rank higher and attract more customers.',
    category: 'SEO',
    date: '2025-02-05',
    url: `${baseUrl}/blog/seo-tips-small-business-website`,
  },
  {
    slug: 'website-design-subscription-model-explained',
    title: 'What Is a Website Design Subscription? Everything You Need to Know',
    excerpt: 'Monthly website design subscriptions are changing how small businesses get online. Learn what they include, how pricing works, and whether it is right for you.',
    category: 'Pricing',
    date: '2025-02-12',
    url: `${baseUrl}/blog/website-design-subscription-model-explained`,
  },
  {
    slug: 'website-speed-matters-small-business',
    title: 'Why Website Speed Matters More Than You Think (And How to Fix It)',
    excerpt: 'A slow website costs you customers. Research shows 53% of mobile users abandon sites that take more than 3 seconds to load. Here is how to speed yours up.',
    category: 'Performance',
    date: '2025-02-20',
    url: `${baseUrl}/blog/website-speed-matters-small-business`,
  },
  {
    slug: 'local-seo-guide-small-businesses',
    title: 'The Complete Local SEO Guide for Small Business Owners',
    excerpt: 'Want to appear at the top of Google searches in your area? This local SEO guide covers everything from Google Business Profile to local citations and reviews.',
    category: 'SEO',
    date: '2025-03-01',
    url: `${baseUrl}/blog/local-seo-guide-small-businesses`,
  },
  {
    slug: 'how-to-choose-web-design-company-small-business',
    title: 'How to Choose a Web Design Company for Your Small Business',
    excerpt: 'With thousands of web design agencies out there, choosing the right one is overwhelming. Here are the 7 questions every small business owner should ask before signing anything.',
    category: 'Business Growth',
    date: '2025-04-08',
    url: `${baseUrl}/blog/how-to-choose-web-design-company-small-business`,
  },
  {
    slug: 'website-maintenance-why-it-matters',
    title: 'Website Maintenance: Why It Matters More Than You Think',
    excerpt: "Most small business owners launch a website and forget about it. That's a costly mistake. Here's what website maintenance actually covers and why skipping it can hurt your business.",
    category: 'Maintenance',
    date: '2025-06-10',
    url: `${baseUrl}/blog/website-maintenance-why-it-matters`,
  },
  {
    slug: 'mobile-website-design-guide',
    title: 'Mobile Website Design: Why It Is Your #1 Priority in 2025',
    excerpt: 'Over 60% of web traffic comes from mobile devices. If your website is not optimized for phones, you are losing customers every single day. Here is what mobile-first design actually means.',
    category: 'Web Design',
    date: '2025-08-20',
    url: `${baseUrl}/blog/mobile-website-design-guide`,
  },
  {
    slug: 'how-much-does-a-website-cost',
    title: 'How Much Does a Website Cost? A Small Business Guide for 2025',
    excerpt: "Agency quotes, DIY builders, and subscription services all charge very different amounts. Here's an honest breakdown of website costs so you can make the right call for your business.",
    category: 'Pricing',
    date: '2025-11-15',
    url: `${baseUrl}/blog/how-much-does-a-website-cost`,
  },
  {
    slug: 'who-updates-a-website-after-the-web-designer-finishes',
    title: 'Who Updates a Website After the Web Designer Finishes?',
    excerpt: "Your website just launched — now what? Learn who handles updates, content changes, and ongoing maintenance after your web designer delivers the finished site.",
    category: 'Web Maintenance',
    date: '2026-03-10',
    url: `${baseUrl}/blog/who-updates-a-website-after-the-web-designer-finishes`,
  },
  {
    slug: 'website-maintenance-requirements',
    title: 'Website Maintenance Requirements: What Every Small Business Site Needs',
    excerpt: "Most small businesses launch a website and forget about it. Here's what ongoing website maintenance actually involves — and what happens when you skip it.",
    category: 'Web Maintenance',
    date: '2026-03-15',
    url: `${baseUrl}/blog/website-maintenance-requirements`,
  },
  {
    slug: 'web-design-vs-web-hosting',
    title: "Web Design vs Web Hosting: What's the Difference?",
    excerpt: "Confused about the difference between web design and web hosting? Here's a plain-English breakdown of what each means and why you need both for a successful small business website.",
    category: 'Web Design',
    date: '2026-03-20',
    url: `${baseUrl}/blog/web-design-vs-web-hosting`,
  },
  {
    slug: 'web-design-competitor-comparison',
    title: 'AffordaWeb vs Wix vs Squarespace vs GoDaddy: Which Is Best for Small Businesses?',
    excerpt: "Comparing your website options as a small business owner? Here's an honest breakdown of AffordaWeb, Wix, Squarespace, and GoDaddy — covering cost, quality, support, and SEO.",
    category: 'Web Design',
    date: '2026-03-25',
    url: `${baseUrl}/blog/web-design-competitor-comparison`,
  },
]

export async function GET() {
  const latestBuildDate = new Date().toUTCString()

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>AffordaWeb Solutions Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Expert web design tips, SEO guides, and digital marketing advice for small business owners.</description>
    <language>en-us</language>
    <lastBuildDate>${latestBuildDate}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${baseUrl}/og-image.png</url>
      <title>AffordaWeb Solutions Blog</title>
      <link>${baseUrl}/blog</link>
    </image>
    ${posts.map(post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${post.url}</link>
      <guid isPermaLink="true">${post.url}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <category>${post.category}</category>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>`).join('')}
  </channel>
</rss>`

  return new NextResponse(feed, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}