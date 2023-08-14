import type { Session } from "@auth/core/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TypographyMuted } from "@/components/ui/typography";
import { Edit3, LogOut } from "lucide-react";
import { signOut } from "auth-astro/client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useCallback } from "react";
import { httpFetch } from "@/lib/utils";

const formSchema = z.object({
  message: z.string(),
});

type Props = {
  session: Session;
};

export default function Form({ session }: Props) {
  const { handleSubmit, register } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
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
    },
    [],
  );

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(submit)}>
      <TypographyMuted>
        Signed in as <span className="font-semibold">{session.user.name}</span>
      </TypographyMuted>
      <div className="flex items-center gap-2 w-full sm:w-80">
        <Input
          className="h-9 px-2 py-1"
          required
          {...register("message", { required: true })}
        />
        <Button size="sm" variant="secondary">
          <Edit3 className="mr-2 h-4 w-4" size={16} />
          Sign
        </Button>
      </div>
      <div className="flex">
        <button
          className="text-xs md:text-sm text-muted-foreground hover:underline underline-offset-4 decoration-foreground/50"
          type="button"
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={() => signOut()}
        >
          <LogOut className="inline mr-1 align-[-0.125em] h-3 w-3" size={12} />
          Sign out
        </button>
      </div>
    </form>
  );
}
