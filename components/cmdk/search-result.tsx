import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import type {
  PagefindSearchFragment,
  PagefindSearchResult,
} from "./pagefind/types";
import { CommandItem } from "../ui/command";

interface SearchResultProps extends PagefindSearchResult {
  // eslint-disable-next-line no-unused-vars
  runCommand: (fn: () => void) => void;
}

export default function SearchResult({
  data: getData,
  runCommand,
}: SearchResultProps) {
  const router = useRouter();

  const [data, setData] = useState<PagefindSearchFragment | null>(null);
  const url = useMemo(() => {
    if (!data) return "";

    const url = data.url
      .replace(/^\/_next\/static\/chunks\/server\/app\//, "/")
      .replace(/\.html$/, "");
    return url;
  }, [data]);

  useEffect(() => {
    getData().then(setData).catch(console.error);
  }, [getData]);

  if (!data) {
    return null;
  }

  return (
    <CommandItem
      className="flex-col items-start justify-center rounded-md"
      onSelect={() => runCommand(() => router.push(url))}
    >
      <span>{data.meta.title}</span>
      <span
        className="line-clamp-3 text-[13px] text-muted-foreground"
        dangerouslySetInnerHTML={{
          __html: data.excerpt,
        }}
      />
    </CommandItem>
  );
}
