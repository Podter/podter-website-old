import type { Metadata, Viewport } from "next";
import type { PropsWithChildren } from "react";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { defaultMetadata } from "~/constants/metadata";
import { cn } from "~/lib/utils";
import { ThemeProvider } from "~/providers/theme-provider";
import Borders from "./_components/borders";
import Navbar from "./_components/navbar";

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
          "container relative flex flex-col overflow-x-hidden font-sans",
          GeistSans.variable,
          GeistMono.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="mb-16 flex flex-col px-4 md:mx-6">{children}</main>
          <Borders />
        </ThemeProvider>
      </body>
    </html>
  );
}
