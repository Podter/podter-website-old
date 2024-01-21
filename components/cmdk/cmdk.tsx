"use client";

import type { DialogProps } from "@radix-ui/react-dialog";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react/offline";

import type { Pagefind, PagefindSearchResult } from "./pagefind/types";
import { pages } from "~/constants/pages";
import { socials } from "~/constants/socials";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "../ui/command";
import Spinner from "../ui/spinner";
import SearchResult from "./search-result";

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    pagefind?: Pagefind;
  }
}

interface CmdkProps extends Omit<DialogProps, "children"> {}

export default function Cmdk({ open, onOpenChange, ...props }: CmdkProps) {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [results, setResults] = useState<PagefindSearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window.pagefind === "undefined") {
      import(/* webpackIgnore: true */ "./pagefind/pagefind.js")
        .then((mod) => (window.pagefind = mod))
        .catch(console.error);
    }
  }, []);

  const handleSearch = useCallback((search: string) => {
    setSearch(search);
    if (window.pagefind) {
      setLoading(true);
      window.pagefind
        .debouncedSearch(search)
        .then(({ results }) => setResults(results))
        .catch(console.error)
        .finally(() => setLoading(false));
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
      <Command shouldFilter={search.length <= 0}>
        <CommandInput
          placeholder="Type to search…"
          value={search}
          onValueChange={handleSearch}
        />
        <CommandList>
          <CommandEmpty>
            {loading ? (
              <div className="flex flex-row items-center justify-center">
                <Spinner className="mr-2" size={16} />
                <span>Searching…</span>
              </div>
            ) : (
              "No results found."
            )}
          </CommandEmpty>
          {search.length > 0 ? (
            <>
              {results.length > 0 && (
                <CommandGroup heading="Search results">
                  {results.map(({ ...props }) => (
                    <SearchResult
                      key={props.id}
                      runCommand={runCommand}
                      {...props}
                    />
                  ))}
                </CommandGroup>
              )}
            </>
          ) : (
            <>
              <CommandGroup heading="Navigation">
                {Object.entries(pages).map(
                  ([path, { name, icon: Icon }], i) => (
                    <CommandItem
                      key={i}
                      onSelect={() => runCommand(() => router.push(path))}
                    >
                      <Icon className="mr-2 h-5 w-5" width={20} height={20} />
                      <span>{name[0].toUpperCase() + name.slice(1)}</span>
                    </CommandItem>
                  ),
                )}
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
            </>
          )}
        </CommandList>
      </Command>
    </CommandDialog>
  );
}
