import type { Metadata } from "next"
import Link from "next/link"
import {
  Search,
  CheckCircle,
  BarChart3,
  FileText,
  Shield,
  ArrowRight,
  Star,
  Globe,
  ChevronDown,
} from "lucide-react"
import SeoForm from "@/components/SeoForm"

export const metadata: Metadata = {
  title: "Free SEO Audit Tool | Check Your Website Score",
  description:
    "Get a free instant SEO audit for your website. We check 20+ factors — meta tags, headings, page speed, SSL, Open Graph, and more. No signup required.",
  alternates: { canonical: "https://www.affordawebsolutions.com/seo-audit" },
  openGraph: {
    title: "Free SEO Audit Tool | Check Your Website Score in 30 Seconds",
    description:
      "Instant SEO analysis — 20+ checks across 5 categories. See your score, top issues, and quick wins for free.",
    url: "https://www.affordawebsolutions.com/seo-audit",
    images: [{ url: "https://www.affordawebsolutions.com/og-image.png", width: 1200, height: 630, alt: "Free SEO Audit Tool" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free SEO Audit Tool | Check Your Website Score in 30 Seconds",
    description: "Instant SEO analysis — 20+ checks. Free, no signup required.",
    images: ["https://www.affordawebsolutions.com/og-image.png"],
  },
}

// ── Hero ──────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative bg-gradient-hero overflow-hidden py-20 sm:py-28">
      {/* Background dots */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(86,54,209,0.25) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-primary-500/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-semibold text-primary-200 mb-8">
          <Search className="w-4 h-4 text-primary-300" />
          Free SEO Analysis Tool
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight mb-6">
          Get a Free{" "}
          <span className="bg-gradient-to-r from-primary-300 to-violet-300 bg-clip-text text-transparent">
            SEO Analysis
          </span>
          <br className="hidden sm:block" /> of Your Website
        </h1>

        <p className="text-lg sm:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
          We check 20+ SEO factors — meta tags, content structure, technical health,
          Open Graph, and more. Get your score in under 30 seconds.
        </p>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {[
            "Instant Preview",
            "No Credit Card",
            "Real-time Analysis",
            "100% Free",
          ].map((label) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-sm text-white/80"
            >
              <CheckCircle className="w-3.5 h-3.5 text-primary-300" />
              {label}
            </span>
          ))}
        </div>

        {/* Form */}
        <SeoForm />
      </div>
    </section>
  )
}

// ── How It Works ──────────────────────────────────────────────────────────────

const steps = [
  {
    icon: Globe,
    number: "1",
    title: "Submit Your Website",
    desc: "Enter your URL, name, and email. No signup or credit card needed for the free preview.",
    color: "bg-blue-50 text-blue-600",
    num: "bg-blue-500",
  },
  {
    icon: BarChart3,
    number: "2",
    title: "Instant SEO Preview",
    desc: "We analyze 20+ factors and show you your SEO score, top issues, and quick wins right away.",
    color: "bg-violet-50 text-violet-600",
    num: "bg-violet-500",
  },
  {
    icon: FileText,
    number: "3",
    title: "Unlock Full Report",
    desc: "Complete payment to receive a comprehensive audit with all checks, recommendations, and a step-by-step action plan.",
    color: "bg-emerald-50 text-emerald-600",
    num: "bg-emerald-500",
  },
]

