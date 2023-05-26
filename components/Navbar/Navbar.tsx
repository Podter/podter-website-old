"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGroup, motion } from "framer-motion";
import pages from "@/constants/pages";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import styles from "./Navbar.module.scss";
import { useRef, useState } from "react";
import { useMouse } from "react-use";
import { useWindowSize } from "react-use";
import dynamic from "next/dynamic";
const Menu = dynamic(() => import("./Menu"));
const Cmdk = dynamic(() => import("../Cmdk"));
const Confetti = dynamic(() => import("react-confetti"));

export default function Navbar() {
  let pathname = usePathname() || "/";
  if (pathname.includes("/blog/")) pathname = "/blog";

  const navRef = useRef(null);
  const { width, height } = useWindowSize(
    typeof window !== "undefined" ? window.innerWidth : undefined,
    typeof window !== "undefined" ? window.innerHeight : undefined
  );
  const { docX, docY } = useMouse(navRef);
  const [confetti, setConfetti] = useState(false);

  function triggerConfetti() {
    if (window.scrollY <= 90 && pathname === "/") {
      setConfetti(true);
      setTimeout(() => setConfetti(false), 100);
    }
  }

  return (
    <header className="flex flex-row justify-between items-center w-full h-10 mx-auto max-w-4xl px-8 md:my-20 mt-6 mb-10">
      <div className="flex flex-row items-center h-full">
        {!(width >= 640) && <Menu />}
        <nav className="flex flex-row items-center">
          <Link
            href="/"
            className={cn(
              "mr-3 hover:text-accent-foreground scroll-m-20 text-xl font-bold",
              styles.fadein
            )}
            onClick={triggerConfetti}
            ref={navRef}
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
                    "transition-all hover:text-foreground align-middle text-sm font-medium hidden sm:flex",
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
        {width >= 640 && <Cmdk />}
        <ThemeToggle />
      </div>
      {pathname === "/" && (
        <Confetti
          style={{ position: "fixed" }}
          numberOfPieces={confetti ? 200 : 0}
          initialVelocityX={50}
          initialVelocityY={-50}
          gravity={0.05}
          width={width}
          height={height}
          confettiSource={{
            w: 0,
            h: 0,
            x: docX,
            y: docY,
          }}
          recycle={confetti}
          tweenDuration={10}
        />
      )}
    </header>
  );
}
