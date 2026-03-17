import Link from 'next/link'
import Image from 'next/image'

const quickLinks = [
  { label: 'Home',              href: '/' },
  { label: 'About Us',         href: '/about' },
  { label: 'Portfolio',        href: '/portfolio' },
  { label: 'Contact Us',       href: '/contact' },
  { label: 'Web Design Quote', href: '/contact' },
]

const services = [
  { label: 'Website Design Services',   href: '/services' },
  { label: 'Website Redesign Services', href: '/services' },
  { label: 'Website Maintenance',       href: '/services' },
  { label: 'SEO Optimization',         href: '/services' },
  { label: 'Shared Hosting Services',  href: '/services' },
]

const spotlight = [
  { label: "Website Design Essentials That Don't Inflate Your Budget", href: '/blog' },
  { label: 'Practical Website Design Ideas That Reduce Long-Term Costs', href: '/blog' },
  { label: 'Modern Website Design Features That Stay Affordable',       href: '/blog' },
  { label: 'Affordable Website Design Services',                        href: '/blog' },
  { label: 'Affordable Website Design',                                 href: '/blog' },
]

const legal = [
  { label: 'Privacy Policy',   href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
]

export default function Footer() {
  return (
    <footer aria-label="Site footer">

      {/* Pre-footer CTA — dark with gradient headline */}
      <div className="relative overflow-hidden" style={{ background: '#0F0F1A' }}>
        {/* Mesh grid */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(86,54,209,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(86,54,209,0.07) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        {/* Top gradient border */}
        <div className="absolute inset-x-0 top-0 h-px pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, #5636D1 30%, #E2498A 70%, transparent)' }} />
        {/* Purple glow left */}
        <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(86,54,209,0.18), transparent 65%)' }} />
        {/* Pink glow right */}
        <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(226,73,138,0.13), transparent 65%)' }} />

        <div className="container-tight py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="section-label-white mb-5">Get Started Today</p>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
              style={{ letterSpacing: '-0.03em', lineHeight: 1.05 }}
            >
              <span className="text-white">Your Professional Website,</span>
              <br />
              <span className="gradient-text">Fully Managed from Day One</span>
            </h2>
            <p className="text-white/50 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
              One flat monthly price covers everything. No surprises, no agency bills, no contracts.
            </p>

            {/* Feature grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-12 max-w-2xl mx-auto text-left">
              {[
                { icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 010 2H5a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 010 2H5a1 1 0 01-1-1zm8-4a1 1 0 011-1h2l2 2-2 2h-2a1 1 0 01-1-1v-2z', label: 'Custom Design', color: '#5636D1' },
                { icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z', label: 'SSL Included', color: '#06B6D4' },
                { icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15', label: 'Unlimited Updates', color: '#E2498A' },
                { icon: 'M13 10V3L4 14h7v7l9-11h-7z', label: 'Fast Hosting', color: '#F59E0B' },
                { icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', label: 'SEO Built In', color: '#10B981' },
                { icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', label: 'From $69/mo', color: '#8B5CF6' },
              ].map(({ icon, label, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-2xl px-4 py-3.5"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <span className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${color}22` }}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={icon} />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-white/70">{label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link href="/contact" className="btn-primary">Get a Free Quote</Link>
              <Link href="/pricing" className="btn-outline-white">View Pricing</Link>
            </div>
            <p className="text-white/25 text-sm">No commitment required. We respond within 24 hours.</p>
          </div>
        </div>
      </div>

      {/* Main footer — dark background */}
      <div style={{ background: '#0F0F1A' }} className="border-t border-white/5">
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
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                style={{ color: '#06B6D4' }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@affordawebsolutions.com
              </a>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white/30 font-semibold mb-5 text-xs tracking-[0.15em] uppercase">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="text-white/50 text-sm hover:text-white transition-colors duration-200">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white/30 font-semibold mb-5 text-xs tracking-[0.15em] uppercase">Services</h3>
              <ul className="space-y-3">
                {services.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="text-white/50 text-sm hover:text-white transition-colors duration-200">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Spotlight / Blog */}
            <div>
              <h3 className="text-white/30 font-semibold mb-5 text-xs tracking-[0.15em] uppercase">Spotlight</h3>
              <ul className="space-y-3">
                {spotlight.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="text-white/50 text-sm hover:text-white transition-colors duration-200 leading-snug block">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ background: '#07070F' }} className="border-t border-white/5">
        <div className="container-tight py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} AffordaWeb Solutions. All rights reserved.
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
