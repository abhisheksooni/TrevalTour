/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "color1":"#EDF1FE",
        "color2":"#000000",
        "color3":"#F8F8F8",
        "color4":"#FFFFFF",
        // "color5":"#5356F6",
        "color5":"#5659F5", 
        "color6":"#8688F8", 
      }
    },
    
  },
  plugins: [],
}

