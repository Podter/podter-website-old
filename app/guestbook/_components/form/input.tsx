"use client";

import { useEffect } from "react";
import {
  CrossCircledIcon,
  Pencil1Icon,
  Pencil2Icon,
} from "@radix-ui/react-icons";
import { useFormState, useFormStatus } from "react-dom";
import { toast } from "sonner";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import Spinner from "~/components/ui/spinner";
import { sign } from "../../actions";

interface GuestbookInputProps {
  initialMessage?: string;
}

export default function GuestbookInput({
  initialMessage,
}: GuestbookInputProps) {
  const [state, formAction] = useFormState(sign, { success: true });

  useEffect(() => {
    if (!state.success && state.error) {
      toast.error(state.error, {
        icon: <CrossCircledIcon width={20} height={20} />,
      });
    }
  }, [state]);

  return (
    <form action={formAction} className="flex w-full gap-2">
      <Input
        placeholder="Write something…"
        type="text"
        name="message"
        defaultValue={initialMessage}
        required
      />
      <SubmitButton edit={initialMessage ? true : false} />
    </form>
  );
}

interface SubmitButtonProps {
  edit?: boolean;
}

function SubmitButton({ edit }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <Spinner
          className="mr-2"
          size={16}
          color="hsl(var(--primary-foreground))"
        />
      ) : edit ? (
        <Pencil2Icon className="mr-2 h-4 w-4" width={16} height={16} />
      ) : (
        <Pencil1Icon className="mr-2 h-4 w-4" width={16} height={16} />
      )}
      {edit ? "Edit" : "Sign"}
    </Button>
  );
}
