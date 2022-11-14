import SkillCard from "./SkillCard";

import Arch from "../../public/assets/arch3.jpg";

export default function Skills() {
  return (
    <div
      className="flex justify-center items-center min-h-screen m-6"
      id="skills"
    >
      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <SkillCard img={Arch} />
        <SkillCard img={Arch} />
        <SkillCard img={Arch} />
        <SkillCard img={Arch} />
        <SkillCard img={Arch} />
        <SkillCard img={Arch} />
        <SkillCard img={Arch} />
        <SkillCard img={Arch} />
      </div>
    </div>
  );
}
