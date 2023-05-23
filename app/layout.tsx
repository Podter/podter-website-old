import "./globals.scss";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import type { PropsWithChildren } from "react";
import Navbar from "@/components/Navbar";
import Providers from "./providers";
import defaultMetadata from "@/constants/defaultMetadata";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = defaultMetadata;

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
