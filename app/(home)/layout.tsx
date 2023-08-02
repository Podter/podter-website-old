import { TypographyH1, TypographyP } from "@/components/ui/Typography";
import { Icon } from "@iconify/react/dist/offline";
import wavingHand from "@iconify/icons-fluent-emoji-flat/waving-hand";
import { socials } from "@/constants/socials";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import type { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <TypographyH1>
        Hello, I&apos;m{" "}
        <span className="bg-gradient-to-br text-transparent from-primary to-destructive bg-clip-text">
          Podter.
        </span>{" "}
        <Icon className="inline" icon={wavingHand} inline />
      </TypographyH1>
      <TypographyP>
        I&apos;m a student and self-taught developer from Thailand.
      </TypographyP>
      <div className="flex flex-row gap-3 mt-6">
        {Object.entries(socials).map(
          ([social, { url, icon, homePage }], i) =>
            homePage && (
              <Tooltip key={i}>
                <TooltipTrigger>
                  <Button asChild variant="ghost" className="px-2">
                    <Link href={url}>
                      <Icon icon={icon} fontSize={24} className="h-6 w-6" />
                      <span className="sr-only">{social}</span>
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{social}</p>
                </TooltipContent>
              </Tooltip>
            ),
        )}
      </div>
      {children}
    </>
  );
}
