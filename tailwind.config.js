module.exports = {
  purge: ["./public/*.html", "./src/**/*.tsx"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: { min: "450px" },
      },
      colors: {
        primary: ["#00598F", "#21345E", "#1C274B"],
        secondary: ["#E00000"],
        tertiary: ["#F9C200"],
        whatsapp: "#25D366",
        facebook: "#4267B2",
        twitter: "#1DA1F2",
        linkedin: "#0A66C2",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
