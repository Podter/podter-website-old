"use client";

import { usePlausible } from "next-plausible";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function TrackNotFound() {
  const plausible = usePlausible<PlausibleEvents>();
  const pathname = usePathname();

  useEffect(() => {
    plausible("404", {
      props: {
        path: pathname,
      },
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
