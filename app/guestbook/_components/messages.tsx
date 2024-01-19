import { desc } from "drizzle-orm";

import { db } from "~/database";
import { guestbook } from "~/database/schema/guestbook";

export default async function Messages() {
  const messages = await db
    .select({
      id: guestbook.id,
      user: guestbook.user,
      message: guestbook.message,
    })
    .from(guestbook)
    .orderBy(desc(guestbook.createdAt));

  return (
    <div className="mt-6 flex flex-col gap-3">
      {messages.map((message) => (
        <p key={message.id}>{message.message}</p>
      ))}
    </div>
  );
}
