"use client";

import type { PropsWithChildren } from "react";
import { TooltipProvider } from "@/components/ui/Tooltip";

export default function Providers({ children }: PropsWithChildren) {
  return <TooltipProvider>{children}</TooltipProvider>;
}
