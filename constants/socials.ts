import { IconifyIcon } from "@iconify/types";
import githubIcon from "@iconify/icons-fa6-brands/github";
import discordIcon from "@iconify/icons-fa6-brands/discord";
import twitterIcon from "@iconify/icons-fa6-brands/twitter";
import mailRounded from "@iconify/icons-material-symbols/mail-rounded";
import youtubeIcon from "@iconify/icons-fa6-brands/youtube";
import robloxIcon from "@iconify/icons-simple-icons/roblox";

export const socials: Record<
  string,
  {
    url: string;
    icon: IconifyIcon;
    homePage: boolean;
    username: string;
  }
> = {
  GitHub: {
    url: "https://github.com/Podter",
    icon: githubIcon,
    homePage: true,
    username: "@Podter",
  },
  Discord: {
    url: "https://discord.com/users/331793642689789962",
    icon: discordIcon,
    homePage: true,
    username: "@Podter#5146",
  },
  Twitter: {
    url: "https://twitter.com/Real_Podter",
    icon: twitterIcon,
    homePage: true,
    username: "@Real_Podter",
  },
  Email: {
    url: "mailto:hello@podter.me",
    icon: mailRounded,
    homePage: true,
    username: "hello@podter.me",
  },
  YouTube: {
    url: "https://www.youtube.com/@podter",
    icon: youtubeIcon,
    homePage: false,
    username: "@podter",
  },
  Roblox: {
    url: "https://www.roblox.com/users/126064549/profile",
    icon: robloxIcon,
    homePage: false,
    username: "@Podter",
  },
};

export const socialId = {
  discord: "331793642689789962",
  roblox: "126064549",
};
