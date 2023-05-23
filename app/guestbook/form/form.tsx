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
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import type { Session } from "next-auth";

const formSchema = z.object({
  message: z.string().nonempty("Please enter a message"),
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
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: initialMessage,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
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
                  <Input placeholder="your message" {...field} />
                  <Button type="submit">Submit</Button>
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
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
