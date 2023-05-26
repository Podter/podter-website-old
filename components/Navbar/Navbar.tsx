"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGroup, motion } from "framer-motion";
import pages from "@/constants/pages";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import Menu from "./Menu";
import styles from "./Navbar.module.scss";
import Cmdk from "../Cmdk";

export default function Navbar() {
  let pathname = usePathname() || "/";
  if (pathname.includes("/blog/")) pathname = "/blog";

  return (
    <header className="flex flex-row justify-between items-center w-full h-10 mx-auto max-w-4xl px-8 md:my-20 mt-6 mb-10">
      <div className="flex flex-row items-center h-full">
        <Menu />
        <nav className="flex flex-row items-center">
          <Link
            href="/"
            className={cn(
              "mr-3 hover:text-accent-foreground scroll-m-20 text-xl font-bold",
              styles.fadein
            )}
          >
            Podter.
          </Link>
          <LayoutGroup>
            {Object.entries(pages).map(([path, { name, icon: Icon }], i) => {
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
                  <div className="relative py-2 px-3 flex flex-row justify-center items-center">
                    <Icon size={16} className="mr-1 hidden md:block" />
                    <span>{name}</span>
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-accent rounded-md -z-10 hidden sm:block"
                        layoutId="sidebar"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                  </div>
                </Link>
              );
            })}
          </LayoutGroup>
        </nav>
      </div>
      <div className="flex flex-row items-center h-full gap-2">
        <Cmdk />
        <ThemeToggle />
      </div>
    </header>
  );
}
