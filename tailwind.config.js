/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "home_image" : "url('/src/assets/home.png')"
      },
      fontSize:{
        "xl1" : "82px"
      }
    },
  },
  plugins: [],
}

