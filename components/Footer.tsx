import Link from 'next/link'
import Image from 'next/image'

const services = [
  { label: 'Website Design',     href: '/services#design' },
  { label: 'Website Redesign',   href: '/services#redesign' },
  { label: 'SEO Optimization',   href: '/services#seo' },
  { label: 'Website Maintenance', href: '/services#maintenance' },
  { label: 'Shared Hosting',     href: '/services#hosting' },
]

const company = [
  { label: 'Home',      href: '/' },
  { label: 'About',     href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog',      href: '/blog' },
  { label: 'Contact',   href: '/contact' },
]

const plans = [
  { label: 'Basic — $69/mo',    href: '/pricing#basic' },
  { label: 'Standard — $99/mo', href: '/pricing#standard' },
  { label: 'Premium — $149/mo', href: '/pricing#premium' },
]

const legal = [
  { label: 'Privacy Policy',   href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
]

export default function Footer() {
  return (
    <footer aria-label="Site footer">

      {/* Pre-footer CTA — blue gradient */}
      <div
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1A5C99 0%, #2878C4 60%, #1E66A8 100%)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1.5px, transparent 1.5px)',
            backgroundSize: '28px 28px',
            opacity: 0.07,
          }}
        />
        <div className="container-tight py-16 text-center relative z-10">
          <p className="section-label-white">Ready to Grow Online?</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
            Get Your Professional Website Today
          </h2>
          <p className="text-white/65 text-lg mb-8 max-w-xl mx-auto">
            Starting at just <strong className="text-white">$69/month</strong> — hosting, SSL, maintenance, and unlimited updates included.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-white">
              Get a Free Quote
            </Link>
            <Link href="/pricing" className="btn-outline-white">
              View Pricing
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer — dark navy */}
      <div style={{ background: '#091829' }} className="border-t border-white/5">
        <div className="container-tight py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block mb-5">
                <Image
                  src="/logo.webp"
                  alt="AffordaWeb Solutions"
                  width={180}
                  height={50}
                  className="h-10 w-auto object-contain brightness-0 invert"
                />
              </Link>
              <p className="text-white/40 text-sm leading-relaxed mb-5">
                Professional website design and hosting for small businesses — affordable, fast, and fully managed.
              </p>
              <div className="flex items-center gap-2 mb-5">
                <span className="text-amber-400 text-base tracking-tight">★★★★★</span>
                <span className="text-white/35 text-xs font-medium">Trusted by 50+ clients</span>
              </div>
              <a
                href="mailto:hello@affordawebsolutions.com"
                className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@affordawebsolutions.com
              </a>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white/30 font-semibold mb-5 text-xs tracking-[0.15em] uppercase">Services</h3>
              <ul className="space-y-3">
                {services.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className="text-white/50 text-sm hover:text-white transition-colors duration-200">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white/30 font-semibold mb-5 text-xs tracking-[0.15em] uppercase">Company</h3>
              <ul className="space-y-3">
                {company.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className="text-white/50 text-sm hover:text-white transition-colors duration-200">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Plans */}
            <div>
              <h3 className="text-white/30 font-semibold mb-5 text-xs tracking-[0.15em] uppercase">Pricing Plans</h3>
              <ul className="space-y-3">
                {plans.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className="text-white/50 text-sm hover:text-white transition-colors duration-200">
                      {label}
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    Get a Free Quote →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ background: '#050F1C' }} className="border-t border-white/5">
        <div className="container-tight py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} AffordaWeb Solutions. All rights reserved. · Built for Small Business
          </p>
          <div className="flex items-center gap-5">
            {legal.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-white/25 text-xs hover:text-white/50 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
