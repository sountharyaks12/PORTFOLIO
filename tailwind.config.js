import { transform } from 'framer-motion';
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
      "xs": "300px",
      'sm': "480px",
      'md':"600px",
      'lg':"1024px",
      'xl':"1280px"
    },
    animation: {
      fadeIn: 'fadeIn 1.5s ease-out',
      slideLeft: 'slideLeft 1s ease-out',
      slideRight: 'slideRight 1s ease-out',
      bounce: 'bounce 0.5s ease-out',
      zoom: 'zoom 1s ease-out',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
      slideLeft: {
        '0%': { transform: 'translateY(-100%)' },
        '100%': { transform: 'translateY(0)' },
      },
      slideRight: {
        '0%': { transform: 'translateY(100%)' },
        '100%': { transform: 'translateY(0)',transform :'scale(1.2)' },
      },
      
      bounce: {
        '0%': { transform: 'scale(0.5)', opacity: 0 },
        '50%': { transform: 'scale(1.2)', opacity: 1 },
        '100%': { transform: 'scale(1)', opacity: 1 },
      },
      zoom: {
        '0%': { transform: 'scale(0.5)', opacity: 0 },
        '100%': { transform: 'scale(1)', opacity: 1 },
      },
    },
  },
  plugins: [],
}

