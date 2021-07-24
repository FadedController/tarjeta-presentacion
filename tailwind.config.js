module.exports = {
  purge: ["./public/*.html", "./src/**/*.tsx"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: ["#432fb6", "#34248b", "#2F2662"],
        secondary: ["#E00000"],
        tertiary: ["#F9C200"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
