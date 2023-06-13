/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255, 255, 255, 0.17)",
        "light-gray": "#f0eff5",
        "color-danger": "rgb(255, 67, 54)",
        "color-primary": "rgb(71, 7, 234)",
        "color-warning": "rgb(234, 181, 7)",
        "color-purple": "rgb(160, 99, 245)",
        "link-color": "rgba(0,0,0,0.3)",
      }
    },
  },
  plugins: [],
}

