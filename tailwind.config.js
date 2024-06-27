/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "navbar":'#2B293D',
       "body":'#272342',
        "button":"#230c69"
      //   "navbar":'',
      //  "body":'#F6F6F6',#002C3E
      //   "button":"#287094"
      }
    },
  },
  plugins: [],
}