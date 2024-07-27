/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        customFont: ['"Custom Font"', "inter"],
        'fancy': ['Pacifico', 'cursive'],
      },
      colors: {
        'pastel-blue': '#f0g9ff',
      },

    },
  },
  plugins: [],
}