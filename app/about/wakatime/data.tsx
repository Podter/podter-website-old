import {
  unstable_cache as cache,
  unstable_noStore as noStore,
} from "next/cache";
import { getRequestContext } from "@cloudflare/next-on-pages";

import { Progress } from "~/components/ui/progress";
import { toBase64 } from "~/lib/utils";

interface WakaTimeResponse {
  data: {
    languages: {
      name: string;
      text: string;
      percent: number;
    }[];
  };
}

const getWakaTime = cache(
  async () => {
    const { WAKATIME_SECRET_API_KEY } = getRequestContext().env;
    const { data } = await fetch(
      "https://wakatime.com/api/v1/users/current/stats/last_7_days",
      {
        headers: {
          Authorization: `Basic ${toBase64(WAKATIME_SECRET_API_KEY)}`,
        },
      },
    ).then((res) => res.json<WakaTimeResponse>());
    return data.languages
      .slice(0, 5)
      .map(({ name, text, percent }) => ({ name, text, percent }));
  },
  ["lanyard"],
  { revalidate: 86400 },
);

export default async function Data() {
  noStore();
  const data = await getWakaTime();

  return (
    <div className="mt-3 flex flex-col">
      {data.map(({ name, text, percent }, i) => (
        <div key={i} className="mb-3 flex flex-col gap-2">
          <div className="flex w-full justify-between">
            <p className="text-sm font-medium leading-none">
              {name}{" "}
              <span className="text-sm font-normal text-muted-foreground">
                {text}
              </span>
            </p>
            <p className="text-sm text-muted-foreground">
              {percent.toFixed(2)}%
            </p>
          </div>
          <Progress value={percent} aria-label={name} />
        </div>
      ))}
    </div>
  );
}
