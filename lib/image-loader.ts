import type { ImageLoader } from "next/image";

function normalizeSrc(src: string) {
  return src.startsWith("/") ? src.slice(1) : src;
}

// https://developers.cloudflare.com/images/transform-images/integrate-with-frameworks/#nextjs
const cloudflareLoader: ImageLoader = ({ src, width, quality }) => {
  if (
    process.env.NODE_ENV !== "production" ||
    (typeof location !== "undefined" && location.hostname !== "podter.me")
  ) {
    return src;
  }

  const params = [
    `format=webp`,
    `width=${width}`,
    `quality=${quality ?? "75"}`,
  ];

  const paramsString = params.join(",");
  return `/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`;
};

export default cloudflareLoader;
