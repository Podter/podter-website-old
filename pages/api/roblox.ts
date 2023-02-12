import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

const userId = 126064549;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const playerHeadshot = await axios.get(
        `https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${userId}&size=48x48&format=Png&isCircular=true`
      );
      const playerBody = await axios.get(
        `https://thumbnails.roblox.com/v1/users/avatar?userIds=${userId}&size=60x60&format=Png&isCircular=true`
      );

      const playerInfo = await axios.get(
        `https://users.roblox.com/v1/users/${userId}`
      );
      const friendCount = await axios.get(
        `https://friends.roblox.com/v1/users/${userId}/friends/count`
      );
      const followerCount = await axios.get(
        `https://friends.roblox.com/v1/users/${userId}/followers/count`
      );

      // See https://github.com/Podter/roblox-presence-api
      const playerPresences = await axios.get(
        `https://roblox-presence-api.podter.xyz/api/presence/${userId}`
      );

      let placeThumbnail;
      if (playerPresences.data.data.rootPlaceId) {
        placeThumbnail = await axios.get(
          `https://thumbnails.roblox.com/v1/places/gameicons?placeIds=${playerPresences.data.data.rootPlaceId}&returnPolicy=PlaceHolder&size=128x128&format=Png&isCircular=false`
        );
      }

      return res.status(200).json({
        message: "Success",
        data: {
          thumbnails: {
            headshot: playerHeadshot.data.data[0].imageUrl,
            body: playerBody.data.data[0].imageUrl,
          },
          info: {
            username: playerInfo.data.name,
            displayName: playerInfo.data.displayName,
            friendCount: friendCount.data.count,
            followerCount: followerCount.data.count,
          },
          presences: {
            userPresenceType: playerPresences.data.data.userPresenceType,
            location: playerPresences.data.data.lastLocation,
            placeThumbnail: placeThumbnail
              ? placeThumbnail.data.data[0].imageUrl
              : null,
            lastOnline: playerPresences.data.data.lastOnline,
          },
        },
        code: res.statusCode,
      });
    } catch (e) {
      console.log(e);
      return res
        .status(500)
        .json({ message: "Internal Server Error", code: res.statusCode });
    }
  }

  return res
    .status(405)
    .json({ message: "Method Not Allowed", code: res.statusCode });
}
