/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
      },

      colors: {        
          c1: '#000D3F',       
        }
    },
  },
  plugins: [],
}
