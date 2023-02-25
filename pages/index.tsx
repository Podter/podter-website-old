import Container from "@/components/Container";
import { Icon } from "@iconify/react";
import wavingHand from "@iconify/icons-fluent-emoji-flat/waving-hand";
import Lanyard from "@/components/Cards/Lanyard";
import Roblox from "@/components/Cards/Roblox";
import WakaTime from "@/components/Cards/WakaTime";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <>
      <Container>
        <h1 className="text-5xl font-bold">
          Hello, I&apos;m{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Podter
          </span>{" "}
          <Icon className="inline" icon={wavingHand} inline={true} />
        </h1>
        <p className="py-6">
          Hey, I&apos;m Podter. I&apos;m a student and self taught developer
          from Thailand.
        </p>
        <div className="flex flex-row gap-2 w-28 pb-1">
          <SocialLinks />
        </div>
        <div className="divider" />
        <div className="flex flex-col md:flex-row gap-4 py-3">
          <Lanyard />
          <Roblox />
        </div>
        <div className="flex flex-col md:flex-row gap-4 py-3">
          <WakaTime />
        </div>
      </Container>
    </>
  );
}
