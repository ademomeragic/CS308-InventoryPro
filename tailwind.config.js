/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-blue": "#008E8E",
        "lighter-blue": "#01AAAA",
        "light-white": "rgba(255,255,255,0.18)",
      },
      strokeWidth: {
        1: "0.5px",
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      display: ["focus-group"],
    },
  },
};
