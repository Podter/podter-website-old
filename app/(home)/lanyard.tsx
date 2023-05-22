"use client";

import {
  useLanyardWS,
  type Data,
  type Snowflake,
  type Timestamps as LanyardTimestamps,
} from "use-lanyard";
import { socialId } from "@/constants/socials";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { TypographyMuted, TypographyP } from "@/components/ui/Typography";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Separator } from "@/components/ui/Separator";
import Image from "next/image";
import { HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import useTimestamps from "@/hooks/useTimestamps";
import Link from "next/link";
import { lanyardConfig } from "@/constants/site";

type LanyardProps = {
  initialData?: Data;
};

type TimestampsProps = {
  timestamps: LanyardTimestamps | undefined;
};

function Timestamps({ timestamps }: TimestampsProps) {
  const time = useTimestamps(timestamps);

  if (!time) return null;

  return <TypographyMuted>{time.start} elapsed</TypographyMuted>;
}

export default function Lanyard({ initialData }: LanyardProps) {
  const data = useLanyardWS(socialId.discord as Snowflake, {
    initialData,
    api: lanyardConfig,
  });

  if (!data) return null;

  const activity = data.activities[0];

  return (
    <Card className="w-full overflow-hidden relative" asChild>
      <Link href={`https://discord.com/users/${data.discord_user.id}`}>
        <CardHeader className="flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-2">
            <div className="flex relative">
              <Avatar>
                <AvatarImage
                  src={`${lanyardConfig.secure ? "https" : "http"}://${
                    lanyardConfig.hostname
                  }/${socialId.discord}.png`}
                  alt="Discord avatar"
                />
                <AvatarFallback>
                  {data.discord_user.username.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div
                className={cn(
                  "rounded-full h-[0.625rem] w-[0.625rem] absolute right-px bottom-px bg-slate-600",
                  {
                    "bg-social-green": data.discord_status === "online",
                    "bg-social-yellow": data.discord_status === "idle",
                    "bg-social-red": data.discord_status === "dnd",
                  }
                )}
              />
            </div>
            <div className="flex flex-col">
              <CardTitle asChild>
                <p>
                  {data.discord_user.username}#{data.discord_user.discriminator}
                </p>
              </CardTitle>
              <CardDescription>
                {data.discord_status === "online"
                  ? "Online"
                  : data.discord_status === "idle"
                  ? "Idle"
                  : data.discord_status === "dnd"
                  ? "Do Not Disturb"
                  : "Offline"}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        {activity ? (
          <CardContent className="flex items-center gap-4">
            <div className="flex relative">
              {activity.assets?.large_image ? (
                <>
                  <Image
                    src={`https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.png?size=128`}
                    className="rounded-xl h-16 w-16 bg-muted"
                    alt="Activity image"
                    width={64}
                    height={64}
                  />
                  {activity.assets?.small_image && (
                    <Image
                      src={`https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.small_image}.png?size=48`}
                      className="rounded-full h-6 w-6 absolute -right-1 -bottom-1"
                      alt="Activity icon"
                      width={24}
                      height={24}
                    />
                  )}
                </>
              ) : (
                <div className="flex justify-center items-center rounded-xl h-16 w-16 bg-muted">
                  <HelpCircle className="h-8 w-8" size={32} />
                </div>
              )}
            </div>
            <Separator orientation="vertical" className="h-20" />
            <div>
              <TypographyP className="font-medium">{activity.name}</TypographyP>
              <TypographyMuted>{activity.details}</TypographyMuted>
              <TypographyMuted>{activity.state}</TypographyMuted>
              <Timestamps timestamps={activity.timestamps} />
            </div>
          </CardContent>
        ) : (
          <CardContent className="flex items-center justify-center h-28 md:pb-9">
            <TypographyP className="text-muted-foreground">
              I&apos;m not currently doing anything!
            </TypographyP>
          </CardContent>
        )}
      </Link>
    </Card>
  );
}
