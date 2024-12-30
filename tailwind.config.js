/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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

