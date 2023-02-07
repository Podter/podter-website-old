import Head from "next/head";
import Container from "@/components/Container";
import GuestbookItem from "@/components/Guestbook/GuestbookItem";
import githubIcon from "@iconify/icons-fa6-brands/github";
import discordIcon from "@iconify/icons-fa6-brands/discord";
import { Icon } from "@iconify/react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import prisma from "@/lib/prismadb";
import { Provider } from "@prisma/client";

export type GuestbookData = {
  id: string;
  updated: boolean;
  name: string;
  username: string;
  avatar: string | null;
  provider: Provider;
  message: string;
};

export const getServerSideProps: GetServerSideProps<{
  data: GuestbookData[];
}> = async () => {
  const data = await prisma.guestbookMessage.findMany({
    select: {
      id: true,
      updated: true,
      name: true,
      username: true,
      avatar: true,
      provider: true,
      message: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });

  return {
    props: {
      data,
    },
  };
};

export default function Guestbook({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
        <p className="pt-6">
          Sign my guestbook and leave your mark. Feel free to leave any message
          here.
        </p>
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
        <div>
          {data.map((item) => (
            <GuestbookItem key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </>
  );
}
