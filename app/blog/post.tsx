import Link from "next/link";
import { Blog } from "contentlayer/generated";
import { TypographyP, TypographyMuted } from "@/components/ui/Typography";
import { ArrowRight, CalendarDays } from "lucide-react";
import { format, parseISO } from "date-fns";
import ViewCounter from "./views";
import { Card } from "@/components/ui/Card";

export default function Post({ title, date, url, slug }: Blog) {
  return (
    <Card asChild>
      <Link
        href={url}
        className="flex flex-row justify-between items-center mt-6 group w-full p-4"
      >
        <div className="flex flex-col gap-1">
          <TypographyP className="group-hover:opacity-70 transition-opacity">
            {title}
          </TypographyP>
          <div className="flex sm:flex-row flex-col-reverse w-full sm:gap-2">
            <ViewCounter slug={slug} />
            <TypographyMuted>
              <CalendarDays
                className="inline mr-1 align-[-0.125em] h-[14px] w-[14px]"
                size={14}
              />
              Published on {format(parseISO(date), "do MMMM, yyyy")}
            </TypographyMuted>
          </div>
        </div>
        <ArrowRight
          className="group-hover:opacity-100 opacity-0 transition-opacity h-6 w-6 hidden sm:block"
          size={24}
        />
      </Link>
    </Card>
  );
}
