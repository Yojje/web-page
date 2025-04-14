/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gothic: ['Special Gothic Expanded One', 'sans-serif'],
        gilda: ['Gilda Display', 'serif'],
      }
    },
  },
  plugins: [],
}