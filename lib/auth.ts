import NextAuth from "next-auth";
import Discord from "next-auth/providers/discord";
import GitHub from "next-auth/providers/github";
import { z } from "zod";

import { env } from "~/env.mjs";

const TokenSchema = z.object({
  email: z.string(),
  picture: z.string(),
  sub: z.string(),
});

declare module "next-auth" {
  // eslint-disable-next-line no-unused-vars
  interface Session {
    user: {
      user: string;
      email: string;
    };
  }
}

function getProvider(avatar: string): "github" | "discord" {
  if (avatar.includes("github")) {
    return "github";
  } else if (avatar.includes("discord")) {
    return "discord";
  } else {
    throw new Error("Unknown provider");
  }
}

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  secret: env.AUTH_SECRET,
  providers: [
    Discord({
      clientId: env.DISCORD_ID,
      clientSecret: env.DISCORD_SECRET,
    }),
    GitHub({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    // @ts-expect-error token should be returned
    session({ session, token: rawToken }) {
      const token = TokenSchema.parse(rawToken);

      const userId = token.sub;
      const provider = getProvider(token.picture);
      const email = token.email;

      return {
        ...session,
        user: {
          user: `${provider}:${userId}`,
          email,
        },
      };
    },
  },
});
