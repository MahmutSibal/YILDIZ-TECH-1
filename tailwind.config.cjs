/**** Tailwind Config ****/ 
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        brand: {
          50: '#f2f7ff',
          100: '#e4eeff',
          200: '#bfdcff',
          300: '#8ec5ff',
          400: '#56a6ff',
          500: '#1d7eff',
          600: '#0a60e3',
          700: '#084ab6',
          800: '#0a3f8f',
          900: '#0d356f'
        }
      }
    }
  },
  plugins: []
};
