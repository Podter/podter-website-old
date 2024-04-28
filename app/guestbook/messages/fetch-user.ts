import { unstable_cache as cache } from "next/cache";
import { getRequestContext } from "@cloudflare/next-on-pages";
import { z } from "zod";

const DiscordResponseSchema = z.object({
  id: z.string(),
  global_name: z.string().nullable(),
  username: z.string(),
  avatar: z.string(),
});

const GitHubResponseSchema = z.object({
  name: z.string().nullable(),
  login: z.string(),
  html_url: z.string(),
  avatar_url: z.string(),
});

interface UserData {
  name: string;
  url: string;
  avatar: string;
}

export const fetchUser = cache(
  async (user: string): Promise<UserData> => {
    const { DISCORD_BOT_TOKEN, GITHUB_ID, GITHUB_SECRET } =
      getRequestContext().env;

    const [provider, userId] = user.split(":");

    if (provider === "discord") {
      const rawData = await fetch(
        `https://discord.com/api/v9/users/${userId}`,
        {
          headers: {
            Authorization: `Bot ${DISCORD_BOT_TOKEN}`,
          },
        },
      ).then((res) => res.json());
      const data = DiscordResponseSchema.parse(rawData);

      return {
        name: data.global_name ?? data.username,
        url: `https://discord.com/users/${data.id}`,
        avatar: `https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.png?size=48`,
      };
    } else if (provider === "github") {
      const rawData = await fetch(`https://api.github.com/user/${userId}`, {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${GITHUB_ID}:${GITHUB_SECRET}`,
          ).toString("base64")}`,
        },
      }).then((res) => res.json());
      const data = GitHubResponseSchema.parse(rawData);

      return {
        name: data.name ?? data.login,
        url: data.html_url,
        avatar: data.avatar_url,
      };
    } else {
      throw new Error("Unknown provider");
    }
  },
  undefined,
  {
    revalidate: 172800,
  },
);
