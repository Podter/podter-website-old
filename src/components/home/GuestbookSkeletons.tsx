import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

function MessageSkeleton({ i }: { i: number }) {
  return (
    <div className="flex items-center">
      <Skeleton
        className="h-6 w-6 rounded-full mr-1"
        style={{
          animationDelay: `${i * 0.2}s`,
          transitionDelay: `${i * 0.2}s`,
        }}
      />
      <Skeleton
        className={cn("h-5 rounded-md", {
          "w-40": i === 1,
          "w-48": i === 2,
          "w-36": i === 3,
        })}
        style={{
          animationDelay: `${i * 0.2}s`,
          transitionDelay: `${i * 0.2}s`,
        }}
      />
    </div>
  );
}

export default function GuestbookSkeletons() {
  return (
    <div className="flex flex-col mt-6 gap-3">
      <MessageSkeleton i={1} />
      <MessageSkeleton i={2} />
      <MessageSkeleton i={3} />
    </div>
  );
}
