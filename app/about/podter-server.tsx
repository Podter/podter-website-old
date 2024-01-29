import Image from "next/image";

import MagicalContainer from "~/components/magical-container";
import podterServer from "~/public/about/podter-server.png";

export default function PodterServer() {
  return (
    <MagicalContainer
      asChild
      containerClassName="mt-6 flex w-full items-center justify-center rounded-xl shadow"
      className="h-full w-full rounded-xl p-px"
      color="hsl(226, 64%, 88%)"
    >
      <Image
        src={podterServer}
        alt="A terminal window with a `neofetch` command running, showing a logo of a Oracle Linux and the text `opc@podter-server`"
      />
    </MagicalContainer>
  );
}
