import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import type { Project } from "@/constants/projects";
import { TypographyP } from "@/components/ui/Typography";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Icon } from "@iconify/react/dist/offline";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import ShineCover from "@/components/ShineCover/ShineCover";

export default function ProjectCard({
  title,
  description,
  img,
  url,
  sourceUrl,
  action = "Open",
  techStack,
  shineBottom,
}: Project & {
  shineBottom?: boolean;
}) {
  return (
    <Card className="mt-6 overflow-hidden group relative bg-white dark:bg-card">
      <ShineCover shineBottom={shineBottom} />
      <div className="relative bg-transparent overflow-hidden rounded-b-md aspect-video md:aspect-[24/9]">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover transition-all group-hover:scale-105"
        />
        <div className="absolute flex sm:hidden items-center gap-1 bottom-1 right-1">
          {techStack.map((icon, i) => (
            <Icon icon={icon} key={i} className="h-7 w-7" fontSize={16} />
          ))}
        </div>
      </div>
      <CardHeader>
        <CardTitle asChild>
          <p>{title}</p>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <TypographyP>{description}</TypographyP>
      </CardContent>
      <CardFooter className="justify-between">
        <div className="flex items-center gap-2">
          {url && (
            <Button asChild className="z-20">
              <Link href={url}>
                <ExternalLink className="mr-2 h-4 w-4" size={16} />
                {action}
              </Link>
            </Button>
          )}
          {sourceUrl && (
            <Button
              asChild
              variant={url ? "secondary" : "default"}
              className="z-20"
            >
              <Link href={sourceUrl}>
                <Github className="mr-2 h-4 w-4" size={16} />
                GitHub
              </Link>
            </Button>
          )}
        </div>
        <div className="hidden sm:flex items-center gap-2">
          {techStack.map((icon, i) => (
            <Icon icon={icon} key={i} className="h-10 w-10" fontSize={24} />
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
