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
      green: colors.emerald,
      pink: colors.pink,
      purple: colors.violet,
      blue: colors.blue,
      white: colors.trueGray
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
