"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/Form";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { TypographyMuted } from "@/components/ui/Typography";
import { Edit, Edit3, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import type { Session } from "next-auth";
import { submitMessage } from "./actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/offline";
import icon90RingWithBg from "@iconify/icons-svg-spinners/90-ring-with-bg";
import Delete from "./delete";
import filter from "@/lib/filter";

const formSchema = z.object({
  message: z
    .string()
    .nonempty("Please enter a message")
    .refine((s) => !filter.isProfane(s), "Bad words are not allowed"),
});

type GuestbookFormProps = {
  session: Session;
  initialMessage?: string;
  blacklisted: boolean;
};

export default function GuestbookForm({
  session,
  initialMessage,
  blacklisted,
}: GuestbookFormProps) {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: initialMessage,
    },
  });

  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(initialMessage ? true : false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (blacklisted) {
        form.setError("message", {
          type: "manual",
          message: "You are blacklisted",
        });
        return;
      }

      setLoading(true);
      await submitMessage(values.message, session, blacklisted);
      setEditing(true);
    } catch (e) {
      console.error(e);
      form.setError("message", {
        type: "manual",
        message: "Something went wrong",
      });
    } finally {
      router.refresh();
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex mt-6">
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <TypographyMuted>
                Signed in as{" "}
                <span className="font-semibold">{session.user.name}</span>
              </TypographyMuted>
              <FormControl>
                <div className="flex items-center space-x-2">
                  <Input
                    placeholder={
                      blacklisted ? "you are blacklisted" : "your message"
                    }
                    {...field}
                    disabled={loading || blacklisted}
                  />
                  <Button type="submit" disabled={loading || blacklisted}>
                    {loading ? (
                      <Icon
                        icon={icon90RingWithBg}
                        className="mr-2 h-4 w-4"
                        fontSize={16}
                      />
                    ) : editing ? (
                      <Edit className="mr-2 h-4 w-4" size={16} />
                    ) : (
                      <Edit3 className="mr-2 h-4 w-4" size={16} />
                    )}
                    {editing ? "Edit" : "Sign"}
                  </Button>
                </div>
              </FormControl>
              <div className="flex flex-row justify-between">
                <TypographyMuted
                  className="underline-offset-4 hover:underline cursor-pointer w-auto"
                  onClick={() => signOut()}
                >
                  <LogOut
                    className="inline mr-1 align-[-0.125em] h-3 w-3"
                    size={12}
                  />
                  Sign out
                </TypographyMuted>
                {editing && (
                  <Delete
                    form={form}
                    session={session}
                    setEditing={setEditing}
                    setLoading={setLoading}
                  />
                )}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
