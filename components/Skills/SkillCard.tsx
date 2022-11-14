import Image, { ImageProps } from "next/image";

type Props = {
  img: ImageProps["src"];
  name: string;
};

export default function SkillCard({ img, name }: Props) {
  return (
    <div className="card w-72 bg-base-100 shadow-xl hover:scale-105 duration-75">
      <div className="card-body text-center justify-center items-center">
        <div className="grid grid-cols-2 gap-4">
          <Image src={img} alt="Arch" width={64} height={64} />
          <div className="flex justify-center">
            <div className="card-title">{name}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
