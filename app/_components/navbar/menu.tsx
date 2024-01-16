"use client";

import { useCallback } from "react";
import { LayoutGroup, LazyMotion } from "framer-motion";

import { pages } from "~/constants/pages";
import Link from "./link";

export default function Menu() {
  const domMax = useCallback(
    () => import("~/lib/animation").then((mod) => mod.default),
    [],
  );

  return (
    <LazyMotion features={domMax}>
      <LayoutGroup>
        {Object.entries(pages).map(([path, { name }], i) => (
          <Link key={i} path={path} name={name} />
        ))}
      </LayoutGroup>
    </LazyMotion>
  );
}
