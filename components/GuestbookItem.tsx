import Shoes from "@/public/shoes.jpg";
import Image from "next/image";

export type GuestbookItemProps = {
  name: string;
  username: string;
  message: string;
  provider: "GitHub" | "Discord";
  updated?: boolean;
};

export default function GuestbookItem({
  name,
  message,
  provider,
  username,
  updated = false,
}: GuestbookItemProps) {
  return (
    <div className="flex flex-col space-y-1 mb-4">
      <div className="flex w-full text-sm items-center gap-2">
        <div
          className="tooltip tooltip-right md:tooltip-top"
          data-tip={`${username} on ${provider} ${updated ? "(edited)" : ""}`}
        >
          <div className="avatar hover:cursor-pointer">
            <div className="w-6 rounded-full">
              <Image src={Shoes} alt="Shoes" />
            </div>
          </div>
        </div>
        <p>
          <span className="text-ctp-subtext0 mr-1">{name}: </span>
          {message}
        </p>
      </div>
    </div>
  );
}
