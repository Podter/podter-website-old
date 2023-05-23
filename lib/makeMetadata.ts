import { siteConfig } from "@/constants/site";
import { Metadata } from "next";
import { metadata } from "@/app/layout";

export default function makeMetadata(
  title: string,
  description: string
): Metadata {
  return {
    title,
    description,
    openGraph: {
      ...metadata.openGraph,
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
      ...metadata.twitter,
      title,
      description,
      images: [`${siteConfig.ogApi}?title=${title}`],
    },
  };
}
