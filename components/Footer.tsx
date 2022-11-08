import { Github, Youtube, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <a className="link link-hover">Home</a>
        <a className="link link-hover">About</a>
        <a className="link link-hover">Skills</a>
        <a className="link link-hover">Projects</a>
        <a className="link link-hover">Contact</a>
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
