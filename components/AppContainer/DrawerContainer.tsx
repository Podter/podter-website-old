import menus from "@/lib/menus";
import Link from "next/link";
import { ReactNode } from "react";

type DrawerContainerProps = {
  children?: ReactNode;
};

export default function DrawerContainer({ children }: DrawerContainerProps) {
  return (
    <div className="drawer">
      <input id="menu-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{children}</div>
      <div className="drawer-side">
        <label htmlFor="menu-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          {menus.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
