import Head from "next/head";
import Container from "@/components/Container";
import GuestbookItem from "@/components/Guestbook/GuestbookItem";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import prisma from "@/lib/prismadb";
import Actions from "@/components/Guestbook/Actions";

export type GuestbookData = {
  id: string;
  updated: boolean;
  name: string;
  avatar: string | null;
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
      avatar: true,
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
        <Actions />
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
