import { H1, P } from "~/components/ui/typography";
import { createMetadata } from "~/lib/create-metadata";

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
    </>
  );
}
