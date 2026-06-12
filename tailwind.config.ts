/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Surface scale — resolved from CSS custom properties
        surface: {
          base:    'rgb(var(--color-surface-base) / <alpha-value>)',
          raised:  'rgb(var(--color-surface-raised) / <alpha-value>)',
          overlay: 'rgb(var(--color-surface-overlay) / <alpha-value>)',
          border:  'rgb(var(--color-surface-border) / <alpha-value>)',
          muted:   'rgb(var(--color-surface-muted) / <alpha-value>)',
        },
        // Brand accent — electric indigo
        accent: {
          DEFAULT: 'rgb(var(--color-accent) / <alpha-value>)',
          hover:   'rgb(var(--color-accent-hover) / <alpha-value>)',
          glow:    'rgb(var(--color-accent) / <alpha-value>)',
        },
        // Text scale
        ink: {
          primary:   'rgb(var(--color-ink-primary) / <alpha-value>)',
          secondary: 'rgb(var(--color-ink-secondary) / <alpha-value>)',
          tertiary:  'rgb(var(--color-ink-tertiary) / <alpha-value>)',
        },
        // Semantic states
        positive: {
          DEFAULT: 'rgb(var(--color-positive) / <alpha-value>)',
          dim:     'rgb(var(--color-positive) / <alpha-value>)',
        },
        negative: {
          DEFAULT: 'rgb(var(--color-negative) / <alpha-value>)',
          dim:     'rgb(var(--color-negative) / <alpha-value>)',
        },
        // Legacy aliases — remapped to CSS vars so old components also theme-switch
        offwhite:   'rgb(var(--color-ink-primary) / <alpha-value>)',
        bluish:     'rgb(var(--color-ink-secondary) / <alpha-value>)',
        navyblue:   'rgb(var(--color-surface-raised) / <alpha-value>)',
        lightwhite: 'rgb(var(--color-ink-secondary) / <alpha-value>)',
        darkblue:   'rgb(var(--color-surface-base) / <alpha-value>)',
        coinblue:   'rgb(var(--color-surface-raised) / <alpha-value>)',
        navgreen:   'rgb(var(--color-positive) / <alpha-value>)',
        navred:     'rgb(var(--color-negative) / <alpha-value>)',
        lightblue:  'rgb(var(--color-ink-tertiary) / <alpha-value>)',
      },
      keyframes: {
        'ticker-scroll': {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-in': {
          '0%':   { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        ticker:   'ticker-scroll 40s linear infinite',
        'fade-in':'fade-in 0.2s ease-out',
      },
    },
    fontSize: {
      xs:   ['0.75rem',  { lineHeight: '1rem' }],
      sm:   ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem',     { lineHeight: '1.5rem' }],
      lg:   ['1.125rem', { lineHeight: '2rem' }],
      xl:   ['1.25rem',  { lineHeight: '1.75rem' }],
      '2xl':['1.5rem',   { lineHeight: '2rem' }],
      '3xl':['1.875rem', { lineHeight: '2.25rem' }],
      '4xl':['2.25rem',  { lineHeight: '2.5rem' }],
      '5xl':['3rem',     { lineHeight: '1.25' }],
      '6xl':['3.75rem',  { lineHeight: '1' }],
      '7xl':['4.5rem',   { lineHeight: '1.25' }],
      '8xl':['6rem',     { lineHeight: '1' }],
      '9xl':['8rem',     { lineHeight: '1.25rem' }],
    },
  },
  plugins: [],
};
