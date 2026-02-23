/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#841D4F',
          cyan: '#1E6C86',
          wine: '#3C0A22',
          bg: '#011921',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'Avenir Next', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
