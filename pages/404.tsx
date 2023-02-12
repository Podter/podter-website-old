import Head from "next/head";
import Container from "@/components/Container";
import { Icon } from "@iconify/react";
import questionCircle from "@iconify/icons-line-md/question-circle";
import ErrorActions from "@/components/ErrorActions";

export default function NoPage() {
  return (
    <>
      <Head>
        <title>404 Not found | Podter</title>
        <meta
          name="description"
          content="You are looking for something that doesn't actually exist."
        />
        <meta property="og:title" content="404 Not found" />
        <meta
          property="og:description"
          content="You are looking for something that doesn't actually exist."
        />
        <meta
          property="og:image:url"
          content="https://podter.xyz/api/og?title=404%20Not%20found"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container>
        <h1 className="text-5xl font-bold">
          <Icon className="inline" icon={questionCircle} inline={true} />{" "}
          <span className="bg-gradient-to-r from-ctp-red to-ctp-blue bg-clip-text text-transparent">
            404
          </span>{" "}
          Not found
        </h1>
        <p className="py-6">
          You are looking for something that doesn&apos;t actually exist.
        </p>
        <ErrorActions />
      </Container>
    </>
  );
}
