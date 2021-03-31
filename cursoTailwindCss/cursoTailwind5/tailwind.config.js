const { colors, spacing } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'new-color': '#edc077',
        gray: {
          ...colors.gray,
          '900': '#d3d3d3'
        }
      },
      spacing: {
        '50': '20rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
