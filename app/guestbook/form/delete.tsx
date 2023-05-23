"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/AlertDialog";
import { TypographyMuted } from "@/components/ui/Typography";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import type { UseFormReset } from "react-hook-form";
import type { Dispatch, SetStateAction } from "react";
import { deleteMessage } from "./actions";
import type { Session } from "next-auth";

type DeleteProps = {
  setLoading: Dispatch<SetStateAction<boolean>>;
  setEditing: Dispatch<SetStateAction<boolean>>;
  reset: UseFormReset<GuestbookForm>;
  session: Session;
};

export default function Delete({
  setLoading,
  setEditing,
  reset,
  session,
}: DeleteProps) {
  const router = useRouter();

  async function onDelete() {
    try {
      setLoading(true);
      await deleteMessage(session);
      reset({
        message: "",
      });
      setEditing(false);
    } catch (e) {
      console.error(e);
    } finally {
      router.refresh();
      setLoading(false);
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <TypographyMuted className="underline-offset-4 hover:underline cursor-pointer w-auto">
          <Trash2 className="inline mr-1 align-[-0.125em] h-3 w-3" size={12} />
          Delete
        </TypographyMuted>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            guestbook message.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
