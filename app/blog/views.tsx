"use client";

import { TypographyMuted } from "@/components/ui/Typography";
import { Eye } from "lucide-react";
import useSWR from "swr";
import { httpFetch } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/offline";
import icon90RingWithBg from "@iconify/icons-svg-spinners/90-ring-with-bg";

type ViewCounterProps = {
  slug: string;
};

export default function ViewCounter({ slug }: ViewCounterProps) {
  const { data, isLoading } = useSWR(
    `/api/blog/${slug}`,
    httpFetch<{ views: number }>,
  );

  return (
    <TypographyMuted>
      {isLoading ? (
        <Icon
          icon={icon90RingWithBg}
          className="inline mr-1 align-[-0.125em] h-[14px] w-[14px]"
          fontSize={14}
          inline
        />
      ) : (
        <Eye
          className="inline mr-1 align-[-0.125em] h-[14px] w-[14px]"
          size={14}
        />
      )}
      {data ? data.views : 0} views
    </TypographyMuted>
  );
}
