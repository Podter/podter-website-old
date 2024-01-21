import type { Metadata, Viewport } from "next";
import type { PropsWithChildren } from "react";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { TooltipProvider } from "~/components/ui/tooltip";
import { defaultMetadata } from "~/constants/metadata";
import { CalSans } from "~/lib/cal-sans";
import { cn } from "~/lib/utils";
import { ThemeProvider } from "~/providers/theme-provider";
import { BordersHorizontal, BordersVertical } from "./_components/borders";
import Navbar from "./_components/navbar";
import SkipContent from "./_components/skip-content";

import "./globals.scss";

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eff1f5" },
    { media: "(prefers-color-scheme: dark)", color: "#1e1e2e" },
  ],
};

// TODO: 404 and error page
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
              <main className="mb-16 flex flex-col px-4 md:mx-6">
                <div id="content" tabIndex={-1} />
                {children}
              </main>
              <BordersVertical />
            </div>
            <BordersHorizontal />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
