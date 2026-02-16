/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F9F8F4',
        sand: '#E6E2DD',
        brown: {
          50: '#FAF6F3',
          100: '#EFEBE9',
          200: '#D7CCC8',
          300: '#BCAAA4',
          400: '#A1887F',
          600: '#8D7B68',
          800: '#5D4037',
          900: '#3E3632',
        },
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
