/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Surface scale
        surface: {
          base:    '#0A0F1E',
          raised:  '#0F1629',
          overlay: '#141C35',
          border:  '#1E2A4A',
          muted:   '#243060',
        },
        // Brand accent — electric indigo
        accent: {
          DEFAULT: '#4F6EF7',
          hover:   '#6B85F9',
          glow:    '#4F6EF740',
        },
        // Text scale
        ink: {
          primary:   '#F0F4FF',
          secondary: '#8B9CC8',
          tertiary:  '#5A6B96',
        },
        // Semantic states
        positive: { DEFAULT: '#22C55E', dim: '#22C55E14' },
        negative: { DEFAULT: '#EF4444', dim: '#EF444414' },
        // Legacy aliases — kept for migration safety, remove after all components updated
        offwhite:  '#F0F4FF',
        bluish:    '#8B9CC8',
        navyblue:  '#0F1629',
        lightwhite:'#8B9CC8',
        darkblue:  '#0A0F1E',
        coinblue:  '#0F1629',
        navgreen:  '#22C55E',
        navred:    '#EF4444',
        lightblue: '#5A6B96',
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
