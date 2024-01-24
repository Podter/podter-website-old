import { Suspense } from "react";
import {
  unstable_cache as cache,
  unstable_noStore as noStore,
} from "next/cache";
import { z } from "zod";

import { env } from "~/env.mjs";

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
      <Suspense fallback={<p>Loading...</p>}>
        <Data />
      </Suspense>
    </div>
  );
}

const WakaTimeResponseSchema = z.object({
  data: z.object({
    languages: z.array(
      z.object({
        name: z.string(),
        text: z.string(),
        percent: z.number(),
      }),
    ),
  }),
});

const getWakaTime = cache(
  async () => {
    const rawData = await fetch(
      "https://wakatime.com/api/v1/users/current/stats/last_7_days",
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            env.WAKATIME_SECRET_API_KEY || "",
          ).toString("base64")}`,
        },
      },
    ).then((res) => res.json());
    const { data } = WakaTimeResponseSchema.parse(rawData);
    return data.languages
      .slice(0, 5)
      .map(({ name, text, percent }) => ({ name, text, percent }));
  },
  ["lanyard"],
  { revalidate: 86400 },
);

async function Data() {
  noStore();
  const data = await getWakaTime();

  return (
    <div className="mt-3 flex flex-col">
      {data.map(({ name, text, percent }, i) => (
        <span key={i}>
          {name}: {text} {percent}%
        </span>
      ))}
    </div>
  );
}
