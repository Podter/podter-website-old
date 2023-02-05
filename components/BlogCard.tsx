import { ArrowRight } from "lucide-react";

export default function BlogCard() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl hover:scale-[1.025] transition-all duration-75 h-[14.5rem]">
      <div className="card-body">
        <h2 className="card-title">Coming soon!</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde aliquid
          porro illo earum tempora!
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary gap-3">
            Read
            <ArrowRight className="h-6 w-6" size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
