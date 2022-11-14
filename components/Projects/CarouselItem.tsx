import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useContext } from "react";

import type { Project } from "../../lib/projects";

import { SlidesContext } from "./Projects";

type Props = {
  project: Project;
  index: number;
};

export default function Carousel({ project, index }: Props) {
  const slides = useContext(SlidesContext);

  const previous = index - 1;
  const next = index + 1;

  return (
    <div
      className="hero min-h-screen carousel-item"
      id={`slide${index}`}
      style={{ backgroundImage: `url("${project.img}")` }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md bg-base-100/10 backdrop-blur-xl shadow-md rounded-2xl p-8">
          <h1 className="mb-5 text-5xl font-bold text-ctp-red">
            {project.title}
          </h1>
          <p className="mb-5">{project.description}</p>
          <div className="flex justify-center gap-6">
            {index !== 0 ? (
              <Link
                href={`#slide${previous}`}
                className="btn btn-circle"
                scroll={false}
              >
                <ChevronLeft />
              </Link>
            ) : null}

            {index == 0 ? (
              <Link className="btn btn-primary" href="#slide1" scroll={false}>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Let's see
              </Link>
            ) : (
              <Link
                className="btn btn-primary"
                href={`projects/${project.alias}`}
                scroll={false}
              >
                Learn more
              </Link>
            )}

            {index !== 0 && next < slides ? (
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
