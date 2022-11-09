import { Github, Youtube, Facebook } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <Link href="/#home" className="link link-hover" scroll={false}>
          Home
        </Link>
        <Link href="/#about" className="link link-hover" scroll={false}>
          About
        </Link>
        <Link href="/#skills" className="link link-hover" scroll={false}>
          Skills
        </Link>
        <Link href="/#projects" className="link link-hover" scroll={false}>
          Projects
        </Link>
        <Link href="/#contact" className="link link-hover" scroll={false}>
          Contact
        </Link>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a>
            <Github className="fill-current" size={24} />
          </a>
          <a>
            <Facebook className="fill-current" size={24} />
          </a>
          <a>
            <Youtube className="fill-current" size={24} />
          </a>
        </div>
      </div>
      <div>
        <p>Copyright © 2022 - All right reserved by Podter</p>
      </div>
    </footer>
  );
}
