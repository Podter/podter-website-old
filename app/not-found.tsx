import Link from "next/link";

import Back from "~/components/back";
import ErrorLayout from "~/components/error-layout";
import { Button } from "~/components/ui/button";
import UmamiNotFound from "~/components/umami-not-found";
import { createMetadata } from "~/lib/create-metadata";

export const runtime = "edge";

export const metadata = createMetadata({
  title: "404 Not found",
  description: "You are looking for something that doesn't actually exist.",
  index: false,
});

export default function NotFound() {
  return (
    <ErrorLayout
      title="404"
      subtitle="Not found"
      description="You are looking for something that doesn't actually exist."
    >
      <Button asChild className="w-24">
        <Link href="/">Home</Link>
      </Button>
      <Back />
      <UmamiNotFound />
    </ErrorLayout>
  );
}
