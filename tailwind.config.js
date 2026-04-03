/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'apple-black': '#1d1d1f',
        'apple-gray': '#424245',
        'apple-light': '#f5f5f7',
      },
    },
  },
  plugins: [],
}