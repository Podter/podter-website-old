import Head from "next/head";
import Container from "@/components/Container";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Podter</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container>
        <h1 className="text-5xl font-bold">
          <span className="bg-gradient-to-r from-ctp-red to-ctp-blue bg-clip-text text-transparent">
            About me
          </span>
        </h1>
        <p className="pt-6">
          Hey, I&apos;m Podter. You can call me <strong>&quot;pod&quot;</strong>{" "}
          for short.
        </p>
        <div className="divider" />
        <p className="pb-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
          tempore assumenda suscipit praesentium ullam voluptatem! Explicabo
          quae sequi tenetur dolorem, officia repudiandae, alias quibusdam
          dignissimos dolor quis, voluptas provident accusantium.
        </p>
      </Container>
    </>
  );
}
