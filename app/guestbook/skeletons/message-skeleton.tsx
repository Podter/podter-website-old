import { Skeleton } from "~/components/ui/skeleton";
import { cn } from "~/lib/utils";
import styles from "./skeletons.module.scss";

export default function MessageSkeleton() {
  return (
    <div
      className={cn(
        "hidden items-center gap-2 sm:flex",
        styles.message_skeleton,
      )}
    >
      <Skeleton className="h-6 w-6" />
      <Skeleton className="h-5 w-[var(--message-width)]" />
    </div>
  );
}
