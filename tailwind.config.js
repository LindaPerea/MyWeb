/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pinkBg': '#ffebe7',
        'pinkLetter' : '#ff82a9',
        'pinkButton' : '#ffc0be'
      }
      
    },
  },
  plugins: [],
}

