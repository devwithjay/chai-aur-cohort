/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,html}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': {
          light: '#4fd1c5',
          DEFAULT: '#2c7a7b',
          dark: '#285e61'
        },
        'background': {
          light: '#f9fafb',
          dark: '#111827'
        },
        'surface': {
          light: '#ffffff',
          dark: '#1f2937'
        },
        'text': {
          light: '#111827',
          dark: '#f9fafb'
        },
        'priority': {
          low: {
            bg: '#d1fae5',
            text: '#047857'
          },
          medium: {
            bg: '#fef3c7',
            text: '#b45309'
          },
          high: {
            bg: '#fee2e2',
            text: '#b91c1c'
          }
        }
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}