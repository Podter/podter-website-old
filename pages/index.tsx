import Head from "next/head";
import Container from "@/components/Container";
import { Icon } from "@iconify/react";
import wavingHand from "@iconify/icons-fluent-emoji-flat/waving-hand";

export default function Home() {
  return (
    <>
      <Head>
        <title>Podter</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container>
        <h1 className="text-5xl font-bold">
          Hello, I&apos;m{" "}
          <span className="bg-gradient-to-r from-ctp-red to-ctp-blue bg-clip-text text-transparent">
            Podter
          </span>{" "}
          <Icon className="inline" icon={wavingHand} inline={true} />
        </h1>
        <p className="py-6">
          Hey, I&apos;m Podter. I&apos;m a student and developer from Thailand
        </p>
      </Container>
    </>
  );
}