function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900">How It Works</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Three steps. Thirty seconds. Zero guesswork.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {steps.map(({ icon: Icon, number, title, desc, color, num }) => (
            <div key={number} className="relative text-center group">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-5 transition-transform group-hover:-translate-y-1 ${color}`}>
                <Icon className="w-8 h-8 animate-float" style={{ animationDelay: `${parseInt(number) * 0.5}s` }} />
              </div>
              <div className={`absolute -top-2 left-1/2 -translate-x-[calc(50%+32px)] w-7 h-7 rounded-full ${num} text-white text-xs font-black flex items-center justify-center shadow-md`}>
                {number}
              </div>
              <h3 className="text-lg font-black text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── What We Check ─────────────────────────────────────────────────────────────

const checks = [
  { label: "Meta Title", desc: "Presence, length, keyword usage", color: "bg-blue-50 text-blue-600 border-blue-100" },
  { label: "Meta Description", desc: "Presence, length, compelling copy", color: "bg-violet-50 text-violet-600 border-violet-100" },
  { label: "Heading Structure", desc: "H1, H2, H3 hierarchy and usage", color: "bg-primary-50 text-primary-600 border-primary-100" },
  { label: "Image Alt Text", desc: "Alt attribute coverage for all images", color: "bg-emerald-50 text-emerald-600 border-emerald-100" },
  { label: "Canonical Tag", desc: "Prevents duplicate content penalties", color: "bg-teal-50 text-teal-600 border-teal-100" },
  { label: "HTTPS / SSL", desc: "Secure connection for trust and rankings", color: "bg-green-50 text-green-600 border-green-100" },
  { label: "Robots.txt", desc: "Crawl directive accessibility check", color: "bg-amber-50 text-amber-600 border-amber-100" },
  { label: "Sitemap.xml", desc: "Page discovery for search engines", color: "bg-orange-50 text-orange-600 border-orange-100" },
  { label: "Open Graph Tags", desc: "Facebook, LinkedIn social sharing", color: "bg-pink-50 text-pink-600 border-pink-100" },
  { label: "Twitter Cards", desc: "Twitter / X social sharing metadata", color: "bg-sky-50 text-sky-600 border-sky-100" },
  { label: "Internal Links", desc: "Site structure and crawlability", color: "bg-indigo-50 text-indigo-600 border-indigo-100" },
  { label: "External Links", desc: "Authority and credibility signals", color: "bg-purple-50 text-purple-600 border-purple-100" },
]

function WhatWeCheck() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900">What We Analyze</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            20+ checks across 5 categories. Every factor that affects your Google rankings.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {checks.map(({ label, desc, color }) => (
            <div
              key={label}
              className={`rounded-2xl border p-5 hover:shadow-card hover:-translate-y-0.5 transition-all duration-200 ${color}`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <Shield className="w-4 h-4 shrink-0 opacity-70" />
                <span className="font-bold text-sm">{label}</span>
              </div>
              <p className="text-xs opacity-70 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── FAQ ───────────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: "Is the SEO audit really free?",
    a: "Yes — the preview is completely free. You'll see your SEO score, top issues, and quick wins with no account or credit card required. The full detailed report (all checks, recommendations, and action plan) requires a one-time payment.",
    display: <>Yes — the preview is completely free. You&apos;ll see your SEO score, top issues, and quick wins with no account or credit card required. The <Link href="/pricing" className="font-medium" style={{ color: '#5636D1' }}>full detailed report</Link> (all checks, recommendations, and action plan) requires a one-time payment.</>,
  },
  {
    q: "What does the free preview include?",
    a: "The free preview shows your overall SEO score (out of 100), your top 5 issues, and 5 quick wins you can implement immediately. The full report unlocks all 20+ checks across 5 categories with detailed explanations.",
  },
  {
    q: "How does the full report get delivered?",
    a: "Once your payment is confirmed by our team, we send the full SEO report directly to the email address you provided. You'll also be able to view it online via a secure link.",
  },
  {
    q: "How long does the analysis take?",
    a: "The automated analysis completes in 15–30 seconds. We fetch your live website and run it through all 20+ checks in real time.",
  },
  {
    q: "Can I audit any website?",
    a: "You can audit any publicly accessible website. Sites behind login walls, local development servers, or private networks cannot be analyzed.",
  },
  {
    q: "What do I do after getting my report?",
    a: "The report provides a prioritized action plan. You can implement fixes yourself or contact AffordaWeb Solutions — we offer professional website design and SEO services starting at $69/month.",
    display: <>The report provides a prioritized action plan. You can implement fixes yourself or contact AffordaWeb Solutions — we offer <Link href="/services" className="font-medium" style={{ color: '#5636D1' }}>professional website design and SEO services</Link> starting at <Link href="/pricing" className="font-medium" style={{ color: '#10B981' }}>$69/month</Link>.</>,
  },
]

const faqColors = [
  { accent: '#5636D1', light: 'rgba(86,54,209,0.08)',  border: 'rgba(86,54,209,0.18)'  },
  { accent: '#E2498A', light: 'rgba(226,73,138,0.08)', border: 'rgba(226,73,138,0.18)' },
  { accent: '#06B6D4', light: 'rgba(6,182,212,0.08)',  border: 'rgba(6,182,212,0.18)'  },
  { accent: '#10B981', light: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.18)' },
  { accent: '#F59E0B', light: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.18)' },
  { accent: '#5636D1', light: 'rgba(86,54,209,0.08)',  border: 'rgba(86,54,209,0.18)'  },
]

function FAQ() {
  return (
    <section className="py-20 relative overflow-hidden" style={{ background: '#0F0F1A' }}>
      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-px pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, #5636D1 40%, transparent)' }} />
      {/* Ambient glow */}
      <div className="absolute pointer-events-none" style={{ width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(86,54,209,0.10), transparent 65%)', top: '50%', right: '-150px', transform: 'translateY(-50%)' }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <span
            className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5"
            style={{ background: 'rgba(86,54,209,0.12)', color: '#5636D1', border: '1px solid rgba(86,54,209,0.25)' }}
          >
            Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">Common Questions</h2>
          <p className="mt-3 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.45)' }}>Everything about the free SEO audit.</p>
        </div>

        <div className="space-y-3">
          {faqs.map(({ q, a, display }, idx) => {
            const c = faqColors[idx % faqColors.length]
            return (
              <details
                key={q}
                className="group overflow-hidden rounded-2xl"
                style={{ background: '#0F0F1A', border: `1px solid ${c.border}` }}
              >
                <summary className="relative flex items-center justify-between gap-4 cursor-pointer select-none p-6 font-semibold text-base list-none [&::-webkit-details-marker]:hidden" style={{ color: 'rgba(255,255,255,0.9)' }}>
                  <div className="flex items-center gap-3">
                    <span
                      className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ background: c.light, color: c.accent, border: `1px solid ${c.border}` }}
                    >
                      {idx + 1}
                    </span>
                    <span className="pr-2">{q}</span>
                  </div>
                  <svg
                    className="w-5 h-5 shrink-0 transition-transform duration-300 group-open:rotate-180"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    style={{ color: c.accent }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <div className="w-full h-px mb-4" style={{ background: 'rgba(255,255,255,0.07)' }} />
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{display ?? a}</p>
                </div>
              </details>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ── Conversion Strip ──────────────────────────────────────────────────────────

function ConversionStrip() {
  return (
    <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, rgba(86,54,209,0.3) 1.5px, transparent 1.5px)", backgroundSize: "28px 28px" }} />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        <h2 className="text-3xl sm:text-4xl font-black mb-4">
          Need a Better Website to Rank?
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          AffordaWeb Solutions builds fast, professional websites starting at{" "}
          <strong className="text-white">$69/month</strong> — fully managed with hosting,
          SSL, SEO, and unlimited updates included.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/pricing"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-primary text-white font-bold text-base shadow-btn hover:shadow-glow transition-all hover:scale-[1.02]"
          >
            View Pricing
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
          >
            Talk to Us
          </a>
        </div>
      </div>
    </section>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function SeoAuditPage() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <WhatWeCheck />
      <FAQ />
      <ConversionStrip />
    </main>
  )
}
