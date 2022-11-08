/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[
    './src/components/**/*.{jsx,tsx,js,ts}',
    './src/pages/**/*.{jsx,tsx,js,ts}'
  ],
  darkMode:'class',
  theme: {
    extend: {},
  },
  plugins: [
     require('@tailwindcss/forms')
    ],
}
