/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "latte-text": "#4c4f69",
        "latte-overlay2": "#7c7f93",
        "mocha-red": "#f38ba8",
        "mocha-text": "#cdd6f4",
        "mocha-base": "#1e1e2e",
        "mocha-crust": "#11111b",
      },
    },
  },
  plugins: [
    require("@catppuccin/tailwindcss")({
      prefix: "ctp",
      defaultFlavour: "latte",
    }),
    require("tailwind-scrollbar"),
  ],
};
