import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismadb";
import axios from "axios";

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
    const data = await prisma.guestbookMessage.findFirst({
      where: {
        providerAccountId: id,
      },
      select: {
        avatar: true,
      },
    });

    if (data?.avatar?.includes("cdn.discordapp.com")) {
      try {
        const { data } = await axios.get(
          `https://discord.com/api/v9/users/${id}`,
          {
            headers: {
              Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
            },
          }
        );

        return res.status(200).json({
          message: "Success",
          data: {
            username: `${data.username}#${data.discriminator}`,
            url: `https://discord.com/users/${data.id}`,
            provider: "Discord",
          },
          code: res.statusCode,
        });
      } catch {
        return res
          .status(500)
          .json({ message: "Internal Server Error", code: res.statusCode });
      }
    } else if (data?.avatar?.includes("avatars.githubusercontent.com")) {
      try {
        const { data } = await axios.get(`https://api.github.com/user/${id}`);

        return res.status(200).json({
          message: "Success",
          data: {
            username: data.login,
            url: data.html_url,
            provider: "GitHub",
          },
          code: res.statusCode,
        });
      } catch {
        return res
          .status(500)
          .json({ message: "Internal Server Error", code: res.statusCode });
      }
    } else {
      return res
        .status(400)
        .json({ message: "Bad Request", code: res.statusCode });
    }
  }

  return res
    .status(405)
    .json({ message: "Method Not Allowed", code: res.statusCode });
}
