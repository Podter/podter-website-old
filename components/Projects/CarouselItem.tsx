import { Icon } from "@iconify/react";

export default function Carousel() {
  return (
    <div
      className="hero min-h-screen carousel-item"
      id="slide3"
      style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
    >
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md bg-base-100/10 backdrop-blur-xl shadow-md rounded-2xl p-8">
          <h1 className="mb-5 text-5xl font-bold text-ctp-red">
            Projects{" "}
            <Icon
              className="inline"
              icon="fluent-emoji-flat:laptop"
              inline={true}
            />
          </h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
