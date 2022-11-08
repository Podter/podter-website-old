import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import Navbar from "../components/Navbar/Navbar";

import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      defaultTheme="system"
      themes={["ctp-latte", "ctp-mocha"]}
      value={{ light: "ctp-latte", dark: "ctp-mocha" }}
    >
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
