import Head from "next/head";
import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Podter</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container>
        <h1 className="text-5xl font-bold">
          <span className="bg-gradient-to-r from-ctp-red to-ctp-blue bg-clip-text text-transparent">
            Projects
          </span>
        </h1>
        <p className="pt-6">
          I spend my free time or hobby coding or working on projects just for
          fun and learning.
        </p>
        <div className="divider" />
        <div className="grid md:grid-cols-2 gap-4">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </Container>
    </>
  );
}
