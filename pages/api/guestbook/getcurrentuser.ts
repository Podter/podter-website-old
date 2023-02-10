import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import prisma from "@/lib/prismadb";
import { format } from "date-fns";

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

  if (req.method === "GET") {
    try {
      const rawData = await prisma.guestbookMessage.findFirst({
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
        where: {
          email: session.user.email,
          providerAccountId: session.user.providerAccountId,
        },
      });

      if (!rawData) {
        return res
          .status(404)
          .json({ message: "Not Found", code: res.statusCode });
      }

      const data: GuestbookData = {
        ...rawData,
        created: format(rawData.created, "do MMM yyyy"),
        updatedAt: format(rawData.updatedAt, "do MMM yyyy"),
      };

      return res
        .status(200)
        .json({ message: "Success", data: data, code: res.statusCode });
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
