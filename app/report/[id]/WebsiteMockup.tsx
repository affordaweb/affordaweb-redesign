import type { MockupConfig } from '@/lib/report-content'

interface Props {
  config: MockupConfig
  website: string
}

export default function WebsiteMockup({ config, website }: Props) {
  const { palette, hero, trust, services, testimonial, cta } = config
  const domain = website.replace(/^https?:\/\//, '').replace(/\/$/, '').toLowerCase()
  const rawName = domain.split('.')[0] ?? 'YourBrand'
  const brandName = rawName.charAt(0).toUpperCase() + rawName.slice(1)

  return (
    <div>
      {/* Section header */}
      <div style={{ marginBottom: 28, textAlign: 'center' }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            background: 'rgba(86,54,209,0.08)',
            color: '#5636D1',
            padding: '5px 14px',
            borderRadius: 999,
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: '0.07em',
            textTransform: 'uppercase',
            marginBottom: 14,
          }}
        >
          🎨 Concept Design Preview
        </span>
        <h2
          style={{
            margin: '0 0 8px',
            fontSize: 22,
            fontWeight: 900,
            color: '#0F0F1A',
            letterSpacing: '-0.025em',
          }}
        >
          Your Website, Redesigned
        </h2>
        <p style={{ margin: 0, fontSize: 13, color: '#6B7280', lineHeight: 1.65, maxWidth: 460, marginLeft: 'auto', marginRight: 'auto' }}>
          This personalised concept is built around your business type and goals. It is saved to your report and accessible anytime.
        </p>
      </div>

      {/* Outer shadow frame */}
      <div
        style={{
          borderRadius: 16,
          overflow: 'hidden',
          boxShadow: '0 32px 80px rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.06)',
        }}
      >
        {/* Scrollable wrapper for mobile */}
        <div style={{ overflowX: 'auto' }}>
          <div style={{ minWidth: 840 }}>

            {/* ── Browser Chrome ── */}
            <div
              style={{
                background: '#1A1D27',
                padding: '11px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: 14,
              }}
            >
              <div style={{ display: 'flex', gap: 7, flexShrink: 0 }}>
                {['#FF5F57', '#FEBC2E', '#28C840'].map((c) => (
                  <div key={c} style={{ width: 13, height: 13, borderRadius: '50%', background: c }} />
                ))}
              </div>
              <div
                style={{
                  flex: 1,
                  background: '#2D3142',
                  borderRadius: 7,
                  padding: '5px 16px',
                  fontSize: 12,
                  color: '#9CA3AF',
                  textAlign: 'center',
                  letterSpacing: '0.01em',
                }}
              >
                🔒 {domain}
              </div>
              <div style={{ width: 60, flexShrink: 0 }} />
            </div>

            {/* ── Navigation ── */}
            <div
              style={{
                background: '#fff',
                padding: '16px 48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid #F3F4F6',
                boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
              }}
            >
              <div style={{ fontWeight: 900, fontSize: 22, color: palette.primary, letterSpacing: '-0.025em' }}>
                {brandName}
              </div>
              <div style={{ display: 'flex', gap: 32, fontSize: 13, color: '#6B7280', fontWeight: 500 }}>
                {['Home', 'About', 'Services', 'Contact'].map((link) => (
                  <span key={link}>{link}</span>
                ))}
              </div>
              <div
                style={{
                  background: palette.primary,
                  color: '#fff',
                  padding: '10px 22px',
                  borderRadius: 9,
                  fontSize: 13,
                  fontWeight: 700,
                  flexShrink: 0,
                  boxShadow: `0 4px 12px ${palette.primary}55`,
                }}
              >
                {hero.cta_primary}
              </div>
            </div>

            {/* ── Hero ── */}
            <div
              style={{
                background: palette.heroGradient,
                padding: '80px 48px 88px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Decorative circles */}
              <div style={{ position: 'absolute', top: -80, right: -80, width: 280, height: 280, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', bottom: -60, left: -60, width: 220, height: 220, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', top: '30%', right: '10%', width: 120, height: 120, borderRadius: '50%', background: 'rgba(255,255,255,0.03)', pointerEvents: 'none' }} />

              {/* Badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  background: 'rgba(255,255,255,0.14)',
                  backdropFilter: 'blur(8px)',
                  color: '#fff',
                  padding: '7px 20px',
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: 600,
                  marginBottom: 28,
                  border: '1px solid rgba(255,255,255,0.22)',
                  letterSpacing: '0.01em',
                }}
              >
                {hero.badge}
              </div>

              <h1
                style={{
                  color: '#fff',
                  fontSize: 44,
                  fontWeight: 900,
                  letterSpacing: '-0.035em',
                  lineHeight: 1.1,
                  maxWidth: 700,
                  margin: '0 auto 20px',
                }}
              >
                {hero.headline}
              </h1>

              <p
                style={{
                  color: 'rgba(255,255,255,0.82)',
                  fontSize: 17,
                  maxWidth: 520,
                  margin: '0 auto 40px',
                  lineHeight: 1.7,
                  fontWeight: 400,
                }}
              >
                {hero.subtext}
              </p>

              <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                <div
                  style={{
                    background: '#fff',
                    color: palette.primary,
                    padding: '15px 36px',
                    borderRadius: 12,
                    fontSize: 15,
                    fontWeight: 800,
                    boxShadow: '0 8px 28px rgba(0,0,0,0.22)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {hero.cta_primary}
                </div>
                <div
                  style={{
                    background: 'rgba(255,255,255,0.13)',
                    color: '#fff',
                    padding: '15px 36px',
                    borderRadius: 12,
                    fontSize: 15,
                    fontWeight: 600,
                    border: '2px solid rgba(255,255,255,0.28)',
                  }}
                >
                  {hero.cta_secondary}
                </div>
              </div>
            </div>

            {/* ── Trust Strip ── */}
            <div
              style={{
                background: palette.bg,
                padding: '20px 48px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 48,
                flexWrap: 'wrap',
                borderBottom: `1px solid ${palette.primary}1A`,
              }}
            >
              {trust.map((item, i) => (
                <div key={i} style={{ fontSize: 13, color: palette.muted, fontWeight: 600, whiteSpace: 'nowrap' }}>
                  {item}
                </div>
              ))}
            </div>

            {/* ── Services ── */}
            <div style={{ background: '#fff', padding: '64px 48px' }}>
              <div style={{ textAlign: 'center', marginBottom: 40 }}>
                <p
                  style={{
                    color: palette.primary,
                    fontSize: 11,
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    marginBottom: 10,
                  }}
                >
                  What We Offer
                </p>
                <h2
                  style={{
                    color: palette.text,
                    fontSize: 32,
                    fontWeight: 900,
                    letterSpacing: '-0.03em',
                    margin: 0,
                    lineHeight: 1.15,
                  }}
                >
                  Everything You Need to Succeed
                </h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
                {services.map((s, i) => (
                  <div
                    key={i}
                    style={{
                      background: palette.cardBg,
                      borderRadius: 18,
                      padding: '30px 24px',
                      border: `1px solid ${palette.primary}18`,
                      boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                    }}
                  >
                    <div style={{ fontSize: 34, marginBottom: 16 }}>{s.icon}</div>
                    <h3 style={{ color: palette.text, fontSize: 15, fontWeight: 800, margin: '0 0 10px', letterSpacing: '-0.01em' }}>
                      {s.title}
                    </h3>
                    <p style={{ color: palette.muted, fontSize: 13, lineHeight: 1.65, margin: 0 }}>
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Testimonial ── */}
            <div style={{ background: palette.bg, padding: '64px 48px', textAlign: 'center' }}>
              <div style={{ color: '#F59E0B', fontSize: 24, letterSpacing: 3, marginBottom: 24 }}>
                ★★★★★
              </div>
              <blockquote
                style={{
                  color: palette.text,
                  fontSize: 20,
                  fontWeight: 600,
                  fontStyle: 'italic',
                  maxWidth: 600,
                  margin: '0 auto 32px',
                  lineHeight: 1.65,
                  letterSpacing: '-0.015em',
                }}
              >
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, justifyContent: 'center' }}>
                <div
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    background: palette.heroGradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: 900,
                    fontSize: 20,
                    flexShrink: 0,
                    boxShadow: `0 4px 14px ${palette.primary}44`,
                  }}
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div style={{ textAlign: 'left' }}>
                  <p style={{ color: palette.text, fontSize: 14, fontWeight: 800, margin: '0 0 2px', letterSpacing: '-0.01em' }}>
                    {testimonial.name}
                  </p>
                  <p style={{ color: palette.muted, fontSize: 12, margin: 0 }}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>

            {/* ── CTA Section ── */}
            <div
              style={{
                background: palette.heroGradient,
                padding: '72px 48px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ position: 'absolute', top: -100, right: -100, width: 350, height: 350, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', bottom: -80, left: -80, width: 280, height: 280, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', pointerEvents: 'none' }} />
              <h2
                style={{
                  color: '#fff',
                  fontSize: 34,
                  fontWeight: 900,
                  letterSpacing: '-0.03em',
                  margin: '0 auto 16px',
                  maxWidth: 560,
                  lineHeight: 1.15,
                }}
              >
                {cta.headline}
              </h2>
              <p
                style={{
                  color: 'rgba(255,255,255,0.78)',
                  fontSize: 16,
                  margin: '0 auto 36px',
                  maxWidth: 440,
                  lineHeight: 1.65,
                }}
              >
                {cta.subtext}
              </p>
              <div
                style={{
                  display: 'inline-block',
                  background: '#fff',
                  color: palette.primary,
                  padding: '16px 44px',
                  borderRadius: 12,
                  fontSize: 15,
                  fontWeight: 800,
                  boxShadow: '0 8px 28px rgba(0,0,0,0.22)',
                  letterSpacing: '-0.01em',
                }}
              >
                {cta.button}
              </div>
            </div>

            {/* ── Footer ── */}
            <div
              style={{
                background: '#0F172A',
                padding: '24px 48px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div style={{ color: '#94A3B8', fontSize: 14, fontWeight: 700, letterSpacing: '-0.01em' }}>
                {brandName}
              </div>
              <div style={{ color: '#64748B', fontSize: 12 }}>
                © 2025 {brandName}. All rights reserved.
              </div>
              <div style={{ display: 'flex', gap: 24, fontSize: 12, color: '#64748B' }}>
                {['Privacy', 'Terms', 'Contact'].map((l) => <span key={l}>{l}</span>)}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Caption */}
      <p style={{ textAlign: 'center', marginTop: 14, fontSize: 12, color: '#9CA3AF', lineHeight: 1.5 }}>
        This concept is personalised to your business type and saved permanently to your report. Bookmark your report link to revisit anytime.
      </p>
    </div>
  )
}
