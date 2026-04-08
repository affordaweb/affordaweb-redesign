import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Design Proposal for CreditSuite — AffordaWeb Solutions',
  description:
    'AffordaWeb Solutions proposes a $99/month all-in web design partnership for CreditSuite — Next.js + Tailwind, long-form landing pages, 90+ PageSpeed, and full analytics included.',
  robots: { index: false, follow: false },
}

export default function PitchCreditSuite() {
  const styles = `
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
      background: #ffffff;
      color: #1e293b;
      line-height: 1.7;
      font-size: 16px;
    }
    img { max-width: 100%; display: block; }
    a { color: inherit; text-decoration: none; }

    .container { max-width: 900px; margin: 0 auto; padding: 0 24px; }
    .container--wide { max-width: 1100px; margin: 0 auto; padding: 0 24px; }
    .text-center { text-align: center; }

    /* Top Bar */
    .topbar {
      background: #0f172a; color: #94a3b8; font-size: 13px;
      padding: 10px 24px; display: flex; align-items: center;
      justify-content: space-between; gap: 12px; flex-wrap: wrap;
    }
    .topbar a { color: #f1f5f9; }
    .topbar strong { color: #f8fafc; }
    .topbar-badge {
      background: #f59e0b; color: #1e293b; font-weight: 700;
      font-size: 11px; letter-spacing: .06em; text-transform: uppercase;
      padding: 3px 10px; border-radius: 4px;
    }

    /* Nav */
    .nav {
      position: sticky; top: 0; z-index: 100; background: #ffffff;
      border-bottom: 1px solid #e2e8f0; padding: 14px 24px;
      display: flex; align-items: center; justify-content: space-between; gap: 16px;
    }
    .nav-logo { font-weight: 800; font-size: 17px; color: #0f172a; letter-spacing: -.02em; }
    .nav-logo span { color: #2563eb; }
    .nav-cta {
      background: #2563eb; color: #fff; font-weight: 600; font-size: 13px;
      padding: 8px 18px; border-radius: 6px; white-space: nowrap; transition: background .15s;
    }
    .nav-cta:hover { background: #1d4ed8; }

    /* Hero */
    .hero {
      background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #0f172a 100%);
      color: #f1f5f9; padding: 80px 24px 72px; text-align: center;
    }
    .hero-label {
      display: inline-block; background: rgba(245,158,11,.15);
      border: 1px solid rgba(245,158,11,.4); color: #fbbf24;
      font-size: 12px; font-weight: 700; letter-spacing: .1em;
      text-transform: uppercase; padding: 5px 14px; border-radius: 100px; margin-bottom: 28px;
    }
    .hero h1 {
      font-size: clamp(2rem, 5vw, 3.2rem); font-weight: 800; line-height: 1.15;
      letter-spacing: -.03em; max-width: 800px; margin: 0 auto 20px;
    }
    .hero h1 em { font-style: normal; color: #fbbf24; }
    .hero-sub {
      font-size: clamp(1rem, 2.5vw, 1.2rem); color: #94a3b8;
      max-width: 620px; margin: 0 auto 36px;
    }
    .hero-cta-row { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
    .btn-primary {
      background: #f59e0b; color: #1e293b; font-weight: 700; font-size: 15px;
      padding: 14px 30px; border-radius: 8px; display: inline-block; transition: background .15s, transform .15s;
    }
    .btn-primary:hover { background: #d97706; transform: translateY(-1px); }
    .btn-ghost {
      border: 2px solid rgba(255,255,255,.25); color: #f1f5f9; font-weight: 600;
      font-size: 15px; padding: 12px 28px; border-radius: 8px; display: inline-block; transition: border-color .15s;
    }
    .btn-ghost:hover { border-color: rgba(255,255,255,.6); }
    .hero-trust {
      margin-top: 40px; display: flex; align-items: center;
      justify-content: center; gap: 24px; flex-wrap: wrap;
    }
    .hero-trust-item { display: flex; align-items: center; gap: 6px; font-size: 13px; color: #94a3b8; }
    .hero-trust-item .dot { width: 6px; height: 6px; background: #22c55e; border-radius: 50%; }

    /* Sections */
    .section { padding: 72px 24px; }
    .section--gray { background: #f8fafc; }
    .section-label {
      font-size: 11px; font-weight: 700; letter-spacing: .12em;
      text-transform: uppercase; color: #2563eb; margin-bottom: 10px;
    }
    .section-title {
      font-size: clamp(1.6rem, 3.5vw, 2.4rem); font-weight: 800;
      line-height: 1.2; letter-spacing: -.025em; margin-bottom: 16px;
    }
    .section-title em { font-style: normal; color: #f59e0b; }
    .section-intro { font-size: 1.05rem; color: #475569; max-width: 680px; margin-bottom: 48px; }

    /* Letter Banner */
    .letter-banner {
      background: #fffbeb; border: 1px solid #fde68a; border-left: 4px solid #f59e0b;
      border-radius: 8px; padding: 28px 32px; margin-bottom: 48px;
    }
    .letter-banner p { font-size: 1.05rem; color: #1e293b; margin-bottom: 12px; }
    .letter-banner p:last-child { margin-bottom: 0; }
    .letter-banner strong { color: #0f172a; }

    /* Problem Grid */
    .problem-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 16px; margin-top: 32px;
    }
    .problem-item {
      background: #fff; border: 1px solid #fee2e2; border-left: 4px solid #ef4444;
      border-radius: 8px; padding: 16px 20px; display: flex; align-items: flex-start; gap: 12px;
    }
    .problem-icon { font-size: 18px; flex-shrink: 0; margin-top: 2px; }
    .problem-item p { font-size: 14px; color: #475569; margin: 0; }
    .problem-item p strong { color: #1e293b; display: block; margin-bottom: 2px; font-size: 15px; }
    .arrow-divider { text-align: center; padding: 32px 0 0; font-size: 28px; color: #2563eb; }

    /* Solution Grid */
    .solution-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 20px; margin-top: 40px;
    }
    .solution-card {
      background: #fff; border: 1px solid #e2e8f0; border-radius: 12px;
      padding: 24px; transition: box-shadow .2s, transform .2s;
    }
    .solution-card:hover { box-shadow: 0 8px 30px rgba(0,0,0,.08); transform: translateY(-2px); }
    .solution-card .icon {
      width: 44px; height: 44px; background: linear-gradient(135deg, #2563eb15, #2563eb25);
      border-radius: 10px; display: flex; align-items: center; justify-content: center;
      font-size: 22px; margin-bottom: 14px;
    }
    .solution-card h3 { font-size: 16px; font-weight: 700; margin-bottom: 8px; color: #0f172a; }
    .solution-card p { font-size: 14px; color: #64748b; }

    /* Portfolio */
    .portfolio-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 28px; margin-top: 48px;
    }
    .portfolio-card {
      background: #fff; border: 1px solid #e2e8f0; border-radius: 14px;
      overflow: hidden; transition: box-shadow .2s, transform .2s;
    }
    .portfolio-card:hover { box-shadow: 0 12px 40px rgba(0,0,0,.1); transform: translateY(-3px); }
    .portfolio-mockup {
      height: 200px; display: flex; align-items: center; justify-content: center;
      font-size: 13px; font-weight: 600; letter-spacing: .05em;
      text-transform: uppercase; position: relative; overflow: hidden;
    }
    .mockup-1 { background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%); color: #93c5fd; }
    .mockup-2 { background: linear-gradient(135deg, #1e1e2e 0%, #312e81 100%); color: #c4b5fd; }
    .mockup-3 { background: linear-gradient(135deg, #0f2027 0%, #1a3a2a 100%); color: #86efac; }
    .mockup-inner {
      background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.1);
      border-radius: 8px; padding: 20px 28px; text-align: center;
    }
    .mockup-inner .domain { font-size: 15px; font-weight: 800; margin-bottom: 4px; }
    .mockup-inner .tagline { font-size: 11px; opacity: .7; font-weight: 400; text-transform: none; letter-spacing: 0; }
    .mockup-score {
      position: absolute; top: 12px; right: 12px; background: #22c55e; color: #fff;
      font-size: 11px; font-weight: 700; padding: 3px 8px; border-radius: 100px;
    }
    .portfolio-body { padding: 22px 24px 24px; }
    .portfolio-tag { font-size: 11px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: #2563eb; margin-bottom: 8px; }
    .portfolio-body h3 { font-size: 18px; font-weight: 700; color: #0f172a; margin-bottom: 8px; }
    .portfolio-body p { font-size: 14px; color: #475569; margin-bottom: 16px; line-height: 1.6; }
    .portfolio-meta { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px; }
    .tag { background: #f1f5f9; color: #475569; font-size: 12px; font-weight: 500; padding: 3px 10px; border-radius: 100px; }
    .portfolio-link { display: inline-flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 700; color: #2563eb; }
    .portfolio-link:hover { text-decoration: underline; }

    /* Deliverables */
    .deliverable-list { list-style: none; margin-top: 32px; display: grid; gap: 14px; }
    .deliverable-list li {
      display: flex; align-items: flex-start; gap: 14px; background: #fff;
      border: 1px solid #e2e8f0; border-radius: 10px; padding: 16px 20px;
    }
    .dl-check {
      width: 22px; height: 22px; background: #22c55e; border-radius: 50%;
      display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;
      color: #fff; font-size: 13px; font-weight: 800; line-height: 1;
    }
    .dl-title { font-weight: 700; font-size: 15px; color: #0f172a; display: block; margin-bottom: 2px; }
    .dl-desc { font-size: 13px; color: #64748b; }

    /* Long-form Showcase */
    .longform-showcase {
      background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 14px;
      padding: 32px; margin-top: 40px;
    }
    .longform-showcase h3 { font-size: 20px; font-weight: 700; color: #0f172a; margin-bottom: 8px; }
    .longform-showcase p { color: #475569; font-size: 14px; margin-bottom: 20px; }
    .longform-elements { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; }
    .lf-el {
      background: #fff; border: 1px solid #e2e8f0; border-radius: 8px;
      padding: 12px 16px; font-size: 13px; font-weight: 600; color: #0f172a;
      display: flex; align-items: center; gap: 8px;
    }
    .lf-el::before { content: '✓'; color: #2563eb; font-weight: 800; }

    /* Steps */
    .steps { margin-top: 48px; display: grid; gap: 0; }
    .step { display: flex; gap: 24px; padding-bottom: 36px; position: relative; }
    .step:not(:last-child)::after {
      content: ''; position: absolute; left: 19px; top: 44px;
      width: 2px; height: calc(100% - 44px); background: #e2e8f0;
    }
    .step-num {
      width: 40px; height: 40px; background: #2563eb; color: #fff;
      border-radius: 50%; display: flex; align-items: center; justify-content: center;
      font-weight: 800; font-size: 16px; flex-shrink: 0; position: relative; z-index: 1;
    }
    .step-body h3 { font-size: 17px; font-weight: 700; color: #0f172a; margin-bottom: 6px; padding-top: 8px; }
    .step-body p { font-size: 14px; color: #475569; }

    /* Offer Card */
    .offer-card {
      background: linear-gradient(135deg, #0f172a, #1e3a5f); border-radius: 20px;
      padding: 48px 40px; color: #f1f5f9; text-align: center;
      position: relative; overflow: hidden; max-width: 640px; margin: 48px auto 0;
    }
    .offer-card::before {
      content: ''; position: absolute; top: -60px; right: -60px;
      width: 200px; height: 200px;
      background: radial-gradient(circle, rgba(245,158,11,.25), transparent 70%);
    }
    .offer-badge {
      background: #f59e0b; color: #1e293b; font-size: 12px; font-weight: 800;
      letter-spacing: .08em; text-transform: uppercase; padding: 5px 14px;
      border-radius: 100px; display: inline-block; margin-bottom: 20px;
    }
    .offer-price { font-size: clamp(3rem, 8vw, 5rem); font-weight: 900; line-height: 1; color: #f59e0b; letter-spacing: -.04em; }
    .offer-price sup { font-size: .4em; vertical-align: super; letter-spacing: 0; }
    .offer-period { font-size: 15px; color: #94a3b8; margin-bottom: 28px; }
    .offer-includes {
      list-style: none; text-align: left; display: grid;
      grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 32px;
    }
    .offer-includes li { display: flex; align-items: center; gap: 8px; font-size: 14px; color: #cbd5e1; }
    .offer-includes li::before { content: '✓'; color: #22c55e; font-weight: 800; flex-shrink: 0; }
    .offer-cta {
      background: #f59e0b; color: #1e293b; font-weight: 800; font-size: 16px;
      padding: 16px 40px; border-radius: 10px; display: inline-block; transition: background .15s, transform .15s;
    }
    .offer-cta:hover { background: #d97706; transform: translateY(-2px); }
    .no-fee-row {
      display: flex; align-items: center; justify-content: center;
      gap: 20px; flex-wrap: wrap; margin-top: 20px;
    }
    .no-fee-item { font-size: 13px; color: #94a3b8; display: flex; align-items: center; gap: 5px; }
    .no-fee-item::before { content: '✦'; color: #f59e0b; font-size: 10px; }

    /* Compare Table */
    .compare-table { width: 100%; border-collapse: collapse; margin-top: 36px; font-size: 14px; }
    .compare-table th {
      background: #f1f5f9; padding: 12px 16px; text-align: left;
      font-size: 12px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase;
      color: #475569; border-bottom: 2px solid #e2e8f0;
    }
    .compare-table th:nth-child(2) { background: #0f172a; color: #93c5fd; text-align: center; }
    .compare-table th:nth-child(3) { background: #fef3c7; color: #92400e; text-align: center; }
    .compare-table td { padding: 13px 16px; border-bottom: 1px solid #f1f5f9; color: #475569; }
    .compare-table td:nth-child(2) { background: #f0f9ff; text-align: center; color: #0f172a; font-weight: 600; }
    .compare-table td:nth-child(3) { background: #fffbeb; text-align: center; color: #92400e; }
    .compare-table tr:last-child td { border-bottom: none; }
    .tyes { color: #22c55e; font-size: 18px; }
    .tno  { color: #ef4444; font-size: 18px; }

    /* Testimonial */
    .testimonial-strip {
      background: #f8fafc; border-top: 1px solid #e2e8f0;
      border-bottom: 1px solid #e2e8f0; padding: 40px 24px;
    }
    .testimonial-inner { max-width: 720px; margin: 0 auto; text-align: center; }
    .stars { color: #f59e0b; font-size: 20px; margin-bottom: 16px; letter-spacing: 2px; }
    .testimonial-inner blockquote { font-size: 1.1rem; font-style: italic; color: #334155; margin-bottom: 14px; }
    .testimonial-inner cite { font-size: 13px; color: #64748b; font-style: normal; }

    /* Final CTA */
    .final-cta {
      background: linear-gradient(135deg, #0f172a, #1e3a5f);
      color: #f1f5f9; padding: 80px 24px; text-align: center;
    }
    .final-cta h2 { font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 800; letter-spacing: -.025em; margin-bottom: 16px; }
    .final-cta h2 em { font-style: normal; color: #fbbf24; }
    .final-cta p { font-size: 1.05rem; color: #94a3b8; max-width: 560px; margin: 0 auto 36px; }
    .contact-details { margin-top: 28px; display: flex; flex-direction: column; align-items: center; gap: 10px; }
    .contact-details a { color: #93c5fd; font-size: 15px; }
    .contact-details a:hover { text-decoration: underline; }

    /* Footer */
    .pitch-footer {
      background: #020617; color: #475569; font-size: 13px; text-align: center; padding: 20px 24px;
    }
    .pitch-footer a { color: #64748b; }

    /* Print */
    @media print {
      .nav, .topbar { display: none; }
      .hero { padding: 40px 24px; }
      .section { padding: 36px 24px; }
      .portfolio-grid { grid-template-columns: 1fr 1fr; }
    }

    /* Responsive */
    @media (max-width: 600px) {
      .topbar { justify-content: center; }
      .hero { padding: 56px 20px 48px; }
      .problem-grid, .solution-grid, .portfolio-grid { grid-template-columns: 1fr; }
      .offer-card { padding: 36px 24px; }
      .offer-includes { grid-template-columns: 1fr; }
      .compare-table { display: block; overflow-x: auto; }
    }
  `

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      {/* TOP BAR */}
      <div className="topbar">
        <span><strong>AffordaWeb Solutions</strong> — Web Design Proposal</span>
        <span className="topbar-badge">Prepared for CreditSuite</span>
        <span><a href="mailto:hello@affordawebsolutions.com">hello@affordawebsolutions.com</a></span>
      </div>

      {/* STICKY NAV */}
      <nav className="nav">
        <div className="nav-logo">Afforda<span>Web</span></div>
        <a href="#contact" className="nav-cta">Start a Conversation →</a>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="container">
          <div className="hero-label">Web Design Proposal · Open Position Response</div>
          <h1>We Don&apos;t Just Design&nbsp;Pages.<br /><em>We Build Machines That&nbsp;Convert.</em></h1>
          <p className="hero-sub">
            AffordaWeb Solutions specializes in high-performance, pixel-perfect web design —
            including the long-form landing pages that move people like your Fundability® page does.
          </p>
          <div className="hero-cta-row">
            <a href="#portfolio" className="btn-primary">See Our Work ↓</a>
            <a href="#offer" className="btn-ghost">View the $99/mo Offer</a>
          </div>
          <div className="hero-trust">
            <div className="hero-trust-item"><span className="dot"></span> 100+ Sites Launched</div>
            <div className="hero-trust-item"><span className="dot"></span> 15 Years in Business</div>
            <div className="hero-trust-item"><span className="dot"></span> 90+ PageSpeed Scores</div>
            <div className="hero-trust-item"><span className="dot"></span> $0 Setup Fee</div>
          </div>
        </div>
      </header>

      {/* LETTER */}
      <section className="section">
        <div className="container">
          <div className="letter-banner">
            <p><strong>From the desk of Jonathan Macatangay — Founder, AffordaWeb Solutions</strong></p>
            <p>To the CreditSuite team,</p>
            <p>
              I saw your posting for a WordPress designer, and I want to be upfront with you:{' '}
              <strong>I&apos;m not going to pitch you WordPress.</strong>
            </p>
            <p>
              Because after 15 years of building websites, I know what your Fundability® page
              actually needs — blazing speed, flawless mobile rendering, zero plugin conflicts,
              and a design that loads before your visitor even finishes reading the headline.
              WordPress can&apos;t reliably give you that at scale.
            </p>
            <p>
              What I&apos;m proposing instead is a <strong>modern Next.js + Tailwind build</strong> — your
              existing design, recreated pixel-for-pixel, but on a stack that scores 90+ on
              PageSpeed, never breaks from a plugin update, and gives you everything you asked
              for and more — all at <strong>$99 a month, no setup fee</strong>.
            </p>
            <p style={{ marginBottom: 0 }}><strong>— Jonathan</strong></p>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="section section--gray">
        <div className="container">
          <div className="section-label">The Problem</div>
          <h2 className="section-title">What&apos;s Really Slowing Down Your&nbsp;<em>WordPress Site</em></h2>
          <p className="section-intro">
            You&apos;ve probably already felt these. They&apos;re the hidden costs of staying on WordPress —
            and they compound the longer you wait.
          </p>
          <div className="problem-grid">
            {[
              { icon: '🐢', title: 'Slow Page Speeds', body: 'WordPress with a full plugin stack rarely scores above 60 on PageSpeed — especially on mobile. Slow pages kill conversions on your Fundability-style landing pages.' },
              { icon: '🔌', title: 'Plugin Conflicts', body: 'Every update is a gamble. One plugin conflict can break your layout, crash your forms, or take down a page mid-campaign.' },
              { icon: '🛡️', title: 'Security Vulnerabilities', body: 'WordPress powers 43% of the web — and 90% of hacked CMS platforms. Ongoing patching is a full-time job in itself.' },
              { icon: '💸', title: 'Hidden Costs Stack Up', body: 'Premium themes, page builder licenses, caching plugins, security add-ons — before long you\'re paying $200+/mo just to maintain the stack.' },
              { icon: '📉', title: 'Core Web Vitals Suffer', body: 'LCP, CLS, INP — WordPress sites routinely fail all three. That directly hurts your Google rankings and paid traffic quality scores.' },
              { icon: '🔁', title: 'Long-Form Pages Are a Nightmare', body: 'Building pages like your Fundability® page in Elementor or Divi means hundreds of nested rows, inline styles, and slow render times.' },
            ].map((p) => (
              <div className="problem-item" key={p.title}>
                <div className="problem-icon">{p.icon}</div>
                <p><strong>{p.title}</strong>{p.body}</p>
              </div>
            ))}
          </div>
          <div className="arrow-divider">↓</div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="section">
        <div className="container">
          <div className="section-label">The Better Way</div>
          <h2 className="section-title">Next.js + Tailwind + AI — <em>Built for Teams Like Yours</em></h2>
          <p className="section-intro">
            This is the stack powering the fastest-growing SaaS companies, fintech brands, and
            conversion-heavy landing pages online. Now available to CreditSuite at $99/month.
          </p>
          <div className="solution-grid">
            {[
              { icon: '⚡', title: '90+ PageSpeed. Guaranteed.', body: 'Static rendering and edge delivery means your pages load in under 1 second — on mobile, every time.' },
              { icon: '🎨', title: 'Pixel-Perfect Design Fidelity', body: 'We replicate your existing CreditSuite styling exactly — fonts, colors, spacing, sections — nothing looks different to your visitors.' },
              { icon: '📄', title: 'Long-Form Pages, Done Right', body: 'Deep sales pages like Fundability® with hero copy, proof blocks, step-by-step flows, testimonial carousels, and pricing tables — built to convert.' },
              { icon: '🤖', title: 'AI-Assisted Development', body: 'We use AI tooling to build faster, catch issues earlier, and deliver new pages in days — not weeks.' },
              { icon: '🔒', title: 'Zero Plugin Attack Surface', body: 'No WordPress. No plugins. No patch cycles. The code we write is the code that runs — secure, lean, and fast.' },
              { icon: '📊', title: 'Full Analytics Stack Included', body: 'Google Search Console, Google Analytics 4, Tag Manager — all configured and verified at no extra charge.' },
            ].map((s) => (
              <div className="solution-card" key={s.title}>
                <div className="icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="section section--gray" id="portfolio">
        <div className="container--wide">
          <div className="container" style={{ padding: 0 }}>
            <div className="section-label">Our Work</div>
            <h2 className="section-title">Sites We&apos;ve Designed and&nbsp;<em>Launched</em></h2>
            <p className="section-intro">
              Three examples. Different industries, same standard — clean code, mobile-first layouts,
              and high PageSpeed scores built in from day one.
            </p>
          </div>
          <div className="portfolio-grid">
            {[
              {
                cls: 'mockup-1', score: 'PageSpeed 94', domain: 'WebVAExperts.com',
                tagline: 'Fix My Website — Fast. Affordable. Done Right.',
                tag: 'Web Design + Development', title: 'Web VA Experts',
                desc: 'A website maintenance and fix service needed a clean, high-trust platform that converted visitors into subscribers. We built a dark-themed, conversion-focused site with tiered pricing, trust signals, and a frictionless sign-up flow.',
                tags: ['Next.js', 'Tailwind CSS', 'Custom Design', 'Mobile-First'],
                url: 'https://webvaexperts.com',
              },
              {
                cls: 'mockup-2', score: 'PageSpeed 96', domain: 'AffordaWebSolutions.com',
                tagline: 'Affordable Website Design for Small Businesses',
                tag: 'Brand + Full Website', title: 'AffordaWeb Solutions',
                desc: 'Our own flagship site — designed to demonstrate what we deliver to clients. Full service pages, SEO audit tool, recommendation engine, and pricing — all built in Next.js with Tailwind CSS and a perfect Lighthouse score.',
                tags: ['Next.js', 'Tailwind CSS', 'SEO Tools', 'Full Funnel'],
                url: 'https://affordawebsolutions.com',
              },
              {
                cls: 'mockup-3', score: 'PageSpeed 91', domain: 'EmpowerQueerHub.com',
                tagline: 'LGBTQIA+ Support, Events & Inclusive Resources',
                tag: 'Community Platform', title: 'Empower Queer Hub',
                desc: 'A community resource platform serving multiple roles at once — podcast hub, event listings, resource directory, and advocacy content. We built a scalable, multi-section architecture that holds up under real community traffic.',
                tags: ['Next.js', 'Multi-section', 'Community', 'Accessibility'],
                url: 'https://empowerqueerhub.com',
              },
            ].map((c) => (
              <div className="portfolio-card" key={c.title}>
                <div className={`portfolio-mockup ${c.cls}`}>
                  <span className="mockup-score">{c.score}</span>
                  <div className="mockup-inner">
                    <div className="domain">{c.domain}</div>
                    <div className="tagline">{c.tagline}</div>
                  </div>
                </div>
                <div className="portfolio-body">
                  <div className="portfolio-tag">{c.tag}</div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                  <div className="portfolio-meta">
                    {c.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                  </div>
                  <a href={c.url} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                    View Live Site →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="section">
        <div className="container">
          <div className="section-label">Specifically For You</div>
          <h2 className="section-title">What We&apos;ll Do for <em>CreditSuite</em></h2>
          <p className="section-intro">
            Here&apos;s exactly what&apos;s on the table — day one, ongoing, and whenever you need it.
          </p>
          <ul className="deliverable-list">
            {[
              { title: 'Update Existing Pages to Match Your Current Styling', desc: 'New content, copy edits, section additions, layout adjustments — all keeping exact brand consistency across creditsuite.com.' },
              { title: 'Create New Pages From Scratch', desc: 'Product pages, campaign pages, resource pages — any new page you need, built in the exact style of your existing site, launch-ready fast.' },
              { title: 'Long-Form Landing Pages Like Fundability®', desc: 'We specialize in deep, persuasive long-form pages — hero copy, problem/solution narrative, testimonial sections, step-by-step flows, pricing, FAQs, and CTAs — everything that page structure requires.' },
              { title: 'Full Site Rebuild (If You Ever Want One)', desc: 'We can recreate creditsuite.com in Next.js + Tailwind — identical look and feel, dramatically better performance. Included in the $99/month plan with no extra rebuild fee.' },
              { title: 'Google Analytics 4 + Search Console + Tag Manager', desc: 'All three configured, verified, and connected — including conversion events, goal tracking, and Search Console property ownership confirmation.' },
              { title: 'PageSpeed & Core Web Vitals Optimization', desc: 'Every page we touch will score 90+ on Google PageSpeed Insights. LCP, CLS, and INP all optimized — which directly impacts your organic rankings and paid Quality Scores.' },
              { title: 'Ongoing Monthly Maintenance', desc: 'Updates, adjustments, new sections, content swaps — all covered. The more consistent the work, the more tasks we take on. This is designed to be a long-term relationship.' },
            ].map((d) => (
              <li key={d.title}>
                <div className="dl-check">✓</div>
                <div>
                  <span className="dl-title">{d.title}</span>
                  <span className="dl-desc">{d.desc}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="longform-showcase">
            <h3>Long-Form Page Capability — What We Build</h3>
            <p>Your Fundability® page is a textbook long-form sales page. We build every element of it from scratch, on demand:</p>
            <div className="longform-elements">
              {['Desk-of hero copy','Problem narrative','Agitation blocks','Solution reveal','Step-by-step flow','Video embed sections','Testimonial carousel','Feature comparison','Who it\'s for / not for','FAQ accordions','Pricing tables','Sticky CTA bar'].map((el) => (
                <div className="lf-el" key={el}>{el}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section section--gray">
        <div className="container">
          <div className="section-label">Our Process</div>
          <h2 className="section-title">How We Work — <em>From Day One</em></h2>
          <p className="section-intro">Simple, fast, and built around your workflow — not ours.</p>
          <div className="steps">
            {[
              { n: '1', title: 'You Share the Brief', body: 'Tell us what you need — a new page, an update, a full build. We take it from there. No lengthy discovery sessions, no back-and-forth questionnaires.' },
              { n: '2', title: 'We Design and Build', body: 'Standard pages are delivered within 48 hours. Long-form landing pages within 3–5 business days. We move fast because we use AI-assisted tooling alongside our design process.' },
              { n: '3', title: 'You Review and Approve', body: 'We deliver a live preview. You review, request any revisions — included at no charge — and we push it live once you say the word.' },
              { n: '4', title: 'Ongoing — Every Month', body: 'Whatever comes next — more pages, redesigns, A/B variants, analytics review — it\'s all covered under the same $99/month. Better work = more tasks assigned. That\'s the deal.' },
            ].map((s) => (
              <div className="step" key={s.n}>
                <div className="step-num">{s.n}</div>
                <div className="step-body">
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section className="section" id="offer">
        <div className="container">
          <div className="section-label">The Offer</div>
          <h2 className="section-title">Everything You Need. <em>One Flat Price.</em></h2>
          <p className="section-intro">
            No setup fee, no per-page billing, no retainer minimums, no hidden costs.
            Just one monthly rate that covers everything — for as long as you need us.
          </p>
          <div className="offer-card">
            <div className="offer-badge">All-In Plan · Long-Term Partnership</div>
            <div className="offer-price"><sup>$</sup>99</div>
            <div className="offer-period">per month &nbsp;·&nbsp; no setup fee &nbsp;·&nbsp; no contracts</div>
            <ul className="offer-includes">
              {['Page updates & new pages','Long-form landing pages','Full site recreate (anytime)','Unlimited design revisions','Google Analytics 4 setup','Google Search Console','Google Tag Manager','90+ PageSpeed guarantee','Core Web Vitals optimized','AI-assisted fast delivery','Next.js + Tailwind CSS','Monthly maintenance'].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a href="#contact" className="offer-cta">Let&apos;s Talk — It&apos;s Free to Start →</a>
            <div className="no-fee-row">
              {['No Setup Fee','No Contracts','Cancel Anytime','24hr Response'].map((item) => (
                <div className="no-fee-item" key={item}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="section section--gray">
        <div className="container">
          <div className="section-label">The Real Cost Breakdown</div>
          <h2 className="section-title">Why $99/Month Beats a <em>WordPress Hire</em></h2>
          <p className="section-intro">
            Run the numbers. A freelance WordPress designer costs you far more than the rate —
            and delivers far less than what we put on the table.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table className="compare-table">
              <thead>
                <tr>
                  <th>What You Get</th>
                  <th>AffordaWeb<br />$99/month</th>
                  <th>WP Freelancer<br />$25–50/hr</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Page updates & new pages', '✓ Unlimited', 'Per hour billed', false],
                  ['Long-form landing page builds', '✓ Included', '✗ $300–$1,500+ each', true],
                  ['Google Analytics + GSC + GTM setup', '✓ Included', '✗ Usually extra', true],
                  ['90+ PageSpeed scores', '✓ Guaranteed', '✗ Rarely achieved', true],
                  ['Core Web Vitals (LCP / CLS / INP)', '✓ Optimized', '✗ Rarely addressed', true],
                  ['Security — no plugin vulnerabilities', '✓ By design', '✗ Ongoing risk', true],
                  ['AI-assisted fast turnaround', '✓ 24–72 hrs', '1–2 weeks typical', false],
                  ['Full site rebuild option', '✓ Anytime', '✗ $5,000–$15,000+', true],
                  ['Predictable monthly cost', '✓ $99 flat', '✗ Variable', true],
                  ['Total monthly cost (estimated)', '$99 flat', '$500–$3,000+', false],
                ].map(([label, ours, theirs, noTheirs]) => (
                  <tr key={String(label)}>
                    <td>{label}</td>
                    <td style={{ color: label === 'Total monthly cost (estimated)' ? '#22c55e' : undefined, fontWeight: label === 'Total monthly cost (estimated)' ? 700 : undefined }}>{ours}</td>
                    <td style={{ color: label === 'Total monthly cost (estimated)' ? '#ef4444' : undefined, fontWeight: label === 'Total monthly cost (estimated)' ? 700 : undefined }}>{theirs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <div className="testimonial-strip">
        <div className="testimonial-inner">
          <div className="stars">★★★★★</div>
          <blockquote>
            &ldquo;AffordaWeb gave me a better-looking site for $99/month with ongoing support included.
            I was quoted $8,000 by another agency. I wish I had found them sooner.&rdquo;
          </blockquote>
          <cite>— Emily C., Online Store Owner &nbsp;|&nbsp; Verified Client</cite>
        </div>
      </div>

      {/* FINAL CTA */}
      <section className="final-cta" id="contact">
        <div className="container">
          <h2>Ready to See What We Can Do<br />for <em>CreditSuite?</em></h2>
          <p>
            Send me a message and I&apos;ll put together a sample page — built to your exact spec,
            in your site&apos;s style — at no charge. Zero obligation. Just proof.
          </p>
          <a
            href="mailto:hello@affordawebsolutions.com?subject=CreditSuite%20Web%20Design%20Inquiry"
            className="btn-primary"
            style={{ fontSize: 17, padding: '16px 36px' }}
          >
            Email Us Now — hello@affordawebsolutions.com →
          </a>
          <div className="contact-details">
            <a href="https://affordawebsolutions.com" target="_blank" rel="noopener noreferrer">affordawebsolutions.com</a>
            <a href="https://webvaexperts.com" target="_blank" rel="noopener noreferrer">webvaexperts.com</a>
            <a href="https://empowerqueerhub.com" target="_blank" rel="noopener noreferrer">empowerqueerhub.com</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pitch-footer">
        <div className="container">
          <p>
            © 2026 AffordaWeb Solutions · Prepared exclusively for CreditSuite ·{' '}
            <a href="https://affordawebsolutions.com">affordawebsolutions.com</a>
          </p>
        </div>
      </footer>
    </>
  )
}
