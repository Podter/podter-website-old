import Link from "next/link";
import { Icon } from "@iconify/react/offline";

import { Button } from "~/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { socials } from "~/constants/socials";

export default function Socials() {
  return (
    <>
      {Object.entries(socials).map(([name, { url, icon }]) => (
        <Tooltip key={name}>
          <TooltipTrigger asChild>
            <Button size="icon" className="h-8 w-8" variant="outline" asChild>
              <Link href={url}>
                <Icon icon={icon} className="h-4 w-4" width={16} height={16} />
                <span className="sr-only">{name}</span>
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{name}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </>
  );
}
