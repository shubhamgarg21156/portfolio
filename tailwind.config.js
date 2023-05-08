/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Rubik:['Rubik' , 'sans-serif'],
      },
      colors:{
        firstColor:"hsl(353, 100%, 65%)",
        titleColor:"hsl(244,24%,26%)",
        textColor:"hsl(244,26%,43%)",
        bodyColor:"hsl(250,60%,98%)",
        containerColor:""
      },
      fontSize:{
        "h1": "2.25rem",
        "h2":"1.5rem",
        "h3":"1.25rem",
        "normal":"1rem",
        "small":"0.875rem",
        "smaller":"0.813rem"
      },
      keyframes:{
        "ani-mouse":{
          '0%, 100%' : { top : '29%'},
          '25%, 50%' : { top : '50%'}
        }
      },
      animation:{
        "mouse":"ani-mouse 1s linear infinite"
      }
    },
  },
  plugins: [],
}

