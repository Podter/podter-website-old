import { lanyardConfig } from "@/constants/site";
import { discordId } from "@/constants/socials";
import { LanyardHoverCard } from "./LanyardHoverCard";
import { useLanyardWS, type Activity, type Data } from "use-lanyard";
import useTimestamps from "@/hooks/useTimestamps";

type ActivityData = {
  type: string;
  details: string;
};

function getActivity(activity?: Activity): ActivityData | null {
  if (!activity) return null;

  switch (activity.type) {
    case 0:
      return { type: "Playing", details: activity.name };
    case 1:
      return { type: "Streaming", details: activity.details ?? activity.name };
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
}

type Props = {
  initialData?: Data;
};

export default function Lanyard({ initialData }: Props) {
  const data = useLanyardWS(discordId, {
    initialData,
    api: lanyardConfig,
  });

  const time = useTimestamps(data?.activities[0]?.timestamps);
  const activity = getActivity(data?.activities[0]);

  return (
    <div className="-mb-5">
      <LanyardHoverCard data={data}>
        <a
          href={`https://discord.com/users/${discordId}`}
          className="text-xs md:text-sm text-muted-foreground hover:underline underline-offset-4 decoration-foreground/50"
        >
          {activity ? (
            <>
              <span>{activity.type}</span>{" "}
              <span className="font-semibold">{activity.details}</span>{" "}
              {time && <span>• {time.start} elapsed</span>}
            </>
          ) : (
            <span>I&apos;m not currently doing anything!</span>
          )}
        </a>
      </LanyardHoverCard>
    </div>
  );
}
