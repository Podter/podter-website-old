import type { ImageProps as NextImageProps } from "next/image";
import NextImage from "next/image";
import Link from "next/link";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

import { Button } from "~/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { cn } from "~/lib/utils";

interface ImageProps extends NextImageProps {
  href?: string;
}

export default function Image({ href, src, className, ...props }: ImageProps) {
  return (
    <div className="group relative mt-6 w-full overflow-hidden rounded-xl">
      <Tooltip>
        <TooltipTrigger className="absolute right-2 top-2 z-20">
          <Button
            className="hidden group-hover:inline-flex"
            size="icon"
            variant="outline"
            asChild
          >
            <Link href={href ?? src.toString()} target="_blank">
              <ExternalLinkIcon className="h-4 w-4" width={16} height={16} />
              <span className="sr-only">Open image in new tab</span>
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Open image in new tab</p>
        </TooltipContent>
      </Tooltip>
      <Link
        href={href ?? src.toString()}
        className="absolute z-10 h-full w-full"
        target="_blank"
      >
        <span className="sr-only">Open image in new tab</span>
      </Link>
      <NextImage
        {...props}
        src={src}
        className={cn(
          "w-full object-cover transition-transform group-hover:scale-[1.025]",
          className,
        )}
      />
    </div>
  );
}
