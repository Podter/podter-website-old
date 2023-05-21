"use client";

import usePrevious from "@/hooks/usePrevious";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGroup, motion } from "framer-motion";
import pages from "@/constants/pages";
import { cn } from "@/lib/utils";

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
        <LayoutGroup>
          {Object.entries(pages).map(([path, { name }], i) => {
            const isActive = path === pathname;

            return (
              <Link
                key={i}
                href={path}
                className={cn(
                  "transition-all hover:text-accent-foreground align-middle text-sm font-medium hidden sm:flex",
                  !isActive && "sm:text-muted-foreground"
                )}
              >
                <span className="relative py-2 px-3">
                  {name}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-accent rounded-md -z-10 hidden sm:block"
                      layoutId="sidebar"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                      initial={{
                        opacity: previousPathname === "/" ? 0 : 1,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                    />
                  )}
                </span>
              </Link>
            );
          })}
        </LayoutGroup>
      </nav>
      <div className="flex flex-row items-center h-full gap-2">
        <p>asdf</p>
      </div>
    </header>
  );
}
