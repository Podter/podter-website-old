import { useRouter } from "next/router";
import Link from "next/link";

import projects from "../../lib/projects";

export default function Project() {
  const router = useRouter();

  const project = projects[1];

  return (
    <>
      <div
        className="hero min-h-[50vh]"
        style={{ backgroundImage: `url("${project.img}")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{project.title}</h1>
            <Link
              className="btn btn-primary"
              href="https://discord.com/api/oauth2/authorize?client_id=559323007697551381&permissions=8&scope=bot%20applications.commands"
            >
              Invite
            </Link>
          </div>
        </div>
      </div>
      <div className="hero min-h-[50vh] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* <Image
          src={Arch}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="arch"
        /> */}
          <div className="grid grid-cols-1 grid-rows-2">
            <p className="py-6">{project.description}</p>
            <button className="link mt-6" onClick={() => router.back()}>
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
