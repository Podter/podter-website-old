import { defineConfig } from "windicss/helpers";

export default defineConfig({
  darkMode: "class",
  plugins: [
    require("@catppuccin/tailwindcss")({
      prefix: "ctp",
      defaultFlavour: "latte",
    }),
  ],
});
