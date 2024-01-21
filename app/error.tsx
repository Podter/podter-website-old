"use client";

import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Code, Pre } from "~/components/ui/typography";
import { createMetadata } from "~/lib/create-metadata";
import ErrorLayout from "./_components/error-layout";

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
      title="500"
      subtitle="Something went wrong"
      description="An unexpected error occurred. This rarely happens."
    >
      <Button onClick={() => reset()} className="w-24">
        Try again
      </Button>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-24">Details</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Error details</DialogTitle>
            <DialogDescription>
              Look like something went wrong. This rarely happens. The error
              stack trace is below.
            </DialogDescription>
          </DialogHeader>
          <Pre className="mt-0 bg-muted p-4 scrollbar-thin scrollbar-track-secondary scrollbar-thumb-secondary-foreground">
            <Code className="">{error.stack}</Code>
          </Pre>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="secondary">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </ErrorLayout>
  );
}
