import { PrismaClient } from "@prisma/client";

export default function initPrisma(): PrismaClient {
  return new PrismaClient();
}
