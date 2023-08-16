import type { Session } from "@auth/core/types";
import type { MessageData } from "./Message";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TypographyMuted } from "@/components/ui/typography";
import { Edit, Edit3, LogOut } from "lucide-react";
import { signOut } from "auth-astro/client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useCallback } from "react";
import { httpFetch } from "@/lib/utils";
import Delete from "./Delete";

const formSchema = z.object({
  message: z.string(),
});

type Props = {
  session: Session;
  existing?: MessageData;
};

export default function Form({ session, existing }: Props) {
  const { handleSubmit, register } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: existing?.message ?? "",
    },
  });

  const submit = useCallback(
    async ({ message }: z.infer<typeof formSchema>) => {
      const formData = new FormData();
      formData.append("message", message);
      await httpFetch("/api/guestbook", {
        method: "POST",
        body: formData,
      });
      location.reload();
    },
    [],
  );

  const deleteMessage = useCallback(async () => {
    await httpFetch("/api/guestbook", { method: "DELETE" });
    location.reload();
  }, []);

  return (
    <form
      className="flex flex-col gap-2 w-full sm:w-80"
      onSubmit={handleSubmit(submit)}
    >
      <TypographyMuted>
        Signed in as <span className="font-semibold">{session.user.name}</span>
      </TypographyMuted>
      <div className="flex items-center gap-2">
        <Input
          className="h-9 px-2 py-1"
          required
          {...register("message", { required: true })}
        />
        <Button size="sm" variant="secondary">
          {existing ? (
            <>
              <Edit className="mr-2 h-4 w-4" size={16} />
              Edit
            </>
          ) : (
            <>
              <Edit3 className="mr-2 h-4 w-4" size={16} />
              Sign
            </>
          )}
        </Button>
      </div>
      <div className="flex justify-between">
        <button
          className="text-xs md:text-sm text-muted-foreground hover:underline underline-offset-4 decoration-foreground/50"
          type="button"
          onClick={() => signOut()}
        >
          <LogOut className="inline mr-1 align-[-0.125em] h-3 w-3" size={12} />
          Sign out
        </button>
        {existing && <Delete action={deleteMessage} />}
      </div>
    </form>
  );
}
