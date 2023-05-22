import { TypographyMuted } from "@/components/ui/Typography";
import { loadingQuotes } from "@/constants/quotes";
import { Icon } from "@iconify/react/dist/offline";
import icon90RingWithBg from "@iconify/icons-svg-spinners/90-ring-with-bg";

export default function Loading() {
  return (
    <div className="flex h-[50vh] w-full justify-center items-center text-center flex-col">
      <Icon icon={icon90RingWithBg} fontSize={24} className="h-6 w-6" />
      <TypographyMuted className="mt-3">
        {loadingQuotes[Math.floor(Math.random() * loadingQuotes.length)]}
      </TypographyMuted>
    </div>
  );
}
