type Page = 'services' | 'pricing' | 'portfolio' | 'blog' | 'about' | 'contact'

interface Props {
  page?: Page
}

/* ── Services: browser window + floating code symbols ── */
function ServicesBg() {
  return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      {/* Large browser window — right side */}
      <g transform="translate(62%, 8%)" opacity="0.13">
        <rect x="0" y="0" width="420" height="280" rx="12" fill="none" stroke="#06B6D4" strokeWidth="1.5"/>
        <rect x="0" y="0" width="420" height="36" rx="12" fill="rgba(6,182,212,0.08)"/>
        <circle cx="18" cy="18" r="5" fill="rgba(226,73,138,0.5)"/>
        <circle cx="36" cy="18" r="5" fill="rgba(245,158,11,0.5)"/>
        <circle cx="54" cy="18" r="5" fill="rgba(34,197,94,0.5)"/>
        <rect x="80" y="10" width="220" height="16" rx="8" fill="rgba(255,255,255,0.06)"/>
        {/* Wireframe content lines */}
        <rect x="16" y="56" width="180" height="10" rx="3" fill="rgba(255,255,255,0.07)"/>
        <rect x="16" y="74" width="260" height="8" rx="3" fill="rgba(255,255,255,0.05)"/>
        <rect x="16" y="90" width="220" height="8" rx="3" fill="rgba(255,255,255,0.05)"/>
        <rect x="16" y="116" width="120" height="80" rx="8" fill="rgba(86,54,209,0.12)" stroke="rgba(86,54,209,0.2)" strokeWidth="1"/>
        <rect x="152" y="116" width="120" height="80" rx="8" fill="rgba(6,182,212,0.08)" stroke="rgba(6,182,212,0.18)" strokeWidth="1"/>
        <rect x="288" y="116" width="116" height="80" rx="8" fill="rgba(226,73,138,0.07)" stroke="rgba(226,73,138,0.18)" strokeWidth="1"/>
        <rect x="16" y="212" width="80" height="24" rx="12" fill="rgba(6,182,212,0.2)" stroke="rgba(6,182,212,0.3)" strokeWidth="1"/>
      </g>
      {/* Small browser — top left */}
      <g transform="translate(-4%, 5%)" opacity="0.08">
        <rect x="0" y="0" width="200" height="140" rx="8" fill="none" stroke="#5636D1" strokeWidth="1.5"/>
        <rect x="0" y="0" width="200" height="22" rx="8" fill="rgba(86,54,209,0.1)"/>
        <circle cx="10" cy="11" r="3.5" fill="rgba(226,73,138,0.4)"/>
        <circle cx="22" cy="11" r="3.5" fill="rgba(245,158,11,0.4)"/>
        <rect x="40" y="5" width="100" height="12" rx="6" fill="rgba(255,255,255,0.05)"/>
        <rect x="10" y="34" width="120" height="6" rx="2" fill="rgba(255,255,255,0.06)"/>
        <rect x="10" y="48" width="180" height="5" rx="2" fill="rgba(255,255,255,0.04)"/>
        <rect x="10" y="61" width="150" height="5" rx="2" fill="rgba(255,255,255,0.04)"/>
      </g>
      {/* Code bracket — top right corner */}
      <text x="90%" y="15%" fontSize="96" fontFamily="monospace" fill="rgba(86,54,209,0.10)" fontWeight="300" transform="rotate(-8, 0, 0)">&lt;/&gt;</text>
      {/* Curly brace — bottom left */}
      <text x="2%" y="88%" fontSize="120" fontFamily="monospace" fill="rgba(6,182,212,0.07)" fontWeight="300">&#123; &#125;</text>
      {/* Small floating code snippets */}
      <g transform="translate(78%, 72%)" opacity="0.09">
        <rect x="0" y="0" width="160" height="90" rx="8" fill="rgba(15,15,26,0.6)" stroke="rgba(86,54,209,0.3)" strokeWidth="1"/>
        <rect x="10" y="14" width="60" height="5" rx="2" fill="rgba(6,182,212,0.5)"/>
        <rect x="10" y="26" width="100" height="4" rx="2" fill="rgba(255,255,255,0.2)"/>
        <rect x="10" y="38" width="80" height="4" rx="2" fill="rgba(226,73,138,0.4)"/>
        <rect x="10" y="50" width="110" height="4" rx="2" fill="rgba(255,255,255,0.15)"/>
        <rect x="10" y="62" width="70" height="4" rx="2" fill="rgba(86,54,209,0.5)"/>
        <rect x="10" y="74" width="90" height="4" rx="2" fill="rgba(255,255,255,0.1)"/>
      </g>
    </svg>
  )
}

