/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "purp" : "#4B2A63",
      },
      fontFamily: {
        "popins" : ['Poppins', 'sans-serif']
      },
      
    },
  },
  plugins: [],
}