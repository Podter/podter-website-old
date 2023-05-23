"use server";

import prisma from "@/lib/prismadb";
import type { Session } from "next-auth";

export async function submitMessage(
  message: string,
  session: Session,
  blacklisted: boolean
) {
  if (blacklisted) {
    throw new Error("User is blacklisted");
  }

  const existing = await prisma.guestbookMessage.findFirst({
    where: {
      OR: {
        email: session.user.email as string | undefined,
        providerAccountId: session.user.providerAccountId as string | undefined,
      },
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
    await prisma.guestbookMessage.create({
      data: {
        email: session.user.email as string,
        providerAccountId: session.user.providerAccountId as string,
        message: message,
      },
      select: {
        id: true,
      },
    });
  }
}

export async function deleteMessage(session: Session) {
  await prisma.guestbookMessage.deleteMany({
    where: {
      OR: {
        email: session.user.email as string | undefined,
        providerAccountId: session.user.providerAccountId as string | undefined,
      },
    },
  });
}
