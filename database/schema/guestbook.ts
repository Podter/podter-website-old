import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const guestbook = pgTable("guestbook", {
  id: serial("id").primaryKey(),
  user: text("user").notNull(),
  message: text("message").notNull(),
  emailHash: text("email_hash").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at"),
});
