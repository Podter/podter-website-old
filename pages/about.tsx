import Head from "next/head";
import Container from "@/components/Container";
import Skills from "@/components/Skills";
import Socials from "@/components/Socials";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Podter</title>
        <meta
          name="description"
          content="Hey, I'm Podter. I'm a student and self taught developer from Thailand."
        />
        <meta property="og:title" content="About me" />
        <meta
          property="og:description"
          content="Hey, I'm Podter. I'm a student and self taught developer from Thailand."
        />
        <meta
          property="og:image:url"
          content="https://podter.xyz/api/og?title=About%20me"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container>
        <h1 className="text-5xl font-bold">
          <span className="bg-gradient-to-r from-ctp-red to-ctp-blue bg-clip-text text-transparent">
            About me
          </span>
        </h1>
        <div className="divider" />
        <p className="pb-6 leading-8">
          Hey, I&apos;m <b>Podter</b>. You can call me just <b>Pod</b> for
          short. Sometimes I call myself <b>Potter</b>.
        </p>
        <p className="pb-6 leading-8">
          I&apos;m a <b>student</b> and <b>self taught developer</b>. I come
          from Thailand and English is my secondary language. Sometimes I play{" "}
          games like Roblox, Minecraft or anything else. Or maybe spending my
          time chatting in Discord and listening to musics.
        </p>
        <p className="pb-6 leading-8">
          I love playing with computers since I was <b>6 years old</b>! Now I{" "}
          <b>love</b> coding or making some projects in my free time or hobby.
          Or playing around with Linux servers and VMs. I <b>usually</b> start a
          project with Vite and PocketBase as backend, all the way to large{" "}
          Node.js applications and containerized with Docker.
        </p>
        <h2 className="text-3xl font-bold pb-6">
          <span className="bg-gradient-to-r from-ctp-red to-ctp-blue bg-clip-text text-transparent">
            My skills
          </span>
        </h2>
        <p className="pb-6 leading-8">
          I started coding since I was <b>12 years old</b>. My first programming
          language was <b>Lua</b> (or Luau) in Roblox Studio. Lua is the easiest
          language to learn or getting getting started. And then{" "}
          <b>JavaScript</b> and <b>TypeScript</b> for building Discord bot
          (Cozmo bot). Now I stuck here forever because good ecosystem like npm
          packages.
        </p>
        <p className="pb-3 leading-8 font-semibold">This is what can I do:</p>
        <div className="flex justify-center items-center w-full pb-12">
          <Skills />
        </div>
        <h2 className="text-3xl font-bold pb-6">
          <span className="bg-gradient-to-r from-ctp-red to-ctp-blue bg-clip-text text-transparent">
            My socials
          </span>
        </h2>
        <div className="w-full">
          <Socials />
        </div>
      </Container>
    </>
  );
}
