/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif']
      },
      colors: {
        'custom-green': '#4EE1A0',
        'custom-gray': '#D9D9D9',
        'custom-dark-gray': '#242424',
      }
    }
  },
  plugins: [],
}

