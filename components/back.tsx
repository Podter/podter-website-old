"use client";

import { useRouter } from "next/navigation";

import { Button } from "~/components/ui/button";

export default function Back() {
  const router = useRouter();

  return (
    <Button onClick={() => router.back()} className="w-24">
      Go back
    </Button>
  );
}
