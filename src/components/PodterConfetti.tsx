import { useState, useCallback } from "react";
import useWindowSize from "@/hooks/useWindowSize";
import Confetti from "react-confetti";

export default function PodterConfetti() {
  const { width, height } = useWindowSize();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [confetti, setConfetti] = useState(false);

  const triggerConfetti = useCallback(() => {
    setConfetti(true);
    setTimeout(() => setConfetti(false), 100);
  }, [setConfetti]);

  return (
    <>
      <button
        className="text-muted-foreground hover:underline underline-offset-4 decoration-foreground/50"
        onClick={triggerConfetti}
        onMouseMove={(e) => {
          setMouse({ x: e.pageX, y: e.pageY });
        }}
      >
        podter._
      </button>
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
}
