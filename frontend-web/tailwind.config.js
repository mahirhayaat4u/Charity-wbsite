/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia' ],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    },
    extend: {
      filter: {
        'custom-color': 'invert(43%) sepia(82%) saturate(5828%) hue-rotate(360deg) brightness(91%) contrast(89%)',
      },
      clipPath: {
        'circle': 'circle(50%)',
        'ellipse': 'ellipse(50% 75%)',
        'polygon': 'polygon(50% 0%, 0% 100%, 100% 100%)'
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
    },
    function({ addUtilities }) {
      const newUtilities = {
        '.clip-path-circle': {
          'clip-path': 'circle(50%)',
        },
        '.clip-path-ellipse': {
          'clip-path': 'ellipse(50% 75%)',
        },
        '.clip-path-polygon': {
          'clip-path': 'polygon(50% 0%, 0% 100%, 100% 100%)',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
 
}
