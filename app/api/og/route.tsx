import satori from "satori";

export const runtime = "edge";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  const calSansFont = await fetch(
    "https://github.com/calcom/font/raw/main/fonts/webfonts/CalSans-SemiBold.ttf",
  ).then((res) => res.arrayBuffer());
  const geistFont = await fetch(
    "https://github.com/vercel/geist-font/raw/main/packages/next/dist/fonts/geist-sans/Geist-SemiBold.ttf",
  ).then((res) => res.arrayBuffer());

  const svg = await satori(
    <div
      style={{
        position: "relative",
        display: "flex",
        height: "100%",
        width: "100%",
        backgroundImage: `url(https://github.com/Podter/podter.me/raw/main/public/og-bg.png)`,
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
            fontFamily: "Geist",
          }}
          tw="text-right font-semibold text-[#a6adc8]"
        >
          {description}
        </span>
      </div>
    </div>,
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
          name: "Geist",
          data: geistFont,
          style: "normal",
          weight: 600,
        },
      ],
    },
  );

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, immutable, no-transform, max-age=31536000",
    },
  });
}
