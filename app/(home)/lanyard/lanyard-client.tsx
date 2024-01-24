"use client";

import type { Activity, Data as LanyardData } from "use-lanyard";
import { useMemo } from "react";
import Link from "next/link";
import { CalendarIcon } from "@radix-ui/react-icons";
import { useLanyardWS } from "use-lanyard";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/hover-card";
import {
  discordId,
  discordJoinDate,
  lanyardHostname,
} from "~/constants/lanyard";
import { useTimestamps } from "~/hooks/use-timestamps";
import { cn } from "~/lib/utils";
import DiscordAvatar from "./discord-avatar";

interface LanyardProps {
  initialData: LanyardData;
}

interface ActivityData {
  type: string;
  details: string;
}

// TODO: maybe move it to somewhere else?
export default function LanyardClient({ initialData }: LanyardProps) {
  const data = useLanyardWS(discordId, {
    initialData,
    api: {
      hostname: lanyardHostname,
      secure: true,
    },
  }) as LanyardData;

  const time = useTimestamps(data.activities[0]?.timestamps);
  const activity = useMemo<ActivityData | null>(() => {
    const activity = data.activities[0] as Activity | undefined;
    if (!activity) return null;

    switch (activity.type) {
      case 0:
        return { type: "Playing", details: activity.name };
      case 1:
        return {
          type: "Streaming",
          details: activity.details ?? activity.name,
        };
      case 2:
        return {
          type: "Listening to",
          details: activity.details ?? activity.name,
        };
      case 3:
        return { type: "Watching", details: activity.name };
      case 5:
        return { type: "Competing in", details: activity.name };
      default:
        return null;
    }
  }, [data]);

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="flex items-center gap-2">
          <DiscordAvatar
            user={data.discord_user.global_name}
            className="h-6 w-6"
          />
          <Link
            href={`https://discord.com/users/${discordId}`}
            className="text-sm text-muted-foreground underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none"
          >
            {activity ? (
              <>
                {activity.type}{" "}
                <span className="font-semibold">{activity.details}</span>{" "}
                {time && (
                  <span suppressHydrationWarning>• {time.start} elapsed</span>
                )}
              </>
            ) : (
              "I'm not currently doing anything!"
            )}
          </Link>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="flex gap-2">
        <div className="relative flex">
          <DiscordAvatar
            user={data.discord_user.global_name}
            spinnerSize={16}
          />
          <div
            className={cn(
              "absolute bottom-1 right-0 h-2.5 w-2.5 rounded-full bg-slate-600",
              {
                "bg-green-400": data.discord_status === "online",
                "bg-yellow-400": data.discord_status === "idle",
                "bg-red-600": data.discord_status === "dnd",
              },
            )}
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm">
            <span className="font-medium">@{data.discord_user.username}</span>{" "}
            <span className="text-muted-foreground">on Discord</span>
          </p>
          <div className="ml-2 flex items-center gap-1 text-xs text-muted-foreground">
            <CalendarIcon className="h-3 w-3" width={12} height={12} />{" "}
            <p>Joined {discordJoinDate}</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
