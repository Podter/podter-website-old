import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { useRouter } from "next/router";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.route == "/theme" || router.route == "/script") {
    return <Component {...pageProps} />;
  }

  return (
    <ThemeProvider
      defaultTheme="system"
      themes={["ctp-latte", "ctp-mocha"]}
      value={{ light: "ctp-latte", dark: "ctp-mocha" }}
    >
      <Head>
        <title>Podter</title>
        <meta name="description" content="Podter's Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <ScrollToTop />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
