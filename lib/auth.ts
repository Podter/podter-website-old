import { eq } from "drizzle-orm";
import NextAuth from "next-auth";
import Discord from "next-auth/providers/discord";
import GitHub from "next-auth/providers/github";
import { sha256 } from "ohash";

import { db } from "~/database";
import { guestbook } from "~/database/schema/guestbook";
import { env } from "~/env.mjs";

declare module "next-auth" {
  // eslint-disable-next-line no-unused-vars
  interface Session {
    user: {
      name: string;
      user: string;
      email: string;
    };
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
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
    async signIn({ user, account }) {
      if (user.email) {
        const emailHash = sha256(user.email);

        const existingMessages = await db
          .select({ user: guestbook.user })
          .from(guestbook)
          .where(eq(guestbook.emailHash, emailHash))
          .limit(1);

        const existingMessage = existingMessages[0];
        if (existingMessage) {
          const isSameProvider = existingMessage.user.includes(
            account?.provider!,
          );
          if (isSameProvider) {
            return true;
          } else {
            return false;
          }
        }

        return true;
      }

      return false;
    },
    jwt({ account, profile, token }) {
      if (account && profile) {
        if (account.provider === "discord") {
          token.name = profile.global_name as string;
          token.provider = account.provider;
          token.userId = profile.id;
          token.email = profile.email;

          return token;
        }

        if (account.provider === "github") {
          token.name = profile.name;
          token.provider = account.provider;
          token.userId = profile.id;
          token.email = profile.email;

          return token;
        }
      }

      return token;
    },
    session({ session, token }) {
      session.user.name = token.name as string;
      session.user.user = `${token.provider}:${token.userId}`;
      session.user.email = token.email as string;

      return session;
    },
  },
});
