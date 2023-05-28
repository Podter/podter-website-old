import type { Options } from "use-lanyard";

export const siteConfig = {
  name: "Podter",
  username: "Podter",
  url: "https://podter.me",
  ogImage: "/og.png",
  ogApi: "/api/og",
  description: "A student and self-taught developer from Thailand.",
};

export const lanyardConfig: Options["api"] = {
  hostname: "lanyard.podter.xyz",
  secure: true,
};

export const plausibleConfig = {
  domain: "podter.me",
  customDomain: "https://plausible.podter.me",
};
