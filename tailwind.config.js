/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // App directory (if using App Router)
    './pages/**/*.{js,ts,jsx,tsx}', // Pages directory (if using Pages Router)
    './components/**/*.{js,ts,jsx,tsx}', // Components
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F8F5FB',
          100: '#F0E8F7',
          200: '#DED0EF',
          300: '#CBB8E7',
          400: '#B090D8',
          500: '#8E62C2',
          600: '#6E409E',
          700: '#542F80',
          800: '#39194F',
          900: '#2C0C45',
          950: '#23003C',
        },
      },
    },
  },
  plugins: [],
};
