import CarouselItem from "./CarouselItem";

export default function Projects() {
  return (
    <div className="carousel w-full">
      <CarouselItem item={1} img="/assets/arch2.png" />
      <CarouselItem item={2} img="/assets/arch.png" />
      <CarouselItem item={3} img="/assets/arch2.png" />
    </div>
  );
}
