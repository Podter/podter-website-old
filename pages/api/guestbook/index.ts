import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import prisma from "@/lib/prismadb";
import { format } from "date-fns";
import checkBadWord from "@/utils/checkBadWord";
import checkBlacklisted from "@/utils/checkBlacklisted";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const rawData = await prisma.guestbookMessage.findMany({
        select: {
          id: true,
          avatar: true,
          created: true,
          message: true,
          name: true,
          providerAccountId: true,
          updated: true,
          updatedAt: true,
        },
        orderBy: {
          updatedAt: "desc",
        },
      });

      const data: GuestbookData[] = [];
      rawData.forEach((item) => {
        data.push({
          ...item,
          created: format(item.created, "do MMM yyyy"),
          updatedAt: format(item.updatedAt, "do MMM yyyy"),
        });
      });

      return res
        .status(200)
        .json({ message: "Success", data: data, code: res.statusCode });
    } catch {
      return res
        .status(500)
        .json({ message: "Internal Server Error", code: res.statusCode });
    }
  }

  const session = await getServerSession(req, res, authOptions);

  if (!session || !session.user || !session.user.email || !session.user.name) {
    return res
      .status(401)
      .json({ message: "Unauthorized", code: res.statusCode });
  }

  if (req.method === "POST") {
    try {
      const isBadWord = await checkBadWord(req.body.message || "");
      const isBlacklisted = await checkBlacklisted(
        session.user.email,
        session.user.providerAccountId
      );

      if (isBadWord === true || isBlacklisted === true) {
        return res.status(403).json({
          message: "Forbidden",
          data: {
            reason: isBadWord
              ? "Bad words are not allowed"
              : isBlacklisted
              ? "You are blacklisted"
              : undefined,
          },
          code: res.statusCode,
        });
      } else if (isBadWord === undefined || isBlacklisted === undefined) {
        throw new Error();
      }

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
    } catch (e) {
      console.error(e);
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
      const isBadWord = await checkBadWord(req.body.message || "");
      const isBlacklisted = await checkBlacklisted(
        session.user.email,
        session.user.providerAccountId
      );

      if (isBadWord === true || isBlacklisted === true) {
        return res.status(403).json({
          message: "Forbidden",
          data: {
            reason: isBadWord
              ? "Bad words are not allowed"
              : isBlacklisted
              ? "You are blacklisted"
              : undefined,
          },
          code: res.statusCode,
        });
      } else if (isBadWord === undefined || isBlacklisted === undefined) {
        throw new Error();
      }

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
