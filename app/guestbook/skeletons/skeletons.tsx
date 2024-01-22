import { Skeleton } from "~/components/ui/skeleton";
import Spinner from "~/components/ui/spinner";
import MessageSkeleton from "./message-skeleton";

export function MessageSkeletons() {
  return (
    <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:items-start sm:justify-start">
      <MessageSkeleton />
      <MessageSkeleton />
      <MessageSkeleton />
      <MessageSkeleton />
      <MessageSkeleton />
      <Spinner size={32} className="mt-8 sm:hidden" />
    </div>
  );
}

export function FormSkeleton() {
  return (
    <div className="mt-6 flex flex-col items-center gap-2 sm:flex-row">
      <Skeleton className="h-9 w-full sm:w-[11.75rem]" />
      <Skeleton className="h-9 w-full sm:w-[11.75rem]" />
    </div>
  );
}
