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
    <div className="card bg-base-100 shadow-xl hover:scale-[1.025] transition-all duration-75 h-[30rem]">
      <figure>
        <Image src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{children}</p>
        <div className="card-actions justify-end">
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
