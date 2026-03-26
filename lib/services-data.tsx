import Link from 'next/link'

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
    metaTitle: 'Custom Website Design for Small Businesses | AffordaWeb Solutions',
    metaDescription:
      'Get a custom, responsive website designed for your small business starting at $69/month. SEO-optimized, fast loading, and built to convert visitors into customers.',
    description: [
      'Most web agencies charge thousands upfront before they know anything about your business. We built this differently. For $69 a month, you get a custom site that is responsive on every device, with clean SEO structure built in from the start.',
      'You share your goals, preferred style, and the features you need. We design and launch a professional website with your branding, your colors, and your voice. Clean code, fast loading, built to convert.',
      'Works for freelancers, local service providers, startups, and small businesses that have outgrown a free template.',
    ],
    paragraphs: [
      <>Most web agencies charge thousands upfront before they know anything about your business. We built this differently. For <Link href="/pricing" className="font-medium text-primary-500 hover:underline">$69 a month</Link>, you get a custom site that is responsive on every device, with clean SEO structure built in from the start.</>,
      <>You share your goals, preferred style, and the features you need. We design and launch a professional website with your branding, your colors, and your voice. Clean code, fast loading, built to convert.</>,
      <>Works for freelancers, local service providers, startups, and small businesses that have outgrown a free template.</>,
    ],
    features: [
      'Fully responsive design for all devices',
      'Custom layout, color palette, and branding',
      'SEO-optimized structure and clean code',
      'Fast loading speed and smooth navigation',
      'Built to convert visitors into customers',
      'SSL certificate included on every plan',
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
    headline: 'Transform Your Outdated Website',
    metaTitle: 'Website Redesign Services for Small Businesses | AffordaWeb Solutions',
    metaDescription:
      'Give your outdated website a complete visual and functional makeover. Preserve your existing content and SEO rankings while modernizing your online presence.',
    description: [
      'An outdated site costs you business. Not dramatically, just quietly. Visitors land, see something that looks like it was built years ago, and leave. A redesign fixes that without losing the content and rankings you have already built.',
      'We give your site a complete visual and functional makeover. Modern, mobile-friendly layout. Improved performance. Sharper conversion focus. Your existing content stays put.',
      'Right move if your site works but no longer represents what you actually offer.',
    ],
    features: [
      'Complete visual and functional makeover',
      'Preserves existing content and SEO',
      'Modern, mobile-friendly layouts',
      'Improved performance and conversion focus',
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
    headline: 'Rank Higher. Get Found. Grow Faster.',
    metaTitle: 'SEO Optimization Services for Small Businesses | AffordaWeb Solutions',
    metaDescription:
      'Improve your Google rankings with proven SEO strategies. Keyword research, clean site structure, Google Analytics integration, and long-term organic traffic growth.',
    description: [
      'Google does not reward the prettiest site. It rewards the most structured one. Every site we build starts with clean code, proper meta setup, and the structural decisions that search engines pay attention to.',
      'Standard and Premium plans include SEO as a standard feature, not an upsell. Proven keyword strategies, content structure, Google Analytics integration, and a long-term organic growth focus.',
      'If your site has been live for years but traffic has barely moved, this is the thing you have not tried yet.',
    ],
    paragraphs: [
      <>Google does not reward the prettiest site. It rewards the most structured one. Every site we build starts with clean code, proper meta setup, and the structural decisions that search engines pay attention to.</>,
      <><Link href="/pricing" className="font-medium text-primary-500 hover:underline">Standard and Premium plans</Link> include SEO as a standard feature, not an upsell. Proven keyword strategies, content structure, Google Analytics integration, and a long-term organic growth focus.</>,
      <>If your site has been live for years but traffic has barely moved, start with our <Link href="/seo-audit" className="font-medium text-primary-500 hover:underline">free SEO audit tool</Link> — it shows you exactly where you stand.</>,
    ],
    features: [
      'Higher rankings on major search engines',
      'Proven keyword and content strategies',
      'Long-term organic growth focus',
      'Clean site structure and meta optimization',
      'Google Analytics integration',
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
    headline: 'We Handle Everything. You Run Your Business.',
    metaTitle: 'Website Maintenance Services | AffordaWeb Solutions',
    metaDescription:
      'Keep your website secure, fast, and up to date. Regular security updates, backups, performance monitoring, and unlimited content changes — all included in your plan.',
    description: [
      'Plugins go out of date. Security vulnerabilities do not announce themselves. Most business owners learn something broke because a customer mentioned it.',
      'Every AffordaWeb plan includes maintenance. Regular plugin and security updates, backups, and performance monitoring. Standard and Premium clients get unlimited content updates, typically turned around within 24 hours.',
      'You run your business. We keep the site running.',
    ],
    features: [
      'Regular plugin and security updates',
      'Backups and performance monitoring',
      'Ongoing uptime and technical checks',
      'Unlimited content updates (Standard and Premium)',
      'Response within 24 hours',
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
    title: 'Shared Web Hosting',
    headline: 'Reliable Hosting Included with Every Plan',
    metaTitle: 'Web Hosting for Small Businesses | AffordaWeb Solutions',
    metaDescription:
      'High-performance web hosting with SSL certificate bundled into every AffordaWeb plan. One provider, one monthly bill, no extra vendors to manage.',
    description: [
      'Hosting should not be one more vendor to manage. Every AffordaWeb plan bundles it in. High-performance, reliable hosting with an SSL certificate included on every account.',
      'You also get 1GB of professional email connected to your domain. One provider, one monthly bill, one contact for anything technical.',
      'Bundled because separating it out just adds friction.',
    ],
    features: [
      'High-performance, reliable hosting',
      'SSL certificate included',
      '24/7 monitoring and guaranteed uptime',
      '1GB free professional email (1 user)',
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
