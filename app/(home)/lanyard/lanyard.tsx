import type { Data as LanyardData } from "use-lanyard";
import { unstable_cache as cache } from "next/cache";

import { discordId, lanyardHostname } from "~/constants/lanyard";
import LanyardClient from "./lanyard-client";

const getLanyard = cache(
  async () => {
    const { data } = await fetch(
      `https://${lanyardHostname}/v1/users/${discordId}`,
      { next: { revalidate: 60 } },
    ).then((res) => res.json());
    return data as LanyardData;
  },
  ["lanyard"],
  { revalidate: 60 },
);

export default async function Lanyard() {
  const data = await getLanyard();
  return <LanyardClient initialData={data} />;
}
