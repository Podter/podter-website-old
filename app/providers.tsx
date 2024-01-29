"use client";

import type { PropsWithChildren } from "react";
import { useEffect } from "react";
import PlausibleProvider from "next-plausible";
import { ThemeProvider } from "next-themes";

import { TooltipProvider } from "~/components/ui/tooltip";

export default function Providers({ children }: PropsWithChildren) {
  useEffect(() => {
    console.log(
      "%c⠀Podter ",
      `
      background: #1e1e2e;
      color: #cdd6f4;
      font-weight: bold;
      font-size: 3rem;
    `,
    );
    console.log("A student and self-taught developer from Thailand.");
  }, []);

  return (
    <PlausibleProvider
      domain="podter.me"
      customDomain="https://plausible.podter.me"
      selfHosted
      trackOutboundLinks
    >
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <TooltipProvider>{children}</TooltipProvider>
      </ThemeProvider>
    </PlausibleProvider>
  );
}
