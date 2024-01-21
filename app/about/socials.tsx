import Link from "next/link";
import { Icon } from "@iconify/react/offline";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

import { socials } from "~/constants/socials";

export default function Socials() {
  return (
    <div className="mt-6 grid gap-3 sm:grid-cols-2">
      {Object.entries(socials).map(([name, { url, icon, username }]) => (
        <Link
          key={name}
          href={url}
          className="flex items-center justify-between rounded-lg border bg-background p-4 shadow hover:bg-accent"
        >
          <div className="flex items-center gap-3">
            <Icon icon={icon} className="h-6 w-6" width={24} height={24} />
            <p className="text-sm">
              <span className="font-medium text-muted-foreground">{name}</span>:{" "}
              {username}
            </p>
          </div>
          <ExternalLinkIcon
            className="h-4 w-4 text-muted-foreground"
            width={16}
            height={16}
          />
        </Link>
      ))}
    </div>
  );
}
