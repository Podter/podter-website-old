import Link, { LinkProps } from "next/link";

type BlogPostProps = {
  href: LinkProps["href"];
  title?: string;
  date?: string;
  views?: number;
};

export default function BlogPost({ href, title, date, views }: BlogPostProps) {
  return (
    <Link className="flex flex-col mb-1" href={href}>
      <div className="w-full flex flex-col">
        <h2 className="text-base">{title}</h2>
        <p className="text-sm text-ctp-subtext0 tracking-tighter">
          Published on {date}
        </p>
        <p className="text-sm text-ctp-subtext0 tracking-tighter">
          {views} views
        </p>
      </div>
    </Link>
  );
}
