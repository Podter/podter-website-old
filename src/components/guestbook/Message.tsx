import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { lanyardConfig } from "@/constants/site";
import { discordId } from "@/constants/socials";
import { TypographySmall } from "@/components/ui/typography";
import type { UserData } from "@/lib/getUser";

export type MessageData = {
  created: Date;
  updated: Date;
  isUpdated: boolean;
  provider: string;
  providerAccountId: string;
  message: string;
};

type Props = {
  message: MessageData;
  user: UserData;
};

export default function Message({ message, user }: Props) {
  return (
    <div className="flex items-center">
      <div className="flex items-center gap-1 mr-1">
        <Avatar className="h-6 w-6">
          <AvatarImage src={user.avatar} alt={`${user.name}'s avatar`} />
          <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
        <a
          className="text-xs md:text-sm text-muted-foreground hover:underline underline-offset-4 decoration-foreground/50"
          href={user.url}
        >
          {user.name}:
        </a>
      </div>
      <TypographySmall className="font-normal">
        {message.message}
      </TypographySmall>
    </div>
  );
}
