import type { Metadata } from 'next'
import Link from 'next/link'
import InnerHeroBg from '@/components/InnerHeroBg'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact AffordaWeb Solutions | Get a Free Website Quote',
  description:
    'Contact AffordaWeb Solutions for a free, no-obligation website design quote. We respond within 24 hours. Email us at hello@affordawebsolutions.com.',
  alternates: { canonical: 'https://affordawebsolutions.com/contact' },
  openGraph: {
    title: 'Contact AffordaWeb Solutions | Get a Free Website Quote',
    description: 'Request a free quote for affordable website design. We respond within 24 hours.',
    url: 'https://affordawebsolutions.com/contact',
    images: [{ url: 'https://affordawebsolutions.com/og-image.png', width: 1200, height: 630, alt: 'Contact AffordaWeb Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact AffordaWeb Solutions | Get a Free Website Quote',
    description: 'Request a free quote for affordable website design. We respond within 24 hours.',
    images: ['https://affordawebsolutions.com/og-image.png'],
  },
}

const reasons = [
  { title: 'New Website Design',  desc: 'Ready to launch your first professional website',       accent: '#5636D1', accentLight: 'rgba(86,54,209,0.10)',  accentBorder: 'rgba(86,54,209,0.22)'  },
  { title: 'Website Redesign',    desc: 'Time to modernize your existing site',                   accent: '#E2498A', accentLight: 'rgba(226,73,138,0.10)', accentBorder: 'rgba(226,73,138,0.22)' },
  { title: 'SEO Help',            desc: 'Improve your Google rankings and visibility',            accent: '#06B6D4', accentLight: 'rgba(6,182,212,0.10)',  accentBorder: 'rgba(6,182,212,0.22)'  },
  { title: 'Maintenance Plan',    desc: 'Ongoing care and updates for your website',              accent: '#F59E0B', accentLight: 'rgba(245,158,11,0.10)', accentBorder: 'rgba(245,158,11,0.22)' },
  { title: 'E-Commerce Store',    desc: 'Start selling products or services online',              accent: '#10B981', accentLight: 'rgba(16,185,129,0.10)', accentBorder: 'rgba(16,185,129,0.22)' },
  { title: 'General Questions',   desc: 'Not sure where to start? Just ask us',                  accent: '#5636D1', accentLight: 'rgba(86,54,209,0.10)',  accentBorder: 'rgba(86,54,209,0.22)'  },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://affordawebsolutions.com' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://affordawebsolutions.com/contact' },
  ],
}

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section
        className="relative overflow-hidden pt-[200px] pb-[100px] text-center"
        style={{ background: '#0F0F1A' }}
      >
        <InnerHeroBg page="contact" />
        <div className="container-tight relative z-10">
          <p className="section-label-white">Get in Touch</p>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
            style={{ letterSpacing: '-0.025em' }}
          >
            Let&apos;s Talk — We Respond Within 24 Hours
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Tell us about your project and receive a free, no-obligation quote. No commitment required — just ask.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 mb-10">
            <span className="text-amber-400 text-lg tracking-tight">★★★★★</span>
            <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Trusted by 50+ small businesses
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {['24-Hour Response', 'Free Quote', 'No Commitment', 'Real Humans', 'No Spam'].map(label => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-full px-4 py-2.5"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.14)' }}
              >
                <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#06B6D4' }} />
                <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.75)' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="section-pad relative overflow-hidden" style={{ background: '#0F0F1A' }} aria-labelledby="contact-heading">
        {/* Top accent line */}
        <div className="absolute inset-x-0 top-0 h-px pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, #5636D1 40%, transparent)' }} />
        {/* Ambient glows */}
        <div className="absolute pointer-events-none" style={{ width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(86,54,209,0.09), transparent 65%)', top: '20%', right: '-200px' }} />
        <div className="absolute pointer-events-none" style={{ width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.06), transparent 65%)', bottom: '10%', left: '-150px' }} />

        <div className="container-tight relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5"
                  style={{ background: 'rgba(86,54,209,0.12)', color: '#5636D1', border: '1px solid rgba(86,54,209,0.25)' }}
                >
                  Contact Info
                </span>
                <h2 id="contact-heading" className="text-2xl font-bold text-white mb-3" style={{ letterSpacing: '-0.01em' }}>
                  We&apos;d Love to Hear From You
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  Your inquiry will never go unanswered. We respond to every message within 24 hours — often much sooner. Real humans, no bots.
                </p>
              </div>

              {/* Email card */}
              <div
                className="relative overflow-hidden rounded-2xl p-6 transition-all duration-300"
                style={{
                  background: '#0F0F1A',
                  border: '1px solid rgba(86,54,209,0.22)',
                  boxShadow: '0 0 0 1px rgba(86,54,209,0.12)',
                }}
              >
                <div className="absolute inset-x-0 top-0 h-0.5 pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, #5636D1, transparent)' }} />
                <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(86,54,209,0.2), transparent 65%)' }} />
                <div
                  className="relative z-10 w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'rgba(86,54,209,0.12)', border: '1px solid rgba(86,54,209,0.22)', color: '#5636D1' }}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="relative z-10 font-bold text-white mb-1">Email Us</h3>
                <a
                  href="mailto:hello@affordawebsolutions.com"
                  className="relative z-10 font-medium text-sm transition-opacity hover:opacity-70"
                  style={{ color: '#5636D1' }}
                >
                  hello@affordawebsolutions.com
                </a>
                <p className="relative z-10 text-xs mt-1" style={{ color: 'rgba(255,255,255,0.35)' }}>Response within 24 hours</p>
              </div>

              {/* Response promise card */}
              <div
                className="relative overflow-hidden rounded-2xl p-6"
                style={{
                  background: '#0F0F1A',
                  border: '1px solid rgba(6,182,212,0.22)',
                  boxShadow: '0 0 0 1px rgba(6,182,212,0.12)',
                }}
              >
                <div className="absolute inset-x-0 top-0 h-0.5 pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, #06B6D4, transparent)' }} />
                <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.18), transparent 65%)' }} />
                <div
                  className="relative z-10 w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'rgba(6,182,212,0.10)', border: '1px solid rgba(6,182,212,0.22)', color: '#06B6D4' }}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="relative z-10 font-bold text-white mb-1">24-Hour Response</h3>
                <p className="relative z-10 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  We promise to respond to every inquiry within one business day. Your project matters to us.
                </p>
              </div>

              {/* Reasons grid */}
              <div>
                <h3 className="font-semibold mb-4 text-xs uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  Common Reasons to Contact Us
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {reasons.map(({ title, desc, accent, accentLight, accentBorder }) => (
                    <div
                      key={title}
                      className="relative overflow-hidden flex items-start gap-3 px-4 py-3 rounded-xl transition-all duration-200"
                      style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${accentBorder}` }}
                    >
                      <div
                        className="shrink-0 w-1.5 h-1.5 rounded-full mt-2"
                        style={{ background: accent }}
                      />
                      <div>
                        <p className="text-sm font-semibold" style={{ color: 'rgba(255,255,255,0.85)' }}>{title}</p>
                        <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>{desc}</p>
                      </div>
                      <span
                        className="ml-auto shrink-0 text-xs font-bold px-2 py-0.5 rounded-full self-center"
                        style={{ background: accentLight, color: accent }}
                      >
                        &rarr;
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <div
                className="relative overflow-hidden rounded-3xl p-8"
                style={{
                  background: '#0F0F1A',
                  border: '1px solid rgba(226,73,138,0.22)',
                  boxShadow: '0 0 0 1px rgba(226,73,138,0.12), 0 24px 80px rgba(0,0,0,0.20)',
                }}
              >
                {/* Top accent line */}
                <div className="absolute inset-x-0 top-0 h-0.5 pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, #E2498A, transparent)' }} />
                {/* Card glow */}
                <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(226,73,138,0.12), transparent 65%)' }} />

                <div className="relative z-10">
                  <h2 className="text-xl font-bold text-white mb-2">Send Us a Message</h2>
                  <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    Fill out the form below and we will get back to you with a personalized quote.
                  </p>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans reminder */}
      <section className="section-pad relative overflow-hidden" style={{ background: '#FAFBFF' }}>
        {/* Top accent line */}
        <div className="absolute inset-x-0 top-0 h-px pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, #06B6D4 40%, transparent)' }} />
        <div className="container-tight text-center relative z-10">
          <span
            className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5"
            style={{ background: 'rgba(6,182,212,0.08)', color: '#06B6D4', border: '1px solid rgba(6,182,212,0.2)' }}
          >
            Not Ready to Reach Out Yet?
          </span>
          <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ letterSpacing: '-0.01em' }}>
            Browse Our Plans and Pricing First
          </h2>
          <p className="text-gray-500 text-sm mb-8 max-w-lg mx-auto">
            Explore all plan features and pricing before you commit to anything. No pressure — we are here when you are ready.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 font-bold rounded-full px-8 py-4 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg text-white"
              style={{ background: 'linear-gradient(135deg, #06B6D4, #06B6D4cc)', boxShadow: '0 4px 20px rgba(6,182,212,0.3)' }}
            >
              View Pricing Plans
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/services" className="btn-secondary">Explore Services</Link>
          </div>
        </div>
      </section>
    </>
  )
}
