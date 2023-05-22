import "./globals.scss";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import type { PropsWithChildren } from "react";
import Navbar from "@/components/Navbar";
import { siteConfig } from "@/constants/site";
import Providers from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [
    {
      name: siteConfig.username,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.username,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en-US",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1920,
        height: 1080,
        alt: siteConfig.name,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@Real_Podter",
  },
  icons: {
    shortcut: "/favicon.svg",
  },
  other: {
    "darkreader-lock": "true",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-background font-sans antialiased flex flex-col min-h-screen w-full justify-start items-center overflow-x-hidden",
          inter.variable
        )}
      >
        <Providers>
          <Navbar />
          <div className="h-full w-full lg:px-0 px-10">
            <main className="flex flex-col max-w-3xl mx-auto mb-16 sm:px-0 page-transition">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
