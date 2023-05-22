"use client";

import { TypographyMuted } from "@/components/ui/Typography";
import { Eye } from "lucide-react";
import useSWR from "swr";
import { httpFetch } from "@/lib/utils";
import { useEffect } from "react";
import { Icon } from "@iconify/react/dist/offline";
import icon90RingWithBg from "@iconify/icons-svg-spinners/90-ring-with-bg";

type ViewCounterProps = {
  slug: string;
  trackView?: boolean;
};

export default function ViewCounter({ slug, trackView }: ViewCounterProps) {
  const { data, isLoading } = useSWR(
    `/api/blog/${slug}`,
    httpFetch<{ views: number }>
  );

  useEffect(() => {
    async function registerView() {
      await httpFetch(`/api/blog/${slug}`, {
        method: "POST",
      });
    }

    if (trackView) {
      registerView();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
