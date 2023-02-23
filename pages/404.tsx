import Seo from "@/components/Seo";
import Container from "@/components/Container";
import { Icon } from "@iconify/react";
import questionCircle from "@iconify/icons-line-md/question-circle";
import ErrorActions from "@/components/ErrorActions";

export default function NoPage() {
  return (
    <>
      <Seo
        title="404 Not found"
        description="You are looking for something that doesn't actually exist."
      />
      <Container>
        <h1 className="text-5xl font-bold">
          <Icon className="inline" icon={questionCircle} inline={true} />{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
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
