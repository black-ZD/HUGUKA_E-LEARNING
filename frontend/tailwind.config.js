module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  darkMode: "class",

  theme: {
    extend: {
      boxShadow: {
        brand: "0 5px 20px rgba(0, 64, 0, 0.35)",
      },

      colors: {
        primary: "#006400",
        secondary: "#22C55E",
        dark: "#003300",

        gray: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a"
        }
      },
    },
  },

  plugins: [],
};