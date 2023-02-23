import Container from "@/components/Container";
import { Icon } from "@iconify/react";
import wavingHand from "@iconify/icons-fluent-emoji-flat/waving-hand";
import Lanyard from "@/components/Lanyard";
import Roblox from "@/components/Roblox";
import WakaTime from "@/components/WakaTime";
import SocialLinks from "@/components/SocialLinks";
import Birthday from "@/components/Birthday";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Container>
        <h1 className="text-5xl font-bold">
          Hello, I&apos;m{" "}
          <span className="bg-gradient-to-r from-ctp-red to-ctp-blue bg-clip-text text-transparent">
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
        <div className="flex flex-col md:flex-row gap-4 py-3">
          <div className="flex flex-row md:flex-col gap-4">
            <Birthday />
            <Birthday />
          </div>
          <div className="flex flex-row md:flex-col gap-4">
            <Birthday />
            <Birthday />
          </div>
          <Contact />
        </div>
      </Container>
    </>
  );
}
