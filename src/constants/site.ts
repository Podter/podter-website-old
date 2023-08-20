import type { Options } from "use-lanyard";

export const siteConfig = {
  name: "Podter",
  username: "Podter",
  twitter: "@Real_Podter",
  url: "https://podter.me",
  ogImage: "/og.png",
  ogApi: "https://og.podter.me/api/podter",
  description: "A student and self-taught developer from Thailand.",
} as const;

export const lanyardConfig: Options["api"] = {
  hostname: "lanyard.podter.me",
  secure: true,
} as const;
