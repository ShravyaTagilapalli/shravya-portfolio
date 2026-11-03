/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00B8A9',
          50: '#E6FAF8',
          100: '#C2F2EC',
          200: '#8BE6DC',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#00B8A9',
          600: '#009A8E',
          700: '#007F76',
          800: '#00655E',
          900: '#0B4F4A',
        },
        secondary: {
          DEFAULT: '#1C2541',
          600: '#18203A',
          700: '#0B132B',
        },
        accent: {
          DEFAULT: '#00B8A9',
          400: '#2DD4BF',
          500: '#00B8A9',
          600: '#009A8E',
        },
        highlight: {
          DEFAULT: '#64748B',
          400: '#94A3B8',
          500: '#64748B',
        },
        ink: {
          DEFAULT: '#0B132B',
          900: '#0B132B',
          800: '#1C2541',
          700: '#2A3658',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-26px) translateX(12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        glow: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
        gradientBorder: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        floatSlow: 'floatSlow 9s ease-in-out infinite',
        shimmer: 'shimmer 6s ease infinite',
        glow: 'glow 4s ease-in-out infinite',
        gradientBorder: 'gradientBorder 4s ease infinite',
      },
      backgroundImage: {
        'grid-light':
          'linear-gradient(to right, rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.06) 1px, transparent 1px)',
        'grid-dark':
          'linear-gradient(to right, rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
