"use client";

import { Button } from "./ui/Button";
import { useRouter } from "next/navigation";

export default function Back() {
  const router = useRouter();

  return (
    <Button onClick={() => router.back()} className="w-24">
      Go back
    </Button>
  );
}
