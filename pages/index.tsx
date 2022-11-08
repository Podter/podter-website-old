import Head from "next/head";

import Home from "../components/Home";
import About from "../components/About";

export default function Homepage() {
  return (
    <div>
      <Head>
        <title>Podter</title>
        <meta name="description" content="Podter's Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />
      <About />
    </div>
  );
}
