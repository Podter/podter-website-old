import Link from "next/link";
import { Component1Icon } from "@radix-ui/react-icons";

import { Button } from "~/components/ui/button";

export default function Navbar() {
  return (
    <header className="mb-10 mt-6 flex h-10 w-full items-center justify-between px-4 md:my-20">
      <div className="flex h-full items-center">
        <nav className="flex h-full items-center gap-6">
          <Link href="/">podter._</Link>
          <Link href="/">home</Link>
          <Link href="/">about</Link>
          <Link href="/">projects</Link>
          <Link href="/">blog</Link>
          <Link href="/">guestbook</Link>
        </nav>
      </div>
      <Button size="icon" className="h-6 w-6" variant="ghost">
        <Component1Icon className="h-4 w-4" width={16} height={16} />
      </Button>
    </header>
  );
}
