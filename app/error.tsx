"use client";

import Link from "next/link";
import makeMetadata from "@/lib/makeMetadata";
import ErrorPage from "@/components/ErrorPage";
import { Button } from "@/components/ui/Button";

export const metadata = {
  ...makeMetadata(
    "500 Internal Server Error",
    "How did you get here? This rarely happens."
  ),
  robots: {
    index: false,
  },
};

type ErrorProps = {
  reset: () => void;
};

export default function Error({ reset }: ErrorProps) {
  return (
    <ErrorPage
      title="500"
      subtitle="Internal Server Error"
      description="How did you get here? This rarely happens."
    >
      <Button asChild className="w-24">
        <Link href="/">Home</Link>
      </Button>
      <Button onClick={() => reset()} className="w-24">
        Try again
      </Button>
    </ErrorPage>
  );
}
