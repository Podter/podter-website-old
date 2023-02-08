import Head from "next/head";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import prisma from "@/lib/prismadb";
import { getSession } from "next-auth/react";
import Guestbook from "@/components/Guestbook";

export const getServerSideProps: GetServerSideProps<{
  data: GuestbookData[];
  userMessage: GuestbookUser | null;
}> = async ({ req }) => {
  const session = await getSession({ req });

  const data = await prisma.guestbookMessage.findMany({
    select: {
      id: true,
      name: true,
      avatar: true,
      message: true,
      providerAccountId: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });

  const userMessage = await prisma.guestbookMessage.findFirst({
    where: {
      email: session?.user.email || "",
      providerAccountId: session?.user.providerAccountId,
    },
    select: {
      message: true,
    },
  });

  return {
    props: {
      data,
      userMessage,
    },
  };
};

export default function GuestbookPage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return <Guestbook {...props} loading={false} />;
}
