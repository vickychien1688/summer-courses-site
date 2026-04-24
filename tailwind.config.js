/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: "#FFF8F0",
          orange: "#E8772E",
          brown: "#5D4037",
          yellow: "#F9A825",
        },
      },
      fontFamily: {
        sans: [
          "Noto Sans TC",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
