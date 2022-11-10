import { Icon } from "@iconify/react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Arch from "../../public/assets/arch.png";

import CarouselItem from "./CarouselItem";

export default function Projects() {
  return (
    <div className="hero min-h-screen" id="projects">
      <div className="carousel hero-overlay w-screen h-screen">
        <CarouselItem src={Arch} item={1} />
        <CarouselItem src={Arch} item={2} />
        <CarouselItem src={Arch} item={3} />
      </div>

      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md bg-base-100/10 backdrop-blur-xl shadow-md rounded-2xl p-8">
          <h1 className="mb-5 text-5xl font-bold text-ctp-red">
            Projects{" "}
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
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>

      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-7">
        <Link href="#slide1" className="btn btn-circle" scroll={false}>
          <ChevronLeft size={24} />
        </Link>
        <Link href="#slide3" className="btn btn-circle" scroll={false}>
          <ChevronRight size={24} />
        </Link>
      </div>
    </div>
  );
}
