import Head from "next/head";

import Home from "../components/Home";

export default function Homepage() {
  return (
    <div>
      <Head>
        <title>Podter</title>
        <meta name="description" content="Podter's Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />
      <Home />
      <Home />
    </div>
  );
}
