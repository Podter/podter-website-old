import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 z-50 mx-auto max-w-4xl px-8 my-20">
      <div className="flex-1">
        <Link
          href="/"
          className="btn btn-ghost normal-case text-xl bg-gradient-to-r hover:text-transparent from-ctp-red to-ctp-blue bg-clip-text transition-colors duration-300"
        >
          Podter
        </Link>
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/guestbook">Guestbook</Link>
          </li>
        </ul>
      </div>
      <div className="flex-none">
        <ThemeSwitch />
      </div>
    </div>
  );
}
