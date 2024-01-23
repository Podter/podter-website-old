import type { Data as LanyardData } from "use-lanyard";
import { unstable_cache as cache } from "next/cache";

import { P } from "~/components/ui/typography";
import { discordId, lanyardHostname } from "~/constants/lanyard";
import Lanyard from "./lanyard";
import Socials from "./socials";

const getLanyard = cache(
  async () => {
    const { data } = await fetch(
      `https://${lanyardHostname}/v1/users/${discordId}`,
    ).then((res) => res.json());
    return data as LanyardData;
  },
  ["lanyard"],
  { revalidate: 60 },
);

// TODO: add home page
export default async function Home() {
  const lanyard = await getLanyard();

  return (
    <div className="relative flex h-[calc(100vh-10.5rem)] w-full flex-col items-center justify-center text-center md:h-[calc(100vh-16.5rem)]">
      <h1 className="font-heading text-7xl font-semibold md:text-8xl">
        Podter
      </h1>
      <P className="mt-2">A student and self-taught developer from Thailand.</P>
      <div className="mb-24 mt-6 flex items-center justify-center gap-2 md:mb-48">
        <Socials />
      </div>
      <Lanyard initialData={lanyard} />
    </div>
  );
}
