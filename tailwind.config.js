/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Rampart: ['Titillium Web', 'sans-serif'],
      },
      fontSize: {
        lg: '1.5rem',
        xl: '2rem',
        '1xl': "'2.5rem",
        '2xl': '3rem',
        '3xl': '4rem',
        '4xl': '4.5rem',
      },
      borderRadius: {
        xl: '4rem',
      },
      minWidth: {
        '1/2': '45%',
      },
      screens: {
        phone: { max: '767px' },
        tablet: { min: '768px', max: '1023px' },
        laptop: { min: '1024px', max: '1279px' },
        desktop: { min: '1280px', max: '1535px' },
        desktopxl: { min: '1536px' },
      },
      colors: {
        xylo: {
          primary: '#333',
          black: '#121212',
          white: '#FFFFFF',
          yellow: '#f90',
          tosca: '#00c4d2',
          border: '#e0e0e0',
          solidBlack: '#050505',
          navBorder: '#0d0d0d',
          blackCard: '#141414'
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
