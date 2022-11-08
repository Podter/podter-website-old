import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string | undefined>();

  useEffect(() => setCurrentTheme(theme), [theme]);

  function changeTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <button
      className={`btn btn-ghost btn-circle swap swap-rotate ${
        currentTheme === "dark" ? "swap-active" : null
      }`}
      onClick={changeTheme}
    >
      <Sun className="swap-on h-5 w-5" />
      <Moon className="swap-off h-5 w-5" />
    </button>
  );
}