/* ── Pricing: stacked tier cards + floating price tags ── */
function PricingBg() {
  return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      {/* Three stacked pricing tier shapes — right */}
      <g transform="translate(63%, 10%)" opacity="0.11">
        {/* Basic */}
        <rect x="30" y="160" width="300" height="180" rx="16" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
        <rect x="30" y="160" width="300" height="48" rx="16" fill="rgba(255,255,255,0.04)"/>
        <rect x="50" y="178" width="80" height="10" rx="4" fill="rgba(255,255,255,0.12)"/>
        <rect x="50" y="222" width="180" height="6" rx="3" fill="rgba(255,255,255,0.07)"/>
        <rect x="50" y="236" width="160" height="6" rx="3" fill="rgba(255,255,255,0.07)"/>
        <rect x="50" y="250" width="170" height="6" rx="3" fill="rgba(255,255,255,0.07)"/>
        {/* Standard — featured */}
        <rect x="0" y="60" width="360" height="200" rx="16" fill="rgba(86,54,209,0.12)" stroke="rgba(86,54,209,0.4)" strokeWidth="1.5"/>
        <rect x="0" y="60" width="360" height="52" rx="16" fill="rgba(86,54,209,0.18)"/>
        <rect x="20" y="80" width="100" height="12" rx="4" fill="rgba(255,255,255,0.15)"/>
        <rect x="270" y="76" width="70" height="20" rx="10" fill="rgba(6,182,212,0.3)" stroke="rgba(6,182,212,0.5)" strokeWidth="1"/>
        <rect x="20" y="132" width="200" height="7" rx="3" fill="rgba(255,255,255,0.1)"/>
        <rect x="20" y="148" width="180" height="7" rx="3" fill="rgba(255,255,255,0.1)"/>
        <rect x="20" y="164" width="220" height="7" rx="3" fill="rgba(255,255,255,0.1)"/>
        <rect x="20" y="214" width="320" height="30" rx="15" fill="rgba(86,54,209,0.3)" stroke="rgba(86,54,209,0.5)" strokeWidth="1"/>
        {/* Premium */}
        <rect x="30" y="0" width="300" height="170" rx="16" fill="none" stroke="rgba(226,73,138,0.25)" strokeWidth="1.5"/>
        <rect x="30" y="0" width="300" height="46" rx="16" fill="rgba(226,73,138,0.06)"/>
        <rect x="50" y="16" width="90" height="10" rx="4" fill="rgba(226,73,138,0.2)"/>
        <rect x="50" y="60" width="180" height="6" rx="3" fill="rgba(255,255,255,0.06)"/>
        <rect x="50" y="74" width="160" height="6" rx="3" fill="rgba(255,255,255,0.06)"/>
      </g>
      {/* $ symbol — far left */}
      <text x="3%" y="70%" fontSize="180" fontFamily="system-ui" fill="rgba(6,182,212,0.05)" fontWeight="700">$</text>
      {/* Upward chart bars — bottom right corner */}
      <g transform="translate(85%, 65%)" opacity="0.09">
        <rect x="0"  y="100" width="24" height="60"  rx="4" fill="rgba(86,54,209,0.5)"/>
        <rect x="32" y="70"  width="24" height="90"  rx="4" fill="rgba(86,54,209,0.6)"/>
        <rect x="64" y="40"  width="24" height="120" rx="4" fill="rgba(6,182,212,0.7)"/>
        <rect x="96" y="15"  width="24" height="145" rx="4" fill="rgba(6,182,212,0.8)"/>
      </g>
      {/* Check mark badge — top left */}
      <g transform="translate(4%, 12%)" opacity="0.08">
        <circle cx="40" cy="40" r="38" fill="none" stroke="rgba(34,197,94,0.4)" strokeWidth="1.5"/>
        <path d="M22 40 L34 52 L58 28" fill="none" stroke="rgba(34,197,94,0.5)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </svg>
  )
}

