import { useMDXComponent } from "next-contentlayer/hooks";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import Image from "next/image";

function CustomLink(props: any) {
  return <Link {...props}>{props.children}</Link>;
}

function CustomImage(props: any) {
  if (props.src.startsWith("http")) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img alt={props.alt} className="rounded-lg" {...props} />
    );
  }

  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

type MdxProps = {
  code: string;
};

export default function Mdx({ code }: MdxProps) {
  const MDXContent = useMDXComponent(code);

  return (
    <article className="prose">
      <MDXContent
        components={{
          a: CustomLink,
          img: CustomImage,
        }}
      />
    </article>
  );
}
