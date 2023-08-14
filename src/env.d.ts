/* eslint-disable @typescript-eslint/triple-slash-reference */

/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client-image" />

import type { Session } from "@auth/core/types";

interface ImportMetaEnv {
  // Auth.js
  readonly AUTH_SECRET: string;

  // Discord
  readonly DISCORD_ID: string;
  readonly DISCORD_SECRET: string;

  // GitHub
  readonly GITHUB_ID: string;
  readonly GITHUB_SECRET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "@auth/core/types" {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      providerAccountId?: string | null;
    };
  }
}