/* ── Portfolio: browser frames + design grid ── */
function PortfolioBg() {
  return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      {/* Large monitor outline — center right */}
      <g transform="translate(52%, 4%)" opacity="0.22">
        <rect x="0" y="0" width="460" height="300" rx="12" fill="none" stroke="rgba(86,54,209,0.7)" strokeWidth="1.5"/>
        <rect x="0" y="0" width="460" height="34" rx="12" fill="rgba(86,54,209,0.14)"/>
        <circle cx="16" cy="17" r="5" fill="rgba(226,73,138,0.7)"/>
        <circle cx="32" cy="17" r="5" fill="rgba(245,158,11,0.6)"/>
        <circle cx="48" cy="17" r="5" fill="rgba(34,197,94,0.6)"/>
        {/* Grid of portfolio thumbnails */}
        <rect x="12" y="48" width="138" height="92" rx="6" fill="rgba(86,54,209,0.18)" stroke="rgba(86,54,209,0.35)" strokeWidth="1"/>
        <rect x="160" y="48" width="138" height="92" rx="6" fill="rgba(6,182,212,0.14)" stroke="rgba(6,182,212,0.3)" strokeWidth="1"/>
        <rect x="308" y="48" width="140" height="92" rx="6" fill="rgba(226,73,138,0.12)" stroke="rgba(226,73,138,0.28)" strokeWidth="1"/>
        <rect x="12" y="152" width="138" height="92" rx="6" fill="rgba(6,182,212,0.12)" stroke="rgba(6,182,212,0.26)" strokeWidth="1"/>
        <rect x="160" y="152" width="138" height="92" rx="6" fill="rgba(86,54,209,0.14)" stroke="rgba(86,54,209,0.3)" strokeWidth="1"/>
        <rect x="308" y="152" width="140" height="92" rx="6" fill="rgba(245,158,11,0.1)" stroke="rgba(245,158,11,0.25)" strokeWidth="1"/>
        {/* Wireframe content inside thumbnails */}
        <rect x="22" y="60" width="80" height="5" rx="2" fill="rgba(255,255,255,0.12)"/>
        <rect x="22" y="72" width="110" height="4" rx="2" fill="rgba(255,255,255,0.08)"/>
        <rect x="170" y="60" width="80" height="5" rx="2" fill="rgba(255,255,255,0.12)"/>
        <rect x="170" y="72" width="100" height="4" rx="2" fill="rgba(255,255,255,0.08)"/>
        {/* Stand */}
        <line x1="210" y1="300" x2="250" y2="340" stroke="rgba(86,54,209,0.45)" strokeWidth="1.5"/>
        <line x1="250" y1="300" x2="210" y2="340" stroke="rgba(86,54,209,0.45)" strokeWidth="1.5"/>
        <rect x="170" y="338" width="120" height="10" rx="5" fill="rgba(86,54,209,0.3)"/>
      </g>
      {/* Small browser — bottom left */}
      <g transform="translate(-1%, 58%)" opacity="0.18">
        <rect x="0" y="0" width="220" height="150" rx="10" fill="none" stroke="rgba(6,182,212,0.55)" strokeWidth="1.5"/>
        <rect x="0" y="0" width="220" height="28" rx="10" fill="rgba(6,182,212,0.1)"/>
        <circle cx="12" cy="14" r="4" fill="rgba(226,73,138,0.6)"/>
        <circle cx="24" cy="14" r="4" fill="rgba(245,158,11,0.55)"/>
        <circle cx="36" cy="14" r="4" fill="rgba(34,197,94,0.55)"/>
        <rect x="10" y="40" width="100" height="8" rx="3" fill="rgba(255,255,255,0.1)"/>
        <rect x="10" y="56" width="140" height="6" rx="2" fill="rgba(255,255,255,0.07)"/>
        <rect x="10" y="70" width="120" height="6" rx="2" fill="rgba(255,255,255,0.07)"/>
        <rect x="10" y="92" width="60" height="40" rx="4" fill="rgba(86,54,209,0.18)" stroke="rgba(86,54,209,0.32)" strokeWidth="1"/>
        <rect x="80" y="92" width="60" height="40" rx="4" fill="rgba(6,182,212,0.14)" stroke="rgba(6,182,212,0.28)" strokeWidth="1"/>
        <rect x="150" y="92" width="60" height="40" rx="4" fill="rgba(226,73,138,0.12)" stroke="rgba(226,73,138,0.24)" strokeWidth="1"/>
      </g>
      {/* Cursor/pointer icon — top left */}
      <g transform="translate(4%, 10%)" opacity="0.16">
        <path d="M10 10 L10 60 L24 46 L34 70 L42 67 L32 43 L50 43 Z" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" strokeLinejoin="round"/>
      </g>
      {/* Pen nib — right edge */}
      <g transform="translate(91%, 52%)" opacity="0.15">
        <path d="M0 80 L60 0 L80 20 L20 100 Z" fill="rgba(226,73,138,0.12)" stroke="rgba(226,73,138,0.55)" strokeWidth="1.5"/>
        <path d="M0 80 L20 100 L0 110 Z" fill="rgba(226,73,138,0.3)"/>
        <line x1="20" y1="80" x2="60" y2="20" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
      </g>
    </svg>
  )
}

