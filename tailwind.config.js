/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      primary:"#1E90FF",
      secondary:"#FF6347",
      primaryLight:"#00BFFF",
      black:"#1E1E1E",
      white:"#FFFFFF",
      red:"#FF0000",
    },
    extend: {
      fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    },
  },
  plugins: [],
}