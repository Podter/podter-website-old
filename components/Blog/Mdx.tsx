import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import Image from "next/image";

function CustomLink(props: any) {
  return <Link {...props}>{props.children}</Link>;
}

function CustomImage(props: any) {
  return (
    <Image
      alt={props.alt}
      className="rounded-lg w-full"
      {...props}
      width={1280}
      height={720}
    />
  );
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
