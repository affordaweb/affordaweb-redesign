import Link from 'next/link'
import { getPlan } from '@/lib/pricing'

const starterPlan = getPlan('starter')

export interface ServiceData {
  id: string
  tag: string
  title: string
  headline: string
  metaTitle: string
  metaDescription: string
  description: string[]
  paragraphs?: React.ReactNode[]
  features: string[]
  faqs: { question: string; answer: string }[]
  color: {
    accent: string
    light: string
    border: string
    glow: string
  }
  icon: React.ReactNode
}

export const services: ServiceData[] = [
  {
    id: 'design',
    tag: 'Core Service',
    title: 'Website Design',
    headline: 'Custom Website Design for Small Businesses',
    metaTitle: 'Custom Website Design for Small Businesses',
    metaDescription:
      `Affordable custom website design for small businesses starting at $${starterPlan.monthlyPrice}/month. Choose the Starter or Business plan for the website support that fits your needs.`,
    description: [
      `Most web agencies charge thousands upfront before they know anything about your business. We built this differently. Starting at $${starterPlan.monthlyPrice} a month, you get a custom site that is responsive on every device.`,
      'You share your goals, preferred style, services, and target customers. We turn that information into a professional website with clear navigation, useful calls to action, and a layout that works across phones, tablets, and desktops.',
      'This service is designed for freelancers, local service providers, startups, and small businesses that need a credible website without managing separate designers, hosts, and maintenance providers.',
    ],
    paragraphs: [
      <>Most web agencies charge thousands upfront before they know anything about your business. We built this differently. Starting at <Link href="/pricing" className="font-medium text-primary-500 hover:underline">${starterPlan.monthlyPrice} a month</Link>, you get a custom site that is responsive on every device.</>,
      <>You share your goals, preferred style, services, and target customers. We turn that information into a professional website with clear navigation, useful calls to action, and a layout that works across phones, tablets, and desktops. Every plan includes an <a href="https://letsencrypt.org" target="_blank" rel="noopener noreferrer" className="font-medium text-primary-500 hover:underline">SSL certificate</a>.</>,
      <>This service is designed for freelancers, local service providers, startups, and small businesses that need a credible website without managing separate designers, hosts, and maintenance providers. Compare the exact page limits and support included in each <Link href="/pricing" className="font-medium text-primary-500 hover:underline">website design plan</Link>.</>,
    ],
    features: [
      'Fully responsive design for all devices',
      'Custom layout, color palette, and branding',
      'Search-friendly page structure and metadata',
      'Performance-focused build and clear navigation',
      'Conversion-focused calls to action',
      'SSL certificate included on every plan',
    ],
    faqs: [
      { question: 'What is included in a small business website design?', answer: 'Every plan includes a responsive custom website, managed hosting, SSL, maintenance, and business email. Page limits, SEO support, analytics, and routine content updates vary by plan, so review the pricing comparison for the exact scope.' },
      { question: 'How long does a small business website take to build?', answer: 'Most standard websites launch within 10 to 15 business days after we receive the required business information, content, images, and feedback. More complex features or delayed approvals can extend the timeline.' },
      { question: 'Will I need to manage the website myself?', answer: 'No. AffordaWeb manages hosting, SSL, and technical maintenance. Content-update allowances depend on your selected plan.' },
    ],
    color: { accent: '#5636D1', light: 'rgba(86,54,209,0.08)', border: 'rgba(86,54,209,0.2)', glow: 'rgba(86,54,209,0.12)' },
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 'redesign',
    tag: 'Popular',
    title: 'Website Redesign',
    headline: 'Website Redesign for a Faster, Clearer Customer Experience',
    metaTitle: 'Website Redesign Services for Small Businesses',
    metaDescription:
      `Affordable website redesign for small businesses starting at $${starterPlan.monthlyPrice}/month. Transform your outdated site into a modern, mobile-friendly website.`,
    description: [
      'An outdated website can make it harder for visitors to understand your services, trust your business, or contact you. A redesign improves the experience while carefully reviewing the content and URLs that already contribute to your search visibility.',
      'We modernize the layout, simplify navigation, improve mobile usability, and sharpen calls to action. Before launch, we map important existing pages and identify redirects needed to reduce avoidable SEO disruption.',
      'This is a practical fit when your website still works but no longer reflects your services, brand, or customers.',
    ],
    paragraphs: [
      <>An outdated website can make it harder for visitors to understand your services, trust your business, or contact you. A redesign improves the experience while carefully reviewing the content and URLs that already contribute to your search visibility.</>,
      <>We apply <a href="https://developers.google.com/search/mobile-sites" target="_blank" rel="noopener noreferrer" className="font-medium text-primary-500 hover:underline">mobile-first design</a>, simplify navigation, improve page presentation, and sharpen calls to action. Before launch, we map important existing pages and identify redirects needed to reduce avoidable SEO disruption.</>,
      <>This is a practical fit when your website still works but no longer reflects your services, brand, or customers. We will review your current site before recommending what to retain, rewrite, or remove.</>,
    ],
    features: [
      'Complete visual and functional makeover',
      'Review of valuable content, URLs, and metadata',
      'Modern, mobile-friendly layouts',
      'Redirect planning for changed URLs',
      'Performance and conversion improvements',
    ],
    faqs: [
      { question: 'Can a website redesign affect SEO rankings?', answer: 'Yes. Rankings can change when URLs, content, internal links, or technical signals change. We review important pages and plan redirects to reduce unnecessary disruption, but no provider can guarantee unchanged rankings.' },
      { question: 'Can you redesign my website without replacing all the content?', answer: 'Yes. We can retain useful copy and media, then reorganize or refine them where needed. The initial review determines what should stay, what needs updating, and what no longer supports your goals.' },
      { question: 'How do I know if my website needs a redesign?', answer: 'Common signs include poor mobile usability, confusing navigation, slow pages, outdated branding, inaccurate service information, or visitors reaching the site without taking the next step.' },
    ],
    color: { accent: '#E2498A', light: 'rgba(226,73,138,0.08)', border: 'rgba(226,73,138,0.2)', glow: 'rgba(226,73,138,0.10)' },
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    id: 'seo',
    tag: 'Grow Traffic',
    title: 'SEO Optimization',
    headline: 'SEO Services That Build a Stronger Search Foundation',
    metaTitle: 'Small Business SEO and On-Page Optimization',
    metaDescription:
      'Small business SEO services covering search intent, on-page content, metadata, internal links, and clean site structure. See current Business and Virtual Employee plan inclusions.',
    description: [
      'Search visibility starts with making each page useful and understandable. We align page topics with search intent, improve headings and metadata, strengthen internal links, and check that search engines can crawl the right pages.',
      'Business and Virtual Employee plans include SEO optimization. The work can include keyword research, on-page recommendations, content structure, and analytics setup according to the selected plan and website needs.',
      'SEO is an ongoing process, not a ranking guarantee. We establish a measurable baseline and prioritize improvements that help qualified visitors discover and use your website.',
    ],
    paragraphs: [
      <>Search visibility starts with making each page useful and understandable. We align page topics with search intent, improve headings and <a href="https://developers.google.com/search/docs/appearance/snippet" target="_blank" rel="noopener noreferrer" className="font-medium text-primary-500 hover:underline">search snippets</a>, strengthen internal links, and check that search engines can crawl the right pages.</>,
      <><Link href="/pricing" className="font-medium text-primary-500 hover:underline">Business and Virtual Employee plans</Link> include SEO optimization. The work can include keyword research, on-page recommendations, content structure, and <a href="https://marketingplatform.google.com/about/analytics/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary-500 hover:underline">Google Analytics</a> setup according to the selected plan and website needs.</>,
      <>SEO is an ongoing process, not a ranking guarantee. Start with our <Link href="/seo-audit" className="font-medium text-primary-500 hover:underline">free SEO audit tool</Link> to identify technical and on-page issues, then use Google Search Console data to measure search visibility over time.</>,
    ],
    features: [
      'Search-intent and keyword research',
      'Page titles, descriptions, and heading review',
      'On-page content and internal-link improvements',
      'Crawlability and indexation checks',
      'Analytics and performance measurement setup',
    ],
    faqs: [
      { question: 'What is included in small business SEO?', answer: 'The exact scope depends on the plan and website. Typical work includes keyword and search-intent research, metadata, headings, page copy, internal links, crawlability checks, and analytics setup.' },
      { question: 'How long does SEO take to show results?', answer: 'SEO timelines vary by market, competition, website history, and the work completed. Technical fixes may be processed relatively quickly, while meaningful growth in impressions, rankings, and qualified traffic often takes months.' },
      { question: 'Do you guarantee first-page Google rankings?', answer: 'No. Search engines control rankings, and responsible SEO providers cannot guarantee a specific position. We focus on measurable improvements, clear reporting, and search practices that support sustainable visibility.' },
    ],
    color: { accent: '#06B6D4', light: 'rgba(6,182,212,0.08)', border: 'rgba(6,182,212,0.2)', glow: 'rgba(6,182,212,0.10)' },
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    id: 'maintenance',
    tag: 'Stay Current',
    title: 'Website Maintenance',
    headline: 'Ongoing Website Maintenance for Small Businesses',
    metaTitle: 'Affordable Website Maintenance for Small Businesses',
    metaDescription:
      'Affordable website maintenance for small businesses from $39/month. Get security updates, backups, performance monitoring, hosting, and SSL in one plan.',
    description: [
      'Affordable web maintenance should prevent problems, not just repair them after customers notice. Plugins go out of date, links break, and security vulnerabilities do not announce themselves.',
      'Every AffordaWeb plan includes ongoing website support. Business and Virtual Employee clients receive unlimited routine content updates; see pricing for the definition and scope.',
      'You run your business. We keep the site running.',
    ],
    paragraphs: [
      <>Affordable web maintenance should prevent problems, not just repair them after customers notice. Plugins go out of date, links break, and security vulnerabilities do not announce themselves.</>,
      <>Every AffordaWeb plan includes ongoing website support alongside <Link href="/services/hosting" className="font-medium text-primary-500 hover:underline">managed hosting and SSL</Link>. We handle regular updates, backups, uptime checks, and performance monitoring within your plan scope.</>,
      <>Business and Virtual Employee clients receive unlimited routine content updates. Review the current <Link href="/pricing" className="font-medium text-primary-500 hover:underline">website maintenance pricing and plan inclusions</Link> to choose the right level of support.</>,
      <>You run your business. We keep the site running. For a practical overview, read our <Link href="/blog/website-maintenance-requirements" className="font-medium text-primary-500 hover:underline">small business website maintenance guide</Link>.</>,
    ],
    features: [
      'Regular plugin and security updates',
      'Backups and performance monitoring',
      'Ongoing uptime and technical checks',
      'Unlimited routine content updates (Business and Virtual Employee)',
      'Response within 24 hours',
    ],
    faqs: [
      { question: 'What does website maintenance include?', answer: 'Maintenance includes technical updates, backups, uptime checks, security monitoring, and performance checks. Routine content-update allowances vary by plan.' },
      { question: 'How often should a business website be maintained?', answer: 'Technical monitoring should be ongoing, while software, content, forms, and links should be reviewed regularly. The right schedule depends on the platform and how frequently the business changes.' },
      { question: 'Are website content changes included?', answer: 'Yes, within plan scope. Starter includes one routine content update per month, while Business and Virtual Employee include unlimited routine content updates as defined in the current pricing terms.' },
    ],
    color: { accent: '#F59E0B', light: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.2)', glow: 'rgba(245,158,11,0.10)' },
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: 'hosting',
    tag: 'Included',
    title: 'Managed Web Hosting',
    headline: 'Managed Web Hosting Included with Every Website Plan',
    metaTitle: 'Managed Web Hosting for Small Businesses',
    metaDescription:
      'Affordable managed web hosting for small businesses with SSL certificate included. Bundled into every website design plan from $39/month. One provider, one monthly bill, no extra vendors.',
    description: [
      'Hosting should not be one more vendor to manage. Every AffordaWeb website plan bundles managed hosting with an SSL certificate, so your site and its technical support stay with one provider.',
      'You also get 1GB of professional email connected to your domain. One provider, one monthly bill, one contact for anything technical.',
      'Bundled because separating it out just adds friction.',
    ],
    paragraphs: [
      <>Hosting should not be one more vendor to manage. Every AffordaWeb website plan bundles managed hosting with a <a href="https://letsencrypt.org" target="_blank" rel="noopener noreferrer" className="font-medium text-primary-500 hover:underline">SSL certificate</a>, so your site and its technical support stay with one provider.</>,
      <>You also get 1GB of professional email connected to your domain. One provider, one monthly bill, and one contact for technical questions. We use performance checks such as <a href="https://pagespeed.web.dev" target="_blank" rel="noopener noreferrer" className="font-medium text-primary-500 hover:underline">Google PageSpeed Insights</a> to identify opportunities to improve the visitor experience.</>,
      <>Bundled because separating it out just adds friction.</>,
    ],
    features: [
      'Managed hosting for your AffordaWeb website',
      'SSL certificate included',
      'Automated uptime and technical monitoring',
      '1GB free professional email (1 user)',
    ],
    faqs: [
      { question: 'Is web hosting included with website design?', answer: 'Yes. Managed hosting and SSL are included in every AffordaWeb website plan, so you do not need to purchase a separate hosting account for the site we build.' },
      { question: 'Can you host a website built by another provider?', answer: 'Our hosting is designed for websites built and managed through an AffordaWeb plan. Contact us with your current platform and requirements so we can confirm whether migration is suitable.' },
      { question: 'Does hosting include business email?', answer: 'Current website plans include 1GB of professional email for one user. Review the pricing page or contact us if you need additional mailboxes or storage.' },
    ],
    color: { accent: '#10B981', light: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.2)', glow: 'rgba(16,185,129,0.10)' },
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
]
