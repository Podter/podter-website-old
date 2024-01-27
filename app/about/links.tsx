import Image from "next/image";

import { A } from "~/components/ui/typography";
import bluey from "~/public/about/bluey.png";
import cartman from "~/public/about/cartman.png";

export function SouthPark() {
  return (
    <span className="relative inline-block">
      <Image
        src={cartman}
        alt="Cartman"
        className="absolute top-1/2 inline-block -translate-y-1/2"
        width={16}
        height={16}
      />
      <A href="https://www.southparkstudios.com" className="ml-5">
        South Park
      </A>
    </span>
  );
}

export function Bluey() {
  return (
    <span className="relative inline-block">
      <Image
        src={bluey}
        alt="Bluey"
        className="absolute top-1/2 inline-block -translate-y-1/2"
        width={16}
        height={16}
      />
      <A href="https://www.bluey.tv" className="ml-5">
        Bluey
      </A>
    </span>
  );
}
