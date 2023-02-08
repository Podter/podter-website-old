import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "@next/font/google";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

import AppContainer from "@/components/AppContainer";
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
  const { loadingGuestbook } = useAppLoading();

  return (
    <SessionProvider session={session}>
      <ThemeProvider
        defaultTheme="system"
        themes={["ctp-latte", "ctp-mocha"]}
        value={{ light: "ctp-latte", dark: "ctp-mocha" }}
      >
        <AppContainer
          className={`${poppins.className} flex flex-col min-h-screen`}
        >
          <Navbar />
          {loadingGuestbook ? (
            <Guestbook loading={true} />
          ) : (
            <Component {...pageProps} />
          )}
        </AppContainer>
      </ThemeProvider>
    </SessionProvider>
  );
}
