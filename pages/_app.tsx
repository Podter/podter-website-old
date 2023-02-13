import "@/styles/globals.css";
import "@/styles/nprogress.css";
import SEO from "@/next-seo.config";
import type { AppProps } from "next/app";
import { Poppins } from "@next/font/google";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import NProgress from "nprogress";
import { useRef } from "react";
import { useScroll } from "react-use";
import { DefaultSeo } from "next-seo";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  Variants,
} from "framer-motion";
import { useRouter } from "next/router";

import Drawer from "@/components/Drawer";
import Navbar from "@/components/Navbar";
import useAppLoading from "@/hooks/useAppLoading";
import ScrollToTop from "@/components/ScrollToTop";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const variants: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.225,
      ease: "easeOut",
    },
  },
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const { asPath } = useRouter();
  const shouldReduceMotion = useReducedMotion();

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
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={asPath}
                  variants={!shouldReduceMotion ? variants : undefined}
                  animate="in"
                  initial="initial"
                  onAnimationStart={() => console.log("start")}
                  onAnimationComplete={() => console.log("Stop")}
                >
                  <Component {...pageProps} />
                </motion.div>
              </AnimatePresence>
              <ScrollToTop scrollRef={scrollRef} y={scrollY} />
            </main>
          </Drawer>
        </ThemeProvider>
      </SessionProvider>
    </>
  );
}
