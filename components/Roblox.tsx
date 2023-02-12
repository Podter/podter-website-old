import Image from "next/image";
import { Icon } from "@iconify/react";
import icon90RingWithBg from "@iconify/icons-svg-spinners/90-ring-with-bg";
import { useState, useEffect } from "react";
import axios from "axios";
import { format, parseISO } from "date-fns";
import robloxPlaceholder from "@/public/roblox-placeholder.png";

export default function Roblox() {
  const [data, setData] = useState<RobloxData>();

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("/api/roblox");
      const data = res.data.data as RobloxData;

      setData(data);
    }

    fetchData();
  }, []);

  return (
    <a
      className="flex flex-col h-56 w-full md:w-96 bg-base-100 shadow-xl p-8 rounded-2xl hover:scale-[1.025] transition-all duration-75 cursor-pointer"
      href="https://www.roblox.com/users/126064549/profile"
    >
      {data ? (
        <>
          <div className="flex flex-row items-center h-9 gap-4">
            <div className="avatar">
              <div
                className={`w-10 rounded-full ring ring-offset-base-100 ring-offset-2 ${
                  data.presences.userPresenceType === "online"
                    ? "ring-ctp-blue"
                    : data.presences.userPresenceType === "inGame"
                    ? "ring-success"
                    : data.presences.userPresenceType === "studio"
                    ? "ring-warning"
                    : data.presences.userPresenceType === "offline"
                    ? "ring-gray-500"
                    : ""
                }`}
              >
                <Image
                  src={data.thumbnails.headshot}
                  width={40}
                  height={40}
                  alt="Podter's Roblox headshot avatar"
                  className="bg-ctp-crust"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-xl font-semibold">{data.info.displayName}</p>
              <p className="text-base">@{data.info.username}</p>
            </div>
          </div>
          <div className="divider" />
          {data.presences.userPresenceType === "inGame" ||
          data.presences.userPresenceType === "studio" ? (
            <div className="flex flex-row items-center h-full gap-4 md:gap-0">
              <div className="flex-shrink-0 relative">
                {data.presences.placeThumbnail ? (
                  <Image
                    src={data.presences.placeThumbnail}
                    width={64}
                    height={64}
                    alt="Place thumbnail"
                    className="rounded-xl h-16 w-16 bg-ctp-crust"
                  />
                ) : (
                  <Image
                    src={robloxPlaceholder}
                    width={64}
                    height={64}
                    alt="Place thumbnail"
                    className="rounded-xl h-16 w-16 bg-ctp-crust"
                  />
                )}
              </div>
              <div className="divider divider-horizontal hidden md:flex" />
              <div className="flex flex-col">
                <p className="text-base font-semibold">
                  {data.presences.userPresenceType === "studio"
                    ? "In Roblox Studio"
                    : "Playing"}
                </p>
                <p className="text-sm ">
                  {data.presences.userPresenceType === "studio"
                    ? data.presences.location.slice(9)
                    : data.presences.location}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-row items-center h-full gap-4 md:gap-0">
              <div className="flex-shrink-0 relative">
                <Image
                  src={data.thumbnails.body}
                  width={64}
                  height={64}
                  alt="Podter's Roblox boody avatar"
                  className="rounded-xl h-16 w-16 bg-ctp-crust p-2"
                />
              </div>
              <div className="divider divider-horizontal hidden md:flex" />
              <div className="flex flex-col">
                <p className="text-base font-semibold">
                  {data.presences.userPresenceType === "online"
                    ? "Online"
                    : "Offline"}
                </p>
                <p className="text-sm">
                  <span className="text-ctp-subtext0 mr-1">Friends: </span>
                  {data.info.friendCount}
                </p>
                <p className="text-sm">
                  <span className="text-ctp-subtext0 mr-1">Followers: </span>
                  {data.info.followerCount}
                </p>
                <p className="text-sm hidden md:block">
                  <span className="text-ctp-subtext0 mr-1">Last seen: </span>
                  {format(parseISO(data.presences.lastOnline), "do MMM yyyy")}
                </p>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="flex justify-center items-center h-full w-full">
          <Icon icon={icon90RingWithBg} className="h-8 w-8" scale={32} />
        </div>
      )}
    </a>
  );
}
