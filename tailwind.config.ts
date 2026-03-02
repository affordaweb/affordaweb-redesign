import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Deep Emerald brand palette
        primary: {
          DEFAULT: '#059669',
          50:  '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
        },
        // Near-black with subtle green undertone
        dark: {
          DEFAULT: '#020C07',
          50:  '#1C2E24',
          100: '#111F17',
          200: '#0A1610',
          300: '#020C07',
          400: '#010804',
        },
        // Very light green-tinted surface
        surface: '#F0FDF4',
      },
      fontFamily: {
        sans:    ['var(--font-outfit)', 'Outfit', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-outfit)', 'Outfit', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-hero':    'linear-gradient(135deg, #020C07 0%, #021A0F 50%, #020C07 100%)',
        'gradient-primary': 'linear-gradient(135deg, #047857 0%, #059669 100%)',
        'gradient-cta':     'linear-gradient(135deg, #047857 0%, #059669 60%, #10B981 100%)',
        'gradient-card':    'linear-gradient(145deg, rgba(5,150,105,0.06) 0%, rgba(5,150,105,0.02) 100%)',
        'glow-primary':     'radial-gradient(ellipse at center, rgba(5,150,105,0.3) 0%, transparent 70%)',
        'dots':             'radial-gradient(circle, rgba(5,150,105,0.18) 1.5px, transparent 1.5px)',
        'gradient-surface': 'linear-gradient(180deg, #FFFFFF 0%, #F0FDF4 100%)',
      },
      boxShadow: {
        'xs':           '0 1px 4px rgba(0,0,0,0.04)',
        'card':         '0 2px 20px rgba(0,0,0,0.05)',
        'card-hover':   '0 20px 60px rgba(5,150,105,0.12)',
        'glow':         '0 0 40px rgba(5,150,105,0.25)',
        'glow-lg':      '0 0 80px rgba(5,150,105,0.35)',
        'cta':          '0 8px 32px rgba(5,150,105,0.5)',
        'btn':          '0 4px 20px rgba(5,150,105,0.4)',
        'pricing':      '0 32px 80px rgba(5,150,105,0.3)',
      },
      animation: {
        'fade-up':    'fadeUp 0.7s ease-out',
        'fade-in':    'fadeIn 0.5s ease-out',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'float':      'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(0.98)' },
          '50%':      { opacity: '1',   transform: 'scale(1.02)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
}

export default config
