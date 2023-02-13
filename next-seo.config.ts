import { DefaultSeoProps } from "next-seo";
import { variants } from "@catppuccin/palette";

const config: DefaultSeoProps = {
  title: undefined,
  titleTemplate: "%s | Podter",
  defaultTitle: "Podter",
  description: "A student and self taught developer from Thailand.",
  themeColor: "#1e66f5",
  openGraph: {
    title: "Podter",
    description: "A student and self taught developer from Thailand.",
    url: "https://podter.xyz",
    siteName: "Podter",
    locale: "en-US",
    images: [
      {
        url: "https://podter.xyz/api/og?title=podter.xyz",
        width: 1920,
        height: 1080,
        alt: "Podter",
      },
    ],
    type: "website",
  },
  defaultOpenGraphImageWidth: 1920,
  defaultOpenGraphImageHeight: 1080,
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
  additionalLinkTags: [{ rel: "icon", href: "/favicon.svg" }],
  additionalMetaTags: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
};

export default config;
