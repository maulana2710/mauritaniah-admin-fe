/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(200, 223, 155)',
        secondary: 'rgb(191, 230, 178)',
        tertiary: 'rgb(182, 237, 200)',
        quarternary: '',
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};

// background-image: linear-gradient(-14deg, rgb(200, 223, 155), rgb(191, 230, 178), rgb(182, 237, 200) 81.39%);