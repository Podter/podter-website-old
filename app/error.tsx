"use client";

import Link from "next/link";
import makeMetadata from "@/lib/makeMetadata";
import ErrorPage from "@/components/ErrorPage";
import { Button } from "@/components/ui/Button";
import { usePlausible } from "next-plausible";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

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
  error: Error;
};

export default function Error({ reset, error }: ErrorProps) {
  const plausible = usePlausible<PlausibleEvents>();
  const pathname = usePathname();

  useEffect(() => {
    plausible("error", {
      props: {
        error: error.message,
        path: pathname,
      },
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
