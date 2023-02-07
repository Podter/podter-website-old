import Head from "next/head";
import Container from "@/components/Container";
import { Icon } from "@iconify/react";
import alertCircleTwotone from "@iconify/icons-line-md/alert-circle-twotone";
import Link from "next/link";
import { useRouter } from "next/router";
import { NextPage, NextPageContext } from "next";

type Props = {
  statusCode?: number;
};

const Error: NextPage<Props> = ({ statusCode }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Error | Podter</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container>
        <h1 className="text-5xl font-bold">
          <Icon className="inline" icon={alertCircleTwotone} inline={true} /> An
          error{" "}
          <span className="bg-gradient-to-r from-ctp-red to-ctp-blue bg-clip-text text-transparent">
            {statusCode}
          </span>{" "}
          occurred
        </h1>
        <p className="py-6">
          Look like something went wrong on server side that rarely happens.
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
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 500;
  return { statusCode };
};

export default Error;
