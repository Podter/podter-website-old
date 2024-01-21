import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";
import Link from "next/link";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "~/lib/utils";

export interface BaseLinkProps extends ComponentPropsWithoutRef<typeof Slot> {
  asButton?: boolean;
}

const BaseLink = forwardRef<ElementRef<typeof Slot>, BaseLinkProps>(
  ({ asButton, className, ...props }, ref) => {
    const Component = asButton ? "button" : Link;

    return (
      <Slot {...props} className={cn("px-2 font-medium", className)} ref={ref}>
        <Component href="/">podter._</Component>
      </Slot>
    );
  },
);
BaseLink.displayName = "BaseLink";

export default BaseLink;
