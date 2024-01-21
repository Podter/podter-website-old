import { pages } from "~/constants/pages";
import { cn } from "~/lib/utils";
import { BaseLink, indicatorClassNames } from "./base-link";

export default function DummyMenu() {
  return (
    <>
      {Object.entries(pages).map(([path, { name }], i) => (
        <BaseLink key={i} name={name} href={path}>
          <div
            className={cn(indicatorClassNames, "opacity-50 dark:opacity-100")}
          />
        </BaseLink>
      ))}
    </>
  );
}
