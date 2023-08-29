/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode : 'class',
  theme: {
    extend: {

      backgroundImage:{
        circularLight:'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #ffffff 5px, #ffffff 100px);',
        circularDark:'repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #000000 5px, #000000 100px);'
      }
    },
    plugins: [],
  }
}