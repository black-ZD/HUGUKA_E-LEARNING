module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  darkMode: "class",

  theme: {
    extend: {
      boxShadow: {
        brand: "0 5px 20px rgba(0, 64, 0, 0.35)",
      },

      colors: {
        "huguka-green": "#006400",
        "huguka-light": "#22C55E",
        "huguka-dark": "#003300"
      },
    },
  },

  plugins: [],
};