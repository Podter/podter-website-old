import { Github, Youtube, Facebook } from "lucide-react";
import { Icon } from "@iconify/react";

import Tiles from "./Tiles";

export default function Home() {
  return (
    <div className="hero min-h-screen" id="home">
      <Tiles />
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md bg-base-100/10 backdrop-blur-xl shadow-md rounded-2xl p-8">
          <h1 className="mb-5 text-5xl font-bold">
            Hello! I am <span className="text-ctp-red">Podter</span>{" "}
            <Icon
              className="inline"
              icon="fluent-emoji-flat:waving-hand"
              inline={true}
            />
          </h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary btn-circle m-3">
            <Github className="h-6 w-6" size={24} />
          </button>
          <button className="btn btn-primary btn-circle m-3">
            <Facebook className="h-6 w-6" size={24} />
          </button>
          <button className="btn btn-primary btn-circle m-3">
            <Youtube className="h-6 w-6" size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
