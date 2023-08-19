import type { APIRoute } from "astro";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import SwitzerBold from "@/assets/switzer-bold.ttf";
import OpenGraph from "@/components/OpenGraph";

export const get: APIRoute = async ({ request }) => {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title");

  const svg = await satori(OpenGraph({ title }), {
    width: 1920,
    height: 1080,
    fonts: [
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
