import { Icon } from "@iconify/react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useContext } from "react";

import { SlidesContext } from "./Projects";

type Props = {
  item: number;
  img: string;
};

export default function Carousel({ item, img }: Props) {
  const slides = useContext(SlidesContext);

  const previous = item - 1;
  const next = item + 1;

  return (
    <div
      className="hero min-h-screen carousel-item"
      id={`slide${item}`}
      style={{ backgroundImage: `url("${img}")` }}
    >
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md bg-base-100/10 backdrop-blur-xl shadow-md rounded-2xl p-8">
          <h1 className="mb-5 text-5xl font-bold text-ctp-red">
            {item} Projects{" "}
            <Icon
              className="inline"
              icon="fluent-emoji-flat:laptop"
              inline={true}
            />
          </h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="flex justify-evenly">
            <Link
              href={`#slide${previous <= 0 ? slides : previous}`}
              className="btn btn-circle"
              scroll={false}
            >
              <ChevronLeft />
            </Link>
            <button className="btn btn-primary">Learn more</button>
            <Link
              href={`#slide${next > slides ? 1 : next}`}
              className="btn btn-circle"
              scroll={false}
            >
              <ChevronRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
