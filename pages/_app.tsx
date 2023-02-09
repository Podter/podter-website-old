import "@/styles/globals.css";
import "@/styles/nprogress.css";
import type { AppProps } from "next/app";
import { Poppins } from "@next/font/google";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import NProgress from "nprogress";

import Drawer from "@/components/Drawer";
import Navbar from "@/components/Navbar";
import useAppLoading from "@/hooks/useAppLoading";
import Guestbook from "@/components/Guestbook";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const { loadingGuestbook } = useAppLoading(
    () => NProgress.start(),
    () => NProgress.done(true)
  );

  NProgress.configure({
    showSpinner: false,
  });

  return (
    <SessionProvider session={session}>
      <ThemeProvider
        defaultTheme="system"
        themes={["ctp-latte", "ctp-mocha"]}
        value={{ light: "ctp-latte", dark: "ctp-mocha" }}
      >
        <Drawer>
          <main className={`${poppins.className} flex flex-col min-h-screen`}>
            <Navbar />
            {loadingGuestbook ? (
              <Guestbook loading={true} />
            ) : (
              <Component {...pageProps} />
            )}
          </main>
        </Drawer>
      </ThemeProvider>
    </SessionProvider>
  );
}
