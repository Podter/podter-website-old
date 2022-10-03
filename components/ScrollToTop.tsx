import { useState, useEffect } from "react";
import { HiOutlineArrowUp } from "react-icons/hi";

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
      className={
        visible
          ? "fixed bottom-6 right-8 opacity-100 transition-opacity"
          : "fixed bottom-6 right-8 opacity-0 transition-opacity"
      }
    >
      <button
        className="p-3 cursor-pointer md:hover:scale-105 ease-in duration-75 transition-colors-transform"
        onClick={scrollToTop}
      >
        <HiOutlineArrowUp size={24} />
      </button>
    </div>
  );
}
