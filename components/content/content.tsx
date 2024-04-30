import type { PropsWithChildren } from "react";

import { cn } from "~/lib/utils";
import styles from "./content.module.scss";

export default function Content({ children }: PropsWithChildren) {
  return (
    <main
      className={cn(
        "mb-16 flex flex-col px-4 md:mx-6",
        styles.content_transition,
      )}
    >
      {children}
    </main>
  );
}
