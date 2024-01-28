"use client";

import { useWindowSize } from "~/hooks/use-window-size";

export default function ScreenSize() {
  const { width, height } = useWindowSize();
  return (
    <p className="text-sm text-muted-foreground">
      {width}x{height}
    </p>
  );
}
