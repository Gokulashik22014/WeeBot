/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        background:"#FFECB5",
        narutoprimary:"#FF8277",
        luffyprimary:"#FF0000",
        mikuprimary:"#F53FCD",
        anyaprimary:"#2DB1CF",
      }
    },
  },
  plugins: [],
}

