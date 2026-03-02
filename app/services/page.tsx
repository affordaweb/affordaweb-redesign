import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Web Design & SEO Services | AffordaWeb Solutions',
  description:
    'Explore our full range of affordable web design services: custom website design, redesigns, SEO optimization, maintenance, hosting, and e-commerce solutions for small businesses.',
  alternates: { canonical: 'https://affordawebsolutions.com/services' },
  openGraph: {
    title: 'Web Design & SEO Services | AffordaWeb Solutions',
    description: 'Professional website design, SEO, and maintenance services for small businesses starting at $69/month.',
    url: 'https://affordawebsolutions.com/services',
  },
}

function IconCheck() {
  return (
    <svg className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  )
}

const services = [
  {
    id: 'design',
    tag: 'Core Service',
    title: 'Website Design',
    headline: 'Custom Website Design for Small Businesses',
    description: `Your website is your most powerful sales tool — it works for you 24 hours a day, 7 days a week. At AffordaWeb Solutions, we design custom, mobile-first websites specifically built to convert visitors into customers.

Every website we build is unique to your brand. We do not use cheap templates or drag-and-drop builders. Our designs are hand-crafted with clean code, fast load times, and SEO best practices built in from day one.

Whether you are a freelancer, a local service provider, a startup, or an established small business, we create a website that reflects your professionalism and speaks directly to your target audience.`,
    features: [
      'Custom design tailored to your brand',
      'Mobile-first, fully responsive layout',
      'Fast load times optimized for PageSpeed 90+',
      'On-page SEO built into every page',
      'Contact forms and lead capture',
      'Google Analytics integration',
      'SSL certificate and security setup',
      'Delivered in 10–15 business days',
    ],
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
    description: `Is your current website looking dated, loading slowly, or failing to convert visitors? A website redesign from AffordaWeb Solutions can completely transform your online presence — without starting from scratch and losing your existing content or rankings.

We audit your current website, identify what is working and what is not, and redesign it with a modern look and improved user experience. The result is a faster, more attractive website that better represents your brand and ranks higher in search engines.

Our redesign service is ideal for businesses that have outgrown their current site or whose website no longer reflects the quality of their products or services.`,
    features: [
      'Full visual and layout redesign',
      'Content migration from your existing site',
      'Mobile and speed optimization',
      'Improved SEO structure',
      'Modern UI with professional aesthetics',
      'Improved conversion rate design',
      'New contact forms and CTAs',
      'Google Search Console reconnection',
    ],
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
    description: `Search engine optimization is how customers find your business when they search on Google. Without proper SEO, even the most beautiful website will not be seen by potential customers.

AffordaWeb Solutions includes foundational SEO on every Standard and Premium website we build. For businesses that want to go further, our dedicated SEO optimization service provides a comprehensive strategy to improve your search rankings and drive more qualified traffic to your website.

We focus on the SEO tactics that actually move the needle: keyword research, on-page optimization, technical SEO fixes, local SEO for brick-and-mortar businesses, and content strategy recommendations.`,
    features: [
      'Keyword research and targeting',
      'On-page SEO optimization',
      'Meta title and description writing',
      'Schema markup implementation',
      'Page speed optimization',
      'Image alt text and compression',
      'Internal linking strategy',
      'Google Search Console setup',
    ],
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
    description: `Websites require ongoing attention to stay secure, fast, and current. Outdated plugins, broken links, and security vulnerabilities can harm your search rankings and drive customers away — but most business owners do not have time to deal with technical website management.

AffordaWeb Solutions provides ongoing website maintenance as part of every plan, so you never have to worry about your website falling behind. We handle software updates, security monitoring, backups, and content changes on your behalf.

With our Standard and Premium plans, you get unlimited content updates — simply send us your changes via email and we will implement them, typically within 24–48 hours.`,
    features: [
      'Regular software and plugin updates',
      'Security monitoring and malware removal',
      'Daily automated backups',
      'Performance monitoring',
      'Uptime monitoring (99.9% guarantee)',
      'Content updates on request',
      'Broken link checking and repair',
      '24/7 support (Premium plan)',
    ],
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
    description: `We believe hosting should not be an extra cost you have to worry about. That is why every AffordaWeb Solutions plan includes managed web hosting, eliminating the hassle of dealing with separate hosting providers, control panels, and renewal fees.

Our shared hosting is reliable, fast, and secure. Each account includes an SSL certificate for HTTPS security, 1GB of business email storage, and enough resources to handle the traffic needs of most small and medium business websites.

By bundling hosting with your website design plan, you get a single point of contact for all your web needs — and a single monthly bill with no surprises.`,
    features: [
      'Managed shared hosting included',
      'Free SSL certificate (HTTPS)',
      '1GB business email (1 user)',
      '99.9% uptime SLA',
      'Daily backups',
      'Spam-protected email',
      'cPanel access available',
      'Easy plan upgrades',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
  {
    id: 'ecommerce',
    tag: 'Premium',
    title: 'E-Commerce Design',
    headline: 'Sell Online with a Store That Converts',
    description: `Ready to sell your products or services online? Our Premium plan includes a fully functional e-commerce website with up to 30 products, secure payment processing integration, and a shopping experience designed to maximize sales.

We set up your online store with product pages, a shopping cart, checkout flow, and payment gateway integration. Your store will be mobile-friendly, fast-loading, and optimized for search engines so customers can find your products on Google.

Whether you are selling physical products, digital downloads, or services, we build a store that makes buying easy for your customers and managing inventory easy for you.`,
    features: [
      'Up to 30 product listings',
      'Payment gateway integration (Stripe/PayPal)',
      'Shopping cart and checkout',
      'Product categories and filtering',
      'Order management system',
      'Mobile-optimized store',
      'Product SEO optimization',
      'SSL for secure transactions',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'AffordaWeb Solutions Services',
  itemListElement: services.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Service',
      name: s.title,
      description: s.description.split('\n')[0],
      provider: {
        '@type': 'Organization',
        name: 'AffordaWeb Solutions',
        url: 'https://affordawebsolutions.com',
      },
      url: `https://affordawebsolutions.com/services#${s.id}`,
    },
  })),
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-hero pt-32 pb-20 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[600px] h-[400px] bg-primary-500/20 rounded-full blur-[150px] pointer-events-none" />
        <div className="container-tight relative z-10">
          <p className="section-label text-cyan-400">What We Offer</p>
          <h1 className="section-title-white mb-6">
            Affordable Web Design Services<br className="hidden sm:block" /> for Small Businesses
          </h1>
          <p className="section-subtitle-white mx-auto text-center mb-8">
            From custom website design to SEO, hosting, and maintenance — we offer everything your business needs to succeed online, bundled into one simple monthly plan.
          </p>
          <Link href="/contact" className="btn-primary">
            Get a Free Quote
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Services detail */}
      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`section-pad ${i % 2 === 0 ? 'bg-white' : 'bg-surface'}`}
          aria-labelledby={`${service.id}-heading`}
        >
          <div className="container-tight">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
              i % 2 !== 0 ? 'lg:grid-flow-dense' : ''
            }`}>
              {/* Content */}
              <div className={i % 2 !== 0 ? 'lg:col-start-2' : ''}>
                <span className="badge bg-primary-50 text-primary-600 mb-4 text-xs">
                  {service.tag}
                </span>
                <h2 id={`${service.id}-heading`} className="text-3xl sm:text-4xl font-bold text-dark mb-4">
                  {service.headline}
                </h2>
                {service.description.split('\n\n').map((para, j) => (
                  <p key={j} className="text-gray-500 leading-relaxed mb-4">{para.trim()}</p>
                ))}
                <Link href="/contact" className="btn-primary mt-4 inline-flex">
                  Get Started
                </Link>
              </div>

              {/* Features */}
              <div className={`card ${i % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="icon-wrap mb-6">
                  {service.icon}
                </div>
                <h3 className="font-bold text-dark text-lg mb-5">{service.title} — What&apos;s Included</h3>
                <ul className="space-y-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                      <IconCheck />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <Link
                    href="/pricing"
                    className="text-sm font-semibold text-primary-500 hover:text-cyan-500 transition-colors"
                  >
                    View pricing for this service →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-pad bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                          w-[600px] h-[400px] bg-cyan-500/15 rounded-full blur-[150px]" />
        </div>
        <div className="container-tight relative z-10 text-center">
          <p className="section-label text-cyan-400">Ready to Get Started?</p>
          <h2 className="section-title-white mb-6">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="section-subtitle-white mx-auto text-center mb-10">
            Tell us about your project and receive a no-obligation quote within 24 hours. We serve small businesses nationwide with affordable, professional web design services.
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
