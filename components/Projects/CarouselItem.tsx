import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useContext } from "react";

import { SlidesContext } from "./Projects";

type Props = {
  item: number;
  img: string;
  title: string;
  description: string;
};

export default function Carousel({ item, img, title, description }: Props) {
  const slides = useContext(SlidesContext);

  const previous = item - 1;
  const next = item + 1;

  return (
    <div
      className="hero min-h-screen carousel-item"
      id={`slide${item}`}
      style={{ backgroundImage: `url("${img}")` }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md bg-base-100/10 backdrop-blur-xl shadow-md rounded-2xl p-8">
          <h1 className="mb-5 text-5xl font-bold text-ctp-red">{title}</h1>
          <p className="mb-5">{description}</p>
          <div className="flex justify-center gap-6">
            {item !== 1 ? (
              <Link
                href={`#slide${previous}`}
                className="btn btn-circle"
                scroll={false}
              >
                <ChevronLeft />
              </Link>
            ) : null}

            {item == 1 ? (
              <Link className="btn btn-primary" href="#slide2" scroll={false}>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Let's see
              </Link>
            ) : (
              <button className="btn btn-primary">Learn more</button>
            )}

            {item !== 1 && next <= slides ? (
              <Link
                href={`#slide${next}`}
                className="btn btn-circle"
                scroll={false}
              >
                <ChevronRight />
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
