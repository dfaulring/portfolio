/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      'roboto-mono': ['var(--font-roboto-mono)'],
      syne: ['var(--font-syne)'],
      satoshi: ['var(--font-satoshi)'],
    },
    extend: {
      lineHeight: {
        1.2: 1.2,
      },
      colors: {
        black: '#191919',
        'light-yellow': '#fdfbf5',
      },
    },
  },
  plugins: [],
}
