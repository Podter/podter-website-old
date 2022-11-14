import { createContext, Children, ReactNode } from "react";
import CarouselItem from "./CarouselItem";

import projects from "../../lib/projects";

export const SlidesContext = createContext(0);

type ProviderProps = {
  children: ReactNode;
};

function SlidesContextProvider({ children }: ProviderProps) {
  const childrenCount = Children.count(children);

  return (
    <SlidesContext.Provider value={childrenCount}>
      {children}
    </SlidesContext.Provider>
  );
}

export default function Projects() {
  return (
    <div id="projects" className="carousel w-full">
      <SlidesContextProvider>
        {projects.map((project, index) => (
          <CarouselItem key={index} project={project} index={index} />
        ))}
      </SlidesContextProvider>
    </div>
  );
}
