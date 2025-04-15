/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        gilda: ['Gilda Display', 'serif'],
        gothic: ['Special Gothic', 'sans-serif'],
      }
    },
  },
  plugins: [],
}