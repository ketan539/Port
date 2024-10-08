/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {

      backgroundImage: {
    circularLight:
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#ffff 8px,#ffff 100px)",

    circularDark:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #000000 8px, #000000 100px)",

    circularLightLg:
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#ffff 8px,#ffff 80px)",

    circularDarkLg:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #000000 8px, #000000 80px)",

    circularLightMd:
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#ffff 6px,#ffff 60px)",

    circularDarkMd:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #000000 6px, #000000 60px)",

    circularLightSm:
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#ffff 4px,#ffff 40px)",

    circularDarkSm:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #000000 4px, #000000 40px)",
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      }
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
    }

  },
  plugins: [],
}