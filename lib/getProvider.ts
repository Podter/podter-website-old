import { httpFetch } from "./utils";

const revalidate = 86400;

export default async function getProvider(userId: string) {
  try {
    const [discord, github] = await Promise.allSettled([
      httpFetch(`https://discord.com/api/v9/users/${userId}`, {
        headers: {
          Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
        },
        next: { revalidate },
      }),
      httpFetch(`https://api.github.com/user/${userId}`, {
        next: { revalidate },
      }),
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
    return undefined;
  }
}
