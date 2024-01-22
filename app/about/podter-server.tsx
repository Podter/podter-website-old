import Image from "next/image";

import podterServer from "~/public/about/podter-server.png";

export default function PodterServer() {
  return (
    <Image
      src={podterServer}
      alt="A terminal window with a `neofetch` command running, showing a logo of a Oracle Linux and the text `opc@podter-server`"
      className="mt-6 w-full rounded-xl border shadow"
    />
  );
}
