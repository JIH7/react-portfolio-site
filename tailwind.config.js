/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{jsx,js}"
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        darkGray: '#121212',
      }
    },
  },
  plugins: [],
}

