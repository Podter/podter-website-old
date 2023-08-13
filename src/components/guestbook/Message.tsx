import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { lanyardConfig } from "@/constants/site";
import { discordId } from "@/constants/socials";
import { TypographySmall } from "@/components/ui/typography";

export default function Message() {
  return (
    <div className="flex items-center">
      <div className="flex items-center gap-1 mr-1">
        <Avatar className="h-6 w-6">
          <AvatarImage
            src={`${lanyardConfig.secure ? "https" : "http"}://${
              lanyardConfig.hostname
            }/${discordId}.png`}
            alt="Discord avatar"
          />
          <AvatarFallback>P</AvatarFallback>
        </Avatar>
        <a
          className="text-xs md:text-sm text-muted-foreground hover:underline underline-offset-4 decoration-foreground/50"
          href="/"
        >
          Podter:
        </a>
      </div>
      <TypographySmall className="font-normal">Hello, world!</TypographySmall>
    </div>
  );
}
