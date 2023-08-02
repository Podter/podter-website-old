"use server";

import filter from "@/lib/filter";
import getProvider from "@/lib/getProvider";
import prisma from "@/lib/prismadb";
import type { Session } from "next-auth";

export async function submitMessage(
  message: string,
  session: Session,
  blacklisted: boolean,
) {
  if (blacklisted || filter.isProfane(message)) {
    throw new Error("Message contains profanity or user is blacklisted");
  }

  if (
    !session ||
    !session.user ||
    !session.user.email ||
    !session.user.providerAccountId
  ) {
    throw new Error("No session found");
  }

  const existing = await prisma.guestbookMessage.findFirst({
    where: {
      OR: [
        {
          email: session.user.email,
          providerAccountId: session.user.providerAccountId,
        },
      ],
    },
    select: {
      id: true,
    },
  });

  if (existing) {
    await prisma.guestbookMessage.update({
      where: {
        id: existing.id,
      },
      data: {
        message,
        updated: true,
      },
      select: {
        id: true,
      },
    });
  } else {
    const provider = await getProvider(session.user.providerAccountId);

    if (!provider) {
      throw new Error("No provider found");
    }

    await prisma.guestbookMessage.create({
      data: {
        email: session.user.email,
        provider,
        providerAccountId: session.user.providerAccountId,
        message: message,
      },
      select: {
        id: true,
      },
    });
  }
}

export async function deleteMessage(session: Session) {
  if (
    !session ||
    !session.user ||
    !session.user.email ||
    !session.user.providerAccountId
  ) {
    throw new Error("No session found");
  }

  await prisma.guestbookMessage.deleteMany({
    where: {
      OR: [
        {
          email: session.user.email,
          providerAccountId: session.user.providerAccountId,
        },
      ],
    },
  });
}
