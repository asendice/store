const colors = require('tailwindcss/colors')


module.exports = {
  purge: ['./src/components', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      center: true,
    },
    colors: {
      green: "#8be59c",
      pink: "#ea3574",
      purple: "#9689e2",
      blue: "#75b9d4",
      white: "#fff"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
