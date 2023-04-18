/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "purp" : "#4B2A63",
        "purpD" : "#241330",
        "dark" : "#F8F8F8",
      },
      fontFamily: {
        "pop" : ['Poppins', 'sans-serif']
      },
      screens: {
        "xs" : '350px',
        "ms" : '1080px',
        "ml" : '1440px',
        "xxl" : '1600px',
        "vl" : '1920px'
      },
    },
  },
  plugins: [],
}