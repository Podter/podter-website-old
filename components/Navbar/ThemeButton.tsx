import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type Props = {
  navColor: boolean;
};

export default function ThemeButton({ navColor }: Props) {
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
      className={`btn ${
        !navColor
          ? "bg-base-100/20 hover:bg-base-100/75 backdrop-blur-xl shadow-sm"
          : "btn-ghost"
      } btn-circle swap swap-rotate mr-2 border-0 transition-all ${
        currentTheme === "dark" ? "swap-active" : null
      }`}
      onClick={changeTheme}
    >
      <Sun className="swap-on h-5 w-5" />
      <Moon className="swap-off h-5 w-5" />
    </button>
  );
}
