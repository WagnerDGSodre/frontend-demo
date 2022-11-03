/** @type {import('tailwindcss').Config} */
module.exports = {
  purge:[
    "./src/components/**/*.{jsx,tsx,js,ts}",
    "./src/pages/**/*.{jsx,tsx,js,ts}"
  ],
  content: ["./src/**/*.{html,js}"],
  darkMode:"class",
  theme: {
    extend: {},
  },
  plugins: [],
}
