import type { Theme } from "@/lib/themeHandler";
import { useState } from "react";

const getTheme = (): Theme =>
  document.documentElement.classList.contains("dark") ? "dark" : "light";

export default function useTheme() {
  const [theme, setThemeState] = useState<Theme>(getTheme);

  function setTheme(theme: Theme | null) {
    document.dispatchEvent(new CustomEvent("set-theme", { detail: theme }));
    setThemeState(getTheme);
  }

  return { theme, setTheme };
}
