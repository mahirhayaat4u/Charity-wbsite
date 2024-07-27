/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      filter: {
        'custom-color': 'invert(43%) sepia(82%) saturate(5828%) hue-rotate(360deg) brightness(91%) contrast(89%)',
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.filter-custom-color': {
          filter:'invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)',
        }
      }, ['responsive'])
    }
  ],
 
}
