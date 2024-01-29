"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { usePlausible } from "next-plausible";

export default function PlausibleNotFound() {
  const plausible = usePlausible();
  const pathname = usePathname();

  useEffect(() => {
    plausible("Not found", { props: { path: pathname } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
}
