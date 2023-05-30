import { httpFetch } from "./utils";

const revalidate = 86400;

export default async function getUser(userId: string): Promise<UserData> {
  try {
    const [discord, github] = await Promise.allSettled([
      httpFetch<{
        username: string;
        discriminator: string;
        id: string;
        avatar: string;
      }>(`https://discord.com/api/v9/users/${userId}`, {
        headers: {
          Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
        },
        next: { revalidate },
      }),
      httpFetch<{
        login: string;
        html_url: string;
        avatar_url: string;
        name: string;
      }>(`https://api.github.com/user/${userId}`, {
        next: { revalidate },
      }),
    ]);

    if (discord.status === "fulfilled") {
      return {
        name: discord.value.username,
        username: `@${discord.value.username}#${discord.value.discriminator}`,
        url: `https://discord.com/users/${discord.value.id}`,
        provider: "Discord",
        avatar: `https://cdn.discordapp.com/avatars/${discord.value.id}/${discord.value.avatar}.png?size=48`,
      };
    }

    if (github.status === "fulfilled") {
      return {
        name: github.value.name,
        username: `@${github.value.login}`,
        url: github.value.html_url,
        provider: "GitHub",
        avatar: github.value.avatar_url,
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
