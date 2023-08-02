import { httpFetch } from "@/lib/utils";
import { socialId } from "@/constants/socials";
import type { Data } from "use-lanyard";
import Lanyard from "./lanyard";
import { lanyardConfig } from "@/constants/site";
import getRoblox from "@/lib/getRoblox";
import Roblox from "./roblox";
import WakaTime from "./wakatime";

export default async function Page() {
  const [discord, roblox, wakatime] = await Promise.all([
    httpFetch<{ data: Data }>(
      `${lanyardConfig.secure ? "https" : "http"}://${
        lanyardConfig.hostname
      }/v1/users/${socialId.discord}`,
      { cache: "no-store" },
    ),
    getRoblox(),
    httpFetch<{ data: WakaTimeData }>(
      "https://wakatime.com/api/v1/users/current/stats/last_7_days",
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            process.env.WAKATIME_SECRET_API_KEY || "",
          ).toString("base64")}`,
        },
        next: { revalidate: 86400 },
      },
    ),
  ]);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 mt-9">
        <Lanyard initialData={discord.data} />
        <Roblox {...roblox} />
      </div>
      <div className="flex mt-6">
        <WakaTime {...wakatime.data} />
      </div>
    </>
  );
}
