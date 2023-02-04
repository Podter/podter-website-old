import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "@next/font/google";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${poppins.className} flex flex-col min-h-screen`}>
      <Navbar />
      <Component {...pageProps} />
    </main>
  );
}
