import { z } from "zod";

import { env } from "~/env.mjs";

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

// TODO: make this work, dont render on build
export default async function WakaTime() {
  const rawData = await fetch(
    "https://wakatime.com/api/v1/users/current/stats/last_7_days",
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          env.WAKATIME_SECRET_API_KEY || "",
        ).toString("base64")}`,
      },
      next: { revalidate: 86400 },
    },
  ).then((res) => res.json());
  const { data } = WakaTimeResponseSchema.parse(rawData);

  return (
    <div className="mt-6 flex w-full flex-col rounded-xl border bg-background p-4">
      <p className="inline-flex items-center gap-1 font-medium">
        Most used languages
        <span className="text-sm font-normal text-muted-foreground">
          (Last 7 days)
        </span>
      </p>
      <div className="mt-3 flex flex-col">
        {data.languages.slice(0, 5).map(({ name, text, percent }, i) => (
          <span key={i}>
            {name}: {text} {percent}%
          </span>
        ))}
      </div>
    </div>
  );
}
