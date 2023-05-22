import type { Options } from "use-lanyard";

export const siteConfig = {
  name: "Podter",
  username: "Podter",
  url: "https://podter.me",
  ogImage: "https://podter.me/og.png",
  ogApi: "https://podter.me/api/og",
  description: "A student and self-taught developer from Thailand.",
};

export const lanyardConfig: Options["api"] = {
  hostname: "lanyard.podter.xyz",
  secure: true,
};
