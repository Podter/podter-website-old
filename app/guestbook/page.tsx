import makeMetadata from "@/lib/makeMetadata";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/lib/prismadb";
import getUser from "@/lib/getUser";
import Message from "./message";
import SignIn from "./signin";
import GuestbookForm from "./form";

export const metadata = makeMetadata(
  "Guestbook",
  "Sign my guestbook and leave your mark. Feel free to leave any message here."
);

export default async function Page() {
  const [session, data] = await Promise.all([
    getServerSession(authOptions),
    prisma.guestbookMessage.findMany({
      orderBy: {
        updatedAt: "desc",
      },
      select: {
        id: true,
        created: true,
        message: true,
        providerAccountId: true,
        updated: true,
        updatedAt: true,
      },
    }),
  ]);

  const user = data.find(
    (data) => data.providerAccountId === session?.user.providerAccountId
  );

  const blacklist = await prisma.blacklist.findFirst({
    where: {
      OR: {
        email: session?.user.email as string | undefined,
        providerAccountId: session?.user.providerAccountId as
          | string
          | undefined,
      },
    },
    select: {
      id: true,
    },
  });

  return (
    <>
      {session ? (
        <GuestbookForm
          session={session}
          initialMessage={user?.message}
          blacklisted={blacklist ? true : false}
        />
      ) : (
        <SignIn />
      )}
      <div className="flex flex-col mt-8 gap-4">
        {await Promise.all(
          data.map(async ({ id, providerAccountId, ...props }) => {
            const user = await getUser(providerAccountId);
            return <Message key={id} user={user} {...props} />;
          })
        )}
      </div>
    </>
  );
}
