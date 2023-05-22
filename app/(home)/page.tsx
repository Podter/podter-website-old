import { httpFetch } from "@/lib/utils";
import { socialId } from "@/constants/socials";
import type { Data } from "use-lanyard";
import Lanyard from "./lanyard";
import { lanyardConfig } from "@/constants/site";

export default async function Page() {
  const [discord] = await Promise.all([
    httpFetch<{ data: Data }>(
      `${lanyardConfig.secure ? "https" : "http"}://${
        lanyardConfig.hostname
      }/v1/users/${socialId.discord}`,
      { cache: "no-store" }
    ),
  ]);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 mt-9">
        <Lanyard initialData={discord.data} />
      </div>
      <div className="flex mt-6"></div>
    </>
  );
}
