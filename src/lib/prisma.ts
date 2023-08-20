import type { PrismaClient } from "@prisma/client";

export default async function initPrisma(): Promise<PrismaClient> {
  if (import.meta.env.MODE === "development") {
    const mod = await import("@prisma/client");
    return new mod.PrismaClient();
  } else {
    const mod = await import("@prisma/client/edge");
    return new mod.PrismaClient();
  }
}
