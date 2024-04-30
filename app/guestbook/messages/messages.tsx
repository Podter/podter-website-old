import Link from "next/link";
import { desc } from "drizzle-orm";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import Spinner from "~/components/ui/spinner";
import { getD1 } from "~/database";
import { guestbook } from "~/database/schema/guestbook";
import { cache } from "~/lib/cache";
import { fetchUser } from "./fetch-user";

const getMessages = cache(async () => {
  const db = getD1();
  const messages = await db
    .select({
      id: guestbook.id,
      user: guestbook.user,
      message: guestbook.message,
    })
    .from(guestbook)
    .orderBy(desc(guestbook.createdAt));
  return messages;
}, "guestbook");

export default async function Messages() {
  const messages = await getMessages();

  return (
    <div className="mt-6 flex flex-col gap-3">
      {messages.map((message) => (
        <Message key={message.id} message={message}></Message>
      ))}
    </div>
  );
}

interface MessageProps {
  message: {
    id: number;
    user: string;
    message: string;
  };
}

async function Message({ message }: MessageProps) {
  const { name, url, avatar } = await fetchUser(message.user);

  return (
    <div className="flex items-center gap-3 rounded-lg border bg-background p-2 shadow sm:gap-2 sm:border-none sm:bg-none sm:p-0 sm:shadow-none">
      <Avatar className="h-8 w-8 sm:h-6 sm:w-6">
        <AvatarImage src={avatar} alt={`${name}'s avatar`} />
        <AvatarFallback>
          <Spinner size={12} />
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-1">
        <Link
          href={url}
          className="text-sm text-muted-foreground underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none"
        >
          {name}:
        </Link>
        <p className="sm:text-sm">{message.message}</p>
      </div>
    </div>
  );
}
