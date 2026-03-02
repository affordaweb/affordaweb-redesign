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
        primary: {
          DEFAULT: '#5636D1',
          50:  '#EDE9FB',
          100: '#D3C9F6',
          200: '#A897EE',
          300: '#7D64E5',
          400: '#6A4FDB',
          500: '#5636D1',
          600: '#4428B8',
          700: '#331F8A',
          800: '#22145C',
          900: '#110A2E',
        },
        dark: {
          DEFAULT: '#0F0F1A',
          50:  '#2A2A40',
          100: '#1E1E30',
          200: '#161626',
          300: '#0F0F1A',
          400: '#080812',
        },
        surface: '#F5F5F7',
      },
      fontFamily: {
        sans:    ['var(--font-jakarta)', 'Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-jakarta)', 'Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-hero':    'linear-gradient(135deg, #0D0D1F 0%, #150E35 50%, #0D0D1F 100%)',
        'gradient-primary': 'linear-gradient(135deg, #4428B8 0%, #5636D1 100%)',
        'gradient-cta':     'linear-gradient(135deg, #4428B8 0%, #5636D1 60%, #7D64E5 100%)',
        'gradient-card':    'linear-gradient(145deg, rgba(86,54,209,0.06) 0%, rgba(86,54,209,0.02) 100%)',
        'glow-primary':     'radial-gradient(ellipse at center, rgba(86,54,209,0.3) 0%, transparent 70%)',
        'dots':             'radial-gradient(circle, rgba(86,54,209,0.18) 1.5px, transparent 1.5px)',
        'gradient-surface': 'linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 100%)',
      },
      boxShadow: {
        'xs':           '0 1px 4px rgba(0,0,0,0.04)',
        'card':         '0 2px 20px rgba(0,0,0,0.05)',
        'card-hover':   '0 20px 60px rgba(86,54,209,0.12)',
        'glow':         '0 0 40px rgba(86,54,209,0.25)',
        'glow-lg':      '0 0 80px rgba(86,54,209,0.35)',
        'cta':          '0 8px 32px rgba(86,54,209,0.5)',
        'btn':          '0 4px 20px rgba(86,54,209,0.4)',
        'pricing':      '0 32px 80px rgba(86,54,209,0.3)',
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
