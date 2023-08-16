import type { AuthConfig } from "@auth/core";
import prisma from "@/lib/prisma";
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
    async signIn({ profile, account }) {
      const message = await prisma.messages.findFirst({
        where: {
          // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
          email: profile?.email!,
        },
        select: {
          providerAccountId: true,
        },
      });

      if (message) {
        if (message.providerAccountId !== account?.providerAccountId) {
          // return "/api/auth/signin?error=OAuthAccountNotLinked";
          return false;
        }
      }

      return true;
    },
    redirect({ baseUrl, url }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    session({ session, token }) {
      session.user.providerAccountId = token.sub;
      return session;
    },
  },
};
