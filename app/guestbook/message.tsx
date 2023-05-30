import { TypographySmall } from "@/components/ui/Typography";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/HoverCard";
import { CalendarDays, Edit } from "lucide-react";
import { format } from "date-fns";
import Link from "next/link";

export default function Message({
  message,
  created,
  updated,
  updatedAt,
  user,
}: GuestbookMessageData) {
  return (
    <div className="flex flex-row items-center">
      <HoverCard>
        <HoverCardTrigger asChild>
          <div className="flex flex-row items-center gap-2 cursor-default">
            <Avatar className="h-6 w-6">
              <AvatarImage src={user.avatar} alt={user.username} />
              <AvatarFallback className="text-xs">
                {user.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <Link
              className="text-sm text-muted-foreground mr-1 font-medium underline-offset-4 hover:underline cursor-pointer"
              href={user.url}
            >
              {user.name}:{" "}
            </Link>
          </div>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-start space-x-4">
            <Avatar>
              <AvatarImage src={user.avatar} alt={user.username} />
              <AvatarFallback>
                {user.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <div className="flex flex-row">
                <Link
                  href={user.url}
                  className="text-sm font-semibold mr-1 underline-offset-4 hover:underline cursor-pointer"
                >
                  {user.username}
                </Link>
                <p className="text-sm">on {user.provider}</p>
              </div>
              {updated && (
                <div className="flex items-center pt-2">
                  <Edit className="mr-2 h-4 w-4 opacity-70" />{" "}
                  <span className="text-xs text-muted-foreground">
                    Updated {format(updatedAt, "do MMMM, yyyy")}
                  </span>
                </div>
              )}
              <div className="flex items-center pt-2">
                <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                <span className="text-xs text-muted-foreground">
                  Created {format(created, "do MMMM, yyyy")}
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
      <TypographySmall className="font-normal">{message}</TypographySmall>
    </div>
  );
}
