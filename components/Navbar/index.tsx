import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";
import menus from "@/lib/menus";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 z-50 mx-auto max-w-4xl px-8 my-20">
      <div className="flex-none">
        <label
          htmlFor="menu-drawer"
          className="btn btn-ghost btn-circle drawer-button md:hidden"
        >
          <Menu className="h-6 w-6" size={24} />
        </label>
      </div>
      <div className="flex-1">
        <Link
          href="/"
          className="btn btn-ghost normal-case text-xl bg-gradient-to-r hover:text-transparent from-ctp-red to-ctp-blue bg-clip-text transition-colors duration-75 hover:duration-300"
        >
          Podter
        </Link>
        <ul className="menu menu-horizontal px-1 md:inline-flex hidden">
          {menus.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="duration-75">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-none">
        <ThemeSwitch />
      </div>
    </div>
  );
}
