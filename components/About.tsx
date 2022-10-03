import Image from "next/image";
import pfp from "../public/assets/pfp.jpg";

export default function About() {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16 transition-colors-transform duration-300"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-ctp-red">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <p className="py-2">Hello, I'm Podter</p>
          <p className="py-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
            illo deserunt officia nostrum quaerat quo, placeat alias maiores
            voluptates pariatur quia excepturi aliquid sapiente, reiciendis
            molestias repudiandae debitis ut eos!
          </p>
          <p className="py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            placeat quo officia dicta sit deleniti ea, dolor harum expedita
            nobis quae vitae cum accusamus. Iure odio placeat consequuntur qui
            alias!
          </p>
          <p className="py-2 underline cursor-pointer">
            Check out some of my latest projects.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-ctp-overlay2 dark:shadow-ctp-crust rounded-xl flex items-center justify-center">
          <Image
            className="rounded-xl"
            src={pfp}
            alt="/"
            width={489}
            height={489}
          />
        </div>
      </div>
    </div>
  );
}
