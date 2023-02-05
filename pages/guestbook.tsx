import Head from "next/head";
import Container from "@/components/Container";
import GuestbookMessage from "@/components/GuestbookMessage";
import githubIcon from "@iconify/icons-fa6-brands/github";
import discordIcon from "@iconify/icons-fa6-brands/discord";
import { Icon } from "@iconify/react";

export default function Guestbook() {
  return (
    <>
      <Head>
        <title>Guestbook | Podter</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container>
        <h1 className="text-5xl font-bold">
          <span className="bg-gradient-to-r from-ctp-red to-ctp-blue bg-clip-text text-transparent">
            Guestbook
          </span>
        </h1>
        <p className="pt-6">Feel free to leave me any message here.</p>
        <div className="flex flex-col md:flex-row gap-2 w-60 pt-3">
          <button className="btn w-full gap-3 duration-75 transition-colors">
            Sign in with GitHub
            <Icon icon={githubIcon} className="h-6 w-6" scale={24} />
          </button>
          <button className="btn w-full gap-3 duration-75 transition-colors">
            Sign in with Discord
            <Icon icon={discordIcon} className="h-6 w-6" scale={24} />
          </button>
        </div>
        <div className="divider" />
        <div className="">
          <GuestbookMessage
            name="Podter"
            username="Podter"
            message="Hello"
            provider="GitHub"
            edited={true}
          />
          <GuestbookMessage
            name="Someone"
            username="Someone#6957"
            message="Coming soon!"
            provider="Discord"
          />
          <GuestbookMessage
            name="Lucid"
            username="lucid_123"
            message="Hey"
            provider="GitHub"
          />
          <GuestbookMessage
            name="Podter"
            username="Podter#5146"
            message="Test"
            provider="Discord"
          />
        </div>
      </Container>
    </>
  );
}
