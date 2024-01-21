"use client";

import type { DialogProps } from "@radix-ui/react-dialog";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react/offline";

import { pages } from "~/constants/pages";
import { socials } from "~/constants/socials";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "../ui/command";

interface CmdkProps extends Omit<DialogProps, "children"> {}

export default function Cmdk({ open, onOpenChange, ...props }: CmdkProps) {
  const router = useRouter();

  useEffect(() => {
    // @ts-ignore
    if (typeof window.pagefind === "undefined") {
      import(/* webpackIgnore: true */ "./pagefind/pagefind.js")
        // @ts-ignore
        .then((mod) => (window.pagefind = mod))
        .catch(console.error);
    }
  }, []);

  // eslint-disable-next-line no-unused-vars
  const runCommand = useCallback<(fn: () => void) => void>(
    (fn) => {
      onOpenChange!(false);
      fn();
    },
    [onOpenChange],
  );

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange} {...props}>
      <CommandInput placeholder="Type a command or search…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigation">
          {Object.entries(pages).map(([path, { name, icon: Icon }], i) => (
            <CommandItem
              key={i}
              onSelect={() => runCommand(() => router.push(path))}
            >
              <Icon className="mr-2 h-5 w-5" width={20} height={20} />
              <span>{name[0].toUpperCase() + name.slice(1)}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        {/* TODO: add blog */}
        <CommandGroup heading="Links">
          {Object.entries(socials).map(([social, { url, icon }], i) => (
            <CommandItem
              key={i}
              onSelect={() => runCommand(() => window.open(url))}
            >
              <Icon
                className="mr-2 h-5 w-5"
                width={20}
                height={20}
                icon={icon}
              />
              <span>{social}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
