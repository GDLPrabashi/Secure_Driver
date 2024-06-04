/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors :{
        "primary":"#010851",
        "secondary":"#9A7AF1",
        "taritiary":"#707070",
        "pink":"#EE9AE5"
      }
    },
    boxShadow :{
      "3xl" : '0 35px 60px -15px rgba(0,0,0,0.3)',
    }
  },
  plugins: [],
}







