import { z } from "zod";

import { env } from "~/env.mjs";

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

export async function fetchUser(user: string): Promise<UserData> {
  const [provider, userId] = user.split(":");

  if (provider === "discord") {
    const rawData = await fetch(`https://discord.com/api/v9/users/${userId}`, {
      headers: {
        Authorization: `Bot ${env.DISCORD_BOT_TOKEN}`,
      },
    }).then((res) => res.json());
    const data = DiscordResponseSchema.parse(rawData);

    return {
      name: data.global_name ?? data.username,
      url: `https://discord.com/users/${data.id}`,
      avatar: `https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.png?size=48`,
    };
  } else if (provider === "github") {
    const rawData = await fetch(`https://api.github.com/user/${userId}`).then(
      (res) => res.json(),
    );
    const data = GitHubResponseSchema.parse(rawData);

    return {
      name: data.name ?? data.login,
      url: data.html_url,
      avatar: data.avatar_url,
    };
  } else {
    throw new Error("Unknown provider");
  }
}
