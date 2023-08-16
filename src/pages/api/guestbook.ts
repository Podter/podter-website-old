import type { APIRoute } from "astro";
import { getSession } from "auth-astro/server";
import { authConfig } from "@/constants/auth";
import prisma from "@/lib/prisma";
import getProvider from "@/lib/getProvider";
import getUser from "@/lib/getUser";

export const prerender = false;

export const get: APIRoute = async () => {
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

export const post: APIRoute = async ({ request }) => {
  const session = await getSession(request, authConfig);
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

  return new Response(
    JSON.stringify({
      message: "Success",
    }),
    { status: 200 },
  );
};

export const del: APIRoute = async ({ request }) => {
  const session = await getSession(request, authConfig);

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

    return new Response(
      JSON.stringify({
        message: "Success",
      }),
      { status: 200 },
    );
  } else {
    return new Response(
      JSON.stringify({
        message: "Not found",
      }),
      { status: 404 },
    );
  }
};
