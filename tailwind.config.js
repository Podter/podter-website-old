/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        "ctp-latte": {
          primary: "#d20f39",
          secondary: "#1e66f5",
          accent: "#179299",
          neutral: "#dce0e8",
          "base-100": "#eff1f5",
          info: "#04a5e5",
          success: "#40a02b",
          warning: "#df8e1d",
          error: "#e64553",
        },
      },
      {
        "ctp-mocha": {
          primary: "#f38ba8",
          secondary: "#89b4fa",
          accent: "#94e2d5",
          neutral: "#11111b",
          "base-100": "#1e1e2e",
          info: "#89dceb",
          success: "#a6e3a1",
          warning: "#f9e2af",
          error: "#eba0ac",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