/* ── Blog: document lines + large quote marks ── */
function BlogBg() {
  return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      {/* Large quotation marks */}
      <text x="3%" y="52%" fontSize="220" fontFamily="Georgia, serif" fill="rgba(86,54,209,0.07)" fontWeight="700">&ldquo;</text>
      <text x="78%" y="92%" fontSize="220" fontFamily="Georgia, serif" fill="rgba(6,182,212,0.05)" fontWeight="700">&rdquo;</text>
      {/* Document / article card — right */}
      <g transform="translate(62%, 8%)" opacity="0.11">
        <rect x="0" y="0" width="340" height="440" rx="14" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5"/>
        {/* Folded corner */}
        <path d="M298 0 L340 42 L298 42 Z" fill="rgba(86,54,209,0.15)" stroke="rgba(86,54,209,0.2)" strokeWidth="1"/>
        {/* "Image" placeholder */}
        <rect x="16" y="16" width="268" height="140" rx="8" fill="rgba(86,54,209,0.1)" stroke="rgba(86,54,209,0.15)" strokeWidth="1"/>
        {/* Headline */}
        <rect x="16" y="174" width="240" height="12" rx="4" fill="rgba(255,255,255,0.12)"/>
        <rect x="16" y="194" width="200" height="12" rx="4" fill="rgba(255,255,255,0.1)"/>
        {/* Body text lines */}
        <rect x="16" y="224" width="308" height="6" rx="2" fill="rgba(255,255,255,0.06)"/>
        <rect x="16" y="238" width="308" height="6" rx="2" fill="rgba(255,255,255,0.06)"/>
        <rect x="16" y="252" width="280" height="6" rx="2" fill="rgba(255,255,255,0.06)"/>
        <rect x="16" y="272" width="308" height="6" rx="2" fill="rgba(255,255,255,0.06)"/>
        <rect x="16" y="286" width="260" height="6" rx="2" fill="rgba(255,255,255,0.06)"/>
        <rect x="16" y="300" width="308" height="6" rx="2" fill="rgba(255,255,255,0.06)"/>
        {/* Tag chips */}
        <rect x="16" y="328" width="70" height="20" rx="10" fill="rgba(86,54,209,0.2)" stroke="rgba(86,54,209,0.3)" strokeWidth="1"/>
        <rect x="94" y="328" width="80" height="20" rx="10" fill="rgba(6,182,212,0.15)" stroke="rgba(6,182,212,0.25)" strokeWidth="1"/>
        <rect x="182" y="328" width="60" height="20" rx="10" fill="rgba(226,73,138,0.12)" stroke="rgba(226,73,138,0.22)" strokeWidth="1"/>
        {/* Author row */}
        <circle cx="30" cy="390" r="18" fill="rgba(86,54,209,0.15)" stroke="rgba(86,54,209,0.25)" strokeWidth="1"/>
        <rect x="58" y="382" width="100" height="8" rx="3" fill="rgba(255,255,255,0.1)"/>
        <rect x="58" y="396" width="70" height="6" rx="2" fill="rgba(255,255,255,0.06)"/>
        <rect x="260" y="382" width="64" height="26" rx="13" fill="rgba(6,182,212,0.18)" stroke="rgba(6,182,212,0.3)" strokeWidth="1"/>
      </g>
      {/* Small second card — top left, rotated */}
      <g transform="translate(-3%, 10%) rotate(-6)" opacity="0.07">
        <rect x="0" y="0" width="200" height="260" rx="12" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5"/>
        <rect x="12" y="12" width="176" height="100" rx="6" fill="rgba(6,182,212,0.08)"/>
        <rect x="12" y="124" width="140" height="8" rx="3" fill="rgba(255,255,255,0.08)"/>
        <rect x="12" y="140" width="176" height="5" rx="2" fill="rgba(255,255,255,0.05)"/>
        <rect x="12" y="153" width="160" height="5" rx="2" fill="rgba(255,255,255,0.05)"/>
        <rect x="12" y="166" width="176" height="5" rx="2" fill="rgba(255,255,255,0.05)"/>
      </g>
    </svg>
  )
}

