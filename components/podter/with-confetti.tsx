import type { ElementRef, MouseEventHandler } from "react";
import { forwardRef, useCallback, useState } from "react";
import Confetti from "react-confetti";

import type { BaseLinkProps } from "./base-link";
import { useWindowSize } from "~/hooks/use-window-size";
import BaseLink from "./base-link";

const WithConfetti = forwardRef<ElementRef<typeof BaseLink>, BaseLinkProps>(
  ({ ...props }, ref) => {
    const { width, height } = useWindowSize();
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const [confetti, setConfetti] = useState(false);

    const triggerConfetti = useCallback<MouseEventHandler<HTMLElement>>((e) => {
      setMouse({ x: e.pageX, y: e.pageY });
      setConfetti(true);
      setTimeout(() => setConfetti(false), 100);
    }, []);

    return (
      <>
        <BaseLink {...props} asButton onClick={triggerConfetti} ref={ref} />
        <Confetti
          style={{ position: "fixed" }}
          numberOfPieces={confetti ? 200 : 0}
          initialVelocityX={50}
          initialVelocityY={-50}
          gravity={0.05}
          width={width}
          height={height}
          confettiSource={{
            w: 0,
            h: 0,
            x: mouse.x,
            y: mouse.y,
          }}
          recycle={confetti}
          tweenDuration={10}
        />
      </>
    );
  },
);
WithConfetti.displayName = "WithConfetti";

export default WithConfetti;
