/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  variants: {
    extend: {
      zIndex: ['responsive'],
    },
  },
  theme : {

    extend: {

      animation: {
        'slide-in': 'slide-in 0.3s ease-in-out',
        'slide-out': 'slide-out 0.3s ease-in-out',
      } ,
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-out': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },



    },
  },
  plugins: [],
}

