import type { AuthConfig } from "@auth/core";
import Discord from "@auth/core/providers/discord";
import GitHub from "@auth/core/providers/github";

export const authConfig: AuthConfig = {
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
  callbacks: {
    session({ session, token }) {
      session.user.providerAccountId = token.sub;
      return session;
    },
  },
};
