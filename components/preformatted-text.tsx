"use client";

import type { JSX } from "react";
import { useCallback, useMemo, useRef, useState } from "react";
import {
  CheckIcon,
  CopyIcon,
  ExclamationTriangleIcon,
} from "@radix-ui/react-icons";

import { cn } from "~/lib/utils";
import { Button } from "./ui/button";
import Spinner from "./ui/spinner";

export default function PreformattedText({
  children,
  className,
  ...props
}: JSX.IntrinsicElements["pre"]) {
  const ref = useRef<HTMLPreElement>(null);
  const [copyState, setCopyState] = useState<
    "copied" | "copying" | "error" | null
  >(null);

  const code = useMemo(() => {
    if (ref.current) {
      return ref.current.getElementsByTagName("code")[0].innerText;
    } else {
      return "";
    }
  }, [ref]);
  const copyMessage = useMemo(
    () =>
      copyState === "copied"
        ? "Copied!"
        : copyState === "copying"
          ? "Copying..."
          : copyState === "error"
            ? "Something went wrong!"
            : "Copy",
    [copyState],
  );

  const copy = useCallback(async () => {
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
  }, [code]);

  return (
    <pre
      {...props}
      ref={ref}
      className={cn(
        "group relative mt-6 overflow-x-auto rounded-lg border font-sans",
        className,
      )}
    >
      <Button
        className="absolute right-2 top-2 z-10 hidden group-hover:inline-flex"
        size="icon"
        variant="outline"
        onClick={copy}
      >
        {copyState === "copied" ? (
          <CheckIcon className="h-4 w-4" width={16} height={16} />
        ) : copyState === "copying" ? (
          <Spinner size={16} />
        ) : copyState === "error" ? (
          <ExclamationTriangleIcon className="h-4 w-4" width={16} height={16} />
        ) : (
          <CopyIcon className="h-4 w-4" width={16} height={16} />
        )}
        <span className="sr-only">{copyMessage}</span>
      </Button>
      {children}
    </pre>
  );
}
