import type { Metadata } from "next";

import { defaultMetadata } from "~/constants/metadata";

interface CreateMetadataOptions {
  title: string;
  description: string;
  publishedTime?: string;
}

export const createMetadata = ({
  title,
  description,
  publishedTime,
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
  }) satisfies Metadata;
