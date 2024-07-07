/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'primary-green': '#495e57',
      'primary-yellow': '#f4ce14',
      'secondary-coral': '#ee9972',
      'secondary-nude': '#fbdabb',
      'secondary-grey': '#edefee',
      'secondary-dark-grey': '#333333',
    },
    fontFamily: {
      'sans': ['Karla'],
      'serif': ['Markazi Text'],
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ['light'],
  }
}

