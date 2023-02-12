import Head from "next/head";
import Container from "@/components/Container";
import { Icon } from "@iconify/react";
import alertCircle from "@iconify/icons-line-md/alert-circle";
import { NextPage, NextPageContext } from "next";
import ErrorActions from "@/components/ErrorActions";

type Props = {
  statusCode?: number;
};

const Error: NextPage<Props> = ({ statusCode }) => {
  return (
    <>
      <Head>
        <title>Error | Podter</title>
        <meta
          name="description"
          content="Look like something went wrong on server side that rarely happens."
        />
        <meta property="og:title" content="Error" />
        <meta
          property="og:description"
          content="Look like something went wrong on server side that rarely happens."
        />
        <meta
          property="og:image:url"
          content="https://preview.podter.xyz/api/og?title=Error"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container>
        <h1 className="text-5xl font-bold">
          <Icon className="inline" icon={alertCircle} inline={true} /> An error{" "}
          <span className="bg-gradient-to-r from-ctp-red to-ctp-blue bg-clip-text text-transparent">
            {statusCode}
          </span>{" "}
          occurred
        </h1>
        <p className="py-6">
          Look like something went wrong on server side that rarely happens.
        </p>
        <ErrorActions />
      </Container>
    </>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 500;
  return { statusCode };
};

export default Error;
