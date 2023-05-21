import { TypographyH1, TypographyP } from "@/components/ui/Typography";
import { Icon } from "@iconify/react/dist/offline";
import wavingHand from "@iconify/icons-fluent-emoji-flat/waving-hand";

export default function Page() {
  return (
    <>
      <TypographyH1>
        Hello, I&apos;m Podter.{" "}
        <Icon className="inline" icon={wavingHand} inline />
      </TypographyH1>
      <TypographyP>
        I&apos;m a student and self-taught developer from Thailand.
      </TypographyP>
    </>
  );
}
