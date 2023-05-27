import Link from "next/link";
import { Blog } from "contentlayer/generated";
import { TypographyP, TypographyMuted } from "@/components/ui/Typography";
import { CalendarDays } from "lucide-react";
import { format, parseISO } from "date-fns";
import ViewCounter from "./views";

export default function Post({ title, date, url, slug }: Blog) {
  return (
    <Link href={url} className="flex flex-col mt-6 group w-full gap-1">
      <TypographyP className="group-hover:opacity-70 transition-opacity">
        {title}
      </TypographyP>
      <div className="flex flex-row w-full gap-2">
        <ViewCounter slug={slug} />
        <TypographyMuted>
          <CalendarDays
            className="inline mr-1 align-[-0.125em] h-[14px] w-[14px]"
            size={14}
          />
          Published on {format(parseISO(date), "do MMMM, yyyy")}
        </TypographyMuted>
      </div>
    </Link>
  );
}
