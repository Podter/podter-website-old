import Link from "next/link";

import { Button } from "~/components/ui/button";

export default function SkipContent() {
  return (
    <Button
      asChild
      className="pointer-events-none fixed left-2 top-2 -translate-y-24 overflow-hidden opacity-0 transition-[opacity,transform] focus:pointer-events-auto focus:translate-y-0 focus:opacity-100"
      variant="outline"
    >
      <Link href="#content" tabIndex={0}>
        Skip to content
      </Link>
    </Button>
  );
}
