/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1140px",
        '2xl': '1140px'
      },
    },
    extend: {
      colors: {
        'off-white': "#FAFAFF",
        'custom-black': "#14191C",
        'custom-gray': "#333333",
        'light-purple':"#DBDBF3"
      },
      lineHeight:{
        "custom-5xl":"171%"
      },
      boxShadow:{
        "header-shadow":"0px 10px 10px 0px #31374D1A"
      }
    },
  },
  plugins: [],
}