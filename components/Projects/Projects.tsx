import { createContext } from "react";
import CarouselItem from "./CarouselItem";

export const SlidesContext = createContext(0);

export default function Projects() {
  return (
    <SlidesContext.Provider value={3}>
      <div className="carousel w-full">
        <CarouselItem item={1} img="/assets/arch2.png" />
        <CarouselItem item={2} img="/assets/arch.png" />
        <CarouselItem item={3} img="/assets/arch2.png" />
      </div>
    </SlidesContext.Provider>
  );
}
