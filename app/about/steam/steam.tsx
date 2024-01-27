import { Suspense } from "react";

import MagicalContainer from "~/components/magical-container";
import Spinner from "~/components/ui/spinner";
import Data from "./data";

export default function Steam() {
  return (
    <MagicalContainer
      containerClassName="mt-6 w-full rounded-xl"
      className="flex w-full flex-col p-4"
    >
      <p className="font-semibold leading-none tracking-tight">
        Recently played games
      </p>
      <Suspense fallback={<Fallback />}>
        <Data />
      </Suspense>
      <div className="mt-3 flex w-full justify-end">
        <p className="text-sm font-normal text-muted-foreground">
          Data provided by Steam
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
