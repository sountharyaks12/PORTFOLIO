/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
      "xs": "400px",
      'sm': "640px",
      'md':"768px",
      'lg':"1024px",
      'xl':"1280px"
    },
    animation: {
      fadeIn: 'fadeIn 1.5s ease-out',
      slideInLeft: 'slideInLeft 1s ease-out',
      slideInRight: 'slideInRight 1s ease-out',
      bounceIn: 'bounceIn 1s ease-out',
      zoomIn: 'zoomIn 1.2s ease-out',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
      slideInLeft: {
        '0%': { transform: 'translateY(-100%)' },
        '100%': { transform: 'translateY(0)' },
      },
      slideInRight: {
        '0%': { transform: 'translateY(100%)' },
        '100%': { transform: 'translateY(0)' },
      },
      bounceIn: {
        '0%': { transform: 'scale(0.5)', opacity: 0 },
        '50%': { transform: 'scale(1.2)', opacity: 1 },
        '100%': { transform: 'scale(1)', opacity: 1 },
      },
      zoomIn: {
        '0%': { transform: 'scale(0.5)', opacity: 0 },
        '100%': { transform: 'scale(1)', opacity: 1 },
      },
    },
  },
  plugins: [],
}

