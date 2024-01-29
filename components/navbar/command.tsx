"use client";

import { useCallback, useState } from "react";
import dynamic from "next/dynamic";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useHotkeys } from "react-hotkeys-hook";

import { Button } from "~/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { Code } from "~/components/ui/typography";

const Cmdk = dynamic(() => import("~/components/cmdk"));

export default function Command() {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const openCmdk = useCallback(() => {
    setLoaded(true);
    setOpen(true);
  }, []);

  useHotkeys("mod+k", openCmdk, { preventDefault: true });

  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="icon"
            className="hidden h-6 w-6 sm:inline-flex"
            variant="ghost"
            onClick={openCmdk}
            onMouseEnter={() => setLoaded(true)}
          >
            <MagnifyingGlassIcon className="h-4 w-4" width={16} height={16} />
            <span className="sr-only">Open search</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>
            Open search <Code className="text-xs">Ctrl</Code>+
            <Code className="text-xs">K</Code>
          </p>
        </TooltipContent>
      </Tooltip>
      {loaded && <Cmdk open={open} onOpenChange={setOpen} />}
    </>
  );
}
