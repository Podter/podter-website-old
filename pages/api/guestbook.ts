import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import prisma from "@/lib/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  if (!session || !session.user || !session.user.email || !session.user.name) {
    return res
      .status(401)
      .json({ message: "Unauthorized", code: res.statusCode });
  }

  if (req.method === "POST") {
    try {
      const data = await prisma.guestbookMessage.create({
        data: {
          email: session.user.email,
          providerAccountId: session.user.providerAccountId,
          name: session.user.name,
          avatar: session.user.image,
          message: req.body.message || "",
        },
      });

      return res
        .status(201)
        .json({ message: "Created", data: data, code: res.statusCode });
    } catch {
      return res
        .status(500)
        .json({ message: "Internal Server Error", code: res.statusCode });
    }
  }

  if (req.method === "DELETE") {
    try {
      const dataToDelete = await prisma.guestbookMessage.findFirst({
        where: {
          email: session.user.email,
          providerAccountId: session.user.providerAccountId,
        },
        select: {
          id: true,
        },
      });

      const data = await prisma.guestbookMessage.delete({
        where: {
          id: dataToDelete?.id,
        },
      });

      return res
        .status(200)
        .json({ message: "Deleted", data: data, code: res.statusCode });
    } catch {
      return res
        .status(500)
        .json({ message: "Internal Server Error", code: res.statusCode });
    }
  }

  if (req.method === "PUT") {
    try {
      const dataToUpdate = await prisma.guestbookMessage.findFirst({
        where: {
          email: session.user.email,
          providerAccountId: session.user.providerAccountId,
        },
        select: {
          id: true,
        },
      });

      const data = await prisma.guestbookMessage.update({
        where: {
          id: dataToUpdate?.id,
        },
        data: {
          email: session.user.email,
          providerAccountId: session.user.providerAccountId,
          name: session.user.name,
          avatar: session.user.image,
          message: req.body.message || "",
          updated: true,
        },
      });

      return res
        .status(200)
        .json({ message: "Updated", data: data, code: res.statusCode });
    } catch {
      return res
        .status(500)
        .json({ message: "Internal Server Error", code: res.statusCode });
    }
  }

  return res
    .status(405)
    .json({ message: "Method Not Allowed", code: res.statusCode });
}
