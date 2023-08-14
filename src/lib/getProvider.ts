import { httpFetch } from "./utils";

export default async function getProvider(providerAccountId?: string | null) {
  if (!providerAccountId) return null;

  try {
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
      throw new Error("No provider found");
    }
  } catch (e) {
    console.error(e);
    return null;
  }
}
