import { Suspense } from "react";

import { H1, P } from "~/components/ui/typography";
import { auth } from "~/lib/auth";
import { createMetadata } from "~/lib/create-metadata";
import Auth from "./auth";
import Form from "./form";

export const metadata = createMetadata({
  title: "Guestbook",
  description: "Sign my guestbook and leave your mark.",
});

export default function Guestbook() {
  return (
    <>
      <div className="flex flex-col">
        <H1>Guestbook</H1>
        <P className="mt-3">Sign my guestbook and leave your mark.</P>
      </div>
      <Suspense>
        <GuestbookForm />
      </Suspense>
    </>
  );
}

async function GuestbookForm() {
  const session = await auth();

  if (session) {
    return <Form name={session.user.name} />;
  }

  return <Auth />;
}
