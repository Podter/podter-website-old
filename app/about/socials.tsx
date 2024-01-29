import Link from "next/link";
import { Icon } from "@iconify/react/offline";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

import MagicalContainer from "~/components/magical-container";
import { socials } from "~/constants/socials";

export default function Socials() {
  return (
    <div className="mt-6 grid gap-3 sm:grid-cols-2">
      {Object.entries(socials).map(([name, { url, icon, username }]) => (
        <MagicalContainer
          key={name}
          asChild
          className="flex h-full w-full items-center justify-between rounded-lg p-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          containerClassName="flex rounded-lg shadow"
        >
          <Link href={url}>
            <div className="flex items-center gap-3">
              <Icon icon={icon} className="h-6 w-6" width={24} height={24} />
              <p className="text-sm">
                <span className="font-medium text-muted-foreground">
                  {name}
                </span>
                : {username}
              </p>
            </div>
            <ExternalLinkIcon
              className="h-4 w-4 text-muted-foreground"
              width={16}
              height={16}
            />
          </Link>
        </MagicalContainer>
      ))}
    </div>
  );
}
