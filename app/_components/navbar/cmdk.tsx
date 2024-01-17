import { Component1Icon } from "@radix-ui/react-icons";

import { Button } from "~/components/ui/button";

export default function Cmdk() {
  return (
    <Button size="icon" className="h-6 w-6" variant="ghost">
      <Component1Icon className="h-4 w-4" width={16} height={16} />
      <span className="sr-only">Commands</span>
    </Button>
  );
}
