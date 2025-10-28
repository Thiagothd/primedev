/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'dark-blue': '#0A0F29',
        'cyan-blue': '#00FFC2',
        'electric-blue': '#007BFF',
        'soft-gray': '#D9E0E8',
      },
    },
  },
  plugins: [],
}