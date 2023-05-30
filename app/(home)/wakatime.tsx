import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import {
  TypographyLarge,
  TypographyMuted,
  TypographySmall,
} from "@/components/ui/Typography";
import { Progress } from "@/components/ui/Progress";
import { Separator } from "@/components/ui/Separator";
import ShineCover from "@/components/ShineCover/ShineCover";

type WakaTimeTotalProps = {
  title: string;
  children: string;
};

function WakaTimeTotal({ title, children: text }: WakaTimeTotalProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-2 w-full md:w-auto md:h-full">
      <TypographySmall>{title}</TypographySmall>
      <TypographyLarge className="hidden md:block">{text}</TypographyLarge>
      <TypographyLarge className="md:hidden">
        {text.slice(0, -7).replace("hr", "hour").replace("min", "minute")}
      </TypographyLarge>
    </div>
  );
}

export default function WakaTime(data: WakaTimeData) {
  return (
    <Card className="w-full overflow-hidden relative hover:scale-[1.03] transition-transform">
      <ShineCover />
      <CardHeader>
        <CardTitle asChild>
          <p>WakaTime stats</p>
        </CardTitle>
        <CardDescription>Last 7 days</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row justify-center md:justify-start md:items-center">
        <div className="flex flex-row md:flex-col md:w-44 md:h-60 justify-center items-center">
          <WakaTimeTotal title="Total">
            {data.human_readable_total_including_other_language}
          </WakaTimeTotal>
          <Separator className="hidden md:block" />
          <Separator orientation="vertical" className="h-[50px] md:hidden" />
          <WakaTimeTotal title="Daily average">
            {data.human_readable_daily_average_including_other_language}
          </WakaTimeTotal>
        </div>
        <Separator className="md:hidden my-6 w-full" />
        <Separator
          className="mx-6 h-60 md:block hidden"
          orientation="vertical"
        />
        <div className="flex flex-col w-full">
          <TypographyLarge className="text-base">
            Most used languages
          </TypographyLarge>
          {data.languages.slice(0, 5).map(({ name, text, percent }, i) => (
            <div key={i} className="flex flex-col w-full">
              <TypographySmall className="flex flex-row items-center mt-3 mb-1">
                {name}:{" "}
                <span>
                  <TypographyMuted className="ml-1">{text}</TypographyMuted>
                </span>
              </TypographySmall>
              <Progress value={percent} className="h-2" aria-label={text} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
