/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bgactive: "url(./images/bg-main-desktop.png)",
      },
      fontSize: {
        xsm: '0.6rem'
      }
    },
  },
  plugins: [],
}