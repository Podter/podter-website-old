import makeMetadata from "@/lib/makeMetadata";
import { TypographyH1, TypographyP } from "@/components/ui/Typography";
import projects from "@/constants/projects";
import ProjectCard from "./project-card";

export const metadata = makeMetadata(
  "Projects",
  "I spend my free time or hobby coding or working on projects just for fun and learning."
);

export default function Page() {
  return (
    <>
      <TypographyH1>Projects</TypographyH1>
      <TypographyP>
        I spend my free time or hobby coding or working on projects just for fun
        and learning.
      </TypographyP>
      {projects.map(({ ...props }, i) => (
        <ProjectCard key={i} shineBottom={Math.abs(i % 2) == 1} {...props} />
      ))}
    </>
  );
}
