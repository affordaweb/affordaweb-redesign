import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'

// ─── Post data ───────────────────────────────────────────────────────────────
const posts: Record<string, {
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  image: string
  imageAlt: string
  content: string
}> = {
  'why-small-businesses-need-professional-website': {
    title: 'Why Every Small Business Needs a Professional Website in 2025',
    excerpt:
      'Still on the fence about investing in a professional website? Discover the real cost of not having one — and how an affordable website can transform your business.',
    category: 'Business Growth',
    date: 'January 15, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
    imageAlt: 'Laptop showing business analytics — why small businesses need a website',
    content: `
## The Cost of Not Having a Website

In today's digital economy, your website is your hardest-working employee — available 24 hours a day, 7 days a week, 365 days a year. Yet a surprising number of small businesses still operate without one, relying on social media pages or word-of-mouth alone.

Here's the reality: **97% of consumers search online before buying from a local business**. If you're not there, your competitors are.

## What You're Losing Without a Website

### Credibility and Trust

When a potential customer hears about your business and looks you up, what do they find? If the answer is nothing — or worse, an outdated Facebook page — many will move on to a competitor who appears more established.

A professional website signals that you take your business seriously. It builds instant trust before a customer ever picks up the phone.

### Leads While You Sleep

Unlike a storefront that closes at 5pm, your website works around the clock. A well-designed site with a contact form, click-to-call button, and clear calls to action converts visitors into leads even when you're off the clock.

### Competitive Advantage

Most of your local competitors already have websites. If yours is better — faster, more professional, and easier to navigate — you have a genuine edge in winning new customers.

## Why Affordable Website Design Is No Longer a Trade-Off

Many small business owners avoid getting a website because they assume it will be expensive or technically complicated. That's no longer the case.

At AffordaWeb Solutions, our website design services start at just **$69/month** — which includes hosting, SSL security, maintenance, and ongoing support. There's no large upfront cost, no long-term contract, and no technical headaches.

## The Bottom Line

A professional website is no longer a luxury for small businesses — it's a necessity. The cost of not having one (lost leads, lost credibility, lost sales) far outweighs the affordable monthly investment.

Ready to get started? [Get a free quote today](/contact) and have your website live in 10–15 business days.
    `.trim(),
  },
  'affordable-website-design-vs-diy-website-builder': {
    title: 'Affordable Website Design vs. DIY Website Builders: Which Is Right for You?',
    excerpt:
      'Wix, Squarespace, and WordPress.com all promise an easy website. But how do they compare to professionally designed sites? We break down the real differences.',
    category: 'Web Design',
    date: 'January 28, 2025',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1200&auto=format&fit=crop&q=80',
    imageAlt: 'Laptop on clean desk — professional web design vs DIY website builders',
    content: `
## The Appeal of DIY Website Builders

Platforms like Wix, Squarespace, and WordPress.com have made it easier than ever to get a basic website online. Drag-and-drop interfaces, pre-built templates, and low starting prices make them attractive — especially for businesses just getting started.

But "easy" and "effective" aren't always the same thing.

## What DIY Builders Get Right

- **Low upfront cost** — You can start for as little as $10–$20/month
- **Quick setup** — A basic page can be online in a few hours
- **No coding required** — Anyone can move blocks around

## Where DIY Builders Fall Short

### Design Quality

Templates are templates. Your Wix site will look like thousands of other Wix sites. Professional designers create something unique to your brand, your audience, and your goals.

### SEO Performance

DIY builders often generate bloated code, slow load times, and limited control over technical SEO elements. Google cares about page speed, clean code, and proper structure — things a professional build handles by default.

### Your Time Has Value

The "easy" promise of DIY builders rarely holds up in practice. Learning the platform, fighting with templates, troubleshooting mobile layouts — it adds up. Most business owners spend 20–40 hours getting a DIY site to an acceptable level. What's your hourly rate?

### Ongoing Maintenance

When your Wix site breaks, you're on your own. When an AffordaWeb site needs an update, you email us and it's done.

## The Real Cost Comparison

| | DIY Builder | AffordaWeb Solutions |
|---|---|---|
| Monthly cost | $20–$49/mo | From $69/mo |
| Setup time | 20–40 hours of your time | 10–15 business days |
| Custom design | Limited | Fully custom |
| SEO optimization | Basic | Built-in |
| Ongoing support | Self-service | Dedicated team |

## Which Should You Choose?

If you're a solo freelancer just testing the waters, a DIY builder might get you started. But if you're a serious small business looking to attract customers, build credibility, and rank on Google — a professionally designed website is worth every penny.

[Compare our affordable plans](/pricing) and see how little it costs to do it right.
    `.trim(),
  },
  'seo-tips-small-business-website': {
    title: '10 SEO Tips to Help Your Small Business Website Rank Higher on Google',
    excerpt:
      'Search engine optimization does not have to be complicated. These 10 actionable SEO tips will help your small business website rank higher and attract more customers.',
    category: 'SEO',
    date: 'February 5, 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&auto=format&fit=crop&q=80',
    imageAlt: 'SEO analytics dashboard — tips for ranking on Google',
    content: `
## Why SEO Matters for Small Businesses

Search engine optimization (SEO) is the process of making your website more visible in Google search results. For small businesses, ranking for local and industry-specific keywords can be the difference between a steady stream of new customers and an empty phone.

The good news: you don't need to be a technical expert. These 10 tips will make a real difference.

## 1. Target the Right Keywords

Start with keywords your customers actually search for. Think about: affordable website design near me, [your service] in [your city], cheap web design services.

Use free tools like Google Keyword Planner or Ubersuggest to find terms with real search volume.

## 2. Optimize Your Title Tags

Every page should have a unique title tag (under 60 characters) that includes your target keyword. Example: "Affordable Website Design | AffordaWeb Solutions | From $69/mo"

## 3. Write Compelling Meta Descriptions

Meta descriptions don't directly affect rankings, but they influence click-through rates. Write a 150–160 character summary that includes your keyword and a clear benefit.

## 4. Use Proper Heading Structure

Use one H1 per page (your main keyword phrase), followed by H2s and H3s for supporting topics. This helps Google understand your page structure.

## 5. Optimize for Mobile

Google uses mobile-first indexing. If your site doesn't work perfectly on phones, you'll rank lower. Test your site at search.google.com/test/mobile-friendly.

## 6. Improve Page Speed

Every second of load time reduces conversions and rankings. Compress images, minimize JavaScript, and use a fast hosting provider.

## 7. Build Local Signals

For local businesses, claim and optimize your Google Business Profile. Include your city in page titles, headings, and content. Earn citations in local directories.

## 8. Create Useful Content

Google rewards websites that answer real questions. A blog with helpful articles about your industry builds authority and brings in organic traffic over time.

## 9. Earn Quality Backlinks

Links from other reputable websites signal trust to Google. Get listed in industry directories, reach out to local news sites, and ask satisfied customers to mention you online.

## 10. Track and Improve

Set up Google Analytics and Google Search Console. Monitor which pages rank, what keywords drive traffic, and where visitors drop off — then make improvements.

---

At AffordaWeb Solutions, every website we build includes on-page SEO optimization as standard. [Learn more about our SEO services](/services#seo) or [get a free quote](/contact).
    `.trim(),
  },
  'website-design-subscription-model-explained': {
    title: 'What Is a Website Design Subscription? Everything You Need to Know',
    excerpt:
      'Monthly website design subscriptions are changing how small businesses get online. Learn what they include, how pricing works, and whether it is right for you.',
    category: 'Pricing',
    date: 'February 12, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
    imageAlt: 'Data and pricing charts — website design subscription model explained',
    content: `
## What Is a Website Design Subscription?

A website design subscription is a monthly service that gives your business a professionally designed, fully managed website for a flat monthly fee — instead of a large one-time payment.

Think of it like leasing vs. buying a car. Instead of paying $5,000–$10,000 upfront for a custom website, you pay an affordable monthly rate that covers design, hosting, maintenance, and ongoing support.

## What's Typically Included

A good website design subscription — like those offered by AffordaWeb Solutions — includes:

- **Professional website design** — Custom-built, mobile-responsive website
- **Web hosting** — Your site lives on our servers at no extra cost
- **SSL certificate** — HTTPS security included
- **Business email address** — A professional email like you@yourdomain.com
- **Regular maintenance** — Updates, backups, and security monitoring
- **Content updates** — Send us changes and we handle them for you
- **SEO optimization** — On-page optimization built into every page

## How Pricing Works

Most subscription plans tier by complexity:

- **Basic ($69/mo)** — 1–5 page website, 1 update/month, essential features
- **Standard ($99/mo)** — Up to 10 pages, unlimited updates, SEO, priority support
- **Premium ($149/mo)** — Everything in Standard plus e-commerce, advanced SEO

## Is There a Contract?

At AffordaWeb Solutions — no. Our plans are month-to-month. You can cancel anytime, though most clients stay for years because the value is undeniable.

## Is a Subscription Right for Your Business?

A website subscription makes sense if:

- You want a professional website without a large upfront investment
- You don't have time to maintain a website yourself
- You want ongoing SEO and performance improvements
- You value having a dedicated team handle technical issues

It may not be the best fit if you have a large in-house web team or need highly complex custom functionality.

## Getting Started

Getting a website subscription with AffordaWeb Solutions takes less than 24 hours to initiate. [Request your free quote](/contact) and we'll have your new website live within 10–15 business days.
    `.trim(),
  },
  'website-speed-matters-small-business': {
    title: 'Why Website Speed Matters More Than You Think (And How to Fix It)',
    excerpt:
      'A slow website costs you customers. Research shows 53% of mobile users abandon sites that take more than 3 seconds to load. Here is how to speed yours up.',
    category: 'Performance',
    date: 'February 20, 2025',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Developer optimizing website speed on laptop',
    content: `
## The Speed-Revenue Connection

Website speed isn't just a technical metric — it directly affects your bottom line.

- **53%** of mobile users abandon a site that takes more than 3 seconds to load (Google)
- **1-second delay** in page load time reduces conversions by 7% (Akamai)
- **Page speed** is a confirmed Google ranking factor for both desktop and mobile

If your website is slow, you're losing potential customers before they even read your first sentence.

## How to Check Your Website Speed

Start with these free tools:

- **Google PageSpeed Insights** — pagespeed.web.dev
- **GTmetrix** — gtmetrix.com
- **WebPageTest** — webpagetest.org

Aim for a Google PageSpeed score of 90+ on mobile and desktop.

## The Most Common Speed Problems (and How to Fix Them)

### 1. Unoptimized Images

Images are the #1 cause of slow websites. Large, uncompressed JPEGs add seconds to load time.

**Fix:** Convert images to WebP format, compress with TinyPNG or Squoosh, and use correct dimensions. Never upload a 4000px image for a 400px thumbnail.

### 2. Too Much JavaScript

Heavy JavaScript frameworks, unnecessary plugins, and third-party scripts (chat widgets, pop-ups) all slow your page.

**Fix:** Audit and remove scripts you don't need. Defer non-critical JavaScript.

### 3. No Browser Caching

Without caching, every visitor re-downloads the same files.

**Fix:** Enable browser caching via your hosting control panel or a caching plugin.

### 4. Slow Hosting

Cheap shared hosting can be a significant bottleneck.

**Fix:** Use a reputable hosting provider with fast servers and a content delivery network (CDN).

### 5. No CDN

A Content Delivery Network serves your site from servers closest to each visitor.

**Fix:** Services like Cloudflare offer a free CDN that can dramatically improve load times globally.

## How AffordaWeb Handles Speed

Every website we build is speed-optimized by default. We use modern Next.js technology, optimized image delivery, efficient code, and quality hosting — so your site is fast from day one.

[See our website design plans](/pricing) and get a fast, professional website starting at $69/month.
    `.trim(),
  },
  'local-seo-guide-small-businesses': {
    title: 'The Complete Local SEO Guide for Small Business Owners',
    excerpt:
      'Want to appear at the top of Google searches in your area? This local SEO guide covers everything from Google Business Profile to local citations and reviews.',
    category: 'SEO',
    date: 'March 1, 2025',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=1200&auto=format&fit=crop&q=80',
    imageAlt: 'Local business map and search results — local SEO guide',
    content: `
## What Is Local SEO?

Local SEO is the process of optimizing your online presence to attract customers in your geographic area. When someone searches "affordable website design near me" or "plumber in Austin TX," local SEO determines who shows up.

For brick-and-mortar businesses and service-area businesses, local SEO is often more valuable than broad national SEO — and it's more achievable too.

## Step 1: Claim and Optimize Your Google Business Profile

Google Business Profile (formerly Google My Business) is the single most important local SEO tool. It's what powers the "map pack" — the 3 local businesses that appear at the top of relevant searches.

**Optimization checklist:**
- Verify your business listing
- Add complete business information (name, address, phone, hours)
- Choose the most relevant primary category
- Upload 10+ high-quality photos
- Write a compelling business description with local keywords
- Enable messaging and booking if applicable

## Step 2: Consistent NAP Citations

NAP stands for Name, Address, Phone number. Consistency across all online directories signals trust to Google.

**Key directories to claim:**
- Google Business Profile
- Yelp
- Facebook Business
- Apple Maps
- Bing Places
- Yellow Pages
- Industry-specific directories

## Step 3: Local Keyword Optimization

Include location-based keywords naturally throughout your website:

- Page titles: "Affordable Website Design Services in [City]"
- H1 headings: "Professional Web Design for [City] Small Businesses"
- Body copy: Mention your service area naturally 2–3 times per page
- Meta descriptions: Include city/region

## Step 4: Build Local Backlinks

Links from local websites carry strong local SEO signals:

- Local news websites and blogs
- Chamber of commerce directory
- Local business associations
- Sponsoring local events
- Partnerships with complementary local businesses

## Step 5: Get More Reviews

Reviews on Google, Yelp, and Facebook influence both rankings and click-through rates.

**How to get more reviews:**
- Ask satisfied customers directly
- Send a follow-up email with a direct review link
- Make it part of your post-service workflow
- Respond to every review — positive and negative

## Step 6: Create Local Content

Blog posts targeting local keywords build authority and attract local searchers:

- "Best Website Design Services in [City]"
- "[City] Small Business Spotlight"
- "How [City] Businesses Can Benefit from SEO"

## Tracking Your Local SEO Progress

- **Google Search Console** — See what keywords bring traffic
- **Google Analytics** — Track local visitor behavior
- **Whitespark Local Citation Finder** — Audit citations
- **BrightLocal** — Comprehensive local SEO tracking

---

Local SEO takes time but delivers lasting results. At AffordaWeb Solutions, our Standard and Premium plans include on-page local SEO optimization for your city and service area. [Contact us to learn more](/contact).
    `.trim(),
  },
}

