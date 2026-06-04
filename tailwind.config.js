/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#6366f1", // indigo
          DEFAULT: "#4f46e5",
          dark: "#3730a3",
        },
        accent: {
          light: "#22d3ee", // cyan
          DEFAULT: "#06b6d4",
          dark: "#0891b2",
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Outfit", "sans-serif"],
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
        'gradient-y': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'top center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'bottom center' },
        },
        'gradient-xy': {
          '0%, 100%': { 'background-size': '400% 400%', 'background-position': 'left top' },
          '50%': { 'background-size': '400% 400%', 'background-position': 'right bottom' },
        }
      }
    },
  },
  plugins: [],
}
