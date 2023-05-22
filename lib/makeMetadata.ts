import { siteConfig } from "@/constants/site";
import { Metadata } from "next";

export default function makeMetadata(
  title: string,
  description: string
): Metadata {
  return {
    title,
    description,
    openGraph: {
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
      title,
      description,
      images: [`${siteConfig.ogApi}?title=${title}`],
    },
  };
}
