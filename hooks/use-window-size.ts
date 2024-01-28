import { useEffect, useState } from "react";

export function useWindowSize() {
  const [state, setState] = useState({
    width: 1280,
    height: 720,
  });

  useEffect(() => {
    function handler() {
      setState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    handler();

    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return { width: state.width, height: state.height };
}
