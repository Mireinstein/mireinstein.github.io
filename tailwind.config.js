/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from 'tailwind-scrollbar'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif']
      },
      colors: {
        bg: 'var(--color-bg)',
        text: 'var(--color-text)',
      },
    },
  },
  darkMode: 'class',
  plugins: [tailwindScrollbar],
}