import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import Spinner from "~/components/ui/spinner";
import { discordId, lanyardHostname } from "~/constants/lanyard";
import { cn } from "~/lib/utils";

interface DiscordAvatarProps {
  user: string | null;
  className?: string;
  spinnerSize?: number;
}

export default function DiscordAvatar({
  user,
  className,
  spinnerSize = 12,
}: DiscordAvatarProps) {
  return (
    <Avatar className={cn("border shadow", className)}>
      <AvatarImage
        src={`https://${lanyardHostname}/${discordId}.png`}
        alt={`${user}'s avatar`}
      />
      <AvatarFallback>
        <Spinner size={spinnerSize} />
      </AvatarFallback>
    </Avatar>
  );
}
