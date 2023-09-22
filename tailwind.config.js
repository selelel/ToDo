/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        palette: {
          100: ' rgb(18, 25, 32)',
          200: 'rgb(24, 33, 44)',
          300: '#0088a9',
        },
        
      }
    },
  },
  plugins: [],
}

