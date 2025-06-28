/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#051f20",
        secondary1: "#9c7627",
        secondary2: "#dfa408",
      },
      fontFamily: {
        trajan: ['"Trajan Pro"', 'serif'], // primary font - headings and shii
        poppins: ['Poppins', 'sans-serif'], // secondary fonts like parags and span
      },
    },
  },
  plugins: [],
}
