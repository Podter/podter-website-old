"use client";

import type { SetStateAction } from "react";
import { useCallback, useState } from "react";
import dynamic from "next/dynamic";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";

import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

const MobileMenu = dynamic(() => import("~/components/mobile-menu"));

// TODO: load on mobile only, not on press
export default function MenuButton() {
  const [open, setOpen] = useState(false);
  const [opened, setOpened] = useState(false);

  const handleOpen = useCallback((value: SetStateAction<boolean>) => {
    setOpened(true);
    setOpen(value);
  }, []);

  return (
    <>
      <Button
        size="icon"
        className={cn(
          "z-50 h-6 w-6 sm:hidden",
          open && "!bg-background !text-foreground",
        )}
        variant={open ? "outline" : "ghost"}
        onClick={() => handleOpen((prev) => !prev)}
      >
        {open ? (
          <Cross1Icon className="h-4 w-4" width={16} height={16} />
        ) : (
          <HamburgerMenuIcon className="h-4 w-4" width={16} height={16} />
        )}
        <span className="sr-only">Open menu</span>
      </Button>
      {opened && <MobileMenu open={open} onOpenChange={handleOpen} />}
    </>
  );
}
