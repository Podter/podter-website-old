import Head from "next/head";
import Main from "../components/Main";
import About from "../components/About";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills/Skills";

export default function Index() {
  return (
    <div>
      <Head>
        <title>Podter</title>
        <meta name="description" content="Podter's Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}
