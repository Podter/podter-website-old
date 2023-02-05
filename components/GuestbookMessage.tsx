import Shoes from "@/public/shoes.jpg";
import Image from "next/image";

type GuestbookMessageProps = {
  name: string;
  username: string;
  message: string;
  provider: "GitHub" | "Discord";
  edited?: boolean;
};

export default function GuestbookMessage({
  name,
  message,
  provider,
  username,
  edited = false,
}: GuestbookMessageProps) {
  return (
    <div className="flex flex-col space-y-1 mb-4">
      <div className="flex w-full text-sm items-center gap-2">
        <div
          className="tooltip"
          data-tip={`${username} on ${provider} ${edited ? "(edited)" : ""}`}
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
