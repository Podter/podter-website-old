"use client";

import type { DialogProps } from "@radix-ui/react-dialog";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react/offline";
import { FileTextIcon } from "@radix-ui/react-icons";

import { pages } from "~/constants/pages";
import { socials } from "~/constants/socials";
import { useFetch } from "~/hooks/use-fetch";
import { PostsSchema } from "~/lib/schema";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command";

interface CmdkProps extends Omit<DialogProps, "children"> {}

export default function Cmdk({ open, onOpenChange }: CmdkProps) {
  const router = useRouter();
  const { data } = useFetch("/api/blog", PostsSchema);

  // eslint-disable-next-line no-unused-vars
  const runCommand = useCallback<(fn: () => void) => void>(
    (fn) => {
      onOpenChange!(false);
      fn();
    },
    [onOpenChange],
  );

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Type to search…" />
      <CommandList>
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
        {data && (
          <>
            <CommandGroup heading="Blog">
              {data.posts.map(({ title, url }, i) => (
                <CommandItem
                  key={i}
                  onSelect={() => runCommand(() => router.push(url))}
                >
                  <FileTextIcon
                    className="mr-2 h-5 w-5"
                    width={20}
                    height={20}
                  />
                  <span>{title}</span>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
          </>
        )}
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
        <CommandEmpty>No results found.</CommandEmpty>
      </CommandList>
    </CommandDialog>
  );
}
