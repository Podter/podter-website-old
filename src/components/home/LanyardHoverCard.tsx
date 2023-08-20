import type { PropsWithChildren } from "react";
import type { Data } from "use-lanyard";
import { CalendarDays } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { lanyardConfig } from "@/constants/site";
import { discordId, discordJoinDate } from "@/constants/socials";
import { cn } from "@/lib/utils";
import Spinner from "@/components/ui/spinner";

type Props = {
  data?: Data;
};

export function LanyardHoverCard({ data, children }: PropsWithChildren<Props>) {
  if (!data) return <>{children}</>;

  return (
    <HoverCard>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent className="flex space-x-4">
        <div className="flex relative">
          <Avatar>
            <AvatarImage
              src={`${lanyardConfig.secure ? "https" : "http"}://${
                lanyardConfig.hostname
              }/${discordId}.png`}
              alt="Discord avatar"
            />
            <AvatarFallback>
              <Spinner size={16} />
            </AvatarFallback>
          </Avatar>
          <div
            className={cn(
              "rounded-full h-2.5 w-2.5 absolute right-0 bottom-1 bg-slate-600",
              {
                "bg-green-400": data.discord_status === "online",
                "bg-yellow-400": data.discord_status === "idle",
                "bg-red-600": data.discord_status === "dnd",
              },
            )}
          />
        </div>
        <div className="space-y-1">
          <h4 className="text-sm">
            <span className="font-semibold">@{data.discord_user.username}</span>{" "}
            <span className="text-muted-foreground">on Discord</span>
          </h4>
          <div className="flex items-center pt-1">
            <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
            <span className="text-xs text-muted-foreground">
              Joined {discordJoinDate}
            </span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
