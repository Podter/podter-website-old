import { httpFetch } from "@/lib/utils";
import { socialId } from "@/constants/socials";
import type { Data } from "use-lanyard";
import Lanyard from "./lanyard";
import { lanyardConfig } from "@/constants/site";
import getRoblox from "@/lib/getRoblox";
import Roblox from "./roblox";

export default async function Page() {
  const [discord, roblox] = await Promise.all([
    httpFetch<{ data: Data }>(
      `${lanyardConfig.secure ? "https" : "http"}://${
        lanyardConfig.hostname
      }/v1/users/${socialId.discord}`,
      { cache: "no-store" }
    ),
    getRoblox(),
  ]);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 mt-9">
        <Lanyard initialData={discord.data} />
        <Roblox {...roblox} />
      </div>
      <div className="flex mt-6"></div>
    </>
  );
}
