"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
import { Copy, AlertCircle, Check } from "lucide-react";
import { useRef, useState } from "react";
import { Icon } from "@iconify/react/dist/offline";
import icon90RingWithBg from "@iconify/icons-svg-spinners/90-ring-with-bg";

export default function PreformattedText({
  className,
  children,
  ...props
}: JSX.IntrinsicElements["pre"]) {
  const ref = useRef<HTMLPreElement>(null);
  const code = ref.current?.getElementsByTagName("code")[0].innerText || "";

  const [copyState, setCopyState] = useState<
    "copied" | "copying" | "error" | null
  >(null);

  const copyMessage =
    copyState === "copied"
      ? "Copied!"
      : copyState === "copying"
      ? "Copying..."
      : copyState === "error"
      ? "Something went wrong!"
      : "Copy";

  async function copy() {
    try {
      setCopyState("copying");
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
  }

  return (
    <pre
      {...props}
      className={cn(
        "mb-4 mt-6 overflow-x-auto rounded-lg border bg-background shadow-sm relative group font-sans",
        className,
      )}
      ref={ref}
    >
      <Tooltip>
        <TooltipTrigger className="absolute top-3 right-3 z-20" asChild>
          <Button
            className="h-8 w-8 p-0 hidden group-hover:inline-flex shadow-sm"
            variant="secondary"
            onClick={copy}
            disabled={copyState === "copying"}
          >
            {copyState === "copied" ? (
              <Check size={16} className="h-4 w-4" />
            ) : copyState === "copying" ? (
              <Icon icon={icon90RingWithBg} fontSize={16} className="h-4 w-4" />
            ) : copyState === "error" ? (
              <AlertCircle size={16} className="h-4 w-4" />
            ) : (
              <Copy size={16} className="h-4 w-4" />
            )}
            <span className="sr-only">{copyMessage}</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{copyMessage}</p>
        </TooltipContent>
      </Tooltip>
      {children}
    </pre>
  );
}
