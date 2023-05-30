import { useMDXComponent } from "next-contentlayer/hooks";
import mdxComponents from "@/lib/mdxComponents";
import Image from "./image";
import PreformattedText from "./preformatted-text";

type ContentProps = {
  code: string;
};

export default function Content({ code }: ContentProps) {
  const MDXContent = useMDXComponent(code);

  return (
    <article className="mt-6">
      <MDXContent
        components={{
          ...mdxComponents,
          Image: Image,
          pre: PreformattedText,
        }}
      />
    </article>
  );
}
