/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-600': '#8254ff',
        'blue-500': '#3b82f6',
      },
    },
  },
  plugins: [],
}

