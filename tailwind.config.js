/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xsm: "320px",
        xs: "375px",
        sm: "425px",
        xl: "1280px",
        xxl: "2560px"
      },
      height: {
        "10/12": "83.33%",
        "11/12": "91.16%",
      },
      padding: {
        0: "0",
        "1/6": "16.66%",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
      },
      maxHeight: {
        0: "0",
        "1/12": "8.33%",
        "2/12": "16.66%",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "10/12": "83.33%",
        "11/12": "91.16%",
        full: "100%",
      },
      backgroundSize: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
      },
      fontSize: {
        xxs: "0.6rem",
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

