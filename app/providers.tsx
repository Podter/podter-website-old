"use client";

import type { PropsWithChildren } from "react";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/Tooltip";

if (process.env.NODE_ENV === "production") {
  console.log(
    "%c⠀Podter. ",
    `
  background: linear-gradient(to right, hsl(347, 87%, 44%), hsl(355, 76%, 59%));
    color: white;
    font-weight: bold;
    font-size: 3rem;
  `
  );
  console.log("A student and self-taught developer from Thailand.");
}

export default function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>{children}</TooltipProvider>
    </ThemeProvider>
  );
}
