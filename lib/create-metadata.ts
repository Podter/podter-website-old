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
}: CreateMetadataOptions): Metadata => ({
  ...defaultMetadata,
  title,
  description,
  openGraph: {
    ...defaultMetadata.openGraph,
    title,
    description,
    type: publishedTime ? "article" : "website",
    publishedTime,
    // images: []
  },
  twitter: {
    title,
    description: description,
    // images: [],
  },
});
