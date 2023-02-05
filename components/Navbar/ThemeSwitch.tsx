import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
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
      className={`btn btn-ghost btn-circle swap swap-rotate transition-all ${
        currentTheme === "dark" ? "swap-active" : null
      } transition-none`}
      onClick={changeTheme}
    >
      <Sun className="swap-on h-6 w-6" size={24} />
      <Moon className="swap-off h-6 w-6" size={24} />
    </button>
  );
}
