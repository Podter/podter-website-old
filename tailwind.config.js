/** @type {import('tailwindcss').Config} */

const { variants } = require("@catppuccin/palette");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("@catppuccin/tailwindcss")({
      prefix: "ctp",
      defaultFlavour: "latte",
    }),
    require("@tailwindcss/typography"),
  ],
  daisyui: {
    themes: [
      {
        "ctp-latte": {
          primary: variants.latte.red.hex,
          secondary: variants.latte.blue.hex,
          accent: variants.latte.teal.hex,
          neutral: variants.latte.crust.hex,
          "base-100": variants.latte.base.hex,
          info: variants.latte.sky.hex,
          success: variants.latte.green.hex,
          warning: variants.latte.yellow.hex,
          error: variants.latte.maroon.hex,
        },
      },
      {
        "ctp-mocha": {
          primary: variants.latte.red.hex,
          secondary: variants.latte.blue.hex,
          accent: variants.latte.teal.hex,
          neutral: variants.mocha.base.hex,
          "base-100": variants.mocha.crust.hex,
          info: variants.latte.sky.hex,
          success: variants.latte.green.hex,
          warning: variants.latte.yellow.hex,
          error: variants.latte.maroon.hex,
        },
      },
    ],
  },
};
