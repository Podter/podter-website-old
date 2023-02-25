import Image, { ImageProps } from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

type ProjectCardProps = {
  title: string;
  children: string;
  img: ImageProps["src"];
  url?: string;
  action?: string;
  sourceUrl?: string;
};

export default function ProjectCard({
  title,
  children,
  img,
  url,
  action = "Open",
  sourceUrl,
}: ProjectCardProps) {
  return (
    <div className="card bg-base-100 shadow-lg shadow-base-300 hover:scale-[1.025] transition-all duration-75 md:h-[32rem]">
      <figure className="h-56">
        <Image src={img} alt="Project image" />
      </figure>
      <div className="card-body h-72">
        <h2 className="card-title">{title}</h2>
        <p>{children}</p>
        <div className="card-actions justify-end h-10">
          {url ? (
            <Link href={url} className="btn btn-primary gap-3">
              {action}
              <ExternalLink className="h-6 w-6" size={24} />
            </Link>
          ) : undefined}
          {sourceUrl ? (
            <Link
              href={sourceUrl}
              className={`btn ${!url ? "btn-primary" : ""} gap-3`}
            >
              GitHub
              <Github className="h-6 w-6" size={24} />
            </Link>
          ) : undefined}
        </div>
      </div>
    </div>
  );
}
