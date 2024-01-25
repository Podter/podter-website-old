import type { Metadata } from "next";

import { env } from "~/env.mjs";

const name = "Podter";
const twitter = "@Real_Podter";
const description = "A student and self-taught developer from Thailand.";
export const url = "https://podter.me";

export const defaultMetadata = {
  metadataBase: new URL(
    env.VERCEL_ENV === "production" ? url : "http://localhost:3000",
  ),
  title: {
    default: name,
    template: `%s | ${name}`,
  },
  description,
  authors: [{ name, url }],
  creator: name,
  openGraph: {
    title: name,
    description,
    url,
    siteName: name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: name,
    description: description,
    site: name,
    creator: twitter,
  },
  other: {
    "darkreader-lock": "true",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "Jfc2vKkk95YzKNp4NaKjW08FQd11KPabjnJucKPeKVc",
  },
} satisfies Metadata;
