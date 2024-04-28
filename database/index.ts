import { drizzle } from "drizzle-orm/pg-proxy";

// TODO: migrate to d1
export const db = drizzle(async () => {
  return {
    rows: [],
  };
});
