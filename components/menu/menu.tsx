"use client";

import dynamic from "next/dynamic";

import { useMediaQuery } from "~/hooks/use-media-query";
import DummyMenu from "./dummy-menu";

const AnimatedMenu = dynamic(() => import("./animated-menu"), {
  loading: DummyMenu,
});

export default function Menu() {
  const isSm = useMediaQuery("(min-width: 640px)");
  return isSm ? <AnimatedMenu /> : <DummyMenu />;
}
