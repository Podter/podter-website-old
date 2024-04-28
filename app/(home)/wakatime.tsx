import { unstable_cache as cache } from "next/cache";
import { getRequestContext } from "@cloudflare/next-on-pages";
import { CodeIcon } from "@radix-ui/react-icons";

import { toBase64 } from "~/lib/utils";

interface WakaTimeResponse {
  data: {
    human_readable_total_including_other_language: string;
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
    return data.human_readable_total_including_other_language;
  },
  ["wakatime-total"],
  { revalidate: 86400 },
);

export default async function WakaTime() {
  const total = await getWakaTime();
  return (
    <div className="flex items-center text-center sm:text-end">
      <CodeIcon width={14} height={14} />
      <p className="ml-1 text-sm text-muted-foreground">
        Coding for {total} last 7 days
      </p>
    </div>
  );
}
