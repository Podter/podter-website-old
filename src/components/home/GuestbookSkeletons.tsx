import { Skeleton } from "@/components/ui/skeleton";

const min = 128;
const max = 256;

export default function GuestbookSkeletons() {
  return (
    <div className="flex flex-col mt-6 gap-3">
      {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        [...Array(3)].map((_, i) => (
          <div className="flex items-center" key={i}>
            <Skeleton
              className="h-6 w-6 rounded-full mr-1"
              style={{
                animationDelay: `${i * 0.2}s`,
                transitionDelay: `${i * 0.2}s`,
              }}
            />
            <Skeleton
              className="h-5 rounded-md"
              style={{
                width: Math.floor(Math.random() * (max - min + 1)) + min,
                animationDelay: `${i * 0.2}s`,
                transitionDelay: `${i * 0.2}s`,
              }}
            />
          </div>
        ))
      }
    </div>
  );
}
