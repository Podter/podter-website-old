import Link from "next/link";

import Cmdk from "./cmdk";
import Menu from "./menu";
import ThemeSwitch from "./theme-switch";

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
      <div className="flex h-full items-center justify-end gap-1">
        <Cmdk />
        <ThemeSwitch />
      </div>
    </header>
  );
}
