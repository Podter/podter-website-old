import {
  forwardRef,
  type HTMLAttributes,
  type BlockquoteHTMLAttributes,
  type OlHTMLAttributes,
  type AnchorHTMLAttributes,
} from "react";
import { cn } from "@/lib/utils";

export const TypographyH1 = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h1
    {...props}
    ref={ref}
    className={cn(
      "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      className,
    )}
  />
));
TypographyH1.displayName = "TypographyH1";

export const TypographyH2 = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    {...props}
    ref={ref}
    className={cn(
      "mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
      className,
    )}
  />
));
TypographyH2.displayName = "TypographyH2";

export const TypographyH3 = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    {...props}
    ref={ref}
    className={cn(
      "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0",
      className,
    )}
  />
));
TypographyH3.displayName = "TypographyH3";

export const TypographyH4 = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h4
    {...props}
    ref={ref}
    className={cn(
      "mt-6 scroll-m-20 text-xl font-semibold tracking-tight first:mt-0",
      className,
    )}
  />
));
TypographyH4.displayName = "TypographyH4";

export const TypographyCardTitle = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    {...props}
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className,
    )}
  />
));
TypographyCardTitle.displayName = "TypographyCardTitle";

export const TypographyP = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    {...props}
    ref={ref}
    className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
  />
));
TypographyP.displayName = "TypographyP";

export const TypographyBlockquote = forwardRef<
  HTMLQuoteElement,
  BlockquoteHTMLAttributes<HTMLQuoteElement>
>(({ className, ...props }, ref) => (
  <blockquote
    {...props}
    ref={ref}
    className={cn("mt-6 border-l-2 pl-6 italic", className)}
  />
));
TypographyBlockquote.displayName = "TypographyBlockquote";

export const TypographyList = forwardRef<
  HTMLUListElement,
  HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => (
  <ul
    {...props}
    ref={ref}
    className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}
  />
));
TypographyList.displayName = "TypographyList";

export const TypographyOrderedList = forwardRef<
  HTMLOListElement,
  OlHTMLAttributes<HTMLOListElement>
>(({ className, ...props }, ref) => (
  <ol
    {...props}
    ref={ref}
    className={cn("my-6 ml-6 list-decimal [&>li]:mt-2", className)}
  />
));
TypographyOrderedList.displayName = "TypographyOrderedList";

export const TypographyInlineCode = forwardRef<
  HTMLElement,
  HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <code
    {...props}
    ref={ref}
    className={cn(
      "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm break-words",
      className,
    )}
  />
));
TypographyInlineCode.displayName = "TypographyInlineCode";

export const TypographyLarge = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    {...props}
    ref={ref}
    className={cn("text-lg font-semibold", className)}
  />
));
TypographyLarge.displayName = "TypographyLarge";

export const TypographySmall = forwardRef<
  HTMLElement,
  HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <small
    {...props}
    ref={ref}
    className={cn("text-sm font-medium leading-none", className)}
  />
));
TypographySmall.displayName = "TypographySmall";

export const TypographyMuted = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    {...props}
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
  />
));
TypographyMuted.displayName = "TypographyMuted";

export const TypographyAnchor = forwardRef<
  HTMLAnchorElement,
  AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => (
  <a
    {...props}
    ref={ref}
    className={cn(
      Object.keys(props).includes("data-rehype-autolink-headings")
        ? "rehype-autolink-headings"
        : "font-medium underline underline-offset-4",
      className,
    )}
  />
));
TypographyAnchor.displayName = "TypographyAnchor";
