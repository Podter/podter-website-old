import { useState, useEffect } from "react";

export default function useWindowSize() {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    function handler(e: MouseEvent) {
      setState({
        x: e.pageX,
        y: e.pageY,
      });
    }

    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return { x: state.x, y: state.y };
}
