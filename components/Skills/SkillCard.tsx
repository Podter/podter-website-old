import Image, { ImageProps } from "next/image";

type Props = {
  img: ImageProps["src"];
};

export default function SkillCard({ img }: Props) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <Image src={img} alt="Arch" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Hello world!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet a
          similique alias quibusdam. Non vero, explicabo similique at, natus,
          minima est quia impedit molestiae esse porro iste molestias sapiente
          maiores.
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Click!</button>
        </div>
      </div>
    </div>
  );
}
