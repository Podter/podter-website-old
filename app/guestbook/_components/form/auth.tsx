import { DiscordLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

import { Button } from "~/components/ui/button";
import { signIn } from "~/lib/auth";

export default function Auth() {
  return (
    <div className="mt-6 flex flex-col items-center gap-2 sm:flex-row">
      <form
        action={async () => {
          "use server";
          await signIn("github");
        }}
      >
        <Button className="w-full sm:w-[11.75rem]" variant="secondary">
          <GitHubLogoIcon className="mr-2 h-4 w-4" width={16} height={16} />{" "}
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
          <DiscordLogoIcon className="mr-2 h-4 w-4" width={16} height={16} />{" "}
          Sign in with Discord
        </Button>
      </form>
    </div>
  );
}
