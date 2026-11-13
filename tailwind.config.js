/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: { DEFAULT: '#1B5E20', 700: '#1B5E20', 600: '#2E7D32', 500: '#388E3C' }, // Primary
        fresh: '#2E7D32',                                                              // Fresh Green
        cream: { DEFAULT: '#FFF8F0', 100: '#FFF8F0', 200: '#F8EEDF', 300: '#EFE2CD' }, // Background
        gold: { DEFAULT: '#C9A227', soft: '#E6C65C', pale: '#F7EBC1' },               // Accent
        leaf: { DEFAULT: '#A5D6A7', light: '#DCEFD9' },                               // Light leaf green
        ink: '#212121',                                                                // Text
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(27,94,32,.06), 0 8px 24px -12px rgba(27,94,32,.18)',
      },
    },
  },
  plugins: [],
};
