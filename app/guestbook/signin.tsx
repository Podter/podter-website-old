"use client";

import { Button } from "@/components/ui/Button";
import { Icon } from "@iconify/react/dist/offline";
import githubIcon from "@iconify/icons-fa6-brands/github";
import discordIcon from "@iconify/icons-fa6-brands/discord";
import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <div className="flex flex-col gap-3 mt-6 sm:flex-row">
      <Button onClick={() => signIn("github")}>
        <Icon className="mr-2 h-4 w-4" fontSize={16} icon={githubIcon} /> Sign
        in with GitHub
      </Button>
      <Button onClick={() => signIn("discord")}>
        <Icon className="mr-2 h-4 w-4" fontSize={16} icon={discordIcon} /> Sign
        in with Discord
      </Button>
    </div>
  );
}
