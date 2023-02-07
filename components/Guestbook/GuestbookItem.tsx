import Shoes from "@/public/shoes.jpg";
import Image from "next/image";
import { User } from "lucide-react";
import { GuestbookData } from "@/pages/guestbook";

type GuestbookItemProps = GuestbookData;

export default function GuestbookItem({
  name,
  message,
  provider,
  username,
  updated,
  avatar,
}: GuestbookItemProps) {
  return (
    <div className="flex flex-col space-y-1 mb-4">
      <div className="flex w-full text-sm items-center gap-2">
        <div
          className="tooltip tooltip-right md:tooltip-top"
          data-tip={`${username} on ${
            provider === "GITHUB" ? "Github" : "Discord"
          } ${updated ? "(edited)" : ""}`}
        >
          <div className="avatar hover:cursor-pointer">
            <center className="flex justify-center items-center w-6 h-6 rounded-full bg-base-200">
              {avatar ? (
                <Image src={Shoes} alt="Shoes" className="rounded-full" />
              ) : (
                <User size={20} className="h-6 w-6 m-1" />
              )}
            </center>
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
