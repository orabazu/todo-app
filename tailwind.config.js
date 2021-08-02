module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero': "url('./assets/undraw_hero.svg')",
      }),
      backgroundSize: {
        '40%': '40%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],

}
