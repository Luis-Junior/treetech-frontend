module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '200': '200%',
       }
    },
  },
  variants: {
    opacity: ({ after }) => after(['disabled']),
    extend: {},
  },
  plugins: [],
}
