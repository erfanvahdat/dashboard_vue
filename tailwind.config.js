module.exports = {
  


  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    

    

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


