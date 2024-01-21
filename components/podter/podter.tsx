"use client";

import type { ElementRef } from "react";
import { forwardRef, useMemo } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

import type { BaseLinkProps } from "./base-link";
import BaseLink from "./base-link";

const Podter = forwardRef<ElementRef<typeof BaseLink>, BaseLinkProps>(
  ({ ...props }, ref) => {
    const pathname = usePathname();
    const isHome = useMemo(() => pathname === "/", [pathname]);

    const WithConfetti = dynamic(() => import("./with-confetti"), {
      loading: () => <BaseLink {...props} ref={ref} />,
    });

    return isHome ? (
      <WithConfetti {...props} ref={ref} />
    ) : (
      <BaseLink {...props} ref={ref} />
    );
  },
);
Podter.displayName = "Podter";

export default Podter;
