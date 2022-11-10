import Image, { ImageProps } from "next/image";

type Props = {
  src: ImageProps["src"];
  item: number;
};

export default function Carousel({ src, item }: Props) {
  return (
    <div id={`slide${item}`} className="carousel-item relative w-full">
      <Image src={src} className="w-full" alt={`Slide ${item}`} />
    </div>
  );
}
