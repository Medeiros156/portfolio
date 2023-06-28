/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#080708e3",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#030203f2",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/bg1.jpg')",
        "works-pattern": "url('/src/assets/bg2.png')",
      },
    },
  },
  plugins: [],
};
