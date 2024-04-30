import { Suspense } from "react";

import SplitAnimate from "~/components/split-animate";
import { H1, P } from "~/components/ui/typography";
import { createMetadata } from "~/lib/create-metadata";
import Form from "./form";
import Messages from "./messages";
import { FormSkeleton, MessageSkeletons } from "./skeletons";

export const runtime = "edge";

export const metadata = createMetadata({
  title: "Guestbook",
  description: "Sign my guestbook and leave your mark.",
});

export default function Guestbook() {
  return (
    <>
      <div className="flex flex-col">
        <SplitAnimate as={H1}>Guestbook</SplitAnimate>
        <SplitAnimate as={P} className="mt-3">
          Sign my guestbook and leave your mark.
        </SplitAnimate>
      </div>
      <Suspense fallback={<FormSkeleton />}>
        <Form />
      </Suspense>
      <Suspense fallback={<MessageSkeletons />}>
        <Messages />
      </Suspense>
    </>
  );
}
