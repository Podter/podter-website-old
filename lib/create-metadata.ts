import type { Metadata } from "next";

import { defaultMetadata } from "~/constants/metadata";

interface CreateMetadataOptions {
  title: string;
  description: string;
  publishedTime?: string;
  index?: boolean;
}

export function createMetadata({
  title,
  description,
  publishedTime,
  index = true,
}: CreateMetadataOptions) {
  const ogUrl = `/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(publishedTime ?? description)}`;
  const ogAlt = `${title} - ${publishedTime ?? description}`;

  return {
    ...defaultMetadata,
    title,
    description,
    openGraph: {
      ...defaultMetadata.openGraph,
      title,
      description,
      type: publishedTime ? "article" : "website",
      publishedTime,
      images: {
        ...defaultMetadata.openGraph.images,
        // TODO: Replace with actual image URL
        url: ogUrl,
        alt: ogAlt,
      },
    },
    twitter: {
      ...defaultMetadata.twitter,
      title,
      description: description,
      images: {
        ...defaultMetadata.twitter.images,
        // TODO: Replace with actual image URL
        url: ogUrl,
        alt: ogAlt,
      },
    },
    robots: {
      ...defaultMetadata.robots,
      index,
      googleBot: {
        ...defaultMetadata.robots.googleBot,
        index,
      },
    },
  } satisfies Metadata;
}
