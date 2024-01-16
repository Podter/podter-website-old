import type { Metadata } from "next";

import { defaultMetadata } from "~/constants/metadata";

interface CreateMetadataOptions {
  title: string;
  description: string;
}

export const createMetadata = ({
  title,
  description,
}: CreateMetadataOptions): Metadata => ({
  ...defaultMetadata,
  title,
  description,
  openGraph: {
    ...defaultMetadata.openGraph,
    title,
    description,
    // images: []
  },
  twitter: {
    title,
    description: description,
    // images: [],
  },
});
