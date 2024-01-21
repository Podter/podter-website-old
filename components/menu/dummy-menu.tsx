import { pages } from "~/constants/pages";
import { cn } from "~/lib/utils";
import { indicatorClassNames, Link } from "./link";

export default function DummyMenu() {
  return (
    <>
      {Object.entries(pages).map(([path, { name }], i) => (
        <Link key={i} name={name} href={path}>
          <div
            className={cn(indicatorClassNames, "opacity-50 dark:opacity-100")}
          />
        </Link>
      ))}
    </>
  );
}
