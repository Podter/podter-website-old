import CarouselItem from "./CarouselItem";

export default function Projects() {
  return (
    <div className="carousel w-full">
      <CarouselItem item={1} />
      <CarouselItem item={2} />
      <CarouselItem item={3} />
    </div>
  );
}
