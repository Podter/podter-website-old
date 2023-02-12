import { useLanyardWS, Snowflake } from "use-lanyard";
import Image from "next/image";
import Timestamps from "./Timestamps";
import { Icon } from "@iconify/react";
import icon90RingWithBg from "@iconify/icons-svg-spinners/90-ring-with-bg";
import { HelpCircle } from "lucide-react";

export default function Lanyard() {
  const data = useLanyardWS(
    (process.env.NEXT_PUBLIC_DISCORD_USER_ID || "") as Snowflake
  );

  return (
    <a
      className="flex flex-col h-56 w-full md:w-96 bg-base-100 shadow-xl p-8 rounded-2xl hover:scale-[1.025] transition-all duration-75 cursor-pointer"
      href="https://discord.com/users/331793642689789962"
    >
      {data ? (
        <>
          <div className="flex flex-row items-center h-9 gap-4">
            <div className="avatar">
              <div
                className={`w-10 rounded-full ring ring-offset-base-100 ring-offset-2 ${
                  data.discord_status === "online"
                    ? "ring-success"
                    : data.discord_status === "idle"
                    ? "ring-warning"
                    : data.discord_status === "dnd"
                    ? "ring-error"
                    : data.discord_status === "offline"
                    ? "ring-gray-500"
                    : ""
                }`}
              >
                <Image
                  src={`https://cdn.discordapp.com/avatars/${data.discord_user.id}/${data.discord_user.avatar}.png?size=40`}
                  width={40}
                  height={40}
                  alt="Podter's Discord avatar"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-xl font-semibold">
                {data.discord_user.username}#{data.discord_user.discriminator}
              </p>
              <p className="text-base">
                {data.discord_status === "online"
                  ? "Online"
                  : data.discord_status === "idle"
                  ? "Idle"
                  : data.discord_status === "dnd"
                  ? "Do Not Disturb"
                  : data.discord_status === "offline"
                  ? "Offline"
                  : ""}
              </p>
            </div>
          </div>
          <div className="divider" />
          {data.activities[0] ? (
            <div className="flex flex-row items-center h-full gap-4 md:gap-0">
              <div className="flex-shrink-0 relative">
                {!data.activities[0].assets ? (
                  <HelpCircle
                    size={64}
                    className="rounded-xl h-16 w-16 bg-ctp-crust p-3"
                  />
                ) : (
                  <>
                    <Image
                      src={`https://cdn.discordapp.com/app-assets/${data.activities[0].application_id}/${data.activities[0].assets.large_image}.png?size=64`}
                      width={64}
                      height={64}
                      alt="Large image"
                      className="rounded-xl h-16 w-16 bg-ctp-crust"
                    />
                    <Image
                      src={`https://cdn.discordapp.com/app-assets/${data.activities[0].application_id}/${data.activities[0].assets.small_image}.png?size=24`}
                      width={24}
                      height={24}
                      alt="Small image"
                      className="rounded-full bg-ctp-crust bg-opacity-20 h-6 -right-1 -bottom-1 ring-[3px] ring-ctp-crust ring-opacity-20 w-6 absolute"
                    />
                  </>
                )}
              </div>
              <div className="divider divider-horizontal hidden md:flex" />
              <div className="flex flex-col">
                <p className="text-base font-semibold">
                  {data.activities[0].name}
                </p>
                <p className="text-sm hidden md:block">
                  {data.activities[0].details}
                </p>
                <p className="text-sm hidden md:block">
                  {data.activities[0].state}
                </p>
                <Timestamps timestamps={data.activities[0].timestamps} />
              </div>
            </div>
          ) : (
            <div className="flex flex-row items-center justify-center h-full">
              <p className="text-sm text-ctp-subtext1">
                I&apos;m not currently doing anything!
              </p>
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
