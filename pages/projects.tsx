import Head from "next/head";
import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";

import Shoes from "@/public/shoes.jpg";

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
          <ProjectCard
            title="podter.xyz"
            img={Shoes}
            sourceUrl="https://github.com/Podter/podter-website"
          >
            The website that you are currently on right now. Built with Next.js,
            Tailwind CSS, daisyUI and MongoDB.
          </ProjectCard>
          <ProjectCard
            title="Cozmo Bot"
            img={Shoes}
            url="https://discord.com/api/oauth2/authorize?client_id=559323007697551381&permissions=8&scope=bot%20applications.commands"
            action="Invite"
          >
            A Discord bot written in TypeScript using Discord.js. Maybe I will
            add more features when I wanted to. Feel free to invite it to your
            server.
          </ProjectCard>
          <ProjectCard
            title="Lua Music Bot"
            img={Shoes}
            sourceUrl="https://github.com/Podter/Music-Bot-Lua"
          >
            Yet another music Discord bot written in Lua using Discordia. This
            bot is very slow. It&apos;s no longer maintained and archived on
            GitHub.
          </ProjectCard>
          <ProjectCard
            title="Screen Recorder"
            img={Shoes}
            url="https://podter.github.io/browser-screen-recorder/"
            sourceUrl="https://github.com/Podter/browser-screen-recorder"
          >
            A WebRTC Screen Recorder on your browser. Built with React and
            installable as PWA. This app is hosted on GitHub page
          </ProjectCard>
          <ProjectCard
            title="JIΛmusic"
            img={Shoes}
            sourceUrl="https://github.com/jiafeitech/jiamusic"
          >
            A music streaming service built with Tauri, React and PocketBase.
            Made for one of the flop companies.
          </ProjectCard>
        </div>
      </Container>
    </>
  );
}
