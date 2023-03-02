/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "purp" : "#4B2A63",
        "dark" : "#F8F8F8",
      },
      fontFamily: {
        "pop" : ['Poppins', 'sans-serif']
      },
      
    },
  },
  plugins: [],
}