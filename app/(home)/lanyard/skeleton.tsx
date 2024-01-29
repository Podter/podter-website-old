import { Skeleton } from "~/components/ui/skeleton";

export default function LanyardSkeleton() {
  return (
    <div className="flex items-center gap-2">
      <Skeleton className="h-6 w-6 rounded-full" />
      <Skeleton className="h-5 w-48" />
    </div>
  );
}
