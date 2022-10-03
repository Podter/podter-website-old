module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Catppuccin Morning
        "catppuccin-flamingo": "#F2CDCD",
        "catppuccin-mauve": "#DDB6F2",
        "catppuccin-pink": "#F5C2E7",
        "catppuccin-naroon": "#E8A2AF",
        "catppuccin-red": "#F28FAD",
        "catppuccin-peach": "#F8BD96",
        "catppuccin-yellow": "#FAE3B0",
        "catppuccin-green": "#ABE9B3",
        "catppuccin-teal": "#B5E8E0",
        "catppuccin-blue": "#96CDFB",
        "catppuccin-sky": "#89DCEB",

        // Catppuccin Night
        "catppuccin-black-0": "#161320",
        "catppuccin-black-1": "#1A1826",
        "catppuccin-black-2": "#1E1E2E",
        "catppuccin-black-3": "#302D41",
        "catppuccin-black-4": "#575268",
        "catppuccin-gray-0": "#6E6C7E",
        "catppuccin-gray-1": "#988BA2",
        "catppuccin-gray-2": "#C3BAC6",
        "catppuccin-white": "#D9E0EE",
        "catppuccin-lavender": "#C9CBFF",
        "catppuccin-rosewater": "#F5E0DC",
      },
      fontFamily: {
        "poppins": ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
