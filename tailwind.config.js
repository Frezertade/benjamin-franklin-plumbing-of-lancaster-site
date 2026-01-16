/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#1a5490',
          600: '#164670',
          700: '#133a5c'
        },
        secondary: {
          50: '#fef7ec',
          400: '#f59e0b',
          500: '#d97706',
          600: '#c2410c'
        },
        accent: {
          500: '#dc2626',
          600: '#b91c1c'
        }
      }
    },
  },
  plugins: [],
}