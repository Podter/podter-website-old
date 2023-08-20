import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandDialog,
} from "@/components/ui/command";
import pages from "@/constants/pages";
import { socials } from "@/constants/socials";
import { useCallback, useEffect } from "react";
import Iconify from "@/components/ui/iconify";
import { Scroll } from "lucide-react";
import { useStore } from "@nanostores/react";
import { isCmdkOpen } from "@/lib/stores";

export type Post = {
  title: string;
  href: string;
};

type Props = {
  posts: Post[];
};

export default function Cmdk({ posts }: Props) {
  const $isCmdkOpen = useStore(isCmdkOpen);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        isCmdkOpen.set(!$isCmdkOpen);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [$isCmdkOpen]);

  const runCommand = useCallback<(fn: () => void) => void>((fn) => {
    isCmdkOpen.set(false);
    fn();
  }, []);

  return (
    <CommandDialog
      open={$isCmdkOpen}
      onOpenChange={(open) => isCmdkOpen.set(open)}
    >
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Navigation">
            {Object.entries(pages).map(([path, { name, icon: Icon }], i) => (
              <CommandItem
                key={i}
                onSelect={() => runCommand(() => window.open(path, "_self"))}
              >
                <Icon className="mr-2 h-4 w-4" />
                <span>{name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Blog">
            {posts.map(({ title, href }, i) => (
              <CommandItem
                key={i}
                onSelect={() => runCommand(() => window.open(href, "_self"))}
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
                <Iconify className="mr-2 h-4 w-4" size={16} icon={icon} />
                <span>{social}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </CommandDialog>
  );
}
