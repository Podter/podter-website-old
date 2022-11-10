import Head from "next/head";

import Home from "../components/Home/Home";
import About from "../components/About";
// import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";

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
      {/* <Skills /> */}
      <Projects />
      <Contact />
    </div>
  );
}
