import { H1, P } from "~/components/ui/typography";
import { createMetadata } from "~/lib/create-metadata";

export const dynamic = "force-static";

export const metadata = createMetadata({
  title: "Guestbook",
  description: "A list of projects I've worked on.",
});

export default function Projects() {
  return (
    <>
      <div className="flex flex-col">
        <H1>Projects</H1>
        <P className="mt-3">A list of projects I&apos;ve worked on.</P>
      </div>
    </>
  );
}
