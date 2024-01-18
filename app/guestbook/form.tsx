"use client";

import { useEffect } from "react";
import {
  ExitIcon,
  Pencil1Icon,
  // Pencil2Icon,
  // TrashIcon,
} from "@radix-ui/react-icons";
import { signOut } from "next-auth/react";
import { useFormState, useFormStatus } from "react-dom";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import Spinner from "~/components/ui/spinner";
import { sign } from "./actions";

interface FormProps {
  name: string;
}

export default function Form({ name }: FormProps) {
  const [state, formAction] = useFormState(sign, { message: "" });

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <form
      className="mt-6 flex w-full items-center gap-2 sm:max-w-96"
      action={formAction}
    >
      <div className="flex w-full flex-col gap-2">
        <p className="text-sm text-muted-foreground">
          Signed in as <span className="font-semibold">{name}</span>
        </p>
        <Input placeholder="Write something…" type="text" name="message" />
        <div className="flex w-full justify-between">
          <button
            className="inline-flex items-center text-sm text-muted-foreground underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none"
            type="button"
            onClick={() => signOut()}
          >
            <ExitIcon className="mr-1 h-3.5 w-3.5" width={14} height={14} />
            Sign out
          </button>
          {/* <button
            className="inline-flex items-center text-sm text-destructive underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none"
            type="button"
            onClick={() => signOut()}
          >
            <TrashIcon className="mr-1 h-3.5 w-3.5" width={14} height={14} />
            Delete
          </button> */}
        </div>
      </div>
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <Spinner
          className="mr-2 h-4 w-4"
          size={16}
          color="hsl(var(--primary-foreground))"
        />
      ) : (
        <Pencil1Icon className="mr-2 h-4 w-4" width={16} height={16} />
      )}{" "}
      Sign
    </Button>
  );
}
