import { Icon } from "@iconify/react/dist/offline";
import skills from "@/constants/skills";

export default function Skills() {
  return (
    <div className="mt-3 grid grid-cols-4 sm:grid-cols-7 md:grid-cols-9 gap-4 md:gap-6">
      {skills.map((icon, i) => (
        <div key={i} className="flex justify-center items-center h-full w-full">
          <Icon scale={64} className="h-16 w-16" icon={icon} />
        </div>
      ))}
    </div>
  );
}
