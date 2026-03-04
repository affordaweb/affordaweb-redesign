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
        // Logo Blue — extracted from AffordaWeb logo (#2878C4)
        primary: {
          DEFAULT: '#2878C4',
          50:  '#EBF5FF',
          100: '#D6EBFF',
          200: '#ADCFF5',
          300: '#7AB5EE',
          400: '#4D9BE5',
          500: '#2878C4',
          600: '#2878C4',
          700: '#1E66A8',
          800: '#1A5C99',
          900: '#134878',
        },
        // Deep navy — brand-consistent dark for hero/CTA sections
        dark: {
          DEFAULT: '#091829',
          50:  '#1E3452',
          100: '#152641',
          200: '#0F1E35',
          300: '#091829',
          400: '#050F1C',
        },
        // Logo gray — from "WEB SOLUTIONS" text
        'logo-gray': '#595959',
        // Very light blue surface
        surface: '#F0F7FF',
        // Charcoal — dark gray for section contrast
        charcoal: {
          DEFAULT: '#2D3142',
          light:   '#3D4255',
          dark:    '#1E2230',
        },
      },
      fontFamily: {
        sans:    ['var(--font-inter)', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-poppins)', 'Poppins', 'var(--font-inter)', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-hero':    'linear-gradient(135deg, #091829 0%, #0F2040 50%, #091829 100%)',
        'gradient-primary': 'linear-gradient(135deg, #1E66A8 0%, #2878C4 100%)',
        'gradient-cta':     'linear-gradient(135deg, #1A5C99 0%, #2878C4 60%, #4D9BE5 100%)',
        'gradient-card':    'linear-gradient(145deg, rgba(40,120,196,0.06) 0%, rgba(40,120,196,0.02) 100%)',
        'glow-primary':     'radial-gradient(ellipse at center, rgba(40,120,196,0.3) 0%, transparent 70%)',
        'dots':             'radial-gradient(circle, rgba(40,120,196,0.18) 1.5px, transparent 1.5px)',
        'gradient-surface': 'linear-gradient(180deg, #FFFFFF 0%, #F0F7FF 100%)',
      },
      boxShadow: {
        'xs':           '0 1px 4px rgba(0,0,0,0.04)',
        'card':         '0 2px 20px rgba(0,0,0,0.05)',
        'card-hover':   '0 20px 60px rgba(40,120,196,0.12)',
        'glow':         '0 0 40px rgba(40,120,196,0.25)',
        'glow-lg':      '0 0 80px rgba(40,120,196,0.35)',
        'cta':          '0 8px 32px rgba(40,120,196,0.5)',
        'btn':          '0 4px 20px rgba(40,120,196,0.4)',
        'pricing':      '0 32px 80px rgba(40,120,196,0.3)',
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
