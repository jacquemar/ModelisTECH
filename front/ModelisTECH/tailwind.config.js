/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        base1: '#1a496b',
        black1: '#2b2b2b',
      },
      fontFamily: {
        poppins: ['"Poppins"', 'serif'],
        roboto: ['"Roboto"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

