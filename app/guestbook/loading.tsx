import { buttonVariants } from "@/components/ui/Button";
import { Skeleton } from "@/components/ui/Skeleton";

const min = 128;
const max = 256;

export default function Loading() {
  return (
    <>
      <div className="flex flex-col gap-3 mt-6 sm:flex-row">
        <div
          className={buttonVariants({
            variant: "secondary",
            className: "w-full sm:w-48 bg-muted animate-pulse",
          })}
        />
        <div
          className={buttonVariants({
            variant: "secondary",
            className: "w-full sm:w-48 bg-muted animate-pulse",
          })}
        />
      </div>
      <div className="flex flex-col mt-8 gap-4">
        {[...Array(5)].map((_, i) => (
          <div className="flex flex-row items-center" key={i}>
            <Skeleton className="h-6 w-6 rounded-full mr-2" />
            <Skeleton
              className="h-5 rounded-md"
              style={{
                width: Math.floor(Math.random() * (max - min + 1)) + min,
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
}
