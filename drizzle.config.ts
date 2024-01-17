import type { Config } from "drizzle-kit";

export default {
  schema: "./database/schema",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL!,
  },
} satisfies Config;
