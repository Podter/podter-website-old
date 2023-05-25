"use client";

import {
  type Variants,
  type Transition,
  AnimatePresence,
  motion,
} from "framer-motion";
import { Button } from "../ui/Button";
import { ChevronRight, MenuIcon, X } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/Card";
import Link from "next/link";
import { TypographyLarge, TypographyMuted } from "../ui/Typography";
import { siteConfig } from "@/constants/site";
import pages from "@/constants/pages";

const menuVariants: Variants = {
  initial: {
    scale: 0.75,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
  },
  initialBg: {
    backdropFilter: "blur(0px)",
  },
  animateBg: {
    backdropFilter: "blur(4px)",
  },
};

const menuTransition: Transition = {
  ease: [0.16, 1, 0.3, 1],
  duration: 0.35,
};

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        className="p-2 sm:hidden mr-2 z-50"
        onClick={() => setOpen((open) => !open)}
      >
        {open ? <X size={24} /> : <MenuIcon size={24} />}
        <span className="sr-only">Toggle menu</span>
      </Button>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed top-0 left-0 w-full h-full bg-transparent px-8 pb-10 pt-20 origin-top-left sm:hidden z-40"
              variants={menuVariants}
              initial="initial"
              animate="animate"
              exit="initial"
              transition={menuTransition}
            >
              <Card className="w-full h-full relative">
                <CardHeader className="pb-4">
                  <Link
                    href="/"
                    className="scroll-m-20 text-2xl font-bold"
                    onClick={() => setOpen(false)}
                  >
                    Podter.
                  </Link>
                </CardHeader>
                <CardContent className="flex flex-col">
                  {Object.entries(pages).map(
                    ([path, { name, icon: Icon }], i) => (
                      <Link
                        key={i}
                        href={path}
                        className="flex flex-row justify-between items-center py-4"
                        onClick={() => setOpen(false)}
                      >
                        <div className="flex flex-row items-center">
                          <Icon size={24} className="mr-3 h-6 w-6" />
                          <TypographyLarge className="font-medium">
                            {name}
                          </TypographyLarge>
                        </div>
                        <ChevronRight size={18} className="h-5 w-5" />
                      </Link>
                    )
                  )}
                </CardContent>
                <CardFooter className="absolute bottom-0">
                  <TypographyMuted>
                    © 2023 {siteConfig.name} - All right reserved
                  </TypographyMuted>
                </CardFooter>
              </Card>
            </motion.div>
            <motion.div
              className="fixed top-0 left-0 w-full h-full bg-transparent backdrop-blur-sm sm:hidden z-30"
              variants={menuVariants}
              initial="initialBg"
              animate="animateBg"
              exit="initialBg"
              transition={menuTransition}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}
