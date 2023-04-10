import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import Image from "next/image";
import { JetBrains_Mono } from "next/font/google";

const jbMono = JetBrains_Mono({
  subsets: ["latin"],
});

function CustomLink(props: any) {
  return <Link {...props}>{props.children}</Link>;
}

function CustomImage(props: any) {
  return (
    <Image
      alt={props.alt}
      blurDataURL={props.blurDataURL}
      placeholder={props.blurDataURL ? "blur" : "empty"}
      src={props.src}
      width={Number(props.width)}
      height={Number(props.height)}
      className="rounded-lg w-full"
      {...props}
    />
  );
}

function CustomCode(props: any) {
  return (
    <code {...props} className={`${jbMono.className} ${props.className}`}>
      {props.children}
    </code>
  );
}

type MdxProps = {
  code: string;
};

export default function Mdx({ code }: MdxProps) {
  const MDXContent = useMDXComponent(code);

  return (
    <article className="prose min-w-full">
      <MDXContent
        components={{
          a: CustomLink,
          img: CustomImage,
          code: CustomCode,
        }}
      />
    </article>
  );
}
