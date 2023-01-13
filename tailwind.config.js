/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './screens/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "psans": ["IBM Plex Sans"],
        "raleway": ["Raleway"]
      },
      spacing: {
        "th": "10%"
      }
    },
  },
  plugins: [],
}
