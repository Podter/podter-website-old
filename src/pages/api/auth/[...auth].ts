import { AstroAuth } from "auth-astro/server";
import Discord from "@auth/core/providers/discord";
import GitHub from "@auth/core/providers/github";

export const prerender = false;

// eslint-disable-next-line @typescript-eslint/unbound-method
export const { get, post } = AstroAuth({
  providers: [
    Discord({
      clientId: import.meta.env.DISCORD_ID,
      clientSecret: import.meta.env.DISCORD_SECRET,
    }),
    GitHub({
      clientId: import.meta.env.GITHUB_ID,
      clientSecret: import.meta.env.GITHUB_SECRET,
    }),
  ],
});
