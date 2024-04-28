import type { Metadata } from "next";

const name = "Podter";
const twitter = "@Real_Podter";
const description = "A student and self-taught developer from Thailand.";
export const url = "https://podter.me";

const ogUrl = "/og.png";
const ogAlt = `${name} - ${description}`;
const ogType = "image/png";
const ogWidth = 1200;
const ogHeight = 630;

export const defaultMetadata = {
  metadataBase: new URL(url),
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
    images: {
      url: ogUrl,
      alt: ogAlt,
      type: ogType,
      width: ogWidth,
      height: ogHeight,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: name,
    description: description,
    site: name,
    creator: twitter,
    images: {
      url: ogUrl,
      alt: ogAlt,
      type: ogType,
      width: ogWidth,
      height: ogHeight,
    },
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
