import Link from "next/link";
import { Component1Icon } from "@radix-ui/react-icons";

import { Button } from "~/components/ui/button";
import Menu from "./menu";

export default function Navbar() {
  return (
    <header className="mb-10 mt-6 flex h-10 w-full items-center justify-between px-4 md:my-20">
      <div className="flex h-full items-center">
        <nav className="flex h-full items-center gap-1">
          <Link
            href="/"
            className="rounded-full px-2 font-medium transition-colors hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            podter._
          </Link>
          <Menu />
        </nav>
      </div>
      <Button size="icon" className="h-6 w-6" variant="ghost">
        <Component1Icon className="h-4 w-4" width={16} height={16} />
      </Button>
    </header>
  );
}
