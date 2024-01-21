import type { JSX } from "react";

import { cn } from "~/lib/utils";

export function Table({ className, ...props }: JSX.IntrinsicElements["table"]) {
  return (
    <div className={cn("mt-6 w-full overflow-y-auto bg-background", className)}>
      <table {...props} className="w-full" />
    </div>
  );
}

export function Tr({ className, ...props }: JSX.IntrinsicElements["tr"]) {
  return (
    <tr
      {...props}
      className={cn("m-0 border-t p-0 even:bg-secondary", className)}
    />
  );
}

export function Th({ className, ...props }: JSX.IntrinsicElements["th"]) {
  return (
    <th
      {...props}
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
    />
  );
}

export function Td({ className, ...props }: JSX.IntrinsicElements["td"]) {
  return (
    <td
      {...props}
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
    />
  );
}
