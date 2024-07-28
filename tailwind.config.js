/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roslindale: ["roslindale", "sans-serif"],
        mint: ["mint", "sans-serif"],
      },
    },
  },
  plugins: [],
};
