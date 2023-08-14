import { AstroAuth } from "auth-astro/server";
import Discord from "@auth/core/providers/discord";

export const prerender = false;

export const { get, post } = AstroAuth({
  providers: [
    Discord({
      clientId: import.meta.env.DISCORD_CLIENT_ID,
      clientSecret: import.meta.env.DISCORD_CLIENT_SECRET,
    }),
  ],
});
