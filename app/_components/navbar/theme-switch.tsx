"use client";

import { useCallback } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "~/components/ui/button";

export default function ThemeSwitch() {
  const { resolvedTheme: theme, setTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, [setTheme, theme]);

  return (
    <Button
      size="icon"
      className="h-6 w-6"
      variant="ghost"
      onClick={toggleTheme}
    >
      <SunIcon className="h-4 w-4 dark:hidden" width={16} height={16} />
      <MoonIcon className="hidden h-4 w-4 dark:block" width={16} height={16} />
    </Button>
  );
}
