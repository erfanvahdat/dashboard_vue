module.exports = {

  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}',  // Default path for components inside src
    './components/**/*.{vue,js,ts,jsx,tsx}',  // Include the components folder if it's outside src
  ],
  theme: {
    extend: {
      animation: {
        spin: 'spin 1s linear infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      
      
    },
  },
  plugins: [
  
        // require('daisyui'),
        



  ],
}
