import Image from "next/image";
import { User } from "lucide-react";
import { useState } from "react";
import getUsername, { UserData } from "@/lib/getUsername";
import axios from "axios";

type GuestbookItemProps = GuestbookData;

export default function GuestbookItem({
  name,
  message,
  avatar,
  providerAccountId,
  id,
}: GuestbookItemProps) {
  const [userData, setUserData] = useState<UserData>({
    text: "Loading...",
    url: "",
  });
  const [dateText, setDateText] = useState("Loading...");

  async function getDate() {
    try {
      const res = await axios.get(`/api/guestbook/date?id=${id}`);
      const data = res.data.data;

      if (data.updated) {
        setDateText(`Updated: ${data.updatedAt}`);
      } else {
        setDateText(`Created: ${data.created}`);
      }
    } catch {
      setDateText("Failed to load.");
    }
  }

  return (
    <div className="flex flex-col space-y-1 mb-4">
      <div className="flex w-full text-sm items-center gap-2">
        <a
          className="tooltip tooltip-right md:tooltip-top w-6 h-6"
          data-tip={userData.text}
          onMouseEnter={() => {
            if (!userData.url) {
              getUsername(providerAccountId || "", setUserData);
            }
          }}
          href={userData.url}
        >
          <div className="avatar hover:cursor-pointer">
            <center className="flex justify-center items-center w-6 h-6 rounded-full bg-base-200">
              {avatar ? (
                <Image
                  src={avatar}
                  alt="Shoes"
                  className="rounded-full"
                  width={24}
                  height={24}
                />
              ) : (
                <User size={20} className="h-6 w-6 m-1" />
              )}
            </center>
          </div>
        </a>
        <p>
          <span
            className="text-ctp-subtext0 mr-1 tooltip tooltip-right md:tooltip-top"
            data-tip={dateText}
            onMouseEnter={() => {
              if (dateText === "Loading...") {
                getDate();
              }
            }}
          >
            {name}:{" "}
          </span>
          {message}
        </p>
      </div>
    </div>
  );
}
