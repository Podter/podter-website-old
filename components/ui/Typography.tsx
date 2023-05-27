import { cn } from "@/lib/utils";

export function TypographyH1({
  className,
  ...props
}: JSX.IntrinsicElements["h1"]) {
  return (
    <h1
      {...props}
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
    />
  );
}

export function TypographyH2({
  className,
  ...props
}: JSX.IntrinsicElements["h2"]) {
  return (
    <h2
      {...props}
      className={cn(
        "mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
        className
      )}
    />
  );
}

export function TypographyH3({
  className,
  ...props
}: JSX.IntrinsicElements["h3"]) {
  return (
    <h3
      {...props}
      className={cn(
        "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0",
        className
      )}
    />
  );
}

export function TypographyH4({
  className,
  ...props
}: JSX.IntrinsicElements["h4"]) {
  return (
    <h4
      {...props}
      className={cn(
        "mt-6 scroll-m-20 text-xl font-semibold tracking-tight first:mt-0",
        className
      )}
    />
  );
}

export function TypographyP({
  className,
  ...props
}: JSX.IntrinsicElements["p"]) {
  return (
    <p
      {...props}
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
    />
  );
}

export function TypographyBlockquote({
  className,
  ...props
}: JSX.IntrinsicElements["blockquote"]) {
  return (
    <blockquote
      {...props}
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
    />
  );
}

export function TypographyList({
  className,
  ...props
}: JSX.IntrinsicElements["ul"]) {
  return (
    <ul
      {...props}
      className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}
    />
  );
}

export function TypographyOrderedList({
  className,
  ...props
}: JSX.IntrinsicElements["ol"]) {
  return (
    <ol
      {...props}
      className={cn("my-6 ml-6 list-decimal [&>li]:mt-2", className)}
    />
  );
}

export function TypographyInlineCode({
  className,
  ...props
}: JSX.IntrinsicElements["code"]) {
  return (
    <code
      {...props}
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className
      )}
    />
  );
}

export function TypographyLarge({
  className,
  ...props
}: JSX.IntrinsicElements["div"]) {
  return <div {...props} className={cn("text-lg font-semibold", className)} />;
}

export function TypographySmall({
  className,
  ...props
}: JSX.IntrinsicElements["small"]) {
  return (
    <small
      {...props}
      className={cn("text-sm font-medium leading-none", className)}
    />
  );
}

export function TypographyMuted({
  className,
  ...props
}: JSX.IntrinsicElements["p"]) {
  return (
    <p {...props} className={cn("text-sm text-muted-foreground", className)} />
  );
}

export function TypographyAnchor({
  className,
  ...props
}: JSX.IntrinsicElements["a"]) {
  return (
    <a
      {...props}
      className={cn(
        !className?.includes("rehype-autolink-headings") &&
          "font-medium underline underline-offset-4",
        className
      )}
    />
  );
}
