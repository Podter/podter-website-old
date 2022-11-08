import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();

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
        theme === "light" ? "swap-active" : null
      }`}
      onClick={changeTheme}
    >
      <Sun className="swap-off h-5 w-5" />
      <Moon className="swap-on h-5 w-5" />
    </button>
  );
}
