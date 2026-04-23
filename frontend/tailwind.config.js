const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./public/index.html"],
  darkMode: false, 
  theme: {
    extend: {
       boxShadow: {
                    'brand': '0 5px 7px 8px rgb(15, 59, 35)', // Your custom shadow
            },
      colors: {
       
        'huguka-green': '#004000',
        'huguka-light': '#008000',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
