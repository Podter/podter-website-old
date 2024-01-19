"use client";

import { useEffect } from "react";
import { TrashIcon } from "@radix-ui/react-icons";
import { useFormState, useFormStatus } from "react-dom";

import Spinner from "~/components/ui/spinner";
import { deleteMessage } from "../../actions";

export default function DeleteMessage() {
  const [state, formAction] = useFormState(deleteMessage, { success: true });

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <form action={formAction}>
      <DeleteButton />
    </form>
  );
}

function DeleteButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="inline-flex items-center text-sm text-destructive underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none disabled:opacity-50"
      disabled={pending}
    >
      {pending ? (
        <Spinner className="mr-1" size={14} color="hsl(var(--destructive))" />
      ) : (
        <TrashIcon className="mr-1 h-3.5 w-3.5" width={14} height={14} />
      )}{" "}
      Delete
    </button>
  );
}
