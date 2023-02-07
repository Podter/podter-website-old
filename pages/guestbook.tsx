import Head from "next/head";
import Container from "@/components/Container";
import GuestbookItem, {
  GuestbookItemProps,
} from "@/components/Guestbook/GuestbookItem";
import githubIcon from "@iconify/icons-fa6-brands/github";
import discordIcon from "@iconify/icons-fa6-brands/discord";
import { Icon } from "@iconify/react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import prisma from "@/lib/prismadb";

type Data = {
  id: string;
  props: GuestbookItemProps;
};

export const getServerSideProps: GetServerSideProps<{
  data: Data[];
}> = async () => {
  const fetchedData = await prisma.guestbookMessage.findMany();
  const data: Data[] = [];

  fetchedData.map((item) =>
    data.push({
      id: item.id,
      props: {
        name: item.name,
        message: item.message,
        provider: item.provider === "GITHUB" ? "GitHub" : "Discord",
        username: item.username,
        updated: item.updated,
      },
    })
  );

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
        <div>
          {data.map((item) => (
            <GuestbookItem key={item.id} {...item.props} />
          ))}
        </div>
      </Container>
    </>
  );
}
