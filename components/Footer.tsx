import Link from 'next/link'
import Image from 'next/image'

const services = [
  { label: 'Website Design',    href: '/services#design' },
  { label: 'Website Redesign',  href: '/services#redesign' },
  { label: 'SEO Optimization',  href: '/services#seo' },
  { label: 'Website Maintenance', href: '/services#maintenance' },
  { label: 'Shared Hosting',    href: '/services#hosting' },
]

const company = [
  { label: 'Home',      href: '/' },
  { label: 'About',     href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog',      href: '/blog' },
  { label: 'Contact',   href: '/contact' },
]

const legal = [
  { label: 'Privacy Policy',    href: '/privacy' },
  { label: 'Terms of Service',  href: '/terms' },
]

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/5" aria-label="Site footer">
      {/* Pre-footer CTA */}
      <div className="bg-gradient-cta">
        <div className="container-tight py-16 text-center">
          <p className="section-label text-dark/60">Ready to Grow Online?</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
            Get Your Professional Website Today
          </h2>
          <p className="text-dark/70 text-lg mb-8 max-w-xl mx-auto">
            Starting at just <strong>$69/month</strong>. Hosting, SSL, maintenance, and unlimited updates — all included.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary border-dark text-dark hover:bg-dark hover:text-white">
              Get a Free Quote
            </Link>
            <Link href="/pricing" className="btn-outline-white border-dark/40 text-dark hover:bg-dark hover:text-white">
              View Pricing
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-tight py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.webp"
                alt="AffordaWeb Solutions"
                width={180}
                height={50}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Professional website design and hosting for small businesses — affordable, fast, and fully managed.
            </p>
            <a
              href="mailto:hello@affordawebsolutions.com"
              className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300
                         text-sm font-medium transition-colors"
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
            <h3 className="text-white font-semibold mb-5 text-sm tracking-widest uppercase">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/50 text-sm hover:text-primary-400 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm tracking-widest uppercase">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/50 text-sm hover:text-primary-400 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Plans */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm tracking-widest uppercase">
              Pricing Plans
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Basic — $69/mo',    href: '/pricing#basic' },
                { label: 'Standard — $99/mo', href: '/pricing#standard' },
                { label: 'Premium — $149/mo', href: '/pricing#premium' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/50 text-sm hover:text-primary-400 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold
                             text-primary-500 hover:text-primary-400 transition-colors"
                >
                  Get a Free Quote →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container-tight py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} AffordaWeb Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {legal.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-white/30 text-xs hover:text-white/60 transition-colors"
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
