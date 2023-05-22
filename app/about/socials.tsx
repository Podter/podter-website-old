import { buttonVariants } from "@/components/ui/Button";
import { socials } from "@/constants/socials";
import { Icon } from "@iconify/react/dist/offline";
import Link from "next/link";
import { TypographySmall, TypographyMuted } from "@/components/ui/Typography";
import { ExternalLink } from "lucide-react";

export default function Socials() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 w-full items-start mt-6 gap-3">
      {Object.entries(socials).map(([social, { url, icon, username }], i) => (
        <Link
          href={url}
          key={i}
          className={buttonVariants({
            variant: "outline",
            className: "!justify-between h-16",
          })}
        >
          <div className="flex flex-row items-center">
            <div className="flex flex-row items-center gap-2 cursor-default">
              <Icon icon={icon} fontSize={24} className="h-6 w-6" />
              <TypographyMuted className="mr-1 font-medium">
                {social}:{" "}
              </TypographyMuted>
            </div>
            <TypographySmall className="font-normal">
              {username}
            </TypographySmall>
          </div>
          <ExternalLink size={16} className="h-4 w-4" />
        </Link>
      ))}
    </div>
  );
}
