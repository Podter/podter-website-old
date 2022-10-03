import { RiRadioButtonFill } from "react-icons/ri";

interface TechnologyItemProps {
  name: string;
}

export default function TechnologyItem({ name }: TechnologyItemProps) {
  return (
    <p className="text-ctp-subtext1 py-2 flex items-center">
      <RiRadioButtonFill className="pr-1" />
      {name}
    </p>
  );
}
