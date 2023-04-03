import NextAuth, { AuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import GitHubProvider from "next-auth/providers/github";
import prisma from "@/lib/prismadb";

export const authOptions: AuthOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID || "",
      clientSecret: process.env.DISCORD_CLIENT_SECRET || "",
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      const guestbookMessage = await prisma.guestbookMessage.findFirst({
        where: {
          email: user.email || "",
        },
        select: {
          providerAccountId: true,
        },
      });

      if (guestbookMessage) {
        if (guestbookMessage.providerAccountId !== account?.providerAccountId) {
          return "/guestbook?unauthorized=true";
        }
      }

      return true;
    },
    async session({ session: nextAuthSession, token }) {
      const session = nextAuthSession as any;

      session.user.providerAccountId = token.sub;
      return session;
    },
  },
};

export default NextAuth(authOptions);
