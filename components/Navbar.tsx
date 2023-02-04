import { Sun } from "lucide-react";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 z-50 mx-auto max-w-4xl px-8 my-20">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Podter</a>
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Guestbook</a>
          </li>
        </ul>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <Sun size={24} className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
