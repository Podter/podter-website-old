import Head from "next/head";
import Container from "@/components/Container";
import { Icon } from "@iconify/react";
import questionCircleTwotone from "@iconify/icons-line-md/question-circle-twotone";

export default function Home() {
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
      </Container>
    </>
  );
}
