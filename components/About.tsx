import Image from "next/image";
import Arch from "../public/assets/arch.png";

export default function About() {
  return (
    <div className="hero min-h-screen bg-base-200" id="about">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          src={Arch}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="arch"
        />
        <div>
          <p className="uppercase text-xl tracking-widest text-ctp-red">
            About
          </p>
          <h1 className="text-5xl font-bold">Who am I?</h1>
          <p className="py-6">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Hello, I'm Podter
            <br />
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
            illo deserunt officia nostrum quaerat quo, placeat alias maiores
            voluptates pariatur quia excepturi aliquid sapiente, reiciendis
            molestias repudiandae debitis ut eos!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            placeat quo officia dicta sit deleniti ea, dolor harum expedita
            nobis quae vitae cum accusamus. Iure odio placeat consequuntur qui
            alias!
          </p>
          <button className="btn btn-primary">Check out my projects</button>
        </div>
      </div>
    </div>
  );
}
