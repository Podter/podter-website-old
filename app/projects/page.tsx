import Image from "next/image";
import Link from "next/link";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

import MagicalContainer from "~/components/magical-container";
import SplitAnimate from "~/components/split-animate/split-animate";
import { Button } from "~/components/ui/button";
import { H1, P } from "~/components/ui/typography";
import { projects } from "~/constants/projects";
import { createMetadata } from "~/lib/create-metadata";

export const dynamic = "force-static";

export const metadata = createMetadata({
  title: "Projects",
  description: "A list of projects I've worked on.",
});

export default function Projects() {
  return (
    <>
      <div className="flex flex-col">
        <SplitAnimate as={H1}>Projects</SplitAnimate>
        <SplitAnimate as={P} className="mt-3">
          A list of projects I&apos;ve worked on.
        </SplitAnimate>
      </div>
      {projects.map(
        ({ title, description, img, url, action = "Open", sourceUrl }, i) => (
          <div
            key={i}
            className="mt-10 flex flex-col gap-3 [&:nth-child(3)]:mt-6"
          >
            <MagicalContainer
              containerClassName="flex aspect-video items-center justify-center overflow-hidden rounded-xl shadow md:aspect-[24/9]"
              className="h-full w-full rounded-xl object-cover p-px"
              color="hsl(226, 64%, 88%)"
              asChild
            >
              <Image src={img} alt={title} />
            </MagicalContainer>
            <p className="scroll-m-20 text-2xl font-semibold tracking-tight">
              {title}
            </p>
            <p className="leading-7">{description}</p>
            <div className="flex gap-2">
              {url && (
                <Button asChild size="sm">
                  <Link href={url}>
                    <ExternalLinkIcon
                      className="mr-2 h-4 w-4"
                      width={16}
                      height={16}
                    />
                    {action}
                  </Link>
                </Button>
              )}
              {sourceUrl && (
                <Button
                  asChild
                  variant={url ? "secondary" : "default"}
                  size="sm"
                >
                  <Link href={sourceUrl}>
                    <GitHubLogoIcon
                      className="mr-2 h-4 w-4"
                      width={16}
                      height={16}
                    />
                    GitHub
                  </Link>
                </Button>
              )}
            </div>
          </div>
        ),
      )}
    </>
  );
}
