import Link from "next/link";

import Command from "./command";
import Menu from "./menu";
import MenuButton from "./menu-button";
import ThemeSwitch from "./theme-switch";

export default function Navbar() {
  return (
    <header className="mb-10 mt-6 flex h-10 w-full items-center justify-between px-4 md:my-20">
      <div className="flex h-full items-center">
        <MenuButton />
        <Link href="/" className="px-2 font-medium sm:hidden">
          podter._
        </Link>
        <nav className="hidden h-full items-center gap-1 sm:flex">
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
        <Command />
        <ThemeSwitch />
      </div>
    </header>
  );
}
