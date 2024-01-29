"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";

import { Button } from "~/components/ui/button";
import { useMediaQuery } from "~/hooks/use-media-query";
import { cn } from "~/lib/utils";

const MobileMenu = dynamic(() => import("~/components/mobile-menu"));

export default function MenuButton() {
  const [open, setOpen] = useState(false);
  const isSm = useMediaQuery("(min-width: 640px)");

  return (
    <>
      <Button
        size="icon"
        className={cn(
          "z-50 h-6 w-6 sm:hidden",
          open && "!bg-background !text-foreground",
        )}
        variant={open ? "outline" : "ghost"}
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? (
          <Cross1Icon className="h-4 w-4" width={16} height={16} />
        ) : (
          <HamburgerMenuIcon className="h-4 w-4" width={16} height={16} />
        )}
        <span className="sr-only">Open menu</span>
      </Button>
      {!isSm && <MobileMenu open={open} onOpenChange={setOpen} />}
    </>
  );
}
