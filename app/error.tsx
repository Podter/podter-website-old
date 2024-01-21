"use client";

import Link from "next/link";

import ErrorLayout from "~/components/error-layout";
import { Button } from "~/components/ui/button";
import { createMetadata } from "~/lib/create-metadata";

export const metadata = createMetadata({
  title: "Something went wrong",
  description: "An unexpected error occurred. This rarely happens.",
});

interface ErrorPageProps {
  reset: () => void;
  error: Error;
}

export default function Error({ reset, error }: ErrorPageProps) {
  console.log(error);

  return (
    <ErrorLayout
      title="Error"
      subtitle="Something went wrong"
      description="An unexpected error occurred. This rarely happens."
    >
      <Button asChild className="w-24">
        <Link href="/">Home</Link>
      </Button>
      <Button onClick={() => reset()} className="w-24">
        Try again
      </Button>
    </ErrorLayout>
  );
}
