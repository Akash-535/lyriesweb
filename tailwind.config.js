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
        'off-white': "#9F9DAB",
        'custom-black': "#14191C",
        'custom-gray': "#333333",
        'light-purple':"#DBDBF3",
        "black-again":"#2E2F37",
      },
      lineHeight:{
        "custom-3xl":"121%",
        "custom-5xl":"171%"
      },
      boxShadow:{
        "header-shadow":"0px 10px 10px 0px #31374D1A"
      }
    },
  },
  plugins: [],
}