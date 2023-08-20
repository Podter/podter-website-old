/* eslint-disable @typescript-eslint/triple-slash-reference */

/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client-image" />

interface ImportMetaEnv {
  // Auth.js
  readonly AUTH_SECRET: string;

  // Discord
  readonly DISCORD_ID: string;
  readonly DISCORD_SECRET: string;
  readonly DISCORD_BOT_TOKEN: string;

  // GitHub
  readonly GITHUB_ID: string;
  readonly GITHUB_SECRET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  plausible: (
    eventName: string,
    options?: {
      props?: Record<string, string | number | boolean>;
      callback?: () => void;
    },
  ) => void;
}
