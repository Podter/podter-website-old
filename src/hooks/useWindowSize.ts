import { useState, useEffect } from "react";

export default function useWindowSize() {
  const [state, setState] = useState({
    width: Infinity,
    height: Infinity,
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
