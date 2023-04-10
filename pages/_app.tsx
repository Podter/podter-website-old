import "@/styles/globals.scss";
import "@/styles/nprogress.scss";
import "@catppuccin/highlightjs/sass/catppuccin-mocha.scss";
import SEO from "@/next-seo.config";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import NProgress from "nprogress";
import { useRef } from "react";
import { useScroll } from "react-use";
import { DefaultSeo } from "next-seo";
import { Analytics } from "@vercel/analytics/react";

import useAppLoading from "@/hooks/useAppLoading";

import Drawer from "@/components/Drawer";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

if (process.env.NODE_ENV === "production") {
  console.log(
    `%c
    ██████   ██████  ██████  ████████ ███████ ██████  
    ██   ██ ██    ██ ██   ██    ██    ██      ██   ██ 
    ██████  ██    ██ ██   ██    ██    █████   ██████  
    ██      ██    ██ ██   ██    ██    ██      ██   ██ 
    ██       ██████  ██████     ██    ███████ ██   ██ 
                                                      
    A student and self-taught developer from Thailand.`,
    "font-family: monospace; color: #d20f39;"
  );
}

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  useAppLoading();

  NProgress.configure({
    showSpinner: false,
  });

  const scrollRef = useRef<HTMLDivElement>(null);
  const { y: scrollY } = useScroll(scrollRef);

  return (
    <>
      <DefaultSeo {...SEO} />
      <SessionProvider session={session}>
        <ThemeProvider
          defaultTheme="system"
          themes={["ctp-latte", "ctp-mocha"]}
          value={{ light: "ctp-latte", dark: "ctp-mocha" }}
        >
          <Drawer scrollRef={scrollRef}>
            <main className={`${poppins.className} flex flex-col min-h-screen`}>
              <Navbar />
              <Component {...pageProps} />
              <ScrollToTop scrollRef={scrollRef} y={scrollY} />
            </main>
          </Drawer>
        </ThemeProvider>
      </SessionProvider>
      <Analytics />
    </>
  );
}
