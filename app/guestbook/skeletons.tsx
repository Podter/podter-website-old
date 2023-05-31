import { Skeleton } from "@/components/ui/Skeleton";

const min = 128;
const max = 256;

export default function Skeletons() {
  return (
    <>
      <div className="hidden sm:flex flex-col mt-8 gap-4">
        {[...Array(5)].map((_, i) => (
          <div className="flex flex-row items-center" key={i}>
            <Skeleton
              className="h-6 w-6 rounded-full mr-2"
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
        ))}
      </div>
      <div className="sm:hidden flex flex-col mt-8 gap-4">
        {[...Array(5)].map((_, i) => (
          <Skeleton
            className="h-[5.25rem] rounded-lg"
            style={{
              animationDelay: `${i * 0.2}s`,
              transitionDelay: `${i * 0.2}s`,
            }}
            key={i}
          />
        ))}
      </div>
    </>
  );
}
