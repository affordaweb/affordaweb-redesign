import { NextResponse } from 'next/server'

export const dynamic = 'force-static'

export function GET() {
  const content = `# AffordaWeb Solutions
> Affordable website design for small businesses starting at $69/month — includes hosting, SSL, maintenance, and unlimited updates.

AffordaWeb Solutions is a professional web design company that builds and manages websites for small businesses throughout the United States. All plans include custom design, managed hosting, SSL security, business email, and ongoing maintenance in one flat monthly rate. No setup fees, no long-term contracts, cancel anytime.

## Core Services

- [Website Design for Small Businesses](https://www.affordawebsolutions.com/services/design): Custom, mobile-first website design starting at $69/month, built to convert visitors into customers.
- [Website Redesign](https://www.affordawebsolutions.com/services/redesign): Modernize an outdated website without losing search rankings or existing content.
- [SEO Services](https://www.affordawebsolutions.com/services/seo): On-page SEO optimization and local SEO to help small businesses rank on Google.
- [Website Maintenance](https://www.affordawebsolutions.com/services/maintenance): Ongoing updates, backups, and security monitoring included in every plan.
- [Web Hosting](https://www.affordawebsolutions.com/services/hosting): Managed hosting with a free SSL certificate included in every website design plan.

## Pricing Plans

All plans include custom design, managed hosting, SSL, and a business email address.

- **Basic Plan — $69/month**: 1–5 pages, mobile-responsive design, web hosting, SSL, business email, basic maintenance, 1 monthly content update.
- **Standard Plan — $99/month**: Up to 10 pages, unlimited content updates, on-page SEO optimization, Google Analytics setup, contact form, speed optimization, security monitoring, priority support.
- **Premium Plan — $149/month**: Everything in Standard plus e-commerce (up to 30 products), advanced SEO setup, and 24/7 priority support.

No setup fees. No long-term contracts. Cancel anytime with 30 days notice.

## Key Facts

- Websites are designed and launched within 10–15 business days after content is received.
- Website design plans are month-to-month with no long-term contracts.
- All plans include a hosted business email address (you@yourdomain.com).
- AffordaWeb Solutions serves small businesses nationwide across the United States.
- The web design team is based in the Philippines.
- Affordable web design starts at $69/month — significantly less than the typical $5,000–$30,000+ agency quote.

## Frequently Asked Questions

**What does the website design plan include?**
Every plan includes a professionally designed small business website, managed web hosting, a free SSL certificate, a business email address, and ongoing maintenance. Standard and Premium plans also include unlimited content updates and full on-page SEO optimization.

**Are there setup fees?**
No. There are no setup fees and no hidden costs. You pay one flat monthly rate and everything listed in the plan is included.

**How long does it take to launch a website?**
Most small business websites launch within 10 to 15 business days after content is received. E-commerce projects may take slightly longer.

**Can I cancel anytime?**
Yes. All plans are month-to-month. You can cancel with 30 days notice and will receive your content and files.

**Do I need my own web hosting?**
No. Managed web hosting is included in every plan. You do not need a separate hosting account.

## Contact

- Website: https://www.affordawebsolutions.com
- Email: hello@affordawebsolutions.com

## Blog — Articles on Web Design, SEO & Maintenance

- [Why Small Businesses Need a Professional Website in 2025](https://www.affordawebsolutions.com/blog/why-small-businesses-need-professional-website)
- [Affordable Website Design vs. DIY Website Builders](https://www.affordawebsolutions.com/blog/affordable-website-design-vs-diy-website-builder)
- [10 SEO Tips to Rank Your Small Business Website Higher](https://www.affordawebsolutions.com/blog/seo-tips-small-business-website)
- [What Is a Website Design Subscription? A Complete Guide](https://www.affordawebsolutions.com/blog/website-design-subscription-model-explained)
- [Why Website Speed Matters and How to Fix It](https://www.affordawebsolutions.com/blog/website-speed-matters-small-business)
- [How to Choose a Web Design Company for Your Small Business](https://www.affordawebsolutions.com/blog/how-to-choose-web-design-company-small-business)
- [Website Maintenance: Why It Matters More Than You Think](https://www.affordawebsolutions.com/blog/website-maintenance-why-it-matters)
- [Mobile Website Design: Why It Is Your #1 Priority in 2025](https://www.affordawebsolutions.com/blog/mobile-website-design-guide)
- [How Much Does a Website Cost? A Small Business Guide for 2025](https://www.affordawebsolutions.com/blog/how-much-does-a-website-cost)
- [Who Updates a Website After the Web Designer Finishes?](https://www.affordawebsolutions.com/blog/who-updates-a-website-after-the-web-designer-finishes)
- [Website Maintenance Requirements for Small Businesses](https://www.affordawebsolutions.com/blog/website-maintenance-requirements)
- [Web Design vs. Web Hosting: What Is the Difference?](https://www.affordawebsolutions.com/blog/web-design-vs-web-hosting)
- [AffordaWeb vs Wix, Squarespace & GoDaddy: Side-by-Side Comparison](https://www.affordawebsolutions.com/blog/web-design-competitor-comparison)
`

  return new NextResponse(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
