import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProjectCard() {
  return (
    <div className="card bg-base-100 shadow-xl card- hover:scale-[1.025] transition-all duration-75 h-72 md:h-64">
      <div className="card-body">
        <h2 className="card-title">Coming soon!</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde aliquid
          porro illo earum tempora!
        </p>
        <div className="card-actions justify-end">
          <Link href="/blog" className="btn btn-primary gap-3">
            Read
            <ArrowRight className="h-6 w-6" size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
}
