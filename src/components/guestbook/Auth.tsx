import { Button } from "@/components/ui/button";
import Iconify from "@/components/ui/iconify";
import githubIcon from "@iconify/icons-fa6-brands/github";
import discordIcon from "@iconify/icons-fa6-brands/discord";
import { signIn } from "auth-astro/client";

export default function Auth() {
  return (
    <div className="flex flex-col sm:flex-row gap-2">
      <Button
        onClick={() => signIn("github")}
        size="sm"
        variant="secondary"
        className="w-full sm:w-44"
      >
        <Iconify icon={githubIcon} className="mr-2 h-4 w-4" size={16} />
        Sign in with GitHub
      </Button>
      <Button
        onClick={() => signIn("discord")}
        size="sm"
        variant="secondary"
        className="w-full sm:w-44"
      >
        <Iconify icon={discordIcon} className="mr-2 h-4 w-4" size={16} />
        Sign in with Discord
      </Button>
    </div>
  );
}
