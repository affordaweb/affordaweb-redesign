'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { href: '/',          label: 'Home' },
  { href: '/services',  label: 'Services' },
  { href: '/pricing',   label: 'Pricing' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog',      label: 'Blog' },
  { href: '/about',     label: 'About' },
  { href: '/contact',   label: 'Contact' },
]

export default function Header() {
  const [menuOpen,   setMenuOpen]   = useState(false)
  const [scrolled,   setScrolled]   = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-dark/95 backdrop-blur-md shadow-glow border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="container-tight">
          <div className="flex items-center justify-between h-18 py-4">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group"
              aria-label="AffordaWeb Solutions — Home"
            >
              <span className="text-xl font-bold text-white">
                Afforda<span className="text-cyan-500">Web</span>
                <span className="text-white/70 font-normal"> Solutions</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav
              className="hidden lg:flex items-center gap-1"
              role="navigation"
              aria-label="Main navigation"
            >
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="px-4 py-2 text-sm font-medium text-white/80 rounded-full
                             hover:text-white hover:bg-white/10
                             transition-all duration-200"
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/contact" className="btn-primary text-sm px-5 py-2.5">
                Get a Free Quote
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center
                         gap-[5px] rounded-xl hover:bg-white/10 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span
                className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-dark/90 backdrop-blur-md"
          onClick={() => setMenuOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw]
                      bg-dark-100 border-l border-white/10
                      flex flex-col
                      transition-transform duration-300 ${
                        menuOpen ? 'translate-x-0' : 'translate-x-full'
                      }`}
        >
          {/* Close */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <span className="text-lg font-bold text-white">
              Afforda<span className="text-cyan-500">Web</span>
            </span>
            <button
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10
                         hover:bg-white/20 transition-colors text-white"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 overflow-y-auto p-6" aria-label="Mobile navigation">
            <ul className="space-y-1">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl
                               text-white/80 font-medium
                               hover:text-white hover:bg-white/10
                               transition-all duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile CTA */}
          <div className="p-6 border-t border-white/10 space-y-3">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="btn-primary w-full justify-center"
            >
              Get a Free Quote
            </Link>
            <p className="text-center text-xs text-white/40">
              No commitment · Respond within 24 hrs
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
