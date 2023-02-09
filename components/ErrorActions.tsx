import { useRouter } from "next/router";

export default function ErrorActions() {
  const router = useRouter();

  return (
    <div className="flex flex-row gap-2 w-28">
      <button
        className="btn btn-primary w-full duration-75"
        onClick={() => router.back()}
      >
        Go back
      </button>
      <button
        className="btn btn-primary w-full duration-75"
        onClick={() => router.push("/")}
      >
        Home
      </button>
    </div>
  );
}
