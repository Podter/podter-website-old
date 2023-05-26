import NextImage, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/Tooltip";

export default function Image({ src, alt, className, ...props }: ImageProps) {
  return (
    <div className="bg-transparent overflow-hidden rounded-xl w-full group mt-8 relative">
      <Tooltip>
        <TooltipTrigger className="absolute top-3 right-3 z-20">
          <Button
            asChild
            className="w-10 p-2 hidden group-hover:inline-flex"
            variant="secondary"
          >
            <Link href={src.toString()} target="_blank">
              <ExternalLink size={16} className="h-4 w-4" />
              <span className="sr-only">Open image in new tab</span>
            </Link>
          </Button>
          <span className="sr-only">Open image in new tab</span>
        </TooltipTrigger>
        <TooltipContent>
          <p>Open image in new tab</p>
        </TooltipContent>
      </Tooltip>
      <Link
        href={src.toString()}
        className="w-full h-full z-10 absolute"
        target="_blank"
      >
        <span className="sr-only">{alt}</span>
      </Link>
      <NextImage
        {...props}
        src={src}
        alt={alt}
        className={cn(
          "object-cover transition-all group-hover:scale-[1.025] w-full",
          className
        )}
      />
    </div>
  );
}
