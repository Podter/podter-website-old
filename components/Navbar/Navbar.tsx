import dynamic from "next/dynamic";
import { useState, useRef, useEffect, MouseEvent } from "react";
import { useWindowSize } from "react-use";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";

import ThemeButton from "./ThemeButton";

const Confetti = dynamic(() => import("react-confetti"), {
  ssr: false,
});

export default function Navbar() {
  const { width, height } = useWindowSize();
  const router = useRouter();

  const confettiRef = useRef(null);
  const [confetti, setConfetti] = useState(false);
  const [mousePosX, setMousePosX] = useState(0);
  const [mousePosY, setMousePosY] = useState(0);

  const [navColor, setNavColor] = useState(false);

  function navCenterClick(event: MouseEvent) {
    if (window.scrollY <= 90 && router.route == "/") {
      setMousePosX(event.clientX);
      setMousePosY(event.clientY);

      setConfetti(true);
      setTimeout(() => setConfetti(false), 100);
    }
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setNavColor(true);
      } else {
        setNavColor(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={`navbar fixed z-50 ${
        navColor
          ? "bg-base-100/20 backdrop-blur-xl shadow-md"
          : "bg-transparent"
      } transition-all`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className={`btn ${
              !navColor
                ? "bg-base-100/20 hover:bg-base-100/75 backdrop-blur-xl shadow-sm"
                : "btn-ghost"
            } btn-circle border-0 transition-all`}
          >
            <Menu className="h-5 w-5" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/#home" scroll={false}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/#about" scroll={false}>
                About
              </Link>
            </li>
            <li>
              <Link href="/#skills" scroll={false}>
                Skills
              </Link>
            </li>
            <li>
              <Link href="/#projects" scroll={false}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/#contact" scroll={false}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link
          href="/#home"
          onClick={navCenterClick}
          className={`btn ${
            !navColor
              ? "bg-base-100/20 hover:bg-base-100/75 backdrop-blur-xl shadow-sm"
              : "btn-ghost"
          } normal-case text-xl text-ctp-red border-0 transition-all`}
          scroll={false}
        >
          Podter
        </Link>
      </div>
      <div className="navbar-end">
        <ThemeButton navColor={navColor} />
      </div>
      <Confetti
        style={{ pointerEvents: "none" }}
        numberOfPieces={confetti ? 200 : 0}
        initialVelocityX={50}
        initialVelocityY={-50}
        ref={confettiRef}
        gravity={0.05}
        width={width}
        height={height}
        confettiSource={{
          w: 0,
          h: 0,
          x: mousePosX,
          y: mousePosY,
        }}
        recycle={confetti ? true : false}
        tweenDuration={10}
      />
    </div>
  );
}
