import Head from "next/head";
import Container from "@/components/Container";
import { Icon } from "@iconify/react";
import wavingHand from "@iconify/icons-fluent-emoji-flat/waving-hand";
import Link from "next/link";
import githubIcon from "@iconify/icons-fa6-brands/github";
import discordIcon from "@iconify/icons-fa6-brands/discord";
import twitterIcon from "@iconify/icons-fa6-brands/twitter";
import mailRounded from "@iconify/icons-material-symbols/mail-rounded";
import Lanyard from "@/components/Lanyard";
import Roblox from "@/components/Roblox";

export default function Home() {
  return (
    <>
      <Head>
        <title>Podter</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container>
        <h1 className="text-5xl font-bold">
          Hello, I&apos;m{" "}
          <span className="bg-gradient-to-r from-ctp-red to-ctp-blue bg-clip-text text-transparent">
            Podter
          </span>{" "}
          <Icon className="inline" icon={wavingHand} inline={true} />
        </h1>
        <p className="py-6">
          Hey, I&apos;m Podter. I&apos;m a student and self taught developer
          from Thailand.
        </p>
        <div className="flex flex-row gap-2 w-28 pb-3">
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
        <div className="flex flex-col md:flex-row gap-4">
          <Lanyard />
          <Roblox />
        </div>
      </Container>
    </>
  );
}
