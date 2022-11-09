import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    const handleVisible = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleVisible);
  }, []);

  return (
    <div
      className={`fixed z-50 bottom-6 right-8 ${
        visible ? "opacity-100" : "opacity-0"
      } transition-opacity`}
    >
      <button className="btn btn-primary btn-circle" onClick={scrollToTop}>
        <ArrowUp className="h-6 w-6" size={24} />
      </button>
    </div>
  );
}
