"use client";

import dynamic from "next/dynamic";

import { pages } from "~/constants/pages";
import { useMediaQuery } from "~/hooks/use-media-query";
import Link from "./link";

const AnimatedMenu = dynamic(() => import("./animated-menu"), {
  loading: DummyMenu,
});

export default function Menu() {
  const isSm = useMediaQuery("(min-width: 640px)");
  return isSm ? <AnimatedMenu /> : <DummyMenu />;
}

// TODO: make this better
function DummyMenu() {
  return (
    <>
      {Object.entries(pages).map(([path, { name }], i) => (
        <Link key={i} path={path} name={name} />
      ))}
    </>
  );
}
