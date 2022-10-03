import ProjectItem from "./ProjectItem";
import dogImg from "../../public/assets/dog.jpg";

export default function Projects() {
  return (
    <div
      id="projects"
      className="w-full transition-colors-transform duration-300"
    >
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-ctp-red">
          Projects
        </p>
        <h2 className="py-4">What I have built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Dog"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            href="/projects/dog"
            img={dogImg}
          />
          <ProjectItem
            title="Dog"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            href="/"
            img={dogImg}
          />
          <ProjectItem
            title="Dog"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            href="/"
            img={dogImg}
          />
          <ProjectItem
            title="Dog"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            href="/"
            img={dogImg}
          />
        </div>
      </div>
    </div>
  );
}
