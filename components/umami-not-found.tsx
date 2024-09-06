"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function UmamiNotFound() {
  const pathname = usePathname();

  useEffect(() => {
    window.umami.track("Not found", { path: pathname });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
}
