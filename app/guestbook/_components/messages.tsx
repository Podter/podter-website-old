import Link from "next/link";
import { desc } from "drizzle-orm";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import Spinner from "~/components/ui/spinner";
import { db } from "~/database";
import { guestbook } from "~/database/schema/guestbook";
import { fetchUser } from "~/lib/fetch-user";

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
    <div className="flex items-center">
      <Avatar className="mr-2 h-6 w-6">
        <AvatarImage src={avatar} alt={`${name}'s avatar`} />
        <AvatarFallback>
          <Spinner size={12} />
        </AvatarFallback>
      </Avatar>
      <Link
        href={url}
        className="mr-1 text-sm text-muted-foreground underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none"
      >
        {name}:
      </Link>
      <p>{message.message}</p>
    </div>
  );
}
