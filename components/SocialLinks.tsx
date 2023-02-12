import Link from "next/link";
import githubIcon from "@iconify/icons-fa6-brands/github";
import discordIcon from "@iconify/icons-fa6-brands/discord";
import twitterIcon from "@iconify/icons-fa6-brands/twitter";
import mailRounded from "@iconify/icons-material-symbols/mail-rounded";
import { Icon } from "@iconify/react";

export default function SocialLinks() {
  return (
    <>
      <Link
        className="btn btn-ghost btn-circle duration-75"
        href="https://github.com/Podter"
        aria-label="GitHub"
      >
        <Icon icon={githubIcon} className="h-6 w-6" scale={24} />
      </Link>
      <Link
        className="btn btn-ghost btn-circle duration-75"
        href="https://discord.com/users/331793642689789962"
        aria-label="Discord"
      >
        <Icon icon={discordIcon} className="h-6 w-6" scale={24} />
      </Link>
      <Link
        className="btn btn-ghost btn-circle duration-75"
        href="https://twitter.com/Real_Podter"
        aria-label="Twitter"
      >
        <Icon icon={twitterIcon} className="h-6 w-6" scale={24} />
      </Link>
      <Link
        className="btn btn-ghost btn-circle duration-75"
        href="mailto:me@podter.xyz"
        aria-label="Email"
      >
        <Icon icon={mailRounded} className="h-6 w-6" scale={24} />
      </Link>
    </>
  );
}
