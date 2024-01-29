import type { Metadata } from "next";

import { defaultMetadata } from "~/constants/metadata";

interface CreateMetadataOptions {
  title: string;
  description: string;
  publishedTime?: string;
  index?: boolean;
}

export const createMetadata = ({
  title,
  description,
  publishedTime,
  index = true,
}: CreateMetadataOptions) =>
  ({
    ...defaultMetadata,
    title,
    description,
    openGraph: {
      ...defaultMetadata.openGraph,
      title,
      description,
      type: publishedTime ? "article" : "website",
      publishedTime,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title,
      description: description,
    },
    robots: {
      ...defaultMetadata.robots,
      index,
      googleBot: {
        ...defaultMetadata.robots.googleBot,
        index,
      },
    },
  }) satisfies Metadata;
