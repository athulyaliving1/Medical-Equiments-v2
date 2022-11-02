const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        matisse: {
          50: "#f2f9fd",
          100: "#e4f0fa",
          200: "#c2e1f5",
          300: "#8ccaed",
          400: "#4faee1",
          500: "#2994ce",
          600: "#1a76af",
          700: "#176293",
          800: "#165076",
          900: "#184462",
        },
      },
    },

    screens: {
      ss: "320px",
      // => @media (min-width: 640px) { ... }

      sm: "375px",
      sl: "425px",

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },

   
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"],
      sans: ["Open Sans", "sans-serif"],
      Helvetica: ["Open Sans", "sans-serif"],
    },

    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
