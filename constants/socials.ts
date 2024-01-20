import type { IconifyIcon } from "@iconify/types";
import discordIcon from "@iconify/icons-fa6-brands/discord";
import githubIcon from "@iconify/icons-fa6-brands/github";
import xTwitter from "@iconify/icons-fa6-brands/x-twitter";
import mailRounded from "@iconify/icons-material-symbols/mail-rounded";

interface Social {
  username: string;
  url: string;
  icon: IconifyIcon;
}

export const socials: Record<string, Social> = {
  GitHub: {
    username: "@Podter",
    url: "https://github.com/Podter",
    icon: githubIcon,
  },
  Discord: {
    username: "@podter",
    url: `https://discord.com/users/331793642689789962`,
    icon: discordIcon,
  },
  X: {
    username: "@Real_Podter",
    url: "https://x.com/Real_Podter",
    icon: xTwitter,
  },
  Email: {
    url: "mailto:hello@podter.me",
    username: "hello@podter.me",
    icon: mailRounded,
  },
};
