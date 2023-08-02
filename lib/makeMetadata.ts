import { siteConfig } from "@/constants/site";
import type { Metadata } from "next";
import defaultMetadata from "@/constants/defaultMetadata";

export default function makeMetadata(
  title: string,
  description: string,
): Metadata {
  return {
    title,
    description,
    openGraph: {
      ...defaultMetadata.openGraph,
      title,
      description,
      images: [
        {
          url: `${siteConfig.ogApi}?title=${title}`,
          width: 1920,
          height: 1080,
          alt: title,
        },
      ],
    },
    twitter: {
      ...defaultMetadata.twitter,
      title,
      description,
      images: [`${siteConfig.ogApi}?title=${title}`],
    },
  };
}
