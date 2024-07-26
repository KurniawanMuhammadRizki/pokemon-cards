/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#252A3E",
        "search-color": "#97A0CC",
        "card-bg": "#F0F3FF",
        "card-name": "#212E4C",
        "card-detail": "#05091B",
        "font-white": "#FFFFFF",
        "sort-color": "#3D4466",
        "toogle-active": "#0C1231",
      },
    },
    fontFamily: {
      "DM-Sans": ["DM Sans", "sans-serif"],
    },
  },
  plugins: [],
};
