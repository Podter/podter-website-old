import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import checkBlacklisted from "@/utils/checkBlacklisted";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);

  if (!session || !session.user || !session.user.email || !session.user.name) {
    return res
      .status(401)
      .json({ message: "Unauthorized", code: res.statusCode });
  }

  if (req.method === "GET") {
    try {
      const isBlacklisted = await checkBlacklisted(
        session.user.email,
        session.user.providerAccountId
      );

      return res.status(200).json({
        message: "Success",
        data: isBlacklisted,
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
