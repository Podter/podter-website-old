import {
  unstable_cache as cache,
  unstable_noStore as noStore,
} from "next/cache";
import Image from "next/image";
import Link from "next/link";
import { getRequestContext } from "@cloudflare/next-on-pages";

import { steamId } from "~/constants/steam";

interface SteamResponse {
  response: {
    games: {
      appid: number;
      name: string;
      playtime_forever: number;
      rtime_last_played: number;
    }[];
  };
}

interface SteamGridDBResponse {
  data: {
    url: string;
  }[];
}

const getSteam = cache(
  async () => {
    const { STEAM_API_KEY, STEAMGRIDDB_API_KEY } = getRequestContext().env;

    const { response } = await fetch(
      `https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${STEAM_API_KEY}&steamid=${steamId}&format=json&include_appinfo=true`,
    ).then((res) => res.json<SteamResponse>());

    const games = response.games
      .sort((a, b) => b.rtime_last_played - a.rtime_last_played)
      .slice(0, 5);

    const data = await Promise.all(
      games.map(async ({ appid, name, playtime_forever }) => {
        const { data } = await fetch(
          `https://www.steamgriddb.com/api/v2/grids/steam/${appid}?styles=alternate&dimensions=600x900`,
          {
            headers: {
              Authorization: `Bearer ${STEAMGRIDDB_API_KEY}`,
            },
          },
        ).then((res) => res.json<SteamGridDBResponse>());

        const minutes = playtime_forever % 60;
        const hours = Math.floor(playtime_forever / 60);

        return {
          id: appid,
          name,
          playtime: `${hours > 0 ? `${hours} ${hours <= 1 ? "hr" : "hrs"}` : ""}${minutes > 0 ? ` ${minutes} ${minutes <= 1 ? "min" : "mins"}` : ""}`,
          img: data[0].url,
        };
      }),
    );

    return data;
  },
  ["steam"],
  { revalidate: 86400 },
);

export default async function Data() {
  noStore();
  const data = await getSteam();

  return (
    <div className="mt-3 grid grid-cols-2 gap-3 sm:flex">
      {data.map(({ id, name, playtime, img }) => (
        <div
          key={id}
          className="flex w-full flex-col items-center gap-2 text-center [&:nth-child(5)]:hidden [&:nth-child(5)]:sm:flex"
        >
          <Link
            href={`https://store.steampowered.com/app/${id}`}
            className="overflow-hidden rounded-md border shadow"
          >
            <Image
              src={img}
              alt={name}
              width={140}
              height={210}
              className="h-full w-full object-cover transition-transform hover:scale-105"
            />
          </Link>
          <p className="text-sm">{playtime}</p>
        </div>
      ))}
    </div>
  );
}
