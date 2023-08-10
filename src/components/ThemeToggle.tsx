import useTheme from "@/hooks/useTheme";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  function toggleTheme() {
    if (isDark) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return (
    <Button onClick={toggleTheme} variant="outline" size="xs">
      {isDark ? <Moon size={16} /> : <Sun size={16} />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
