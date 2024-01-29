"use client";

import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";
import NextLink from "next/link";
import { Icon } from "@iconify/react/offline";
import * as Dialog from "@radix-ui/react-dialog";

import { Button } from "~/components/ui/button";
import { pages } from "~/constants/pages";
import { socials } from "~/constants/socials";

interface MobileMenuProps extends Omit<Dialog.DialogProps, "children"> {}

export default function MobileMenu({ ...props }: MobileMenuProps) {
  return (
    <Dialog.Root {...props}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-30 bg-[rgb(239,241,245)]/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 dark:bg-[rgb(30,30,46)]/80" />
        <Dialog.Content className="fixed bottom-8 left-8 right-8 top-[4.5rem] z-40 flex origin-top-left flex-col rounded-3xl border bg-background p-6 pt-3 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-75 data-[state=open]:zoom-in-75">
          <nav className="flex flex-col">
            <Link href="/" className="flex h-12 items-center font-medium">
              podter._
            </Link>
            {Object.entries(pages).map(([path, { name }], i) => (
              <Link
                key={i}
                href={path}
                className="flex h-[3.5rem] items-center text-3xl font-semibold"
              >
                {name}
              </Link>
            ))}
          </nav>
          <footer className="mt-auto flex flex-col gap-3">
            <div className="flex gap-2">
              {Object.entries(socials).map(([name, { url, icon }]) => (
                <Button
                  key={name}
                  size="icon"
                  className="h-8 w-8"
                  variant="outline"
                  asChild
                >
                  <NextLink href={url}>
                    <Icon
                      icon={icon}
                      className="h-4 w-4"
                      width={16}
                      height={16}
                    />
                    <span className="sr-only">{name}</span>
                  </NextLink>
                </Button>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Podter - All right reserved
            </p>
          </footer>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

const Link = forwardRef<
  ElementRef<typeof NextLink>,
  ComponentPropsWithoutRef<typeof NextLink>
>(({ ...props }, ref) => (
  <Dialog.Close asChild>
    <NextLink {...props} ref={ref} />
  </Dialog.Close>
));
Link.displayName = "Link";
