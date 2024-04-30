import { Suspense } from "react";

import SplitAnimate from "~/components/split-animate";
import { Skeleton } from "~/components/ui/skeleton";
import { P } from "~/components/ui/typography";
import Clock from "./clock";
import { Lanyard, LanyardSkeleton } from "./lanyard";
import ScreenSize from "./screen-size";
import Socials from "./socials";
import WakaTime from "./wakatime";

export const runtime = "edge";

export default function Home() {
  return (
    <div className="flex h-[calc(100vh-10.5rem)] w-full flex-col md:h-[calc(100vh-16.5rem)]">
      <div className="animate-fade-in flex flex-col items-center justify-start gap-2 sm:flex-row sm:justify-between">
        <Suspense fallback={<LanyardSkeleton />}>
          <Lanyard />
        </Suspense>
        <Suspense fallback={<Skeleton className="h-5 w-64" />}>
          <WakaTime />
        </Suspense>
      </div>
      <div className="mb-16 flex h-full w-full flex-col items-center justify-center text-center md:mb-[7.5rem]">
        <SplitAnimate
          className="font-heading text-7xl font-semibold md:text-8xl"
          as="h1"
        >
          Podter
        </SplitAnimate>
        <SplitAnimate as={P} className="mt-2">
          A student and self-taught developer from Thailand.
        </SplitAnimate>
        <div className="animate-fade-in mt-6 flex flex-col">
          <div className="flex items-center justify-center gap-2">
            <Socials />
          </div>
        </div>
      </div>
      <div className="animate-fade-in flex items-end justify-between">
        <Clock />
        <ScreenSize />
      </div>
    </div>
  );
}
