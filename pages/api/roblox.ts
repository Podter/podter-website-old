import type { NextApiRequest, NextApiResponse } from "next";
import noblox from "noblox.js";

const userId = 126064549;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      if (!process.env.ROBLOX_COOKIE) {
        throw new Error();
      }

      await noblox.setCookie(process.env.ROBLOX_COOKIE);

      const playerInfo = await noblox.getPlayerInfo(userId);
      const playerHeadshot = await noblox.getPlayerThumbnail(
        userId,
        48,
        "png",
        true,
        "headshot"
      );
      const playerBody = await noblox.getPlayerThumbnail(
        userId,
        60,
        "png",
        true,
        "body"
      );
      const playerPresences = await noblox.getPresences([userId]);
      const placeThumbnail = await noblox.getThumbnails([
        {
          size: "150x150",
          type: "PlaceIcon",
          targetId: playerPresences.userPresences[0].rootPlaceId,
        },
      ]);

      return res.status(200).json({
        message: "Success",
        data: {
          thumbnails: {
            headshot: playerHeadshot[0].imageUrl,
            body: playerBody[0].imageUrl,
          },
          info: {
            username: playerInfo.username,
            displayName: playerInfo.displayName,
            friendCount: playerInfo.friendCount,
            followerCount: playerInfo.followerCount,
          },
          presences: {
            userPresenceType: playerPresences.userPresences[0].userPresenceType,
            location: playerPresences.userPresences[0].lastLocation,
            placeThumbnail: placeThumbnail[0].imageUrl,
          },
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
