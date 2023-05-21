"use client";

import usePrevious from "@/hooks/usePrevious";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  let pathname = usePathname() || "/";
  if (pathname.includes("/blog/")) pathname = "/blog";
  const previousPathname = usePrevious(pathname);

  return (
    <header className="flex flex-row justify-between items-center w-full h-10 mx-auto max-w-4xl px-8 md:my-20 mt-6 mb-10">
      <nav className="flex flex-row items-center h-full">
        <Link
          href="/"
          className="mr-3 hover:text-accent-foreground scroll-m-20 text-xl font-bold"
        >
          Podter.
        </Link>
      </nav>
    </header>
  );
}
