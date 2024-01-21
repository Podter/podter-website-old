"use client";

import { useMemo } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

import type { BaseLinkProps } from "./base-link";
import BaseLink from "./base-link";

export default function Podter({ ...props }: BaseLinkProps) {
  const pathname = usePathname();
  const isHome = useMemo(() => pathname === "/", [pathname]);

  const WithConfetti = dynamic(() => import("./with-confetti"), {
    loading: () => <BaseLink {...props} />,
  });

  return isHome ? <WithConfetti {...props} /> : <BaseLink {...props} />;
}
