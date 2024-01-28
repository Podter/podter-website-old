"use client";

import { useEffect, useMemo, useState } from "react";
import { ClockIcon } from "@radix-ui/react-icons";

const formatter = new Intl.DateTimeFormat("en-UK", {
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
  timeZone: "Asia/Bangkok",
});

export default function Clock() {
  const [time, setTime] = useState(Date.now());

  const formattedTime = useMemo(
    () => formatter.format(time).replace("at", "•"),
    [time],
  );

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center">
      <ClockIcon width={14} height={14} />
      <p
        className="ml-1 text-sm text-muted-foreground"
        suppressHydrationWarning
      >
        {formattedTime}
      </p>
    </div>
  );
}
