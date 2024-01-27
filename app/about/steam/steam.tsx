import { Suspense } from "react";

import Spinner from "~/components/ui/spinner";
import Data from "./data";

export default function Steam() {
  return (
    <div className="mt-6 flex w-full flex-col rounded-xl border bg-background p-4">
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
    </div>
  );
}

function Fallback() {
  return (
    <div className="mt-3 flex h-60 items-center justify-center">
      <Spinner size={32} />
    </div>
  );
}
