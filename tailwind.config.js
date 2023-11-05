/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(6, 184, 113, .50)'
      }
    },
  },
  plugins: [
    import ('@tailwindcss/forms'),
  ],
}

