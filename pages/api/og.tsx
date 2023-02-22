import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get("title");

  const poppinsFont = await fetch(
    new URL("../../public/fonts/poppins-bold.ttf", import.meta.url)
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
          backgroundImage: "url(https://podter.xyz/og-bg.png)",
        }}
      >
        <div
          style={{
            marginTop: 128,
            marginRight: 128,
            fontSize: 128,
            fontWeight: 700,
            color: "#fff",
            fontFamily: "Poppins",
            maxWidth: "66.666667%",
            textAlign: "end",
          }}
        >
          {title ? title : "podter.xyz"}
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: "Poppins",
          data: poppinsFont,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
