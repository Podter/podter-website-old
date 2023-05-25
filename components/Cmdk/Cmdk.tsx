"use client";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandDialog,
} from "../ui/Command";
import pages from "@/constants/pages";
import { useRouter } from "next/navigation";
import { socials } from "@/constants/socials";
import { Icon } from "@iconify/react/dist/offline";
import { Scroll } from "lucide-react";
import { allBlogs } from "contentlayer/generated";
import { useState } from "react";
import CmdkToggle from "./CmdkToggle";

export default function Cmdk() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  function runCommand<T>(command: () => T) {
    setOpen(false);
    return command();
  }

  return (
    <>
      <CmdkToggle setOpen={setOpen} />
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Navigation">
              {Object.entries(pages).map(([path, { name, icon: Icon }], i) => (
                <CommandItem
                  key={i}
                  onSelect={() => runCommand(() => router.push(path))}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  <span>{name}</span>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Blog">
              {allBlogs.map(({ title, url }, i) => (
                <CommandItem
                  key={i}
                  onSelect={() => runCommand(() => router.push(url))}
                >
                  <Scroll className="mr-2 h-4 w-4" />
                  <span>{title}</span>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Links">
              {Object.entries(socials).map(([social, { url, icon }], i) => (
                <CommandItem
                  key={i}
                  onSelect={() => runCommand(() => window.open(url))}
                >
                  <Icon className="mr-2 h-4 w-4" fontSize={16} icon={icon} />
                  <span>{social}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}
