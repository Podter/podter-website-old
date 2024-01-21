import Link from "next/link";

import { Button } from "~/components/ui/button";
import { createMetadata } from "~/lib/create-metadata";
import Back from "./_components/back";
import ErrorLayout from "./_components/error-layout";

export const metadata = createMetadata({
  title: "404 Not found",
  description: "You are looking for something that doesn't actually exist.",
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
    </ErrorLayout>
  );
}
