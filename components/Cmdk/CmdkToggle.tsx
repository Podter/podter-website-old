"use client";

import { Button } from "../ui/Button";
import { Command } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/Tooltip";
import { TypographyInlineCode } from "../ui/Typography";
import { useEffect, type Dispatch, type SetStateAction } from "react";

type CmdkToggleProps = {
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export default function CmdkToggle({ setOpen }: CmdkToggleProps) {
  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    }

    window.addEventListener("keydown", handler);

    return () => window.removeEventListener("keydown", handler);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="outline"
          className="w-10 p-0 hidden sm:inline-flex"
          onClick={() => setOpen(true)}
        >
          <Command size={24} />
          <span className="sr-only">Open command menu</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>
          Open command menu <TypographyInlineCode>Ctrl</TypographyInlineCode>+
          <TypographyInlineCode>K</TypographyInlineCode>
        </p>
      </TooltipContent>
    </Tooltip>
  );
}
