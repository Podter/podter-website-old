import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader("Cache-Control", "max-age=0, s-maxage=300");

  if (req.method === "GET") {
    try {
      const data = await prisma.blogViews.findMany({
        select: {
          slug: true,
          views: true,
        },
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

  return res
    .status(405)
    .json({ message: "Method Not Allowed", code: res.statusCode });
}
