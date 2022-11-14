import Link from "next/link";
import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();

  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url("/assets/404-nasa.jpg")` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-ctp-red">Oops!</h1>
          <h1 className="mb-5 text-5xl font-bold">404 Not found!</h1>
          <p className="mb-3">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            You are looking for something that doesn't actually exist.
          </p>
          <p className="mb-5">
            Photo by{" "}
            <Link
              className="link"
              href="https://unsplash.com/es/@nasa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            >
              NASA
            </Link>{" "}
            on{" "}
            <Link
              className="link"
              href="https://unsplash.com/s/photos/astronaut-empty?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            >
              Unsplash
            </Link>
          </p>
          <div className="grid grid-cols-2 gap-6">
            <Link className="btn btn-primary" href="/">
              Home
            </Link>
            <button className="btn btn-primary" onClick={() => router.back()}>
              Go back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
