"use client";

import type { Activity, Data as LanyardData } from "use-lanyard";
import { useMemo } from "react";
import { useLanyardWS } from "use-lanyard";

import { discordId, lanyardHostname } from "~/constants/lanyard";
import { useTimestamps } from "~/hooks/use-timestamps";

interface LanyardProps {
  initialData: LanyardData;
}

interface ActivityData {
  type: string;
  details: string;
}

export default function Lanyard({ initialData }: LanyardProps) {
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

  return <div>{JSON.stringify(activity)}</div>;
}
