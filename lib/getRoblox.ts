import { httpFetch } from "./utils";
import { socialId } from "@/constants/socials";
import { format, parseISO } from "date-fns";

const revalidate = 300;

function getUserPresenceType(presenceNumber: number) {
  switch (presenceNumber) {
    case 1:
      return "online";
    case 2:
      return "inGame";
    case 3:
      return "studio";
    default:
      return "offline";
  }
}

export default async function getRoblox(): Promise<RobloxData> {
  const [
    playerHeadshotRes,
    playerBodyRes,
    playerInfo,
    friendCount,
    followerCount,
    lastOnlineRes,
    playerPresencesRes,
  ] = await Promise.all([
    httpFetch<ThumbnailsResponse>(
      `https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${socialId.roblox}&size=150x150&format=Png&isCircular=false`,
      { next: { revalidate } }
    ),
    httpFetch<ThumbnailsResponse>(
      `https://thumbnails.roblox.com/v1/users/avatar?userIds=${socialId.roblox}&size=150x150&format=Png&isCircular=false`,
      { next: { revalidate } }
    ),
    httpFetch<{
      name: string;
      displayName: string;
    }>(`https://users.roblox.com/v1/users/${socialId.roblox}`, {
      next: { revalidate },
    }),
    httpFetch<UserCount>(
      `https://friends.roblox.com/v1/users/${socialId.roblox}/friends/count`,
      { next: { revalidate } }
    ),
    httpFetch<UserCount>(
      `https://friends.roblox.com/v1/users/${socialId.roblox}/followers/count`,
      { next: { revalidate } }
    ),
    httpFetch<{
      lastOnlineTimestamps: {
        lastOnline: string;
      }[];
    }>("https://presence.roblox.com/v1/presence/last-online", {
      method: "POST",
      body: JSON.stringify({
        userIds: [socialId.roblox],
      }),
      next: { revalidate },
    }),
    httpFetch<{
      userPresences: {
        userPresenceType: number;
        lastLocation: string;
        placeId: number | null;
        rootPlaceId: number | null;
      }[];
    }>(`https://presence.roblox.com/v1/presence/users`, {
      method: "POST",
      body: JSON.stringify({
        userIds: [socialId.roblox],
      }),
      headers: {
        Cookie: `.ROBLOSECURITY=${process.env.ROBLOX_COOKIE}`,
      },
      next: { revalidate },
    }),
  ]);

  const playerHeadshot = playerHeadshotRes.data[0].imageUrl;
  const playerBody = playerBodyRes.data[0].imageUrl;
  const lastOnline = format(
    parseISO(lastOnlineRes.lastOnlineTimestamps[0].lastOnline),
    "do MMM yyyy"
  );
  const playerPresences = playerPresencesRes.userPresences[0];
  const userPresenceType: "online" | "inGame" | "studio" | "offline" =
    getUserPresenceType(playerPresences.userPresenceType);

  const placeThumbnailRes =
    playerPresences.rootPlaceId || playerPresences.placeId
      ? await httpFetch<ThumbnailsResponse>(
          `https://thumbnails.roblox.com/v1/places/gameicons?placeIds=${
            playerPresences.rootPlaceId || playerPresences.placeId
          }&returnPolicy=PlaceHolder&size=150x150&format=Png&isCircular=false`,
          { next: { revalidate } }
        )
      : undefined;
  const placeThumbnail = placeThumbnailRes?.data[0].imageUrl;

  return {
    id: socialId.roblox,
    playerHeadshot,
    playerBody,
    name: playerInfo.name,
    displayName: playerInfo.displayName,
    friendCount: friendCount.count,
    followerCount: followerCount.count,
    lastOnline,
    userPresenceType,
    lastLocation: playerPresences.lastLocation,
    placeThumbnail,
  };
}
