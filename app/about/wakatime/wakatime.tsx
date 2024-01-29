import { Suspense } from "react";

import MagicalContainer from "~/components/magical-container";
import Spinner from "~/components/ui/spinner";
import Data from "./data";

export default function WakaTime() {
  return (
    <MagicalContainer
      containerClassName="mt-6 w-full rounded-xl shadow"
      className="flex w-full flex-col p-4"
    >
      <p className="font-semibold leading-none tracking-tight">
        Most used languages{" "}
        <span className="text-sm font-normal text-muted-foreground">
          (Last 7 days)
        </span>
      </p>
      <Suspense fallback={<Fallback />}>
        <Data />
      </Suspense>
      <div className="flex w-full justify-end">
        <p className="text-sm text-muted-foreground">
          Data provided by WakaTime
        </p>
      </div>
    </MagicalContainer>
  );
}

function Fallback() {
  return (
    <div className="mt-3 flex h-60 items-center justify-center">
      <Spinner size={32} />
    </div>
  );
}
