import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import InnerHeroBg from '@/components/InnerHeroBg'

export const metadata: Metadata = {
  title: 'About AffordaWeb Solutions | Our Story & Mission',
  description:
    'Learn about AffordaWeb Solutions — a team dedicated to making professional website design accessible and affordable for every small business, startup, and entrepreneur.',
  alternates: { canonical: 'https://affordawebsolutions.com/about' },
  openGraph: {
    title: 'About AffordaWeb Solutions | Our Story & Mission',
    description: 'Professional website design made affordable for small businesses.',
    url: 'https://affordawebsolutions.com/about',
  },
}

const values = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Results-Driven',
    desc: 'We build websites with one goal in mind: helping your business grow. Every design decision is made with your customers and conversion rate in mind.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Transparent & Honest',
    desc: 'No confusing contracts, no hidden fees, no technical jargon. We communicate clearly and deliver exactly what we promise.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Client-First',
    desc: 'Your success is our success. We treat every client as a long-term partner, not just a transaction. We are invested in your growth.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: 'Quality-Driven',
    desc: 'We take pride in our craft. Every website is built with precision, clean code, and attention to detail — because the details are what set you apart.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Truly Affordable',
    desc: 'Professional website design should not be out of reach for small businesses. Our model is built to deliver premium quality at a price that makes sense.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: 'Always Evolving',
    desc: 'The web never stands still and neither do we. We stay current with the latest design trends, SEO updates, and performance best practices.',
  },
]

const targetAudiences = [
  { label: 'Startups',          desc: 'Get online fast with a professional site that impresses investors and customers alike.' },
  { label: 'Freelancers',       desc: 'Showcase your portfolio and attract better clients with a site that reflects your expertise.' },
  { label: 'Service Providers', desc: 'Plumbers, cleaners, consultants — if you serve customers, you need a website that brings them in.' },
  { label: 'Local Businesses',  desc: 'Rank in local search results and become the go-to business in your area.' },
  { label: 'Growing Brands',    desc: 'Level up your online presence as your business scales.' },
  { label: 'E-Commerce Sellers', desc: 'Open your online store and start selling with a site built for conversions.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero — Dark navy */}
      <section
        className="relative overflow-hidden pt-[200px] pb-[100px] text-center"
        style={{ background: '#091829' }}
      >
        <InnerHeroBg />
        <div className="container-tight relative z-10">
          <p className="section-label-white">Our Story</p>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
            style={{ letterSpacing: '-0.025em' }}
          >
            Built for Small Businesses, By People Who Get It
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: 'rgba(255,255,255,0.55)' }}>
            AffordaWeb Solutions was founded on a simple belief: every small business deserves a professional, high-performing website — regardless of budget. We make that possible.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { stat: '50+', label: 'Businesses Served' },
              { stat: '4.9★', label: 'Average Rating' },
              { stat: '10–15', label: 'Day Delivery' },
              { stat: '$69/mo', label: 'Starting Price' },
            ].map(({ stat, label }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 rounded-full px-5 py-2.5"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
              >
                <span className="font-bold text-white text-sm">{stat}</span>
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-pad bg-white" aria-labelledby="mission-heading">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label">Who We Are</p>
              <h2 id="mission-heading" className="section-title mb-6">
                Built for Small Businesses That Deserve More
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                AffordaWeb Solutions started because we kept seeing the same problem: small business owners were either paying thousands of dollars for a website they did not fully understand, settling for a cheap DIY site that did not represent their business well, or simply going without a website altogether.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                We built a better solution. Our model combines professional website design, reliable hosting, ongoing maintenance, and SEO optimization into a single, affordable monthly plan. One price. No surprises. Everything managed for you.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Our mission is simple: make it possible for any business — regardless of size or budget — to have a professional, fast, and effective website that drives real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services" className="btn-primary">Explore Our Services</Link>
                <Link href="/contact" className="btn-secondary">Get in Touch</Link>
              </div>
            </div>

            {/* Visual card */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden relative" style={{ aspectRatio: '4/3' }}>
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
                  alt="Small business team collaborating on website design"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(9,24,41,0.75) 0%, rgba(9,24,41,0.2) 50%, transparent 100%)' }} />
                <div className="absolute bottom-6 left-6 right-6">
                  <blockquote className="text-white text-base font-semibold leading-relaxed italic">
                    &ldquo;Every business deserves a professional website, no matter its size or budget.&rdquo;
                  </blockquote>
                  <p className="mt-2 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>— AffordaWeb Solutions</p>
                </div>
              </div>
              {/* Floating stats */}
              <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl p-5 shadow-card-hover">
                <div className="text-2xl font-bold gradient-text">100+</div>
                <div className="text-xs text-gray-500 font-medium">Sites Launched</div>
              </div>
              <div className="absolute -top-5 -left-5 bg-white rounded-2xl p-5 shadow-card-hover">
                <div className="text-2xl font-bold gradient-text">$69</div>
                <div className="text-xs text-gray-500 font-medium">Starting Monthly</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad" style={{ background: '#F7FBFF' }} aria-labelledby="values-heading">
        <div className="container-tight">
          <div className="text-center mb-14">
            <p className="section-label">Our Values</p>
            <h2 id="values-heading" className="text-3xl sm:text-4xl font-bold text-gray-900" style={{ letterSpacing: '-0.01em' }}>
              What We Stand For
            </h2>
            <div className="divider-glow" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-7 border border-gray-100 transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.05)' }}
              >
                <div className="icon-wrap mb-5">{icon}</div>
                <h3 className="text-gray-900 font-bold text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="section-pad bg-white" aria-labelledby="audience-heading">
        <div className="container-tight">
          <div className="text-center mb-14">
            <p className="section-label">Who We Serve</p>
            <h2 id="audience-heading" className="section-title">
              We Help All Types of Small Businesses
            </h2>
            <p className="section-subtitle mx-auto text-center">
              Whether you are just starting out or ready to take your online presence to the next level, our affordable website design services are built for you.
            </p>
            <div className="divider-glow" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetAudiences.map(({ label, desc }) => (
              <div key={label} className="card group">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {label}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
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
          <p className="section-label-white">Let&apos;s Work Together</p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
            style={{ letterSpacing: '-0.025em' }}
          >
            Your Website Journey Starts Here
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Tell us about your business and we will build you a website that works. No technical knowledge required — we handle everything from design to launch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-white px-9 py-4">Get a Free Quote</Link>
            <Link href="/pricing" className="btn-outline-white px-9 py-4">View Plans</Link>
          </div>
        </div>
      </section>
    </>
  )
}
