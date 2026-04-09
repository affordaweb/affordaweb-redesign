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
      background: #faf9f6;
      color: #1e293b;
      line-height: 1.7;
      font-size: 16px;
      overflow-x: hidden;
    }
    img { max-width: 100%; display: block; }
    a { color: inherit; text-decoration: none; }

    .wrap { max-width: 1100px; margin: 0 auto; padding: 0 28px; }

    /* TOP BAR */
    .topbar { background: #1e293b; border-bottom: 1px solid #334155; padding: 11px 0; }
    .topbar-inner {
      max-width: 1100px; margin: 0 auto; padding: 0 28px;
      display: flex; align-items: center; justify-content: space-between;
      gap: 12px; flex-wrap: wrap; font-size: 13px; color: #94a3b8;
    }
    .topbar-inner a { color: #cbd5e1; transition: color .15s; }
    .topbar-inner a:hover { color: #f1f5f9; }
    .topbar-inner strong { color: #f8fafc; }
    .topbar-badge {
      background: linear-gradient(90deg, #f59e0b, #f97316);
      color: #1e293b; font-weight: 700; font-size: 11px;
      letter-spacing: .07em; text-transform: uppercase;
      padding: 3px 12px; border-radius: 100px;
    }

    /* HERO — soft pastel animated */
    .hero {
      position: relative; min-height: 86vh;
      display: flex; align-items: center;
      overflow: hidden; padding: 100px 28px 80px; text-align: center;
      background: #ffffff;
    }
    .hero-bg { position: absolute; inset: 0; z-index: 0; background: #ffffff; }
    .hero-bg::before {
      content: ''; position: absolute; inset: 0;
      background:
        radial-gradient(ellipse 80% 60% at 20% 30%, rgba(186,230,253,.55) 0%, transparent 65%),
        radial-gradient(ellipse 60% 50% at 80% 70%, rgba(221,214,254,.5) 0%, transparent 60%),
        radial-gradient(ellipse 70% 40% at 50% 90%, rgba(254,240,138,.4) 0%, transparent 50%);
      animation: aurora 8s ease-in-out infinite alternate;
    }
    .hero-bg::after {
      content: ''; position: absolute; inset: 0;
      background:
        radial-gradient(ellipse 50% 40% at 75% 20%, rgba(167,243,208,.4) 0%, transparent 60%),
        radial-gradient(ellipse 40% 50% at 10% 80%, rgba(254,215,170,.35) 0%, transparent 55%);
      animation: aurora 10s ease-in-out infinite alternate-reverse;
    }
    @keyframes aurora {
      0%   { transform: scale(1) translate(0, 0); opacity: 1; }
      33%  { transform: scale(1.08) translate(-2%, 2%); opacity: .85; }
      66%  { transform: scale(.96) translate(3%, -1%); opacity: .95; }
      100% { transform: scale(1.04) translate(1%, 3%); opacity: .9; }
    }
    .orb { position: absolute; border-radius: 50%; filter: blur(70px); opacity: .35; z-index: 0; animation: float linear infinite; }
    .orb-1 { width:380px; height:380px; background:#bae6fd; top:-100px; left:-100px; animation-duration:18s; }
    .orb-2 { width:280px; height:280px; background:#ddd6fe; bottom:5%; right:5%; animation-duration:22s; animation-delay:-7s; }
    .orb-3 { width:200px; height:200px; background:#fde68a; top:40%; right:12%; animation-duration:26s; animation-delay:-13s; }
    @keyframes float {
      0%   { transform: translate(0,0) scale(1); }
      25%  { transform: translate(28px,-18px) scale(1.05); }
      50%  { transform: translate(-18px,28px) scale(.95); }
      75%  { transform: translate(18px,18px) scale(1.02); }
      100% { transform: translate(0,0) scale(1); }
    }
    .hero-grid {
      position: absolute; inset: 0; z-index: 0;
      background-image: linear-gradient(rgba(0,0,0,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.025) 1px, transparent 1px);
      background-size: 60px 60px;
    }
    .hero-content { position: relative; z-index: 1; width: 100%; max-width: 1100px; margin: 0 auto; }
    .hero-pill {
      display: inline-flex; align-items: center; gap: 8px;
      background: #eff6ff; border: 1px solid #bfdbfe;
      color: #2563eb; font-size: 12px; font-weight: 700;
      letter-spacing: .1em; text-transform: uppercase;
      padding: 6px 16px; border-radius: 100px; margin-bottom: 32px;
    }
    .hero-pill-dot { width: 6px; height: 6px; background: #22c55e; border-radius: 50%; box-shadow: 0 0 6px #86efac; animation: pulse-dot 2s ease-in-out infinite; }
    @keyframes pulse-dot { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.4); opacity: .7; } }
    .hero h1 { font-size: clamp(2.4rem, 5.5vw, 4rem); font-weight: 900; line-height: 1.1; letter-spacing: -.04em; color: #0f172a; margin-bottom: 24px; }
    .hero h1 em { font-style: normal; color: #d97706; }
    .hero-sub { font-size: clamp(1rem, 2vw, 1.2rem); color: #475569; max-width: 600px; margin: 0 auto 40px; }
    .hero-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
    .btn-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; animation: pulse-dot 2s ease-in-out infinite; background: rgba(255,255,255,.9); box-shadow: 0 0 6px rgba(255,255,255,.6); }
    .btn-outline .btn-dot { background: #22c55e; box-shadow: 0 0 6px #86efac; }
    .btn-gold { background: linear-gradient(135deg, #f59e0b, #f97316); color: #fff; font-weight: 800; font-size: 15px; padding: 14px 32px; border-radius: 10px; display: inline-flex; align-items: center; gap: 10px; transition: transform .2s, box-shadow .2s; box-shadow: 0 4px 20px rgba(245,158,11,.3); }
    .btn-gold:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(245,158,11,.45); }
    .btn-outline { border: 1.5px solid #cbd5e1; background: #ffffff; color: #1e293b; font-weight: 600; font-size: 15px; padding: 13px 30px; border-radius: 10px; display: inline-flex; align-items: center; gap: 10px; transition: border-color .2s, box-shadow .2s; }
    .btn-outline:hover { border-color: #94a3b8; box-shadow: 0 2px 12px rgba(0,0,0,.08); }
    .hero-stats { margin-top: 52px; display: flex; align-items: center; justify-content: center; gap: 0; flex-wrap: wrap; background: rgba(255,255,255,.7); border: 1px solid #e2e8f0; border-radius: 16px; padding: 20px 0; backdrop-filter: blur(8px); }
    .hero-stat { padding: 0 32px; border-right: 1px solid #e2e8f0; text-align: center; }
    .hero-stat:last-child { border-right: none; }
    .hero-stat-val { font-size: 1.8rem; font-weight: 900; color: #0f172a; letter-spacing: -.03em; line-height: 1.1; }
    .hero-stat-val span { color: #d97706; }
    .hero-stat-lbl { font-size: 12px; color: #64748b; margin-top: 2px; }

    /* SECTIONS */
    .sec { padding: 88px 28px; }
    .sec-white { background: #ffffff; }
    .sec-cream { background: #faf9f6; }
    .sec-pale { background: #f0f7ff; }
    .label { font-size: 11px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color: #2563eb; margin-bottom: 10px; }
    .h2 { font-size: clamp(1.8rem, 3.5vw, 2.6rem); font-weight: 800; line-height: 1.15; letter-spacing: -.025em; color: #0f172a; margin-bottom: 18px; }
    .h2 em { font-style: normal; color: #d97706; }
    .intro { font-size: 1.05rem; color: #64748b; max-width: 680px; margin-bottom: 52px; }

    /* LETTER */
    .letter-wrap { background: #fffdf5; border: 1px solid #fde68a; border-top: 3px solid #f59e0b; border-radius: 16px; padding: 44px 48px; position: relative; overflow: hidden; }
    .letter-wrap::before { content: '"'; position: absolute; top: -20px; left: 32px; font-size: 180px; font-weight: 900; color: rgba(245,158,11,.07); line-height: 1; pointer-events: none; }
    .letter-from { font-size: 11px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: #d97706; margin-bottom: 20px; }
    .letter-body p { font-size: 1.05rem; color: #475569; margin-bottom: 16px; line-height: 1.75; }
    .letter-body p:last-child { margin-bottom: 0; }
    .letter-body strong { color: #1e293b; }
    .letter-sig { margin-top: 28px; font-size: 1.05rem; color: #0f172a; font-weight: 700; }

    /* PROBLEM — equal-height cards */
    .problem-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px; align-items: stretch; }
    .problem-card { background: #fff5f5; border: 1px solid #fecaca; border-radius: 14px; padding: 24px 24px 24px 20px; display: flex; flex-direction: column; gap: 0; transition: border-color .2s, box-shadow .2s; position: relative; overflow: hidden; height: 100%; }
    .problem-card::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 3px; background: linear-gradient(180deg, #ef4444, #f97316); border-radius: 3px; }
    .problem-card:hover { border-color: #fca5a5; box-shadow: 0 4px 20px rgba(239,68,68,.1); }
    .problem-card-head { display: flex; gap: 14px; align-items: flex-start; margin-bottom: 10px; }
    .problem-icon { width: 44px; height: 44px; flex-shrink: 0; background: #fee2e2; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 20px; }
    .problem-card h3 { font-size: 15px; font-weight: 700; color: #991b1b; margin: 0; line-height: 1.3; padding-top: 10px; }
    .problem-card p { font-size: 13.5px; color: #64748b; line-height: 1.6; flex: 1; }
    .arrow-transition { text-align: center; padding: 36px 0 0; font-size: 13px; letter-spacing: .1em; text-transform: uppercase; color: #2563eb; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 12px; }
    .arrow-transition::before, .arrow-transition::after { content: ''; flex: 1; height: 1px; background: linear-gradient(90deg, transparent, #bfdbfe, transparent); }

    /* SOLUTION — equal-height cards */
    .solution-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; align-items: stretch; }
    .sol-card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 28px; display: flex; flex-direction: column; transition: border-color .25s, box-shadow .25s, transform .25s; position: relative; overflow: hidden; height: 100%; }
    .sol-card::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, #3b82f6, #8b5cf6); transform: scaleX(0); transform-origin: left; transition: transform .3s ease; border-radius: 0 0 2px 2px; }
    .sol-card:hover { border-color: #bfdbfe; box-shadow: 0 8px 30px rgba(59,130,246,.1); transform: translateY(-3px); }
    .sol-card:hover::after { transform: scaleX(1); }
    .sol-icon { width: 52px; height: 52px; border-radius: 14px; margin-bottom: 18px; display: flex; align-items: center; justify-content: center; font-size: 24px; background: linear-gradient(135deg, #eff6ff, #f5f3ff); border: 1px solid #e0e7ff; flex-shrink: 0; }
    .sol-card h3 { font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 8px; }
    .sol-card p { font-size: 14px; color: #64748b; flex: 1; }

    /* PORTFOLIO — equal-height cards */
    .portfolio-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(310px, 1fr)); gap: 24px; margin-top: 48px; align-items: stretch; }
    .port-card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 18px; overflow: hidden; transition: transform .3s, box-shadow .3s; display: flex; flex-direction: column; height: 100%; }
    .port-card:hover { transform: translateY(-6px); box-shadow: 0 20px 50px rgba(0,0,0,.1); }
    .port-thumb { height: 210px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    .port-thumb-bg-1 { background: linear-gradient(135deg, #1e3a5f 0%, #2563eb 50%, #1e40af 100%); }
    .port-thumb-bg-2 { background: linear-gradient(135deg, #2e1065 0%, #7c3aed 50%, #4c1d95 100%); }
    .port-thumb-bg-3 { background: linear-gradient(135deg, #052e16 0%, #16a34a 50%, #14532d 100%); }
    .port-thumb-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, transparent 50%, rgba(0,0,0,.2)); }
    .port-thumb-inner { position: relative; z-index: 1; text-align: center; padding: 24px; }
    .port-domain { font-size: 16px; font-weight: 800; color: #ffffff; margin-bottom: 5px; letter-spacing: -.01em; }
    .port-tagline { font-size: 12px; color: rgba(255,255,255,.65); }
    .port-score { position: absolute; top: 14px; right: 14px; background: #22c55e; color: #fff; font-size: 11px; font-weight: 800; padding: 4px 10px; border-radius: 100px; box-shadow: 0 2px 8px rgba(34,197,94,.4); }
    .port-window { position: absolute; top: 14px; left: 14px; display: flex; gap: 5px; }
    .port-dot { width: 10px; height: 10px; border-radius: 50%; }
    .port-dot:nth-child(1) { background: #ef4444; }
    .port-dot:nth-child(2) { background: #f59e0b; }
    .port-dot:nth-child(3) { background: #22c55e; }
    .port-body { padding: 24px 26px 28px; display: flex; flex-direction: column; flex: 1; }
    .port-cat { font-size: 11px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: #2563eb; margin-bottom: 8px; }
    .port-body h3 { font-size: 19px; font-weight: 800; color: #0f172a; margin-bottom: 10px; }
    .port-body p { font-size: 14px; color: #64748b; line-height: 1.65; margin-bottom: 18px; flex: 1; }
    .port-tags { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 18px; }
    .ptag { background: #f1f5f9; border: 1px solid #e2e8f0; color: #475569; font-size: 12px; font-weight: 500; padding: 3px 10px; border-radius: 100px; }
    .port-link { display: inline-flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 700; color: #2563eb; transition: gap .2s; margin-top: auto; }
    .port-link:hover { gap: 10px; text-decoration: underline; }

    /* DELIVERABLES — equal-height cards */
    .dl-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 40px; align-items: stretch; }
    .dl-item { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 22px 24px; display: flex; gap: 16px; align-items: flex-start; transition: border-color .2s, box-shadow .2s; height: 100%; }
    .dl-item:hover { border-color: #bbf7d0; box-shadow: 0 4px 16px rgba(34,197,94,.08); }
    .dl-num { width: 32px; height: 32px; flex-shrink: 0; background: linear-gradient(135deg, #22c55e, #16a34a); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 900; color: #fff; }
    .dl-item h3 { font-size: 14px; font-weight: 700; color: #1e293b; margin-bottom: 5px; }
    .dl-item p { font-size: 13px; color: #64748b; line-height: 1.55; }
    .lf-box { margin-top: 40px; background: #f0f7ff; border: 1px solid #bfdbfe; border-radius: 16px; padding: 36px; }
    .lf-box h3 { font-size: 20px; font-weight: 800; color: #1e293b; margin-bottom: 8px; }
    .lf-box p { font-size: 14px; color: #64748b; margin-bottom: 24px; }
    .lf-tags { display: grid; grid-template-columns: repeat(auto-fill, minmax(170px, 1fr)); gap: 10px; }
    .lf-tag { background: #ffffff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 10px 14px; font-size: 13px; font-weight: 600; color: #1e40af; display: flex; align-items: center; gap: 8px; }
    .lf-tag::before { content: '✓'; color: #2563eb; font-weight: 900; font-size: 12px; }

    /* PROCESS — equal-height cards */
    .process-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 48px; align-items: stretch; }
    .proc-card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 32px 24px; text-align: center; position: relative; transition: border-color .25s, box-shadow .25s; display: flex; flex-direction: column; height: 100%; }
    .proc-card:hover { border-color: #bfdbfe; box-shadow: 0 8px 24px rgba(59,130,246,.1); }
    .proc-card:not(:last-child)::after { content: '→'; position: absolute; right: -14px; top: 42px; color: #bfdbfe; font-size: 20px; z-index: 1; }
    .proc-num { width: 52px; height: 52px; margin: 0 auto 18px; background: linear-gradient(135deg, #eff6ff, #f5f3ff); border: 2px solid #bfdbfe; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: 900; color: #2563eb; flex-shrink: 0; }
    .proc-card h3 { font-size: 15px; font-weight: 700; color: #1e293b; margin-bottom: 10px; }
    .proc-card p { font-size: 13px; color: #64748b; line-height: 1.6; flex: 1; }

    /* OFFER */
    .offer-wrap { max-width: 760px; margin: 0 auto; }
    .offer-card { background: linear-gradient(135deg, #fffbf0 0%, #fff8e6 50%, #fffbf0 100%); border: 2px solid #fde68a; border-radius: 24px; padding: 56px 52px; text-align: center; position: relative; overflow: hidden; box-shadow: 0 8px 40px rgba(245,158,11,.12); }
    .offer-card::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(245,158,11,.08), transparent 60%); }
    .offer-inner { position: relative; z-index: 1; }
    .offer-label { display: inline-block; background: linear-gradient(90deg, #f59e0b, #f97316); color: #ffffff; font-weight: 800; font-size: 11px; letter-spacing: .1em; text-transform: uppercase; padding: 5px 16px; border-radius: 100px; margin-bottom: 24px; }
    .offer-price { font-size: clamp(4rem, 10vw, 6.5rem); font-weight: 900; line-height: 1; color: #d97706; letter-spacing: -.05em; margin-bottom: 6px; }
    .offer-price sup { font-size: .35em; vertical-align: super; }
    .offer-period { font-size: 16px; color: #64748b; margin-bottom: 36px; }
    .offer-list { list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; text-align: left; margin-bottom: 40px; }
    .offer-list li { display: flex; align-items: center; gap: 10px; font-size: 14px; color: #475569; }
    .offer-list li::before { content: '✓'; color: #16a34a; font-weight: 900; font-size: 13px; flex-shrink: 0; }
    .offer-btn { background: linear-gradient(135deg, #f59e0b, #f97316); color: #ffffff; font-weight: 900; font-size: 17px; padding: 18px 48px; border-radius: 12px; display: inline-flex; align-items: center; gap: 12px; transition: transform .2s, box-shadow .2s; box-shadow: 0 4px 20px rgba(245,158,11,.35); }
    .offer-btn:hover { transform: translateY(-3px); box-shadow: 0 10px 32px rgba(245,158,11,.5); }
    .offer-footer-bar { display: flex; align-items: center; justify-content: center; gap: 24px; flex-wrap: wrap; margin-top: 22px; }
    .offer-footer-item { font-size: 13px; color: #64748b; display: flex; align-items: center; gap: 6px; }
    .offer-footer-item::before { content: '✦'; color: #f59e0b; font-size: 9px; }

    /* COMPARISON */
    .compare-wrap { overflow-x: auto; border-radius: 14px; border: 1px solid #e2e8f0; overflow: hidden; }
    .compare-table { width: 100%; border-collapse: collapse; font-size: 14px; }
    .compare-table th { padding: 16px 20px; font-size: 12px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; }
    .compare-table th:first-child { background: #f8fafc; color: #475569; text-align: left; }
    .compare-table th:nth-child(2) { background: #1e3a5f; color: #93c5fd; text-align: center; border-left: 1px solid #e2e8f0; }
    .compare-table th:nth-child(3) { background: #f8fafc; color: #94a3b8; text-align: center; border-left: 1px solid #e2e8f0; }
    .compare-table tbody tr { border-top: 1px solid #f1f5f9; transition: background .15s; }
    .compare-table tbody tr:hover { background: #f8fafc; }
    .compare-table td { padding: 14px 20px; color: #64748b; }
    .compare-table td:first-child { color: #475569; font-weight: 500; }
    .compare-table td:nth-child(2) { background: #eff6ff; text-align: center; color: #1e3a5f; font-weight: 600; border-left: 1px solid #bfdbfe; }
    .compare-table td:nth-child(3) { text-align: center; border-left: 1px solid #f1f5f9; }

    /* TESTIMONIAL */
    .testimonial-sec { background: linear-gradient(135deg, #fff7ed, #fffbf0); padding: 80px 28px; border-top: 1px solid #fde68a; border-bottom: 1px solid #fde68a; }
    .testimonial-inner { max-width: 1100px; margin: 0 auto; text-align: center; }
    .quote-mark { font-size: 80px; line-height: 1; color: rgba(245,158,11,.25); font-weight: 900; margin-bottom: -20px; display: block; }
    .testimonial-text { font-size: clamp(1.2rem, 2.5vw, 1.55rem); font-weight: 600; color: #1e293b; line-height: 1.5; font-style: italic; max-width: 820px; margin: 0 auto 24px; }
    .stars { color: #f59e0b; font-size: 18px; letter-spacing: 3px; margin-bottom: 16px; display: block; }
    .testimonial-attr { font-size: 14px; color: #64748b; }

    /* FINAL CTA */
    .final-cta { padding: 100px 28px; text-align: center; position: relative; overflow: hidden; background: #1e293b; }
    .final-cta::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 60% 70% at 50% 100%, rgba(59,130,246,.2), transparent 65%), radial-gradient(ellipse 40% 50% at 20% 0%, rgba(245,158,11,.12), transparent 55%); }
    .final-cta-inner { position: relative; z-index: 1; }
    .final-cta h2 { font-size: clamp(2rem, 4.5vw, 3.2rem); font-weight: 900; line-height: 1.1; letter-spacing: -.03em; color: #f8fafc; margin-bottom: 20px; }
    .final-cta h2 em { font-style: normal; color: #fbbf24; }
    .final-cta p { font-size: 1.1rem; color: #94a3b8; max-width: 540px; margin: 0 auto 40px; }
    .final-links { display: flex; flex-direction: column; align-items: center; gap: 12px; margin-top: 32px; }
    .final-links a { color: #93c5fd; font-size: 15px; transition: color .15s; }
    .final-links a:hover { color: #bfdbfe; text-decoration: underline; }

    /* FOOTER */
    .pitch-footer { background: #0f172a; border-top: 1px solid #1e293b; padding: 20px 0; text-align: center; font-size: 13px; color: #475569; }
    .pitch-footer a { color: #64748b; }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .dl-grid { grid-template-columns: 1fr; }
      .process-grid { grid-template-columns: 1fr 1fr; }
      .proc-card::after { display: none; }
      .offer-list { grid-template-columns: 1fr; }
      .hero-stat { border-right: none; }
    }
    @media (max-width: 560px) {
      .hero { padding: 80px 20px 60px; min-height: unset; }
      .sec { padding: 64px 20px; }
      .wrap { padding: 0 16px; }
      .topbar-inner { padding: 0 16px; justify-content: center; }
      .letter-wrap { padding: 28px 20px; }
      .offer-card { padding: 36px 20px; }
      .process-grid { grid-template-columns: 1fr; }
      .portfolio-grid { grid-template-columns: 1fr; }
      .problem-grid { grid-template-columns: 1fr; }
      .solution-grid { grid-template-columns: 1fr; }
      .hero-stats { gap: 0; border-radius: 12px; }
      .hero-stat { flex: 0 0 48%; border-right: none; border-bottom: 1px solid #e2e8f0; padding: 12px 0; }
      .compare-table { font-size: 12px; }
      .compare-table th, .compare-table td { padding: 10px 12px; }
      .final-cta { padding: 64px 20px; }
      .btn-gold { text-align: center; }
      .lf-box { padding: 24px; }
    }
    @media print {
      .topbar { display: none; }
      .sec { padding: 40px 28px; }
    }
  `

  const problems = [
    { icon: '🐢', title: 'Slow Page Speeds', body: 'WordPress with a full plugin stack rarely scores above 60 on PageSpeed — especially on mobile. Slow pages kill conversions on your Fundability-style landing pages.' },
    { icon: '🔌', title: 'Plugin Conflicts', body: 'Every update is a gamble. One plugin conflict can break your layout, crash your forms, or take down a page mid-campaign.' },
    { icon: '🛡️', title: 'Security Vulnerabilities', body: 'WordPress powers 43% of the web — and 90% of hacked CMS sites. Ongoing patching is a full-time job in itself.' },
    { icon: '💸', title: 'Hidden Costs Stack Up', body: "Premium themes, builder licenses, caching plugins, security add-ons — before long you're paying $200+/month just to maintain the stack." },
    { icon: '📉', title: 'Core Web Vitals Suffer', body: 'LCP, CLS, INP — WordPress sites routinely fail all three. That directly hurts your Google rankings and paid traffic quality scores.' },
    { icon: '🔁', title: 'Long-Form Pages Are a Nightmare', body: 'Building a page like Fundability in Elementor or Divi means hundreds of nested rows, inline styles, and painful render times.' },
  ]

  const solutions = [
    { icon: '⚡', title: '90+ PageSpeed. Guaranteed.', body: 'Static rendering + edge delivery = pages load in under 1 second, on mobile, every time.' },
    { icon: '🎨', title: 'Pixel-Perfect Fidelity', body: 'We replicate your CreditSuite styling exactly — fonts, colors, spacing — nothing looks different to your visitors.' },
    { icon: '📄', title: 'Long-Form Pages, Done Right', body: 'Hero copy, proof blocks, step-by-step flows, testimonial carousels, pricing tables — built to convert at every scroll.' },
    { icon: '🤖', title: 'AI-Assisted Delivery', body: 'We use AI tooling to build faster, catch issues earlier, and deliver new pages in days — not weeks.' },
    { icon: '🔒', title: 'Zero Plugin Attack Surface', body: 'No WordPress. No plugins. No patch cycles. The code we write is the code that runs — secure, lean, and permanent.' },
    { icon: '📊', title: 'Full Analytics Stack Included', body: 'Google Analytics 4, Search Console, Tag Manager — all configured and verified, no extra charge.' },
  ]

  const deliverables = [
    { title: 'Update Existing Pages', desc: 'Content edits, section additions, layout adjustments — all keeping exact brand consistency across creditsuite.com.' },
    { title: 'Create New Pages From Scratch', desc: "Product, campaign, or resource pages — built in your site's exact style, launch-ready fast." },
    { title: 'Long-Form Landing Pages', desc: 'Hero copy, problem/solution flow, testimonials, steps, pricing, FAQs, CTAs — everything your Fundability page requires.' },
    { title: 'Full Site Rebuild (Anytime)', desc: 'Recreate creditsuite.com in Next.js + Tailwind — same look, dramatically better performance. No extra rebuild fee.' },
    { title: 'GA4 + Search Console + GTM', desc: 'All three configured and verified — conversion events, goal tracking, and property ownership included.' },
    { title: 'PageSpeed & Core Web Vitals', desc: '90+ score on every page we touch. LCP, CLS, and INP optimized — directly impacting organic rankings and paid Quality Scores.' },
    { title: 'Ongoing Monthly Maintenance', desc: 'Updates, new sections, content swaps — all covered. Better work = more tasks assigned. Long-term by design.' },
    { title: 'AI-Assisted Fast Turnaround', desc: '48hr standard pages. 3-5 day long-form builds. Modern tooling eliminates bottlenecks.' },
  ]

  const portfolio = [
    { bg: 'port-thumb-bg-1', domain: 'WebVAExperts.com', tagline: 'Fix My Website — Fast. Affordable. Done Right.', score: 'PageSpeed 94', cat: 'Web Design + Development', title: 'Web VA Experts', desc: 'A website maintenance and fix service needed a high-trust conversion platform. We built a dark-themed site with tiered pricing, trust signals, and a frictionless sign-up flow.', tags: ['Next.js', 'Tailwind CSS', 'Dark Theme', 'Mobile-First'], url: 'https://webvaexperts.com' },
    { bg: 'port-thumb-bg-2', domain: 'AffordaWebSolutions.com', tagline: 'Affordable Website Design for Small Businesses', score: 'PageSpeed 96', cat: 'Brand + Full Website', title: 'AffordaWeb Solutions', desc: 'Our own flagship site — SEO audit tool, recommendation engine, full service pages, and pricing. Built in Next.js with a perfect Lighthouse score.', tags: ['Next.js', 'Tailwind CSS', 'SEO Tools', 'Full Funnel'], url: 'https://affordawebsolutions.com' },
    { bg: 'port-thumb-bg-3', domain: 'EmpowerQueerHub.com', tagline: 'LGBTQIA+ Support, Events and Inclusive Resources', score: 'PageSpeed 91', cat: 'Community Platform', title: 'Empower Queer Hub', desc: 'A community resource platform — podcast hub, event listings, resource directory, and advocacy content. Built to scale under real traffic.', tags: ['Next.js', 'Multi-section', 'Community', 'Accessible'], url: 'https://empowerqueerhub.com' },
  ]

  const tableRows: [string, string, string][] = [
    ['Page updates & new pages', 'Unlimited', 'Billed per hour'],
    ['Long-form landing page builds', 'Included', '$300-$1,500+ each'],
    ['GA4 + Search Console + GTM', 'Included', 'Usually extra'],
    ['90+ PageSpeed scores', 'Guaranteed', 'Rarely achieved'],
    ['Core Web Vitals (LCP/CLS/INP)', 'Optimized', 'Rarely addressed'],
    ['Zero plugin security risk', 'By design', 'Ongoing exposure'],
    ['AI-assisted fast delivery', '24-72 hrs', '1-2 weeks typical'],
    ['Full site rebuild option', 'Anytime', '$5,000-$15,000+'],
    ['Predictable monthly cost', '$99 flat', 'Variable'],
    ['Total monthly cost', '$99', '$500-$3,000+'],
  ]

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <div className="topbar">
        <div className="topbar-inner">
          <span><strong>AffordaWeb Solutions</strong> — Web Design Proposal</span>
          <span className="topbar-badge">Prepared for CreditSuite</span>
          <a href="mailto:hello@affordawebsolutions.com">hello@affordawebsolutions.com</a>
        </div>
      </div>

      <header className="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="hero-content">
          <div className="hero-pill">
            <span className="hero-pill-dot" />
            Web Design Proposal &nbsp;·&nbsp; Open Position Response
          </div>
          <h1>We Don&apos;t Just Build Pages.<br /><em>We Build Machines That Convert.</em></h1>
          <p className="hero-sub">AffordaWeb Solutions delivers pixel-perfect, high-performance web design — including the long-form landing pages that move people the way your Fundability page does.</p>
          <div className="hero-btns">
            <a href="#portfolio" className="btn-gold"><span className="btn-dot" />See Our Work</a>
            <a href="#offer" className="btn-outline"><span className="btn-dot" />View the $99/mo Offer</a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat"><div className="hero-stat-val">100<span>+</span></div><div className="hero-stat-lbl">Sites Launched</div></div>
            <div className="hero-stat"><div className="hero-stat-val">15<span>yrs</span></div><div className="hero-stat-lbl">In Business</div></div>
            <div className="hero-stat"><div className="hero-stat-val">90<span>+</span></div><div className="hero-stat-lbl">PageSpeed Score</div></div>
            <div className="hero-stat"><div className="hero-stat-val">$0</div><div className="hero-stat-lbl">Setup Fee</div></div>
          </div>
        </div>
      </header>

      <section className="sec sec-cream">
        <div className="wrap">
          <div className="letter-wrap">
            <div className="letter-from">From the desk of Jonathan Macatangay — Founder, AffordaWeb Solutions</div>
            <div className="letter-body">
              <p>To the CreditSuite team,</p>
              <p>I saw your posting for a WordPress designer, and I want to be upfront with you: <strong>I&apos;m not going to pitch you WordPress.</strong></p>
              <p>Because after 15 years of building websites, I know what your Fundability page actually needs — blazing speed, flawless mobile rendering, zero plugin conflicts, and a design that loads before your visitor finishes reading the headline. WordPress can&apos;t reliably give you that at scale.</p>
              <p>What I&apos;m proposing is a <strong>modern Next.js + Tailwind build</strong> — your existing design, recreated pixel-for-pixel, on a stack that scores 90+ on PageSpeed, never breaks from a plugin update, and gives you everything you asked for and more — all at <strong>$99 a month, no setup fee, no contracts.</strong></p>
            </div>
            <div className="letter-sig">— Jonathan</div>
          </div>
        </div>
      </section>

      <section className="sec sec-white">
        <div className="wrap">
          <div className="label">The Problem</div>
          <h2 className="h2">What&apos;s Really Costing You on <em>WordPress</em></h2>
          <p className="intro">These are the compounding hidden costs every WordPress site eventually runs into — and the longer you wait, the worse they get.</p>
          <div className="problem-grid">
            {problems.map((p) => (
              <div className="problem-card" key={p.title}>
                <div className="problem-icon">{p.icon}</div>
                <div><h3>{p.title}</h3><p>{p.body}</p></div>
              </div>
            ))}
          </div>
          <div className="arrow-transition">The better alternative</div>
        </div>
      </section>

      <section className="sec sec-pale">
        <div className="wrap">
          <div className="label">The Better Way</div>
          <h2 className="h2">Next.js + Tailwind + AI — <em>Built for Teams Like Yours</em></h2>
          <p className="intro">The stack powering the fastest SaaS companies, fintech brands, and conversion-heavy landing pages online. Now available to CreditSuite at $99/month.</p>
          <div className="solution-grid">
            {solutions.map((s) => (
              <div className="sol-card" key={s.title}>
                <div className="sol-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-cream" id="portfolio">
        <div className="wrap">
          <div className="label">Our Work</div>
          <h2 className="h2">Sites We&apos;ve Designed and <em>Launched</em></h2>
          <p className="intro">Three examples. Different industries, same standard — clean code, mobile-first layouts, and high PageSpeed scores from day one.</p>
          <div className="portfolio-grid">
            {portfolio.map((c) => (
              <div className="port-card" key={c.title}>
                <div className={`port-thumb ${c.bg}`}>
                  <div className="port-thumb-overlay" />
                  <div className="port-window"><div className="port-dot" /><div className="port-dot" /><div className="port-dot" /></div>
                  <span className="port-score">{c.score}</span>
                  <div className="port-thumb-inner">
                    <div className="port-domain">{c.domain}</div>
                    <div className="port-tagline">{c.tagline}</div>
                  </div>
                </div>
                <div className="port-body">
                  <div className="port-cat">{c.cat}</div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                  <div className="port-tags">{c.tags.map((t) => <span className="ptag" key={t}>{t}</span>)}</div>
                  <a href={c.url} target="_blank" rel="noopener noreferrer" className="port-link">View Live Site</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-white">
        <div className="wrap">
          <div className="label">Specifically For You</div>
          <h2 className="h2">What We&apos;ll Do for <em>CreditSuite</em></h2>
          <p className="intro">Day one and ongoing — here&apos;s exactly what&apos;s on the table.</p>
          <div className="dl-grid">
            {deliverables.map((d, i) => (
              <div className="dl-item" key={d.title}>
                <div className="dl-num">{i + 1}</div>
                <div><h3>{d.title}</h3><p>{d.desc}</p></div>
              </div>
            ))}
          </div>
          <div className="lf-box">
            <h3>Long-Form Page Toolkit — We Build Every Element</h3>
            <p>Your Fundability page is a textbook long-form sales page. We build every component from scratch:</p>
            <div className="lf-tags">
              {['Desk-of hero copy','Problem narrative','Agitation blocks','Solution reveal','Step-by-step flow','Video embed sections','Testimonial carousel','Feature comparison','FAQ accordions','Pricing tables','Sticky CTA bar','Who it is for'].map((el) => (
                <div className="lf-tag" key={el}>{el}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec-pale">
        <div className="wrap">
          <div className="label">Our Process</div>
          <h2 className="h2">How We Work — <em>From Day One</em></h2>
          <p className="intro">Simple, fast, and built around your workflow — not ours.</p>
          <div className="process-grid">
            {[
              { n: '1', title: 'You Share the Brief', body: 'New page, update, or full build — tell us what you need. No discovery calls, no questionnaires.' },
              { n: '2', title: 'We Design and Build', body: 'Standard pages in 48 hours. Long-form builds in 3–5 days. AI-assisted tooling eliminates bottlenecks.' },
              { n: '3', title: 'You Review and Approve', body: 'Live preview delivered. Revisions included at no charge. We push live once you approve.' },
              { n: '4', title: 'Ongoing Every Month', body: 'More pages, redesigns, A/B tests — all covered at $99/month. Better work = more tasks assigned.' },
            ].map((s) => (
              <div className="proc-card" key={s.n}>
                <div className="proc-num">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-cream" id="offer">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <div className="label">The Offer</div>
          <h2 className="h2">Everything You Need. <em>One Flat Price.</em></h2>
          <p className="intro" style={{ margin: '0 auto 52px' }}>No setup fee, no per-page billing, no retainer minimums. One rate. Everything included.</p>
          <div className="offer-wrap">
            <div className="offer-card">
              <div className="offer-inner">
                <div className="offer-label">All-In Plan · Long-Term Partnership</div>
                <div className="offer-price"><sup>$</sup>99</div>
                <div className="offer-period">per month · no setup fee · no contracts</div>
                <ul className="offer-list">
                  {['Page updates and new pages','Long-form landing pages','Full site recreate anytime','Unlimited design revisions','Google Analytics 4 setup','Google Search Console','Google Tag Manager','90+ PageSpeed guarantee','Core Web Vitals optimized','AI-assisted fast delivery','Next.js and Tailwind CSS','Monthly maintenance'].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a href="#contact" className="offer-btn"><span className="btn-dot" />Let&apos;s Talk — It&apos;s Free to Start</a>
                <div className="offer-footer-bar">
                  {['No Setup Fee','No Contracts','Cancel Anytime','24hr Response'].map((item) => (
                    <div className="offer-footer-item" key={item}>{item}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec-white">
        <div className="wrap">
          <div className="label">The Real Cost Breakdown</div>
          <h2 className="h2">Why $99/Month Beats a <em>WordPress Hire</em></h2>
          <p className="intro">Run the numbers. A freelancer costs far more than their hourly rate — and delivers far less than what we put on the table.</p>
          <div className="compare-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th>What You Get</th>
                  <th>AffordaWeb $99/mo</th>
                  <th>WP Freelancer $25-50/hr</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map(([label, ours, theirs]) => (
                  <tr key={label}>
                    <td style={label === 'Total monthly cost' ? { color: '#94a3b8', fontWeight: 800 } : {}}>{label}</td>
                    <td style={label === 'Total monthly cost' ? { color: '#22c55e', fontWeight: 900, fontSize: '16px' } : {}}>{ours}</td>
                    <td style={label === 'Total monthly cost' ? { color: '#f87171', fontWeight: 900, fontSize: '16px' } : {}}>{theirs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="testimonial-sec">
        <div className="testimonial-inner">
          <span className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          <span className="quote-mark">&ldquo;</span>
          <p className="testimonial-text">AffordaWeb gave me a better-looking site for $99/month with ongoing support included. I was quoted $8,000 by another agency. I wish I had found them sooner.</p>
          <div className="testimonial-attr">— Emily C., Online Store Owner &nbsp;·&nbsp; Verified Client</div>
        </div>
      </div>

      <section className="final-cta" id="contact">
        <div className="final-cta-inner wrap">
          <h2>Ready to See What We Can Do<br />for <em>CreditSuite?</em></h2>
          <p>Send me a message and I&apos;ll build a sample page in your site&apos;s exact style — at no charge. Zero obligation. Just proof.</p>
          <a href="mailto:hello@affordawebsolutions.com?subject=CreditSuite%20Web%20Design%20Inquiry" className="btn-gold" style={{ fontSize: '17px', padding: '18px 44px' }}>
            <span className="btn-dot" />Email Us — hello@affordawebsolutions.com
          </a>
          <div className="final-links">
            <a href="https://affordawebsolutions.com" target="_blank" rel="noopener noreferrer">affordawebsolutions.com</a>
            <a href="https://webvaexperts.com" target="_blank" rel="noopener noreferrer">webvaexperts.com</a>
            <a href="https://empowerqueerhub.com" target="_blank" rel="noopener noreferrer">empowerqueerhub.com</a>
          </div>
        </div>
      </section>

      <footer className="pitch-footer">
        <div className="wrap">
          <p>© 2026 AffordaWeb Solutions · Prepared exclusively for CreditSuite · <a href="https://affordawebsolutions.com">affordawebsolutions.com</a></p>
        </div>
      </footer>
    </>
  )
}
