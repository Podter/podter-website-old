import menus from "@/lib/menus";
import Link from "next/link";
import { ReactNode, RefObject, useRef } from "react";
import { X } from "lucide-react";
import SocialLinks from "./SocialLinks";

type DrawerProps = {
  children?: ReactNode;
  scrollRef: RefObject<HTMLDivElement>;
};

export default function Drawer({ children, scrollRef }: DrawerProps) {
  const closeRef = useRef<HTMLLabelElement>(null);

  return (
    <div className="drawer">
      <input
        id="menu-drawer"
        type="checkbox"
        className="drawer-toggle"
        aria-label="Toggle drawer"
      />
      <div className="drawer-content overflow-x-hidden" ref={scrollRef}>
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="menu-drawer" className="drawer-overlay"></label>
        <div className="pt-4 p-2 w-80 bg-base-100 text-base-content">
          <div className="my-2 flex flex-row">
            <Link
              href="/"
              className="btn btn-ghost normal-case text-2xl font-bold bg-gradient-to-r text-transparent from-ctp-red to-ctp-blue bg-clip-text"
              onClick={() => closeRef.current?.click()}
            >
              Podter
            </Link>
            <label
              htmlFor="menu-drawer"
              className="btn btn-sm btn-circle btn-ghost absolute right-6 top-8 drawer-button"
              ref={closeRef}
            >
              <X className="h-6 w-6" size={24} />
            </label>
          </div>
          <ul className="menu rounded-box p-2 -ml-1">
            <li>
              <Link href="/" onClick={() => closeRef.current?.click()}>
                Home
              </Link>
            </li>
            {menus.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  onClick={() => closeRef.current?.click()}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="absolute bottom-8">
            <div className="flex flex-row gap-1 ml-2 mt-2">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
