/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { brand: { DEFAULT: '#E30613', dark: '#B8000C', soft: '#FDECEE' }, ink: '#0B1020', muted: '#5B6472', line: '#E8EAEE', soft: '#F6F7F9' },
      fontFamily: { sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', '"Segoe UI"', 'Arial', 'sans-serif'] },
      transitionTimingFunction: { slow: 'cubic-bezier(.22,.61,.36,1)' },
      boxShadow: { card: '0 10px 35px rgba(11,16,32,.10)', lift: '0 18px 45px rgba(11,16,32,.18)' },
    },
  },
  plugins: [],
};
