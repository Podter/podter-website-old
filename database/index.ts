import { getRequestContext } from "@cloudflare/next-on-pages";
import { drizzle } from "drizzle-orm/d1";

export function getUtcNow() {
  const date = new Date();
  return new Date(date.toISOString());
}

export function getD1() {
  const { D1_DATABASE } = getRequestContext().env;
  const db = drizzle(D1_DATABASE);
  return db;
}
