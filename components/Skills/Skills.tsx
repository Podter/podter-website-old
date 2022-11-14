import SkillCard from "./SkillCard";

import ts from "../../public/assets/skills/typescript.png";
import js from "../../public/assets/skills/javascript.png";
import php from "../../public/assets/skills/php.png";
import lua from "../../public/assets/skills/lua.png";
import node from "../../public/assets/skills/node.png";
import docker from "../../public/assets/skills/docker.png";
import linux from "../../public/assets/skills/linux.png";
import react from "../../public/assets/skills/react.png";

export default function Skills() {
  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen m-6"
      id="skills"
    >
      <div className="mb-6">
        <p className="uppercase text-xl tracking-widest text-ctp-red">Skills</p>
        <h1 className="text-5xl font-bold">What can I do?</h1>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <SkillCard img={ts} name="TypeScript" />
        <SkillCard img={js} name="JavaScript" />
        <SkillCard img={php} name="PHP" />
        <SkillCard img={lua} name="Lua" />
        <SkillCard img={node} name="Node.js" />
        <SkillCard img={docker} name="Docker" />
        <SkillCard img={linux} name="Linux" />
        <SkillCard img={react} name="React" />
      </div>
    </div>
  );
}