/* ── About: connected nodes network ── */
function AboutBg() {
  return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      {/* Network node connections — right side */}
      <g transform="translate(46%, 2%)" opacity="0.22">
        {/* Connection lines */}
        <line x1="180" y1="80"  x2="320" y2="160" stroke="rgba(86,54,209,0.5)"  strokeWidth="1.5"/>
        <line x1="180" y1="80"  x2="80"  y2="200" stroke="rgba(86,54,209,0.45)" strokeWidth="1.5"/>
        <line x1="180" y1="80"  x2="280" y2="270" stroke="rgba(6,182,212,0.4)"  strokeWidth="1.5"/>
        <line x1="320" y1="160" x2="280" y2="270" stroke="rgba(86,54,209,0.35)" strokeWidth="1"/>
        <line x1="80"  y1="200" x2="280" y2="270" stroke="rgba(6,182,212,0.35)" strokeWidth="1"/>
        <line x1="80"  y1="200" x2="40"  y2="340" stroke="rgba(226,73,138,0.3)" strokeWidth="1"/>
        <line x1="280" y1="270" x2="400" y2="350" stroke="rgba(6,182,212,0.28)" strokeWidth="1"/>
        <line x1="280" y1="270" x2="160" y2="370" stroke="rgba(86,54,209,0.28)" strokeWidth="1"/>
        <line x1="320" y1="160" x2="430" y2="230" stroke="rgba(226,73,138,0.3)" strokeWidth="1"/>
        {/* Node circles */}
        <circle cx="180" cy="80"  r="20" fill="rgba(86,54,209,0.3)"  stroke="rgba(86,54,209,0.65)" strokeWidth="1.5"/>
        <circle cx="180" cy="80"  r="11" fill="rgba(86,54,209,0.6)"/>
        <circle cx="320" cy="160" r="16" fill="rgba(6,182,212,0.25)"  stroke="rgba(6,182,212,0.6)"  strokeWidth="1.5"/>
        <circle cx="320" cy="160" r="8"  fill="rgba(6,182,212,0.65)"/>
        <circle cx="80"  cy="200" r="18" fill="rgba(226,73,138,0.22)" stroke="rgba(226,73,138,0.55)" strokeWidth="1.5"/>
        <circle cx="80"  cy="200" r="9"  fill="rgba(226,73,138,0.6)"/>
        <circle cx="280" cy="270" r="24" fill="rgba(86,54,209,0.25)"  stroke="rgba(86,54,209,0.6)"  strokeWidth="1.5"/>
        <circle cx="280" cy="270" r="13" fill="rgba(86,54,209,0.55)"/>
        <circle cx="40"  cy="340" r="12" fill="rgba(226,73,138,0.2)"  stroke="rgba(226,73,138,0.45)" strokeWidth="1"/>
        <circle cx="400" cy="350" r="14" fill="rgba(6,182,212,0.2)"   stroke="rgba(6,182,212,0.45)"  strokeWidth="1"/>
        <circle cx="160" cy="370" r="12" fill="rgba(86,54,209,0.2)"   stroke="rgba(86,54,209,0.42)"  strokeWidth="1"/>
        <circle cx="430" cy="230" r="11" fill="rgba(226,73,138,0.18)" stroke="rgba(226,73,138,0.4)"  strokeWidth="1"/>
        {/* Pulse rings on main node */}
        <circle cx="180" cy="80" r="32" fill="none" stroke="rgba(86,54,209,0.22)" strokeWidth="1"/>
        <circle cx="180" cy="80" r="48" fill="none" stroke="rgba(86,54,209,0.12)" strokeWidth="1"/>
      </g>
      {/* Scattered small nodes — left */}
      <g transform="translate(2%, 18%)" opacity="0.18">
        <circle cx="40"  cy="40"  r="9"  fill="rgba(6,182,212,0.35)"   stroke="rgba(6,182,212,0.65)"  strokeWidth="1"/>
        <circle cx="110" cy="95"  r="13" fill="rgba(86,54,209,0.3)"   stroke="rgba(86,54,209,0.6)"   strokeWidth="1"/>
        <circle cx="30"  cy="160" r="8"  fill="rgba(226,73,138,0.3)"  stroke="rgba(226,73,138,0.6)"  strokeWidth="1"/>
        <circle cx="140" cy="180" r="7"  fill="rgba(6,182,212,0.25)"  stroke="rgba(6,182,212,0.5)"   strokeWidth="1"/>
        <line x1="40"  y1="40"  x2="110" y2="95"  stroke="rgba(86,54,209,0.35)"  strokeWidth="1"/>
        <line x1="110" y1="95"  x2="30"  y2="160" stroke="rgba(6,182,212,0.3)"   strokeWidth="1"/>
        <line x1="110" y1="95"  x2="140" y2="180" stroke="rgba(226,73,138,0.28)" strokeWidth="1"/>
      </g>
      {/* Shield / trust badge — bottom left */}
      <g transform="translate(3%, 65%)" opacity="0.16">
        <path d="M50 8 L90 24 L90 56 C90 78 70 94 50 100 C30 94 10 78 10 56 L10 24 Z" fill="rgba(6,182,212,0.06)" stroke="rgba(6,182,212,0.5)" strokeWidth="1.5"/>
        <path d="M36 52 L46 62 L64 42" fill="none" stroke="rgba(34,197,94,0.7)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </svg>
  )
}

