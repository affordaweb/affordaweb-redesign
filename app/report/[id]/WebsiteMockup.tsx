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
    <div
      id="mockup-section"
      style={{
        width: '100%',
        maxWidth: '980px',
        margin: '0 auto',
        overflowX: 'hidden',
        minWidth: 0,
        boxSizing: 'border-box',
      }}
    >
      {/* Keyframe animations */}
      <style>{`
        @keyframes mockup-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-9px); }
        }
        @keyframes mockup-glow {
          0%, 100% { box-shadow: 0 4px 12px rgba(255,255,255,0.15); }
          50%       { box-shadow: 0 4px 28px rgba(255,255,255,0.45), 0 0 40px rgba(255,255,255,0.12); }
        }
        @keyframes mockup-scale-pulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.045); }
        }
        @keyframes mockup-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes mockup-ping-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.6; transform: scale(1.5); }
        }
      `}</style>

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
          width: '100%',
          borderRadius: 12,
          overflow: 'hidden',
          boxSizing: 'border-box',
          boxShadow: '0 24px 60px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.06)',
        }}
      >
        {/* Scrollable wrapper for mobile */}
        <div
          style={{
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            minWidth: 0,
          }}
        >
          <div style={{ width: '100%', maxWidth: '980px', minWidth: 0, padding: '0 16px', boxSizing: 'border-box' }}>

            {/* ── Browser Chrome ── */}
            <div
              style={{
                background: '#1A1D27',
                padding: '8px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <div style={{ display: 'flex', gap: 5, flexShrink: 0 }}>
                {['#FF5F57', '#FEBC2E', '#28C840'].map((c) => (
                  <div key={c} style={{ width: 11, height: 11, borderRadius: '50%', background: c }} />
                ))}
              </div>
              <div
                style={{
                  flex: 1,
                  background: '#2D3142',
                  borderRadius: 5,
                  padding: '4px 12px',
                  fontSize: 11,
                  color: '#9CA3AF',
                  textAlign: 'center',
                  letterSpacing: '0.01em',
                }}
              >
                🔒 {domain}
              </div>
              <div style={{ width: 50, flexShrink: 0 }} />
            </div>

            {/* ── Navigation ── */}
            <div
              style={{
                background: '#fff',
                padding: '12px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid #F3F4F6',
                boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                gap: 12,
                flexWrap: 'wrap',
              }}
            >
              <div style={{ fontWeight: 900, fontSize: 18, color: palette.primary, letterSpacing: '-0.025em' }}>
                {brandName}
              </div>
              <div style={{ display: 'flex', gap: 20, fontSize: 12, color: '#6B7280', fontWeight: 500 }}>
                {['Home', 'About', 'Services', 'Contact'].map((link) => (
                  <span key={link}>{link}</span>
                ))}
              </div>
              {/* Animated nav CTA pill */}
              <div
                style={{
                  background: palette.primary,
                  color: '#fff',
                  padding: '8px 18px',
                  borderRadius: 999,
                  fontSize: 12,
                  fontWeight: 700,
                  flexShrink: 0,
                  animation: 'mockup-glow 2.4s ease-in-out infinite',
                }}
              >
                {hero.cta_primary}
              </div>
            </div>

            {/* ── Hero ── */}
            <div
              style={{
                background: palette.heroGradient,
                padding: '48px 24px 56px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Decorative circles */}
              <div style={{ position: 'absolute', top: -80, right: -80, width: 280, height: 280, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', bottom: -60, left: -60, width: 220, height: 220, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', top: '30%', right: '10%', width: 120, height: 120, borderRadius: '50%', background: 'rgba(255,255,255,0.03)', pointerEvents: 'none' }} />

              {/* Animated floating badge pill */}
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
                  animation: 'mockup-float 3s ease-in-out infinite',
                }}
              >
                {hero.badge}
              </div>

              <h1
                style={{
                  color: '#fff',
                  fontSize: 32,
                  fontWeight: 900,
                  letterSpacing: '-0.035em',
                  lineHeight: 1.1,
                  maxWidth: 600,
                  margin: '0 auto 16px',
                }}
              >
                {hero.headline}
              </h1>

              <p
                style={{
                  color: 'rgba(255,255,255,0.82)',
                  fontSize: 14,
                  maxWidth: 450,
                  margin: '0 auto 28px',
                  lineHeight: 1.6,
                  fontWeight: 400,
                }}
              >
                {hero.subtext}
              </p>

              <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                {/* Animated primary CTA pill */}
                <div
                  style={{
                    background: '#fff',
                    color: palette.primary,
                    padding: '15px 36px',
                    borderRadius: 999,
                    fontSize: 15,
                    fontWeight: 800,
                    boxShadow: '0 8px 28px rgba(0,0,0,0.22)',
                    letterSpacing: '-0.01em',
                    animation: 'mockup-scale-pulse 2.2s ease-in-out infinite',
                  }}
                >
                  {hero.cta_primary}
                </div>
                <div
                  style={{
                    background: 'rgba(255,255,255,0.13)',
                    color: '#fff',
                    padding: '15px 36px',
                    borderRadius: 999,
                    fontSize: 15,
                    fontWeight: 600,
                    border: '2px solid rgba(255,255,255,0.28)',
                  }}
                >
                  {hero.cta_secondary}
                </div>
              </div>
            </div>

            {/* ── Trust Strip — infinite marquee ── */}
            <div
              style={{
                background: palette.bg,
                padding: '20px 0',
                overflow: 'hidden',
                borderBottom: `1px solid ${palette.primary}1A`,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  gap: 64,
                  width: 'max-content',
                  animation: 'mockup-marquee 18s linear infinite',
                }}
              >
                {[...trust, ...trust, ...trust, ...trust].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      fontSize: 13,
                      color: palette.muted,
                      fontWeight: 600,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: '50%',
                        background: palette.primary,
                        display: 'inline-block',
                        flexShrink: 0,
                        animation: `mockup-ping-dot 1.8s ease-in-out infinite`,
                        animationDelay: `${(i % 4) * 0.45}s`,
                      }}
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* ── Services ── */}
            <div style={{ background: '#fff', padding: '40px 24px' }}>
              <div style={{ textAlign: 'center', marginBottom: 28 }}>
                <p
                  style={{
                    color: palette.primary,
                    fontSize: 10,
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    marginBottom: 8,
                  }}
                >
                  What We Offer
                </p>
                <h2
                  style={{
                    color: palette.text,
                    fontSize: 24,
                    fontWeight: 900,
                    letterSpacing: '-0.03em',
                    margin: 0,
                    lineHeight: 1.15,
                  }}
                >
                  Everything You Need to Succeed
                </h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 16 }}>
                {services.map((s, i) => (
                  <div
                    key={i}
                    style={{
                      background: palette.cardBg,
                      borderRadius: 14,
                      padding: '18px 16px',
                      border: `1px solid ${palette.primary}18`,
                      boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                    }}
                  >
                    <div style={{ fontSize: 28, marginBottom: 12 }}>{s.icon}</div>
                    <h3 style={{ color: palette.text, fontSize: 13, fontWeight: 800, margin: '0 0 8px', letterSpacing: '-0.01em' }}>
                      {s.title}
                    </h3>
                    <p style={{ color: palette.muted, fontSize: 12, lineHeight: 1.5, margin: 0 }}>
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Testimonial ── */}
            <div style={{ background: palette.bg, padding: '40px 24px', textAlign: 'center' }}>
              <div style={{ color: '#F59E0B', fontSize: 20, letterSpacing: 2, marginBottom: 18 }}>
                ★★★★★
              </div>
              <blockquote
                style={{
                  color: palette.text,
                  fontSize: 16,
                  fontWeight: 600,
                  fontStyle: 'italic',
                  maxWidth: 520,
                  margin: '0 auto 24px',
                  lineHeight: 1.6,
                  letterSpacing: '-0.015em',
                }}
              >
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'center' }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    background: palette.heroGradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: 900,
                    fontSize: 18,
                    flexShrink: 0,
                    boxShadow: `0 4px 14px ${palette.primary}44`,
                  }}
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div style={{ textAlign: 'left' }}>
                  <p style={{ color: palette.text, fontSize: 13, fontWeight: 800, margin: '0 0 2px', letterSpacing: '-0.01em' }}>
                    {testimonial.name}
                  </p>
                  <p style={{ color: palette.muted, fontSize: 11, margin: 0 }}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>

            {/* ── CTA Section ── */}
            <div
              style={{
                background: palette.heroGradient,
                padding: '48px 24px',
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
                  fontSize: 26,
                  fontWeight: 900,
                  letterSpacing: '-0.03em',
                  margin: '0 auto 12px',
                  maxWidth: 480,
                  lineHeight: 1.15,
                }}
              >
                {cta.headline}
              </h2>
              <p
                style={{
                  color: 'rgba(255,255,255,0.78)',
                  fontSize: 14,
                  margin: '0 auto 24px',
                  maxWidth: 400,
                  lineHeight: 1.6,
                }}
              >
                {cta.subtext}
              </p>
              {/* Animated CTA pill button */}
              <div
                style={{
                  display: 'inline-block',
                  background: '#fff',
                  color: palette.primary,
                  padding: '12px 32px',
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: 800,
                  boxShadow: '0 8px 28px rgba(0,0,0,0.22)',
                  letterSpacing: '-0.01em',
                  animation: 'mockup-scale-pulse 2s ease-in-out infinite',
                }}
              >
                {cta.button}
              </div>
            </div>

            {/* ── Footer ── */}
            <div
              style={{
                background: '#0F172A',
                padding: '16px 24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 12,
                flexWrap: 'wrap',
                fontSize: 11,
              }}
            >
              <div style={{ color: '#94A3B8', fontWeight: 700, letterSpacing: '-0.01em' }}>
                {brandName}
              </div>
              <div style={{ color: '#64748B' }}>
                © 2025 {brandName}. All rights reserved.
              </div>
              <div style={{ display: 'flex', gap: 16, color: '#64748B' }}>
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
