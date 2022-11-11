import { createContext, Children, ReactNode } from "react";
import CarouselItem from "./CarouselItem";

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
        <CarouselItem item={1} img="/assets/arch2.png" />
        <CarouselItem item={2} img="/assets/arch.png" />
        <CarouselItem item={3} img="/assets/arch2.png" />
      </SlidesContextProvider>
    </div>
  );
}
