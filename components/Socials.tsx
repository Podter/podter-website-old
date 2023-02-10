import Link from "next/link";
import { Icon } from "@iconify/react";
import githubIcon from "@iconify/icons-fa6-brands/github";
import discordIcon from "@iconify/icons-fa6-brands/discord";
import twitterIcon from "@iconify/icons-fa6-brands/twitter";
import mailRounded from "@iconify/icons-material-symbols/mail-rounded";
import youtubeIcon from "@iconify/icons-fa6-brands/youtube";
import robloxIcon from "@iconify/icons-simple-icons/roblox";

export default function Socials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
      <Link href="https://github.com/Podter" className="btn gap-3">
        GitHub
        <Icon className="h-6 w-6" scale={24} icon={githubIcon} />
      </Link>
      <Link
        href="https://discord.com/users/331793642689789962"
        className="btn gap-3"
      >
        Discord
        <Icon className="h-6 w-6" scale={24} icon={discordIcon} />
      </Link>
      <Link href="https://twitter.com/Real_Podter" className="btn gap-3">
        Twitter
        <Icon className="h-6 w-6" scale={24} icon={twitterIcon} />
      </Link>
      <Link href="mailto:me@podter.xyz" className="btn gap-3">
        Email
        <Icon className="h-6 w-6" scale={24} icon={mailRounded} />
      </Link>
      <Link href="https://www.youtube.com/@podter" className="btn gap-3">
        YouTube
        <Icon className="h-6 w-6" scale={24} icon={youtubeIcon} />
      </Link>
      <Link
        href="https://www.roblox.com/users/126064549/profile"
        className="btn gap-3"
      >
        Roblox
        <Icon className="h-6 w-6" scale={24} icon={robloxIcon} />
      </Link>
    </div>
  );
}
