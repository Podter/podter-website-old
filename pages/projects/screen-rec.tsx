import { useRouter } from "next/router";
import Link from "next/link";

import projects from "../../lib/projects";

export default function Project() {
  const router = useRouter();

  const project = projects[3];

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
            <div className="grid grid-cols-2 gap-6">
              <Link
                className="btn btn-primary"
                href="https://podter.github.io/browser-screen-recorder/"
              >
                Demo
              </Link>
              <Link
                className="btn btn-primary"
                href="https://github.com/Podter/browser-screen-recorder"
              >
                GitHub
              </Link>
            </div>
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
          <div className="">
            <iframe
              src="/script"
              className="min-w-[360px] min-h-[480px] sm:min-w-[640px] sm:min-h-[640px] md:min-w-[768px] md:min-h-[768px] lg:min-w-[1024px] lg:min-h-[1024px]"
            ></iframe>
            <button className="link mt-6" onClick={() => router.back()}>
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
