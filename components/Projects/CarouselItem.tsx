import { Icon } from "@iconify/react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  item: number;
  img: string;
};

export default function Carousel({ item, img }: Props) {
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
          <Link
            href={`#slide${item - 1}`}
            className="btn btn-circle"
            scroll={false}
          >
            <ChevronLeft size={24} />
          </Link>
          <button className="btn btn-primary">Get Started</button>
          <Link
            href={`#slide${item + 1}`}
            className="btn btn-circle"
            scroll={false}
          >
            <ChevronRight size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
}
