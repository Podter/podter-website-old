import { useRouter } from "next/router";
import Link from "next/link";

import projects from "../lib/projects";

import NotFound from "./404";

export default function Project() {
  const router = useRouter();

  if (!router.query.id) return <NotFound />;

  const projectId = +router.query.id as number;
  const project = projects[projectId];

  if (!project) return <NotFound />;

  return (
    <div
      className="hero min-h-[50vh]"
      style={{ backgroundImage: `url("${project.img}")` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{project.title}</h1>
          <div className="grid grid-cols-2 gap-6">
            <button className="btn btn-primary" onClick={() => router.back()}>
              Go back
            </button>
            <Link className="btn btn-primary" href="/">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
