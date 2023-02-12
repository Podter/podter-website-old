import { useState, useEffect, RefObject } from "react";
import { ArrowUp } from "lucide-react";

type ScrollToTopProps = {
  scrollRef: RefObject<HTMLElement>;
  y: number;
};

export default function ScrollToTop({ scrollRef, y }: ScrollToTopProps) {
  const [visible, setVisible] = useState(false);

  function scrollToTop() {
    scrollRef.current?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    if (y > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [y]);

  return (
    <div
      className={`fixed z-50 bottom-6 right-8 ${
        visible ? "opacity-100" : "opacity-0"
      } transition-opacity`}
    >
      <button
        className="btn btn-primary btn-circle"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6" size={24} />
      </button>
    </div>
  );
}
