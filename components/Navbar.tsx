import Link from "next/link";
import { HiOutlineX } from "react-icons/hi";
import {
  FaDiscord,
  FaGithub,
  FaTwitter,
  FaFacebookMessenger,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import ThemeSwitch from "./ThemeSwitch";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const Confetti = dynamic(() => import("react-confetti"), { ssr: false });
import { useRef } from "react";
import { useWindowSize } from "react-use";
import ScrollToTop from "./ScrollToTop";
import MenuButton from "./MenuButton";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [isProject, setisProject] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.asPath === "/projects/dog") {
      setisProject(true);
    } else {
      setisProject(false);
    }
  }, [router]);

  function handleNav() {
    setNav(!nav);
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const ref = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [mousePosX, setMousePosX] = useState(0);
  const [mousePosY, setMousePosY] = useState(0);
  const { width, height } = useWindowSize();

  return (
    <div
      className={
        !shadow && isProject
          ? "fixed w-full h-20 z-[100] transparent"
          : shadow && isProject
          ? "fixed w-full h-20 shadow-xl z-[100] bg-ctp-base"
          : shadow && !isProject
          ? "fixed w-full h-20 shadow-xl z-[100] bg-ctp-base"
          : "fixed w-full h-20 z-[100] bg-ctp-base"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-8">
        <Link href="/#home">
          <h1
            onMouseDown={() => setIsMouseDown(true)}
            onMouseUp={() => setIsMouseDown(false)}
            onMouseMove={(e) => {
              setMousePosX(e.clientX);
              setMousePosY(e.clientY);
            }}
            className={
              isProject && !shadow
                ? "text-3xl text-mocha-red transition-colors-transform duration-300 cursor-pointer unselectable"
                : isProject && shadow
                ? "text-3xl text-ctp-red transition-colors-transform duration-300 cursor-pointer unselectable"
                : "text-3xl text-ctp-red transition-colors-transform duration-300 cursor-pointer unselectable"
            }
          >
            Podter
          </h1>
        </Link>
        <Confetti
          style={{ pointerEvents: "none" }}
          numberOfPieces={isMouseDown && !isProject ? 200 : 0}
          initialVelocityX={50}
          initialVelocityY={-50}
          ref={ref}
          gravity={0.05}
          width={width}
          height={height}
          confettiSource={{
            w: 0,
            h: 0,
            x: mousePosX,
            y: mousePosY,
          }}
          recycle={isMouseDown && !shadow && !isProject ? true : false}
          tweenDuration={10}
        />
        <div>
          <ul
            className={
              isProject && !shadow
                ? "hidden md:flex h-5 transition-colors-transform duration-300 text-mocha-text"
                : isProject && shadow
                ? "hidden md:flex h-5 transition-colors-transform duration-300 text-ctp-text"
                : "hidden md:flex h-5 transition-colors-transform duration-300 text-ctp-text"
            }
          >
            <Link href="/#home">
              <li
                className={
                  isProject && !shadow
                    ? "ml-10 text-sm uppercase hover:border-b border-mocha-text"
                    : isProject && shadow
                    ? "ml-10 text-sm uppercase hover:border-b border-ctp-text"
                    : "ml-10 text-sm uppercase hover:border-b border-ctp-text"
                }
              >
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li
                className={
                  isProject && !shadow
                    ? "ml-10 text-sm uppercase hover:border-b border-mocha-text"
                    : isProject && shadow
                    ? "ml-10 text-sm uppercase hover:border-b border-ctp-text"
                    : "ml-10 text-sm uppercase hover:border-b border-ctp-text"
                }
              >
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li
                className={
                  isProject && !shadow
                    ? "ml-10 text-sm uppercase hover:border-b border-mocha-text"
                    : isProject && shadow
                    ? "ml-10 text-sm uppercase hover:border-b border-ctp-text"
                    : "ml-10 text-sm uppercase hover:border-b border-ctp-text"
                }
              >
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li
                className={
                  isProject && !shadow
                    ? "ml-10 text-sm uppercase hover:border-b border-mocha-text"
                    : isProject && shadow
                    ? "ml-10 text-sm uppercase hover:border-b border-ctp-text"
                    : "ml-10 text-sm uppercase hover:border-b border-ctp-text"
                }
              >
                Projects
              </li>
            </Link>
            <Link href="/">
              <li
                className={
                  isProject && !shadow
                    ? "ml-10 text-sm uppercase hover:border-b border-mocha-text"
                    : isProject && shadow
                    ? "ml-10 text-sm uppercase hover:border-b border-ctp-text"
                    : "ml-10 text-sm uppercase hover:border-b border-ctp-text"
                }
              >
                Contact
              </li>
            </Link>
            <li className="ml-10 mt-[-14px]">
              <ThemeSwitch
                useBlackButton={
                  isProject && !shadow
                    ? true
                    : isProject && shadow
                    ? false
                    : false
                }
              />
            </li>
          </ul>
          <ul className="md:hidden flex">
            <li className="ml-3">
              <ThemeSwitch
                useBlackButton={
                  isProject && !shadow
                    ? true
                    : isProject && shadow
                    ? false
                    : false
                }
              />
            </li>
            <li className="ml-3">
              <MenuButton
                useBlackButton={
                  isProject && !shadow
                    ? true
                    : isProject && shadow
                    ? false
                    : false
                }
                onClick={handleNav}
              />
            </li>
          </ul>
        </div>
      </div>

      <ScrollToTop />

      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-mocha-base/70"
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-ctp-base p-10 ease-in duration-[400ms]"
              : "fixed w-[75%] sm:w-[60%] md:w-[45%] left-[-100%] top-0 p-10 ease-in duration-[400ms]"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <h1 className="text-3xl text-ctp-red">Podter</h1>
              <div
                className="rounded-lg shadow-lg shadow-ctp-overlay2 dark:shadow-ctp-crust p-3 cursor-pointer"
                onClick={handleNav}
              >
                <HiOutlineX size={24} />
              </div>
            </div>
            <div className="border-b border-ctp-surface1 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/#home">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-ctp-red">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Let's Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-lg shadow-lg shadow-ctp-overlay2 dark:shadow-ctp-crust p-3 cursor-pointer ease-in duration-300">
                  <FaDiscord />
                </div>
                <div className="rounded-lg shadow-lg shadow-ctp-overlay2 dark:shadow-ctp-crust p-3 cursor-pointer ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-lg shadow-lg shadow-ctp-overlay2 dark:shadow-ctp-crust p-3 cursor-pointer ease-in duration-300">
                  <FaTwitter />
                </div>
                <div className="rounded-lg shadow-lg shadow-ctp-overlay2 dark:shadow-ctp-crust p-3 cursor-pointer ease-in duration-300">
                  <FaFacebookMessenger />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
