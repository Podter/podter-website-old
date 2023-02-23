import Seo from "@/components/Seo";
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
      <Seo
        title={`Error ${statusCode}`}
        description="Look like something went wrong on server side that rarely happens."
      />
      <Container>
        <h1 className="text-5xl font-bold">
          <Icon className="inline" icon={alertCircle} inline={true} /> An error{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
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
