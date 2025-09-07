/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',   // important
  content: [
    "./hugo_stats.json",
    "./layouts/**/*.{html,js}",
    "./content/**/*.{html,md}",
    "./assets/**/*.{css,js}",
    "./themes/**/*.{html,js}",
    "./node_modules/@hugoblox/**/*.{js,html}"
  ],
  safelist: [
    'dark',             // ensure dark class survives
    /^dark:/,           // preserve dark: prefixed utilities
  ],
  theme: { extend: {} },
  plugins: [require("@tailwindcss/typography")],
};
