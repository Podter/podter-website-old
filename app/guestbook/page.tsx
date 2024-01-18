import { Code, H1, P, Pre } from "~/components/ui/typography";
import { auth } from "~/lib/auth";
import { createMetadata } from "~/lib/create-metadata";

export const metadata = createMetadata({
  title: "Guestbook",
  description: "Sign my guestbook and leave your mark.",
});

export default async function Guestbook() {
  const data = await auth();

  return (
    <>
      <div className="flex flex-col">
        <H1>Guestbook</H1>
        <P className="mt-3">Sign my guestbook and leave your mark.</P>
      </div>
      <Pre>
        <Code>{JSON.stringify(data)}</Code>
      </Pre>
    </>
  );
}
