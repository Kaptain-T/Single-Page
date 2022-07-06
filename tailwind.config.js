/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}", 
  "./components/**/*.{html,js}",
  "./public/index.html",
  "./public/script.js"],
  theme: {
    extend: {
      fontFamily: {
        'Epilogue': ['Epilogue'],
      },
      colors: {
        'Almost-white': 'hsl(0, 0%, 98%)',
        'Medium-Grey': 'hsl(0, 0%, 41%)',
        'Almost-Black': 'hsl(0, 0%, 8%)',
      }
    },
  },
  plugins: [],
}