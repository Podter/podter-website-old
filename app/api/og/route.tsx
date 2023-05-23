import { ImageResponse } from "@vercel/og";
import { siteConfig } from "@/constants/site";

export const runtime = "edge";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title");

  const interFont = await fetch(
    new URL("../../../public/fonts/inter-bold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          backgroundImage: `url(${siteConfig.url}}/og-bg.png)`,
        }}
      >
        <div
          style={{
            marginTop: 128,
            marginRight: 128,
            fontSize: 128,
            fontWeight: 700,
            color: "#fff",
            fontFamily: "Inter",
            maxWidth: "66.666667%",
            textAlign: "end",
          }}
        >
          {title}
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: "Inter",
          data: interFont,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