// ─── Static params ────────────────────────────────────────────────────────────
export function generateStaticParams() {
  return Object.keys(posts).map(slug => ({ slug }))
}

// ─── Metadata ─────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = posts[slug]
  if (!post) return { title: 'Post Not Found' }

  return {
    title: `${post.title} | AffordaWeb Solutions Blog`,
    description: post.excerpt,
    alternates: { canonical: `https://affordawebsolutions.com/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://affordawebsolutions.com/blog/${slug}`,
      images: [{ url: post.image, alt: post.imageAlt }],
    },
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = posts[slug]
  if (!post) notFound()

  // Convert simple markdown-like content to HTML paragraphs/headings
  const renderContent = (raw: string) => {
    const lines = raw.split('\n')
    const elements: React.ReactNode[] = []
    let i = 0

    while (i < lines.length) {
      const line = lines[i].trim()

      if (!line) { i++; continue }

      if (line.startsWith('## ')) {
        elements.push(
          <h2 key={i} className="text-2xl font-bold text-dark mt-10 mb-4">
            {line.replace('## ', '')}
          </h2>
        )
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={i} className="text-xl font-bold text-dark mt-8 mb-3">
            {line.replace('### ', '')}
          </h3>
        )
      } else if (line.startsWith('- **') || line.startsWith('- ')) {
        // Collect list items
        const listItems: string[] = []
        while (i < lines.length && lines[i].trim().startsWith('- ')) {
          listItems.push(lines[i].trim().replace(/^- /, ''))
          i++
        }
        elements.push(
          <ul key={`ul-${i}`} className="list-disc list-inside space-y-2 my-4 text-gray-600">
            {listItems.map((item, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
            ))}
          </ul>
        )
        continue
      } else if (line.startsWith('---')) {
        elements.push(<hr key={i} className="my-10 border-gray-200" />)
      } else if (line.startsWith('| ')) {
        // Simple table — skip complex parsing, render as a note
        const tableLines: string[] = []
        while (i < lines.length && lines[i].trim().startsWith('|')) {
          tableLines.push(lines[i].trim())
          i++
        }
        elements.push(
          <div key={`table-${i}`} className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              {tableLines.map((row, rIdx) => {
                if (row.includes('---')) return null
                const cells = row.split('|').filter(c => c.trim())
                const Tag = rIdx === 0 ? 'th' : 'td'
                return (
                  <tr key={rIdx} className={rIdx === 0 ? 'bg-primary-50' : rIdx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    {cells.map((cell, cIdx) => (
                      <Tag key={cIdx} className="border border-gray-200 px-4 py-2 text-left">
                        {cell.trim()}
                      </Tag>
                    ))}
                  </tr>
                )
              })}
            </table>
          </div>
        )
        continue
      } else {
        // Regular paragraph — handle inline bold and links
        const html = line
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary-500 hover:underline font-semibold">$1</a>')
        elements.push(
          <p key={i} className="text-gray-600 leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: html }} />
        )
      }
      i++
    }
    return elements
  }

  const otherPosts = Object.entries(posts)
    .filter(([s]) => s !== slug)
    .slice(0, 3)

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: new Date(post.date).toISOString().split('T')[0],
    author: {
      '@type': 'Organization',
      name: 'AffordaWeb Solutions',
      url: 'https://affordawebsolutions.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'AffordaWeb Solutions',
      logo: {
        '@type': 'ImageObject',
        url: 'https://affordawebsolutions.com/logo.webp',
      },
    },
    url: `https://affordawebsolutions.com/blog/${slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://affordawebsolutions.com/blog/${slug}`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      {/* Hero */}
      <section className="bg-gradient-hero pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[600px] h-[400px] bg-primary-500/20 rounded-full blur-[150px] pointer-events-none" />
        <div className="container-tight relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="badge bg-primary-500/20 text-primary-300 text-xs">{post.category}</span>
              <span className="text-white/40 text-xs">{post.date}</span>
              <span className="text-white/40 text-xs">·</span>
              <span className="text-white/40 text-xs">{post.readTime}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              {post.title}
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">{post.excerpt}</p>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="section-pad bg-white">
        <div className="container-tight">
          <div className="max-w-3xl mx-auto">

            {/* Featured image */}
            <div className="rounded-3xl overflow-hidden mb-12 relative" style={{ aspectRatio: '16/9' }}>
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content */}
            <div className="prose-custom">
              {renderContent(post.content)}
            </div>

            {/* CTA box */}
            <div className="mt-14 p-8 rounded-3xl bg-gradient-hero text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-primary-500/10 rounded-3xl" />
              <div className="relative z-10">
                <p className="text-primary-300 text-sm font-bold tracking-widest uppercase mb-2">
                  Ready to Get Started?
                </p>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Get Your Professional Website Today
                </h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  Affordable website design starting at $69/month. Hosting, SSL, and maintenance included.
                </p>
                <Link href="/contact" className="btn-primary inline-flex">
                  Get a Free Quote
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Back link */}
            <div className="mt-10">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary-500 hover:text-primary-400 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>
            </div>
          </div>

          {/* Related posts */}
          {otherPosts.length > 0 && (
            <div className="mt-20 max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold text-dark mb-8 text-center">More Articles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {otherPosts.map(([s, p]) => (
                  <article key={s} className="card group flex flex-col">
                    <div className="rounded-2xl mb-4 relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                      <Image
                        src={p.image}
                        alt={p.imageAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <span className="badge bg-primary-50 text-primary-600 text-xs mb-2 self-start">{p.category}</span>
                    <h3 className="font-bold text-dark text-sm mb-3 flex-grow group-hover:text-primary-500 transition-colors">
                      <Link href={`/blog/${s}`}>{p.title}</Link>
                    </h3>
                    <Link
                      href={`/blog/${s}`}
                      className="text-xs font-semibold text-primary-500 hover:text-primary-400 transition-colors mt-auto"
                    >
                      Read more →
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  )
}
