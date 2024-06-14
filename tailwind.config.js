/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    screens: {
      'xsm': '360px',
      // => @media (min-width: 360px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '700px',
      // => @media (min-width: 700px) { ... }

      'lg': '1020px',
      // => @media (min-width: 1020px) { ... }

      '2lg': '1100px',
      // => @media (min-width: 1100px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1280px) { ... }

      '1xl': '1380px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1280px) { ... }

      '3xl': '1876px',
      // => @media (min-width: 1280px) { ... }px',
      
    },
  },
  plugins: [],
}

