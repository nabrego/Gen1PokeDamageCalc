/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "'./src/**/*.{js,jsx,ts,tsx}'"
  ],
  theme: {
    extend: {
      colors: {
        gameboyWhite: '#d4d4d4',
        gameboyBlue: '#3f4576',
        gameboyGreen: '#6b7900',
        gameboyGray: '#6d7781',
        gameboyRed: '#8c255e',
      }
    },
  },
  plugins: [],
}

