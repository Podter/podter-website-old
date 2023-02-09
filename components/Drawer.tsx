import menus from "@/lib/menus";
import Link from "next/link";
import { ReactNode, useRef } from "react";
import { Icon } from "@iconify/react";
import githubIcon from "@iconify/icons-fa6-brands/github";
import discordIcon from "@iconify/icons-fa6-brands/discord";
import twitterIcon from "@iconify/icons-fa6-brands/twitter";
import mailRounded from "@iconify/icons-material-symbols/mail-rounded";
import { X } from "lucide-react";

type DrawerProps = {
  children?: ReactNode;
};

export default function Drawer({ children }: DrawerProps) {
  const closeRef = useRef<HTMLLabelElement>(null);

  return (
    <div className="drawer">
      <input id="menu-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{children}</div>
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
              <Link
                className="btn btn-ghost btn-circle duration-75"
                href="https://github.com/Podter"
              >
                <Icon icon={githubIcon} className="h-6 w-6" scale={24} />
              </Link>
              <Link
                className="btn btn-ghost btn-circle duration-75"
                href="https://discord.com/users/331793642689789962"
              >
                <Icon icon={discordIcon} className="h-6 w-6" scale={24} />
              </Link>
              <Link
                className="btn btn-ghost btn-circle duration-75"
                href="https://twitter.com/Real_Podter"
              >
                <Icon icon={twitterIcon} className="h-6 w-6" scale={24} />
              </Link>
              <Link
                className="btn btn-ghost btn-circle duration-75"
                href="mailto:me@podter.xyz"
              >
                <Icon icon={mailRounded} className="h-6 w-6" scale={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
