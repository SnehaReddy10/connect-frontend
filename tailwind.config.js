/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      lineClamp: {
        3: '3',
      },
    },
    keyframes: {
      'fade-in': {
        '0%': {
          opacity: 0,
        },
        '100%': {
          opacity: 1,
        },
      },
      zoomIn: {
        '0%': {
          transform: 'scale(0)',
          opacity: 0,
        },
        '100%': {
          transform: 'scale(1)',
          opacity: 1,
        },
      },
      slideInVertical: {
        '0%': {
          transform: 'translateY(10rem)',
          opacity: 0,
        },
        '100%': {
          transform: 'translateY(0)',
          opacity: 1,
        },
      },
      flipClose: {
        '0%': {
          transform: 'rotateY(0deg)',
          opacity: 1,
        },
        '100%': {
          transform: 'rotateY(90deg)',
          opacity: 0,
        },
      },
      flipOpen: {
        '0%': {
          transform: 'rotateY(90deg)',
          opacity: 0,
        },
        '100%': {
          transform: 'rotateY(0deg)',
          opacity: 1,
        },
      },
    },
    animation: {
      fadeIn: 'fade-in 3s ease-in',
      zoomIn: 'zoomIn 3s ease',
      slideInVertical: 'slideInVertical 3s ease',
      flipClose: 'flipClose 3s ease',
      flipOpen: 'flipOpen 3s ease',
    },
  },
  plugins: [],
};
