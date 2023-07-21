/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        'primary':'#DAAA63',
        'secondary':'#f3e5d0',

      },
      fontFamily: {
        font1: ['Libre Caslon Text', 'serif'],
        font2: ['Montserrat', 'sans-serif'],// Add the font family name you want to use
      },
    },
  },
  plugins: [],
}