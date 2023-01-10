/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        azul: '#3E3D65',
        azulClielo: '#87C8F9',
        gris: '#D4EDFE',
        amarillo: '#EDCE76'
      }
    },
  },
  plugins: [],
}