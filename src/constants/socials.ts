import type { IconifyIcon } from "@iconify/types";

import githubIcon from "@iconify/icons-fa6-brands/github";
import discordIcon from "@iconify/icons-fa6-brands/discord";
import xTwitter from "@iconify/icons-fa6-brands/x-twitter";
import mailRounded from "@iconify/icons-material-symbols/mail-rounded";

export type Socials = Record<
  string,
  {
    url: string;
    icon: IconifyIcon;
    username: string;
  }
>;

export const discordId = "331793642689789962";

export const socials: Socials = {
  GitHub: {
    url: "https://github.com/Podter",
    icon: githubIcon,
    username: "@Podter",
  },
  Discord: {
    url: `https://discord.com/users/${discordId}`,
    icon: discordIcon,
    username: "@podter",
  },
  X: {
    url: "https://x.com/Real_Podter",
    icon: xTwitter,
    username: "@Real_Podter",
  },
  Email: {
    url: "mailto:hello@podter.me",
    icon: mailRounded,
    username: "hello@podter.me",
  },
};
