import { z } from "zod";

import type { WakaTime } from "~/lib/schema";
import { env } from "~/env.mjs";
import { WakaTimeLanguageSchema } from "~/lib/schema";

export const runtime = "edge";

const WakaTimeResponseSchema = z.object({
  data: z.object({
    languages: z.array(WakaTimeLanguageSchema),
  }),
});

export async function GET() {
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

  return Response.json(
    {
      languages: data.languages
        .slice(0, 5)
        .map(({ name, text, percent }) => ({ name, text, percent })),
    } as WakaTime,
    {
      headers: {
        "Cache-Control": "s-maxage=86400, stale-while-revalidate",
      },
    },
  );
}
