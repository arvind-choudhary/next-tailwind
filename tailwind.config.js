module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'btn-primary': '#42a5f5',
        'btn-secondary': '#ab47bc',
        'btn-error': '#d32f2f',
        'btn-info': '#0288d1',
        'btn-success': '#388e3c',
      }
    },
  },
  plugins: [],
}