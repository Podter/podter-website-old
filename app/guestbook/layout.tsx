import type { PropsWithChildren } from "react";
import { TypographyH1, TypographyP } from "@/components/ui/Typography";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <TypographyH1>Guestbook</TypographyH1>
      <TypographyP>
        Sign my guestbook and leave your mark. Feel free to leave any message
        here.
      </TypographyP>
      {children}
    </>
  );
}
