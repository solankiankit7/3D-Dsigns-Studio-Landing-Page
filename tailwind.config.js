/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#F5F7FA",
          100: "#E9EEF4",
          200: "#C8D6E6",
          300: "#A6BED8",
          400: "#6F97C3",
          500: "#4977B1",  /* muted luxury blue */
          600: "#355B8A",
          700: "#274366",
          800: "#1A2C42",
          900: "#0E1926"
        }
      }
    },
  },
  plugins: [],
};
