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
import { cn } from "@/lib/utils";
import robloxPlaceholder from "@/public/roblox-placeholder.png";
import Link from "next/link";
import ShineCover from "@/components/ShineCover/ShineCover";

export default function Roblox(data: RobloxData) {
  return (
    <Card
      className="w-full overflow-hidden relative hover:scale-[1.03] transition-transform"
      asChild
    >
      <Link href={`https://www.roblox.com/users/${data.id}/profile`}>
        <ShineCover shineBottom />
        <CardHeader className="flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-2">
            <div className="flex relative">
              <Avatar>
                <AvatarImage
                  src={data.playerHeadshot}
                  alt="Roblox profile"
                  className="bg-muted"
                />
                <AvatarFallback>
                  {data.displayName.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div
                className={cn(
                  "rounded-full h-[0.625rem] w-[0.625rem] absolute right-px bottom-px bg-slate-600",
                  {
                    "bg-sky-400": data.userPresenceType === "online",
                    "bg-social-green": data.userPresenceType === "inGame",
                    "bg-social-yellow": data.userPresenceType === "studio",
                  }
                )}
              />
            </div>
            <div className="flex flex-col">
              <CardTitle asChild>
                <p>{data.displayName}</p>
              </CardTitle>
              <CardDescription>@{data.name}</CardDescription>
            </div>
          </div>
        </CardHeader>
        {data.userPresenceType === "inGame" ||
        data.userPresenceType === "studio" ? (
          <CardContent className="flex items-center gap-4">
            <Image
              src={
                data.placeThumbnail ? data.placeThumbnail : robloxPlaceholder
              }
              className="rounded-xl h-16 w-16 bg-muted"
              alt="Place thumbnail"
              width={64}
              height={64}
            />
            <Separator orientation="vertical" className="h-20" />
            <div>
              <TypographyP className="font-medium">
                {data.userPresenceType === "studio"
                  ? "In Roblox Studio"
                  : "Playing"}
              </TypographyP>
              <TypographyMuted>
                {data.userPresenceType === "studio"
                  ? data.lastLocation.slice(9)
                  : data.lastLocation}
              </TypographyMuted>
            </div>
          </CardContent>
        ) : (
          <CardContent className="flex items-center gap-4">
            <Image
              src={data.playerBody}
              className="rounded-xl h-16 w-16 bg-muted p-2"
              alt="Activity image"
              width={64}
              height={64}
            />
            <Separator orientation="vertical" className="h-20" />
            <div>
              <TypographyP className="font-medium">
                {data.userPresenceType === "online" ? "Online" : "Offline"}
              </TypographyP>
              <TypographyMuted>
                <span className="font-medium">Friends:</span> {data.friendCount}
              </TypographyMuted>
              <TypographyMuted>
                <span className="font-medium">Followers:</span>{" "}
                {data.followerCount}
              </TypographyMuted>
              <TypographyMuted>
                <span className="font-medium">Last seen:</span>{" "}
                {data.lastOnline}
              </TypographyMuted>
            </div>
          </CardContent>
        )}
      </Link>
    </Card>
  );
}
