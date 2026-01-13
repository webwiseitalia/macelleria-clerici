/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rosso': {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#7f1d1d',
          900: '#5c1515',
          950: '#3b0d0d',
        },
        'beige': {
          50: '#fdfcfb',
          100: '#f9f5f0',
          200: '#f3ebe0',
          300: '#e8d9c5',
          400: '#d4ba98',
          500: '#c4a373',
          600: '#b08d5b',
          700: '#93724a',
          800: '#785d40',
          900: '#624d37',
          950: '#35291c',
        },
        'grigio': {
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#e4e4e4',
          300: '#d1d1d1',
          400: '#b4b4b4',
          500: '#9a9a9a',
          600: '#818181',
          700: '#6a6a6a',
          800: '#5a5a5a',
          900: '#4e4e4e',
          950: '#2e2e2e',
        },
      },
      fontFamily: {
        'serif': ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        'sans': ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
