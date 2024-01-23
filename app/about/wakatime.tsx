"use client";

import { useFetch } from "~/hooks/use-fetch";
import { WakaTimeSchema } from "~/lib/schema";

// TODO: make it better
export default function WakaTime() {
  return (
    <div className="mt-6 flex w-full flex-col rounded-xl border bg-background p-4">
      <p className="inline-flex items-center gap-1 font-medium">
        Most used languages
        <span className="text-sm font-normal text-muted-foreground">
          (Last 7 days)
        </span>
      </p>
      <Data />
    </div>
  );
}

function Data() {
  const { data } = useFetch("/api/wakatime", WakaTimeSchema);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className="mt-3 flex flex-col">
      {data.languages.slice(0, 5).map(({ name, text, percent }, i) => (
        <span key={i}>
          {name}: {text} {percent}%
        </span>
      ))}
    </div>
  );
}
