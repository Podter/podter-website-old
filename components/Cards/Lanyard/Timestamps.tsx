import { useTime } from "@/hooks/useTime";
import { Timestamps as LanyardTimestamps } from "use-lanyard";

type TimestampsProps = {
  timestamps: LanyardTimestamps | undefined;
};

export default function Timestamps({ timestamps }: TimestampsProps) {
  const time = useTime(timestamps);

  return <p className="text-sm ">{time?.start} elapsed</p>;
}
