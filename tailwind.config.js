/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./hugo_stats.json",
    "./layouts/**/*.{html,js}",
    "./content/**/*.{html,md}",
    "./assets/**/*.{css,js}",
    "./themes/**/*.{html,js}",
    "./node_modules/@hugoblox/**/*.{js,html}"
  ],
  theme: { extend: {} },
  plugins: [require("@tailwindcss/typography")],
};
