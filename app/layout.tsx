import type { Metadata, Viewport } from "next";
import type { PropsWithChildren } from "react";
import localFont from "next/font/local";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { BordersHorizontal, BordersVertical } from "~/components/borders";
import Content from "~/components/content";
import Navbar from "~/components/navbar";
import SkipContent from "~/components/skip-content";
import StarField from "~/components/starfield";
import { TooltipProvider } from "~/components/ui/tooltip";
import { defaultMetadata } from "~/constants/metadata";
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

const CalSans = localFont({
  src: "../node_modules/cal-sans/fonts/webfonts/CalSans-SemiBold.woff2",
  variable: "--font-cal-sans",
});

// TODO: add umami, add client stuff
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
              <Content>
                <div id="content" tabIndex={-1} data-pagefind-ignore />
                {children}
              </Content>
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
