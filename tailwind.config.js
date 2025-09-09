/** @type {import('tailwindcss').Config} */

// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    "./hugo_stats.json",
    "./layouts/**/*.{html,js}",
    "./content/**/*.{html,md}",
    "./assets/**/*.{css,js}",
    "./themes/**/*.{html,js}",
    "./node_modules/@hugoblox/**/*.{js,html}",
  ],
  safelist: ['dark', { pattern: /^dark:/ }],
  theme: {
    extend: {
      fontSize: {
        base: ['1.02rem', '1.8'],   // body text size & line-height
        lg:   ['1.125rem', '1.75'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'h1': { fontSize: '2rem',   lineHeight: '1.2', fontWeight: '700' },
            'h2': { fontSize: '1.5rem', lineHeight: '1.3', fontWeight: '700' },
            'h3': { fontSize: '1.25rem',lineHeight: '1.35',fontWeight: '600' },
            'p, li': { fontSize: theme('fontSize.base')[0] },
          },
        },
        lg: {
          css: {
            'h1': { fontSize: '2.25rem' },
            'h2': { fontSize: '1.75rem' },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
