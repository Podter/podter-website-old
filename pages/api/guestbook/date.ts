import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismadb";
import { format } from "date-fns";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (!id || typeof id !== "string") {
    return res
      .status(400)
      .json({ message: "Bad Request", code: res.statusCode });
  }

  if (req.method === "GET") {
    try {
      const data = await prisma.guestbookMessage.findFirst({
        where: {
          id: id,
        },
        select: {
          created: true,
          updatedAt: true,
          updated: true,
        },
      });

      if (!data) {
        throw new Error();
      }

      return res.status(200).json({
        message: "Success",
        data: {
          created: format(data.created, "do MMM yyyy"),
          updatedAt: format(data.updatedAt, "do MMM yyyy"),
          updated: data.updated,
        },
        code: res.statusCode,
      });
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
