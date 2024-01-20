import discordIcon from "@iconify/icons-fa6-brands/discord";
import githubIcon from "@iconify/icons-fa6-brands/github";
import { Icon } from "@iconify/react/offline";

import { Button } from "~/components/ui/button";
import { signIn } from "~/lib/auth";

export default function Auth() {
  return (
    <div className="mt-6 flex flex-col justify-stretch gap-2 sm:flex-row sm:items-center sm:justify-start">
      <form
        action={async () => {
          "use server";
          await signIn("github");
        }}
      >
        <Button className="w-full sm:w-[11.75rem]" variant="secondary">
          <Icon
            icon={githubIcon}
            className="mr-2 h-4 w-4"
            width={16}
            height={16}
          />
          Sign in with GitHub
        </Button>
      </form>
      <form
        action={async () => {
          "use server";
          await signIn("discord");
        }}
      >
        <Button className="w-full sm:w-[11.75rem]" variant="secondary">
          <Icon
            icon={discordIcon}
            className="mr-2 h-4 w-4"
            width={16}
            height={16}
          />
          Sign in with Discord
        </Button>
      </form>
    </div>
  );
}
