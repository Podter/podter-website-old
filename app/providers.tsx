"use client";

import type { PropsWithChildren } from "react";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/Tooltip";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>{children}</TooltipProvider>
    </ThemeProvider>
  );
}
