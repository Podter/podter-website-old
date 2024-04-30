import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const guestbook = sqliteTable("guestbook", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  user: text("user").notNull(),
  message: text("message").notNull(),
  emailHash: text("email_hash").notNull().unique(),
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => {
      const date = new Date();
      return new Date(date.toISOString());
    }),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" }),
});
