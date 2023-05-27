/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    // textColor: {
    //   primary: "#EEEEEE",
    //   secondary: "#22831",
    //   grey: "#393E46",
    //   yellow: "#FFD369",
    // },
    extend: {
      colors: {
        primary: "#EEEEEE",
        secondary: "#22831",
        grey: "#393E46",
        yellow: "#FFD369",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};