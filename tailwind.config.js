/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2C3E50", // Midnight Blue
        secondary: "#FF6F61", // Light Coral
        background: "#F5F5DC", // Beige
        white: "#FFFFFF", // White
      },
    },
  },
  plugins: [],
}