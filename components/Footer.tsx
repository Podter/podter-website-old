import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import footerIcons from "../public/assets/footer-icons.png";

export default function Footer() {
  return (
    <div className="w-full h-52 bg-ctp-red mt-64 transition-colors-transform duration-300">
      <div className="text-center justify-center items-center text-white dark:text-ctp-surface0">
        <h1 className="text-3xl pt-8">Podter</h1>
        <p className="mt-2 mb-4">© 2022 Podter. All Rights Reserved.</p>
        <Image src={footerIcons} alt="/" width="219.5" height="32" />
        <div className="flex text-center justify-center items-center">
          <Link href="https://github.com/Podter/podter-website">
            <p className="m-2 cursor-pointer flex justify-center items-center">
              <FaGithub className="mr-2" />
              Source Code
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
