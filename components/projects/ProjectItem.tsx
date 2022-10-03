import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProjectItemProps {
  title: string;
  description: string;
  href: string;
  img: StaticImageData;
}

export default function ProjectItem({
  title,
  description,
  href,
  img,
}: ProjectItemProps) {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-ctp-overlay2 dark:shadow-ctp-crust rounded-xl group hover:bg-gradient-to-r from-ctp-red to-ctp-maroon">
      <Image
        className="rounded-xl group-hover:opacity-10 transition-all duration-300"
        src={img}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-ctp-base tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-ctp-base text-center">{description}</p>
        <Link href={href}>
          <p className="text-center py-3 rounded-lg bg-ctp-base font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
}
