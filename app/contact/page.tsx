import type { Metadata } from 'next'
import Link from 'next/link'
import InnerHeroBg from '@/components/InnerHeroBg'

export const metadata: Metadata = {
  title: 'Contact AffordaWeb Solutions | Get a Free Website Quote',
  description:
    'Contact AffordaWeb Solutions for a free, no-obligation website design quote. We respond within 24 hours. Email us at hello@affordawebsolutions.com.',
  alternates: { canonical: 'https://affordawebsolutions.com/contact' },
  openGraph: {
    title: 'Contact AffordaWeb Solutions | Get a Free Website Quote',
    description: 'Request a free quote for affordable website design. We respond within 24 hours.',
    url: 'https://affordawebsolutions.com/contact',
  },
}

const reasons = [
  { title: 'New Website Design', desc: 'Ready to launch your first professional website' },
  { title: 'Website Redesign',   desc: 'Time to modernize your existing site' },
  { title: 'SEO Help',           desc: 'Improve your Google rankings and visibility' },
  { title: 'Maintenance Plan',   desc: 'Ongoing care and updates for your website' },
  { title: 'E-Commerce Store',   desc: 'Start selling products or services online' },
  { title: 'General Questions',  desc: 'Not sure where to start? Just ask us' },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero — Dark navy */}
      <section
        className="relative overflow-hidden pt-[75px] pb-[75px] text-center"
        style={{ background: '#091829' }}
      >
        <InnerHeroBg />
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
          <div className="flex items-center justify-center gap-2 mt-6">
            <span className="text-amber-400 text-lg tracking-tight">★★★★★</span>
            <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Trusted by 50+ small businesses
            </span>
          </div>
        </div>
      </section>

      {/* Contact section — White */}
      <section className="section-pad bg-white" aria-labelledby="contact-heading">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <p className="section-label">Contact Info</p>
                <h2 id="contact-heading" className="text-2xl font-bold text-gray-900 mb-3">
                  We&apos;d Love to Hear From You
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Your inquiry will never go unanswered. We respond to every message within 24 hours — often much sooner. Real humans, no bots.
                </p>
              </div>

              {/* Email card */}
              <div className="card">
                <div className="icon-wrap mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
                <a
                  href="mailto:hello@affordawebsolutions.com"
                  className="text-primary-600 hover:text-primary-700 transition-colors font-medium text-sm"
                >
                  hello@affordawebsolutions.com
                </a>
                <p className="text-gray-400 text-xs mt-1">Response within 24 hours</p>
              </div>

              {/* Response promise */}
              <div
                className="rounded-2xl p-7 border"
                style={{
                  background: 'linear-gradient(145deg, #EBF5FF, #F7FBFF)',
                  borderColor: '#D6EBFF',
                  boxShadow: '0 2px 12px rgba(40,120,196,0.08)',
                }}
              >
                <svg className="w-10 h-10 text-primary-500 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="font-bold text-gray-900 mb-1">24-Hour Response</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  We promise to respond to every inquiry within one business day. Your project matters to us.
                </p>
              </div>

              {/* Reasons */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 text-xs uppercase tracking-widest">
                  Common Reasons to Contact Us
                </h3>
                <div className="space-y-1">
                  {reasons.map(({ title, desc }) => (
                    <div key={title} className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{title}</p>
                        <p className="text-xs text-gray-500">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <div className="card shadow-card-hover">
                <h2 className="text-xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                <p className="text-gray-500 text-sm mb-8">
                  Fill out the form below and we will get back to you with a personalized quote.
                </p>

                <form
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  className="space-y-5"
                  aria-label="Contact form"
                >
                  <input type="hidden" name="access_key" value="60088a8c-e8de-4ab9-beb2-179f54e5b2ef" />
                  <input type="hidden" name="subject" value="New Quote Request — AffordaWeb Solutions" />
                  <input type="hidden" name="from_name" value="AffordaWeb Solutions Website" />
                  <input type="hidden" name="to" value="hello@affordawebsolutions.com" />
                  <input type="hidden" name="cc" value="va.saifcastle@gmail.com" />
                  <input type="hidden" name="redirect" value="https://affordawebsolutions.com/contact?success=true" />
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                        Full Name <span className="text-pink-500">*</span>
                      </label>
                      <input
                        type="text" id="name" name="name" required
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                        Email Address <span className="text-pink-500">*</span>
                      </label>
                      <input
                        type="email" id="email" name="email" required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-sm font-semibold text-gray-900 mb-2">
                      Current Website <span className="text-gray-400 font-normal">(optional)</span>
                    </label>
                    <input
                      type="url" id="website" name="website"
                      placeholder="https://example.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-2">
                      Service Interested In <span className="text-pink-500">*</span>
                    </label>
                    <select
                      id="service" name="service" required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 transition-all"
                    >
                      <option value="">Select a service…</option>
                      <option value="website-design">New Website Design</option>
                      <option value="website-redesign">Website Redesign</option>
                      <option value="seo">SEO Optimization</option>
                      <option value="maintenance">Website Maintenance</option>
                      <option value="ecommerce">E-Commerce Store</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-semibold text-gray-900 mb-2">
                      Monthly Budget <span className="text-pink-500">*</span>
                    </label>
                    <select
                      id="budget" name="budget" required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 transition-all"
                    >
                      <option value="">Select budget range…</option>
                      <option value="basic">Basic — $69/month</option>
                      <option value="standard">Standard — $99/month</option>
                      <option value="premium">Premium — $149/month</option>
                      <option value="unsure">Not Sure Yet</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                      Tell Us About Your Project <span className="text-pink-500">*</span>
                    </label>
                    <textarea
                      id="message" name="message" required rows={5}
                      placeholder="Tell us about your business, what you're looking for, and any goals you have for your website…"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm placeholder:text-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 transition-all"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center py-4">
                    Send My Quote Request
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>

                  <p className="text-center text-xs text-gray-400 pt-2">
                    No spam. No commitment. By submitting you agree to our{' '}
                    <Link href="/privacy" className="text-primary-600 hover:underline">Privacy Policy</Link>.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans reminder — Light */}
      <section className="section-pad border-t border-gray-100" style={{ background: '#F7FBFF' }}>
        <div className="container-tight text-center">
          <p className="section-label">Not Ready to Reach Out Yet?</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Browse Our Plans and Pricing First
          </h2>
          <p className="text-gray-500 text-sm mb-8 max-w-lg mx-auto">
            Explore all plan features and pricing before you commit to anything. No pressure — we are here when you are ready.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing" className="btn-primary">View Pricing Plans</Link>
            <Link href="/services" className="btn-secondary">Explore Services</Link>
          </div>
        </div>
      </section>
    </>
  )
}