/* ── Contact: speech bubbles + concentric signal rings ── */
function ContactBg() {
  return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      {/* Large speech bubble — right */}
      <g transform="translate(56%, 6%)" opacity="0.2">
        <rect x="0" y="0" width="360" height="220" rx="24" fill="rgba(86,54,209,0.1)" stroke="rgba(86,54,209,0.45)" strokeWidth="1.5"/>
        <path d="M40 220 L20 265 L85 220 Z" fill="rgba(86,54,209,0.1)" stroke="rgba(86,54,209,0.45)" strokeWidth="1.5"/>
        {/* Message lines */}
        <rect x="24" y="36"  width="200" height="10" rx="4" fill="rgba(255,255,255,0.14)"/>
        <rect x="24" y="56"  width="300" height="8"  rx="3" fill="rgba(255,255,255,0.09)"/>
        <rect x="24" y="72"  width="270" height="8"  rx="3" fill="rgba(255,255,255,0.09)"/>
        <rect x="24" y="88"  width="250" height="8"  rx="3" fill="rgba(255,255,255,0.09)"/>
        <rect x="24" y="104" width="290" height="8"  rx="3" fill="rgba(255,255,255,0.07)"/>
        {/* Send button */}
        <rect x="24" y="160" width="110" height="34" rx="17" fill="rgba(6,182,212,0.28)" stroke="rgba(6,182,212,0.5)" strokeWidth="1"/>
        <path d="M48 177 L72 177 M66 171 L72 177 L66 183" fill="none" stroke="rgba(6,182,212,0.9)" strokeWidth="1.5" strokeLinecap="round"/>
      </g>
      {/* Reply bubble — top left */}
      <g transform="translate(2%, 8%)" opacity="0.16">
        <rect x="0" y="0" width="260" height="130" rx="18" fill="rgba(6,182,212,0.09)" stroke="rgba(6,182,212,0.4)" strokeWidth="1.5"/>
        <path d="M210 130 L234 162 L185 130 Z" fill="rgba(6,182,212,0.09)" stroke="rgba(6,182,212,0.4)" strokeWidth="1.5"/>
        <rect x="18" y="22" width="150" height="9"  rx="3" fill="rgba(255,255,255,0.12)"/>
        <rect x="18" y="40" width="220" height="7"  rx="2" fill="rgba(255,255,255,0.08)"/>
        <rect x="18" y="55" width="190" height="7"  rx="2" fill="rgba(255,255,255,0.08)"/>
        <rect x="18" y="70" width="200" height="7"  rx="2" fill="rgba(255,255,255,0.07)"/>
      </g>
      {/* Concentric signal rings — bottom right */}
      <g transform="translate(83%, 68%)" opacity="0.16">
        <circle cx="0" cy="0" r="26"  fill="rgba(6,182,212,0.22)" stroke="rgba(6,182,212,0.6)" strokeWidth="1.5"/>
        <circle cx="0" cy="0" r="52"  fill="none" stroke="rgba(6,182,212,0.38)" strokeWidth="1"/>
        <circle cx="0" cy="0" r="78"  fill="none" stroke="rgba(6,182,212,0.25)" strokeWidth="1"/>
        <circle cx="0" cy="0" r="104" fill="none" stroke="rgba(6,182,212,0.15)" strokeWidth="1"/>
        <circle cx="0" cy="0" r="130" fill="none" stroke="rgba(6,182,212,0.08)" strokeWidth="1"/>
      </g>
      {/* Envelope — bottom left */}
      <g transform="translate(3%, 68%)" opacity="0.16">
        <rect x="0" y="0" width="170" height="118" rx="10" fill="rgba(226,73,138,0.06)" stroke="rgba(226,73,138,0.5)" strokeWidth="1.5"/>
        <path d="M0 0 L85 70 L170 0" fill="none" stroke="rgba(226,73,138,0.5)" strokeWidth="1.5"/>
        <path d="M0 118 L56 66" fill="none" stroke="rgba(226,73,138,0.3)" strokeWidth="1"/>
        <path d="M170 118 L114 66" fill="none" stroke="rgba(226,73,138,0.3)" strokeWidth="1"/>
      </g>
      {/* 24hr badge — top right */}
      <g transform="translate(87%, 10%)" opacity="0.18">
        <circle cx="44" cy="44" r="42" fill="rgba(86,54,209,0.08)" stroke="rgba(86,54,209,0.5)" strokeWidth="1.5"/>
        <circle cx="44" cy="44" r="34" fill="none" stroke="rgba(86,54,209,0.2)" strokeWidth="1"/>
        <text x="44" y="40" textAnchor="middle" fontSize="20" fontWeight="700" fill="rgba(86,54,209,0.7)" fontFamily="system-ui">24</text>
        <text x="44" y="58" textAnchor="middle" fontSize="11" fill="rgba(86,54,209,0.5)" fontFamily="system-ui">HRS</text>
      </g>
    </svg>
  )
}

export default function InnerHeroBg({ page }: Props) {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Radial glow spotlight */}
      <div
        className="absolute"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -60%)',
          width: '900px',
          height: '600px',
          background: 'radial-gradient(ellipse at center, rgba(86,54,209,0.28) 0%, rgba(226,73,138,0.10) 45%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      {/* Animated gradient */}
      <div className="hero-gradient-shift absolute inset-0" />
      {/* Floating blobs */}
      <div className="hblob hblob-1" />
      <div className="hblob hblob-2" />
      {/* Drifting dot grid */}
      <div className="hero-dots-move absolute inset-0" />

      {/* Page-specific decorative SVG layer */}
      {page === 'services'  && <ServicesBg />}
      {page === 'pricing'   && <PricingBg />}
      {page === 'portfolio' && <PortfolioBg />}
      {page === 'blog'      && <BlogBg />}
      {page === 'about'     && <AboutBg />}
      {page === 'contact'   && <ContactBg />}
    </div>
  )
}
