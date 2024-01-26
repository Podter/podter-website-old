import { ImageResponse } from "next/og";

import { url } from "~/constants/metadata";
import { env } from "~/env.mjs";

export function createOpenGraph(title: string, description?: string) {
  const baseUrl =
    env.VERCEL_ENV === "production" ? url : "http://localhost:3000";

  return async () => {
    const calSansFont = await fetch(
      "https://github.com/calcom/font/raw/main/fonts/webfonts/CalSans-SemiBold.ttf",
    ).then((res) => res.arrayBuffer());
    const interFont = await fetch(
      "https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-600-normal.ttf",
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
      (
        <div
          style={{
            position: "relative",
            display: "flex",
            height: "100%",
            width: "100%",
            backgroundImage: `url(${baseUrl}/og-bg.png)`,
          }}
        >
          <div tw="absolute right-32 top-24 flex h-full w-full items-start justify-end">
            <span
              style={{
                fontSize: 72,
                fontFamily: "CalSans",
                maxWidth: "66.666667%",
              }}
              tw="text-right font-semibold text-[#cdd6f4]"
            >
              {title}
            </span>
          </div>
          <div tw="absolute bottom-[6.625rem] right-[6.5rem] flex h-full w-full items-end justify-end">
            <span
              style={{
                fontSize: 24,
                fontFamily: "Inter",
              }}
              tw="text-right font-semibold text-[#a6adc8]"
            >
              {description}
            </span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "CalSans",
            data: calSansFont,
            style: "normal",
            weight: 600,
          },
          {
            name: "Inter",
            data: interFont,
            style: "normal",
            weight: 600,
          },
        ],
      },
    );
  };
}
