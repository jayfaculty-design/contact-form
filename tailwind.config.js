/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'light-green': 'hsl(148, 38%, 91%)',
      'medium-green': 'hsl(169, 82%, 27%)',
      'deep-red': 'hsl(0, 66%, 54%)',
      'neutral-white': 'hsl(0, 0%, 100%)',
      'medium500-grey': 'hsl(186, 15%, 59%)',
      'darker900-grey': 'hsl(187, 24%, 22%)',
    },
    extend: {},
  },
  plugins: [],
}