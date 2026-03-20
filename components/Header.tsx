'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/',          label: 'Home' },
  { href: '/services',  label: 'Services' },
  { href: '/pricing',   label: 'Pricing' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog',      label: 'Blog' },
  { href: '/about',     label: 'About' },
  { href: '/contact',   label: 'Contact' },
]

const freeTools = [
  {
    href: '/recommendation',
    label: 'Website Recommendation',
    desc: 'Free redesign plan in 30 seconds',
    emoji: '🎨',
    bg: 'bg-violet-100',
  },
  {
    href: '/seo-audit',
    label: 'SEO Audit',
    desc: 'Instant analysis, 20+ checks',
    emoji: '🔍',
    bg: 'bg-sky-100',
  },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [toolsOpen, setToolsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const toolsRef = useRef<HTMLDivElement>(null)

  const isToolsActive =
    pathname.startsWith('/recommendation') || pathname.startsWith('/seo-audit')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (toolsRef.current && !toolsRef.current.contains(e.target as Node)) {
        setToolsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
          scrolled
            ? 'shadow-[0_1px_20px_rgba(0,0,0,0.07)] border-b border-gray-100'
            : 'border-b border-gray-100'
        }`}
      >
        <div className="container-tight">
          <div className="flex items-center justify-between h-[76px]">

            {/* Logo */}
            <Link href="/" aria-label="AffordaWeb Solutions — Home" className="flex items-center shrink-0">
              <Image
                src="/logo.webp"
                alt="AffordaWeb Solutions"
                width={200}
                height={56}
                priority
                sizes="200px"
                className="h-11 w-auto object-contain"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5" role="navigation" aria-label="Main navigation">
              {navLinks.map(({ href, label }) => {
                const isActive = pathname === href
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`relative px-4 py-2.5 text-base font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'text-primary-600 font-semibold'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary-500 rounded-full" />
                    )}
                  </Link>
                )
              })}

              {/* Free Tools dropdown */}
              <div ref={toolsRef} className="relative">
                <button
                  onClick={() => setToolsOpen((o) => !o)}
                  className={`relative flex items-center gap-1.5 px-4 py-2.5 text-base font-medium rounded-lg transition-all duration-200 ${
                    isToolsActive || toolsOpen
                      ? 'text-primary-600 font-semibold'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  aria-expanded={toolsOpen}
                  aria-haspopup="true"
                >
                  <span className="flex items-center gap-1.5">
                    Free Tools
                    <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold tracking-wide">
                      FREE
                    </span>
                  </span>
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${toolsOpen ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                  {isToolsActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary-500 rounded-full" />
                  )}
                </button>

                {/* Dropdown panel */}
                {toolsOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-2xl shadow-card-hover border border-gray-100 overflow-hidden z-[60]">
                    <div className="p-2">
                      {freeTools.map(({ href, label, desc, emoji, bg }) => (
                        <Link
                          key={href}
                          href={href}
                          onClick={() => setToolsOpen(false)}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary-50 transition-colors group"
                        >
                          <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center shrink-0 text-xl`}>
                            {emoji}
                          </div>
                          <div className="min-w-0">
                            <div className="font-semibold text-sm text-gray-900 group-hover:text-primary-600 transition-colors">
                              {label}
                            </div>
                            <div className="text-xs text-gray-400 mt-0.5">{desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="px-4 py-3 bg-primary-50/60 border-t border-primary-100/60">
                      <p className="text-xs text-primary-600 font-medium text-center">
                        100% free — no credit card required
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/contact" className="btn-cyan text-base px-6 py-3">
                Get a Quote
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden w-11 h-11 flex flex-col items-center justify-center
                         gap-[5px] rounded-xl hover:bg-gray-50 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span className={`block w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
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
        className={`fixed inset-0 z-40 lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
        <div className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white flex flex-col transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between p-5 border-b border-gray-100">
            <Image src="/logo.webp" alt="AffordaWeb Solutions" width={175} height={50} sizes="175px" className="h-10 w-auto object-contain" />
            <button
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto p-5" aria-label="Mobile navigation">
            {/* Free Tools — shown first so they're always visible */}
            <div className="mb-4 pb-4 border-b border-gray-100">
              <p className="px-1 mb-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
                Free Tools
              </p>
              <div className="grid grid-cols-2 gap-2">
                {freeTools.map(({ href, label, desc, emoji, bg }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex flex-col items-start gap-1 px-3 py-3 rounded-xl text-sm transition-all min-h-[44px] ${
                      pathname === href
                        ? 'bg-primary-50 text-primary-600'
                        : 'bg-gray-50 hover:bg-primary-50 text-gray-700'
                    }`}
                  >
                    <span className={`w-8 h-8 rounded-xl ${bg} flex items-center justify-center text-lg`}>
                      {emoji}
                    </span>
                    <div>
                      <div className="font-semibold text-xs leading-tight">{label}</div>
                      <div className="text-[10px] text-gray-400 mt-0.5 leading-tight">{desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <ul className="space-y-1">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center px-4 py-3.5 rounded-xl text-sm font-medium transition-all min-h-[44px] ${
                      pathname === href
                        ? 'text-primary-600 bg-primary-50 font-semibold'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-5 border-t border-gray-100 space-y-3">
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="btn-cyan w-full justify-center">
              Get a Quote
            </Link>
            <p className="text-center text-xs text-gray-400">No commitment · Respond within 24 hrs</p>
          </div>
        </div>
      </div>
    </>
  )
}
