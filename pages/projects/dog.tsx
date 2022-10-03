import Image from "next/image";
import Link from "next/link";
import TechnologyItem from "../../components/TechnologyItem";

import dogImg from "../../public/assets/dog.jpg";

export default function Dog() {
  return (
    <div className="w-full transition-colors-transform duration-300">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-mocha-base/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={dogImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-mocha-text z-10 p-2">
          <h2 className="py-2">Dog</h2>
          <h3>React / Tailwind / TypeScript</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
            pariatur mollitia dicta nam sit voluptatibus, facere velit neque
            quas aliquam impedit cumque alias ipsa reiciendis! Nesciunt possimus
            veniam quas ea! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Exercitationem voluptatibus unde quam nulla quae inventore
            tenetur assumenda porro, reiciendis distinctio sequi deserunt
            aperiam itaque numquam, labore laboriosam quaerat! Repellat, et!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam,
            est! Laudantium excepturi a esse fugiat iusto aliquid ipsa dolores
            tempora doloribus id, dolorum aperiam sed cupiditate saepe porro
            fuga. Quibusdam!
          </p>
          <button className="px-8 py-2 mt-4 mr-8 shadow-ctp-overlay2 dark:shadow-ctp-crust hover:scale-105 duration-100">
            Demo
          </button>
          <button className="px-8 py-2 mt-4 shadow-ctp-overlay2 dark:shadow-ctp-crust hover:scale-105 duration-100">
            Code
          </button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-ctp-overlay2 dark:shadow-ctp-crust rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <TechnologyItem name="React" />
              <TechnologyItem name="Tailwind CSS" />
              <TechnologyItem name="TypeScript" />
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
}
