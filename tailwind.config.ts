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
        // Brand palette
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
        pink: {
          DEFAULT: '#E2498A',
          50:  '#FCE9F2',
          100: '#F9C9DF',
          200: '#F399BF',
          300: '#EC699F',
          400: '#E7568F',
          500: '#E2498A',
          600: '#C93070',
          700: '#9A2354',
          800: '#6B1739',
          900: '#3C0B1F',
        },
        // NEW accent — electric cyan
        cyan: {
          DEFAULT: '#06B6D4',
          50:  '#E0F9FD',
          100: '#BAF1F9',
          200: '#7FE6F4',
          300: '#3DD9EE',
          400: '#16C9E3',
          500: '#06B6D4',
          600: '#0592AB',
          700: '#046D7F',
          800: '#024954',
          900: '#012429',
        },
        dark: {
          DEFAULT: '#0F0F1A',
          50:  '#2A2A40',
          100: '#1E1E30',
          200: '#161626',
          300: '#0F0F1A',
          400: '#080812',
        },
        surface: '#F8F7FF',
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-jakarta)', 'Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-hero':    'linear-gradient(135deg, #0F0F1A 0%, #1a1040 50%, #0F0F1A 100%)',
        'gradient-primary': 'linear-gradient(135deg, #5636D1 0%, #7D64E5 100%)',
        'gradient-accent':  'linear-gradient(135deg, #06B6D4 0%, #3DD9EE 100%)',
        'gradient-cta':     'linear-gradient(135deg, #5636D1 0%, #06B6D4 100%)',
        'gradient-card':    'linear-gradient(145deg, rgba(86,54,209,0.08) 0%, rgba(6,182,212,0.05) 100%)',
        'gradient-pink':    'linear-gradient(135deg, #E2498A 0%, #EC699F 100%)',
        'glow-primary':     'radial-gradient(ellipse at center, rgba(86,54,209,0.3) 0%, transparent 70%)',
        'glow-cyan':        'radial-gradient(ellipse at center, rgba(6,182,212,0.2) 0%, transparent 70%)',
      },
      boxShadow: {
        'card':     '0 4px 24px rgba(86,54,209,0.08)',
        'card-hover':'0 12px 40px rgba(86,54,209,0.18)',
        'glow':     '0 0 40px rgba(86,54,209,0.3)',
        'glow-cyan':'0 0 30px rgba(6,182,212,0.35)',
        'cta':      '0 8px 32px rgba(6,182,212,0.4)',
        'btn':      '0 4px 15px rgba(6,182,212,0.3)',
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
