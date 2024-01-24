import { Suspense } from "react";

import { P } from "~/components/ui/typography";
import { Lanyard, LanyardSkeleton } from "./lanyard";
import Socials from "./socials";

export const runtime = "edge";

// TODO: add home page
export default function Home() {
  return (
    <>
      <Suspense fallback={<LanyardSkeleton />}>
        <Lanyard />
      </Suspense>
      <div className="flex h-[calc(100vh-12rem)] w-full flex-col items-center justify-center text-center md:h-[calc(100vh-18rem)]">
        <h1 className="font-heading text-7xl font-semibold md:text-8xl">
          Podter
        </h1>
        <P className="mt-2">
          A student and self-taught developer from Thailand.
        </P>
        <div className="mb-24 mt-6 flex items-center justify-center gap-2 md:mb-48">
          <Socials />
        </div>
      </div>
    </>
  );
}
