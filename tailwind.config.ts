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
        // Royal blue brand palette
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
        // Very light gray (neutral surface)
        surface: '#F5F5F7',
      },
      fontFamily: {
        sans:    ['var(--font-jakarta)', 'Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-jakarta)', 'Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-hero':    'linear-gradient(135deg, #0F0F1A 0%, #1a1040 50%, #0F0F1A 100%)',
        'gradient-primary': 'linear-gradient(135deg, #4428B8 0%, #5636D1 100%)',
        'gradient-cta':     'linear-gradient(135deg, #4428B8 0%, #5636D1 60%, #7D64E5 100%)',
        'gradient-card':    'linear-gradient(145deg, rgba(86,54,209,0.06) 0%, rgba(86,54,209,0.02) 100%)',
        'glow-primary':     'radial-gradient(ellipse at center, rgba(86,54,209,0.3) 0%, transparent 70%)',
        'dots':             'radial-gradient(circle, rgba(86,54,209,0.18) 1.5px, transparent 1.5px)',
      },
      boxShadow: {
        'card':      '0 4px 24px rgba(86,54,209,0.07)',
        'card-hover':'0 12px 40px rgba(86,54,209,0.15)',
        'glow':      '0 0 40px rgba(86,54,209,0.3)',
        'cta':       '0 8px 32px rgba(86,54,209,0.4)',
        'btn':       '0 4px 15px rgba(86,54,209,0.35)',
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease-out',
        'fade-in':    'fadeIn 0.5s ease-out',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float':      'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6' },
          '50%':      { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}

export default config
