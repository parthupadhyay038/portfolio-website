module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      animationDelay: {
        '1000': '1000ms',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.delay-1000': {
          'animation-delay': '1000ms',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};