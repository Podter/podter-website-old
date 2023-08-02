import { httpFetch } from "./utils";

const revalidate = 86400;

export default async function getUser(
  userId: string,
  provider: string,
): Promise<UserData> {
  try {
    if (provider === "discord") {
      const data = await httpFetch<{
        username: string;
        discriminator: string;
        id: string;
        avatar: string;
      }>(`https://discord.com/api/v9/users/${userId}`, {
        headers: {
          Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
        },
        next: { revalidate },
      });

      return {
        name: data.username,
        username: `@${data.username}#${data.discriminator}`,
        url: `https://discord.com/users/${data.id}`,
        provider: "Discord",
        avatar: `https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.png?size=48`,
      };
    }

    if (provider === "github") {
      const data = await httpFetch<{
        login: string;
        html_url: string;
        avatar_url: string;
        name: string;
      }>(`https://api.github.com/user/${userId}`, {
        next: { revalidate },
      });

      return {
        name: data.name,
        username: `@${data.login}`,
        url: data.html_url,
        provider: "GitHub",
        avatar: data.avatar_url,
      };
    }

    return {
      name: "",
      username: "",
      url: "",
      provider: "",
      avatar: "",
    };
  } catch (e) {
    console.error(e);
    return {
      name: "",
      username: "",
      url: "",
      provider: "",
      avatar: "",
    };
  }
}
