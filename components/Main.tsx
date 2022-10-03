import {
  FaDiscord,
  FaGithub,
  FaTwitter,
  FaFacebookMessenger,
} from "react-icons/fa";

export default function Main() {
  return (
    <div
      id="home"
      className="w-full h-screen text-center transition-colors-transform duration-300"
    >
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-ctp-subtext1">
            A human
          </p>
          <h1 className="py-4">
            Hello! I am <span className="text-ctp-red">Podter</span>👋
          </h1>
          <h1 className="py-4">A human lives in Thailand on Earth</h1>
          <p className="py-4 text-ctp-subtext1 max-w-[70%] m-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            aliquam itaque molestiae perferendis blanditiis nisi architecto,
            perspiciatis corporis labore odit fugiat dicta doloribus maiores
            nostrum reprehenderit fuga ipsa sunt quibusdam.
          </p>
          <div className="flex items-center justify-between max-w-[300px] m-auto py-4">
            <div className="rounded-lg shadow-lg shadow-ctp-overlay2 dark:shadow-ctp-crust p-5 cursor-pointer hover:scale-110 ease-in transition-colors-transform duration-75">
              <FaDiscord size={24} />
            </div>
            <div className="rounded-lg shadow-lg shadow-ctp-overlay2 dark:shadow-ctp-crust p-5 cursor-pointer hover:scale-110 ease-in transition-colors-transform duration-75">
              <FaGithub size={24} />
            </div>
            <div className="rounded-lg shadow-lg shadow-ctp-overlay2 dark:shadow-ctp-crust p-5 cursor-pointer hover:scale-110 ease-in transition-colors-transform duration-75">
              <FaTwitter size={24} />
            </div>
            <div className="rounded-lg shadow-lg shadow-ctp-overlay2 dark:shadow-ctp-crust p-5 cursor-pointer hover:scale-110 ease-in transition-colors-transform duration-75">
              <FaFacebookMessenger size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
