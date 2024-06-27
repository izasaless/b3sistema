/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        customBlue: '#5867DD',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      width: {
        custom: '340px', 
      },
      borderRadius: {
        'xl': '30px', 
      },
      borderWidth: {
        customBorder: '1px',

      },
      
    },
  },
  plugins: [],
}
