import Menu from "~/components/menu";
import Podter from "~/components/podter";
import Command from "./command";
import MenuButton from "./menu-button";
import ThemeSwitch from "./theme-switch";

export default function Navbar() {
  return (
    <header className="mb-10 mt-6 flex h-10 w-full items-center justify-between px-4 md:my-20">
      <div className="flex h-full items-center">
        <MenuButton />
        <Podter className="sm:hidden" />
        <nav className="hidden h-full items-center gap-1 sm:flex">
          <Podter className="rounded-full transition-colors hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" />
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
