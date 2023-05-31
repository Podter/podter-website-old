import { buttonVariants } from "@/components/ui/Button";
import Skeletons from "./skeletons";

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
      <Skeletons />
    </>
  );
}
