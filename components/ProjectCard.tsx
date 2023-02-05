import Image from "next/image";
import Shoes from "@/public/Shoes.jpg";

export default function ProjectCard() {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <Image src={Shoes} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary duration-75">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
