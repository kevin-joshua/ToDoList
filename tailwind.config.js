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
        'fancy1': ['Pacifico', 'cursive'],
        fancy: ['"Comic Neue"', 'cursive'],
        serif: ['Georgia', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'pastel-blue': '#f0g9ff',
        primary: '#8d6e63',
        'primary-dark': '#3e2723',
        secondary: '#a1887f',
        accent: '#d7ccc8',
        background: '#efebe9',
        text: '#3e2723',
      },

    },
  },
  plugins: [],
}