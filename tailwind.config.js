module.exports = {
  purge: ["./public/*.html", "./src/**/*.tsx"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: ["#432fb6", "#34248b", "#2F2662"],
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
