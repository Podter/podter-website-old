import { useCallback, useMemo, useRef } from "react";

import type { BaseLinkProps } from "./base-link";
import { useWindowSize } from "~/hooks/use-window-size";
import BaseLink from "./base-link";

export default function WithConfetti({ ...props }: BaseLinkProps) {
  const { width, height } = useWindowSize();
  const ref = useRef<HTMLElement>(null);

  const { x, y } = useMemo(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();

      const elX = rect.x + rect.width / 2;
      const elY = rect.y + rect.height / 2;

      return { x: elX / width, y: elY / height };
    } else {
      return { x: 0, y: 0 };
    }
  }, [width, height]);

  const triggerConfetti = useCallback(async () => {
    const confetti = (await import("canvas-confetti")).default;
    confetti({
      particleCount: 75,
      spread: 100,
      origin: { x, y },
      startVelocity: 12,
      gravity: 0.75,
      decay: 0.95,
      disableForReducedMotion: true,
      ticks: 500,
    });
  }, [x, y]);

  return <BaseLink {...props} asButton onClick={triggerConfetti} ref={ref} />;
}
