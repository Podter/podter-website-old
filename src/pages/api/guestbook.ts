import type { APIRoute } from "astro";
import { getSession } from "auth-astro/server";
import { PrismaClient } from "@prisma/client";
import getProvider from "@/lib/getProvider";
import getUser from "@/lib/getUser";

export const prerender = false;

export const GET: APIRoute = async () => {
  const prisma = new PrismaClient();

  const data = await prisma.messages.findMany({
    take: 3,
    orderBy: {
      created: "desc",
    },
    select: {
      provider: true,
      providerAccountId: true,
      message: true,
    },
  });
  await prisma.$disconnect();

  return new Response(
    JSON.stringify({
      data: await Promise.all(
        data.map(async (message) => ({
          messageData: message,
          userData: await getUser(message.providerAccountId, message.provider),
        })),
      ),
    }),
    { status: 200 },
  );
};

export const POST: APIRoute = async ({ request }) => {
  const prisma = new PrismaClient();

  const session = await getSession(request);
  const provider = await getProvider(session?.user?.providerAccountId);

  const data = await request.formData();
  const message = data.get("message");

  if (
    !message ||
    typeof message !== "string" ||
    !provider ||
    !session?.user?.email ||
    !session?.user?.providerAccountId
  ) {
    return new Response(
      JSON.stringify({
        message: "Something went wrong",
      }),
      { status: 500 },
    );
  }

  const existing = await prisma.messages.findFirst({
    where: {
      OR: [
        { email: session.user.email },
        { providerAccountId: session.user.providerAccountId },
      ],
    },
    select: {
      id: true,
    },
  });

  if (existing) {
    await prisma.messages.update({
      where: {
        id: existing.id,
      },
      data: {
        message,
        isUpdated: true,
      },
    });
  } else {
    await prisma.messages.create({
      data: {
        email: session?.user?.email,
        provider,
        providerAccountId: session?.user?.providerAccountId,
        message,
      },
    });
  }

  await prisma.$disconnect();

  return new Response(
    JSON.stringify({
      message: "Success",
    }),
    { status: 200 },
  );
};

export const DELETE: APIRoute = async ({ request }) => {
  const prisma = new PrismaClient();

  const session = await getSession(request);

  if (!session?.user?.email && !session?.user?.providerAccountId) {
    return new Response(
      JSON.stringify({
        message: "Something went wrong",
      }),
      { status: 500 },
    );
  }

  const existing = await prisma.messages.findFirst({
    where: {
      OR: [
        // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
        { email: session?.user?.email! },
        // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
        { providerAccountId: session?.user?.providerAccountId! },
      ],
    },
    select: {
      id: true,
    },
  });

  if (existing) {
    await prisma.messages.delete({
      where: {
        id: existing.id,
      },
    });
    await prisma.$disconnect();

    return new Response(
      JSON.stringify({
        message: "Success",
      }),
      { status: 200 },
    );
  } else {
    await prisma.$disconnect();

    return new Response(
      JSON.stringify({
        message: "Not found",
      }),
      { status: 404 },
    );
  }
};
