import { httpFetch } from "./utils";

export default async function getProvider(providerAccountId?: string | null) {
  if (!providerAccountId) return null;

  const [discord, github] = await Promise.allSettled([
    httpFetch(`https://discord.com/api/v9/users/${providerAccountId}`, {
      headers: {
        Authorization: `Bot ${import.meta.env.DISCORD_BOT_TOKEN}`,
      },
    }),
    httpFetch(`https://api.github.com/user/${providerAccountId}`),
  ]);

  if (discord.status === "fulfilled") {
    return "discord";
  } else if (github.status === "fulfilled") {
    return "github";
  } else {
    return null;
  }
}
