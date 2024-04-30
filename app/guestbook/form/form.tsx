import { ExitIcon } from "@radix-ui/react-icons";
import { eq } from "drizzle-orm";

import { getD1 } from "~/database";
import { guestbook } from "~/database/schema/guestbook";
import { auth, signOut } from "~/lib/auth";
import Auth from "./auth";
import DeleteMessage from "./delete";
import GuestbookInput from "./input";

export default async function Form() {
  const session = await auth();

  if (!session) {
    return <Auth />;
  }

  const db = getD1();
  const existingMessages = await db
    .select({ message: guestbook.message })
    .from(guestbook)
    .where(eq(guestbook.user, session.user.user))
    .limit(1);
  const existingMessage: (typeof existingMessages)[number] | undefined =
    existingMessages[0];

  return (
    <div className="mt-6 flex w-full flex-col gap-2 sm:max-w-96">
      <p className="text-sm text-muted-foreground">
        Signed in as <span className="font-semibold">{session.user.name}</span>
      </p>
      <GuestbookInput
        initialMessage={existingMessage && existingMessage.message}
      />
      <div className="flex w-full gap-2">
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button className="inline-flex items-center text-sm text-muted-foreground underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none">
            <ExitIcon className="mr-1 h-3.5 w-3.5" width={14} height={14} />
            Sign out
          </button>
        </form>
        {existingMessage && <DeleteMessage />}
      </div>
    </div>
  );
}
