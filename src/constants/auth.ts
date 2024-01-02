import { defineConfig } from "auth-astro";
import { PrismaClient } from "@prisma/client";
import Discord from "@auth/core/providers/discord";
import GitHub from "@auth/core/providers/github";

export default defineConfig({
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
      const prisma = new PrismaClient();

      const message = await prisma.messages.findFirst({
        where: {
          // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
          email: profile?.email!,
        },
        select: {
          providerAccountId: true,
        },
      });
      await prisma.$disconnect();

      if (message) {
        if (message.providerAccountId !== account?.providerAccountId) {
          // return "/api/auth/signin?error=OAuthAccountNotLinked";
          return false;
        }
      }

      return true;
    },
    redirect({ baseUrl }) {
      return baseUrl + "/guestbook";
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    session({ session, token }) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      session.user.providerAccountId = token.sub;
      return session;
    },
  },
});
