"use client";

import { useCallback, useState } from "react";
import {
  CheckIcon,
  CopyIcon,
  ExclamationTriangleIcon,
} from "@radix-ui/react-icons";

import { Button } from "~/components/ui/button";
import Spinner from "~/components/ui/spinner";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip";

interface CopyProps {
  id: string;
}

export default function Copy({ id }: CopyProps) {
  const [copyState, setCopyState] = useState<
    "copied" | "copying" | "error" | null
  >(null);

  const copy = useCallback(async () => {
    try {
      setCopyState("copying");

      const code = document
        .getElementById(id)
        ?.getElementsByTagName("code")[0].innerText;
      if (!code) {
        throw new Error("No code found");
      }

      await navigator.clipboard.writeText(code);
      setCopyState("copied");
    } catch (e) {
      console.error(e);
      setCopyState("error");
    } finally {
      setTimeout(() => {
        setCopyState(null);
      }, 1000);
    }
  }, [id]);

  return (
    <Tooltip>
      <TooltipTrigger className="absolute right-2 top-2 z-10" asChild>
        <Button
          className="opacity-0 transition-opacity group-hover:opacity-100"
          size="icon"
          variant="outline"
          onClick={copy}
        >
          {copyState === "copied" ? (
            <CheckIcon className="h-4 w-4" width={16} height={16} />
          ) : copyState === "copying" ? (
            <Spinner size={16} />
          ) : copyState === "error" ? (
            <ExclamationTriangleIcon
              className="h-4 w-4"
              width={16}
              height={16}
            />
          ) : (
            <CopyIcon className="h-4 w-4" width={16} height={16} />
          )}
          <span className="sr-only">Copy</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Copy</p>
      </TooltipContent>
    </Tooltip>
  );
}
