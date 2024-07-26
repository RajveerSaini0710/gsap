/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
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
