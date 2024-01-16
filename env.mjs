import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  shared: {
    NODE_ENV: z
      .enum(["development", "production", "test"])
      .default("development"),
    VERCEL_ENV: z.enum(["development", "preview", "production"]).optional(),
    VERCEL_URL: z
      .string()
      .optional()
      .transform((v) => (v ? `https://${v}` : undefined)),
    PORT: z.coerce.number().default(3000),
  },
  server: {
    // DB_HOST: z.string(),
    // DB_NAME: z.string(),
    // DB_PASSWORD: z.string(),
    // DB_USERNAME: z.string(),
  },
  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string(),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    VERCEL_ENV: process.env.VERCEL_ENV,
    VERCEL_URL: process.env.VERCEL_URL,
    PORT: process.env.PORT,

    // DB_HOST: process.env.DB_HOST,
    // DB_NAME: process.env.DB_NAME,
    // DB_PASSWORD: process.env.DB_PASSWORD,
    // DB_USERNAME: process.env.DB_USERNAME,

    // NEXT_PUBLIC_CLIENTVAR: process.env.NEXT_PUBLIC_CLIENTVAR,
  },
});
