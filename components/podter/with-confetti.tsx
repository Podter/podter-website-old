import type { ElementRef, MouseEventHandler } from "react";
import { forwardRef, useCallback } from "react";

import type { BaseLinkProps } from "./base-link";
import { useWindowSize } from "~/hooks/use-window-size";
import BaseLink from "./base-link";

const WithConfetti = forwardRef<ElementRef<typeof BaseLink>, BaseLinkProps>(
  ({ ...props }, ref) => {
    const { width, height } = useWindowSize();

    const triggerConfetti = useCallback<MouseEventHandler<HTMLElement>>(
      async (e) => {
        const confetti = (await import("canvas-confetti")).default;
        confetti({
          particleCount: 75,
          spread: 100,
          origin: {
            x: e.clientX / width,
            y: e.clientY / height,
          },
          startVelocity: 12,
          gravity: 0.75,
          decay: 0.95,
          disableForReducedMotion: true,
          ticks: 500,
        });
      },
      [width, height],
    );

    return <BaseLink {...props} asButton onClick={triggerConfetti} ref={ref} />;
  },
);
WithConfetti.displayName = "WithConfetti";

export default WithConfetti;
