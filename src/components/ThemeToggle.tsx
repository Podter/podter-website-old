import useTheme from "@/hooks/useTheme";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { useCallback } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const toggleTheme = useCallback(() => {
    if (isDark) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, [isDark, setTheme]);

  return (
    <Button
      onClick={toggleTheme}
      variant="outline"
      size="xs"
      data-tooltip-id="tooltip"
      data-tooltip-content="Toggle theme"
    >
      {isDark ? <Moon size={16} /> : <Sun size={16} />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
