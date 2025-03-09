/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "home_image" : "url('/home.png')"
      },
      fontSize:{
        "xl1" : "82px"
      },
      width:{
        "imageSize":"20rem"
      }
    },
  },
  plugins: [],
}

