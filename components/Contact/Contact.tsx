import { Github, Youtube, Facebook } from "lucide-react";
import Image from "next/image";

import Form from "./Form";

import Arch from "../../public/assets/arch2.png";

export default function Contact() {
  return (
    <div id="contact" className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse items-stretch">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <figure>
            <Image src={Arch} alt="arch" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-evenly">
              <button className="btn btn-primary btn-circle">
                <Github className="h-6 w-6" size={24} />
              </button>
              <button className="btn btn-primary btn-circle">
                <Facebook className="h-6 w-6" size={24} />
              </button>
              <button className="btn btn-primary btn-circle">
                <Youtube className="h-6 w-6" size={24} />
              </button>
            </div>
          </div>
        </div>
        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
          <div className="card-body">
            <p className="uppercase text-xl tracking-widest text-ctp-red">
              Contact
            </p>
            <h2 className="card-title">Get in touch</h2>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
