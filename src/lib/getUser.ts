import { httpFetch } from "./utils";

export type UserData = {
  name: string;
  url: string;
  avatar: string;
};

export default async function getUser(
  providerAccountId: string,
  provider: string,
): Promise<UserData> {
  switch (provider) {
    case "discord": {
      const data = await httpFetch<{
        global_name: string;
        id: string;
        avatar: string;
      }>(`https://discord.com/api/v9/users/${providerAccountId}`, {
        headers: {
          Authorization: `Bot ${import.meta.env.DISCORD_BOT_TOKEN}`,
        },
      });

      return {
        name: data.global_name,
        url: `https://discord.com/users/${data.id}`,
        avatar: `https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.png?size=48`,
      };
    }
    case "github": {
      const data = await httpFetch<{
        html_url: string;
        avatar_url: string;
        name: string;
      }>(`https://api.github.com/user/${providerAccountId}`);

      return {
        name: data.name,
        url: data.html_url,
        avatar: data.avatar_url,
      };
    }
    default:
      throw new Error("Cannot get user");
  }
}
