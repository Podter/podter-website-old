import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Back from "@/components/Back";
import makeMetadata from "@/lib/makeMetadata";
import ErrorPage from "@/components/ErrorPage";

export const metadata = {
  ...makeMetadata(
    "404 Not found",
    "You are looking for something that doesn't actually exist."
  ),
  robots: {
    index: false,
  },
};

export default function NotFound() {
  return (
    <ErrorPage
      title="404"
      subtitle="Not found"
      description="You are looking for something that doesn't actually exist."
    >
      <Button asChild className="w-24">
        <Link href="/">Home</Link>
      </Button>
      <Back />
    </ErrorPage>
  );
}
