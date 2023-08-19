import type { APIRoute } from "astro";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import OpenGraph from "@/components/OpenGraph";
import SwitzerRegular from "@/assets/switzer-regular.ttf";
import SwitzerBold from "@/assets/switzer-bold.ttf";

export const prerender = false;

export const get: APIRoute = async ({ request }) => {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title");
  const date = searchParams.get("date");

  const svg = await satori(OpenGraph({ title, date }), {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Switzer",
        data: Buffer.from(SwitzerRegular),
        style: "normal",
        weight: 400,
      },
      {
        name: "Switzer",
        data: Buffer.from(SwitzerBold),
        style: "normal",
        weight: 700,
      },
    ],
  });

  const resvg = new Resvg(svg, {
    fitTo: {
      mode: "original",
    },
  });

  const image = resvg.render();

  return new Response(image.asPng(), {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
