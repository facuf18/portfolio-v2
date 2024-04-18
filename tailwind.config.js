/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '320px',
      sm: '768px',
      md: '1024px',
      lg: '1440px',
      xl: '1920px',
    },
    extend: {
      colors: {
        primary: {
          50: '#F5F3F0',
          100: '#EDEBE8',
          200: '#CDCBCB',
          300: '#656464',
          400: '#434040',
          500: '#232121',
        },
        secondary: {
          50: '#F5F3F0',
          100: '#d8d8f6',
          200: '#b18fcf',
          300: '#978897',
          400: '#494850',
          500: '#2c2c34',
          600: '#232121',
        },
      },
      fontFamily: {
        title: 'Cabin, Arial, sans-serif',
        body: 'Manrope, Arial, sans-serif',
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
};
