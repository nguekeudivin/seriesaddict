/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: {
            DEFAULT: "#841D4F", // 👈 important
            50: "#F6E6EE",
            100: "#EAC0D4",
            200: "#D88FAF",
            300: "#C65E8A",
            400: "#A93867",
            500: "#841D4F",
            600: "#6E1842",
            700: "#581335",
            800: "#420E27",
            900: "#2C091A",
          },

          cyan: {
            DEFAULT: "#1E6C86",
            50: "#E6F4F8",
            100: "#BFE1EA",
            200: "#8CC9D8",
            300: "#59B1C6",
            400: "#3598B2",
            500: "#1E6C86",
            600: "#18586D",
            700: "#134354",
            800: "#0D2F3A",
            900: "#081C21",
          },

          wine: {
            DEFAULT: "#3C0A22",
            500: "#3C0A22",
          },

          dark: {
            DEFAULT: "#011921",
            500: "#011921",
          },
        },
      },
      fontFamily: {
        sans: ["Montserrat", "Avenir Next", "Segoe UI", "sans-serif"],
        anton: ["Anton", "sans-serif"],
      },
    },
  },
  plugins: [],
};
