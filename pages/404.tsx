import Head from "next/head";
import Container from "@/components/Container";
import { Icon } from "@iconify/react";
import questionCircleTwotone from "@iconify/icons-line-md/question-circle-twotone";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NoPage() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>404 Not found | Podter</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container>
        <h1 className="text-5xl font-bold">
          <Icon className="inline" icon={questionCircleTwotone} inline={true} />{" "}
          <span className="bg-gradient-to-r from-ctp-red to-ctp-blue bg-clip-text text-transparent">
            404
          </span>{" "}
          Not found
        </h1>
        <p className="py-6">
          You are looking for something that doesn&apos;t actually exist.
        </p>
        <div className="flex flex-row gap-2 w-28">
          <button
            className="btn btn-primary w-full"
            onClick={() => router.back()}
          >
            Go back
          </button>
          <Link className="btn btn-primary w-full" href="/">
            Home
          </Link>
        </div>
      </Container>
    </>
  );
}
