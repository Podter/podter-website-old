import prisma from "@/lib/prismadb";

export default async function checkBlacklisted(
  email: string,
  providerAccountId?: string
): Promise<boolean | undefined> {
  try {
    const data = await prisma.blacklist.findFirst({
      where: {
        OR: [{ email }, { providerAccountId }],
      },
      select: {
        id: true,
      },
    });

    if (data?.id) {
      return true;
    }
    return false;
  } catch {
    return undefined;
  }
}
