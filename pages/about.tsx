import Head from "next/head";
import Container from "@/components/Container";
import { Icon } from "@iconify/react";
import Link from "next/link";
import githubIcon from "@iconify/icons-fa6-brands/github";
import discordIcon from "@iconify/icons-fa6-brands/discord";
import twitterIcon from "@iconify/icons-fa6-brands/twitter";
import mailRounded from "@iconify/icons-material-symbols/mail-rounded";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Podter</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container>
        <h1 className="text-5xl font-bold">
          <span className="bg-gradient-to-r from-ctp-red to-ctp-blue bg-clip-text text-transparent">
            About me
          </span>
        </h1>
        <p className="pt-6">
          Hey, I&apos;m Podter. Most folks know me as <strong>Podter</strong> or{" "}
          <strong>Real_Podter</strong> online. Someone called me just{" "}
          <strong>Pod</strong> for short. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Illum, in doloribus autem, sed iste
          blanditiis error, eum odio soluta est alias laborum corrupti minus
          natus consequatur impedit velit incidunt rerum.
        </p>
        <div className="divider" />
        <p className="pb-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
          tempore assumenda suscipit praesentium ullam voluptatem! Explicabo
          quae sequi tenetur dolorem, officia repudiandae, alias quibusdam
          dignissimos dolor quis, voluptas provident accusantium.
        </p>
        <div className="flex flex-row gap-2 w-28">
          <Link
            className="btn btn-ghost btn-circle duration-75"
            href="https://github.com/Podter"
          >
            <Icon icon={githubIcon} className="h-6 w-6" scale={24} />
          </Link>
          <Link
            className="btn btn-ghost btn-circle duration-75"
            href="https://discord.com/users/331793642689789962"
          >
            <Icon icon={discordIcon} className="h-6 w-6" scale={24} />
          </Link>
          <Link
            className="btn btn-ghost btn-circle duration-75"
            href="https://twitter.com/Real_Podter"
          >
            <Icon icon={twitterIcon} className="h-6 w-6" scale={24} />
          </Link>
          <Link
            className="btn btn-ghost btn-circle duration-75"
            href="mailto:me@podter.xyz"
          >
            <Icon icon={mailRounded} className="h-6 w-6" scale={24} />
          </Link>
        </div>
      </Container>
    </>
  );
}
