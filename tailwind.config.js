module.exports = {
  purge: [
    './src/components/**/*.js',
    './src/templates/*.js',
    './src/pages/*.js',
    './src/cms/**/*.js',
  ],
  theme: {
    minHeight: {
      '0': '0',
      '1/4': '25vh',
      '2/5': '40vh',
      '1/2': '50vh',
      '3/5': '60vh',
      '3/4': '75vh',
      'full': '100%',
      'screen': '100vh'
    },
    extend: {
      colors: {
        'pumpkin': '#FE7F2D',
        'sunglow': '#FCCA46',
        'charcoal': '#233D4D',
        'olivine': '#A1C181',
        'pine': '#619B8A'
      }, 
      textColor: {
        'primary': '#A1C181',
        'secondary': '#619B8A',
        'danger': '#FE7F2D',
        'info': '#FCCA46',
        'dark': '#233D4D'
      }
    },
    fontFamily: {
      'sans': ['Lato', 'san-serif'],
      'body': ['Lato', 'san-serif'],
    }
  },
  variants: {
    display: ["group-hover"],
    textColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [],
}
