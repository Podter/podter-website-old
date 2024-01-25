import type { Metadata, Viewport } from "next";
import type { PropsWithChildren } from "react";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { BordersHorizontal, BordersVertical } from "~/components/borders";
import Navbar from "~/components/navbar";
import SkipContent from "~/components/skip-content";
import StarField from "~/components/starfield";
import { TooltipProvider } from "~/components/ui/tooltip";
import { defaultMetadata } from "~/constants/metadata";
import { CalSans } from "~/lib/cal-sans";
import { cn } from "~/lib/utils";
import { ThemeProvider } from "~/providers/theme-provider";

import "./globals.scss";

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eff1f5" },
    { media: "(prefers-color-scheme: dark)", color: "#1e1e2e" },
  ],
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "overflow-x-hidden font-sans",
          GeistSans.variable,
          GeistMono.variable,
          CalSans.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider>
            <SkipContent />
            <div className="container relative flex flex-col">
              <Navbar />
              <main
                className="mb-16 flex flex-col px-4 md:mx-6"
                data-pagefind-body
              >
                <div id="content" tabIndex={-1} data-pagefind-ignore />
                {children}
              </main>
              <BordersVertical />
            </div>
            <BordersHorizontal />
            <StarField />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
