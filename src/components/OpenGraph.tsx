// import { siteConfig } from "@/constants/site";

type Props = {
  title: string | null;
  date: string | null;
};

export default function OpenGraph({ title, date }: Props) {
  return (
    <div
      style={{
        position: "relative",
        height: "100%",
        width: "100%",
        display: "flex",
        // backgroundImage: `url(${siteConfig.url}/og-bg.png)`,
        backgroundImage: `url("https://podter-website-4anzff731-podter.vercel.app/og-bg.png")`,
      }}
    >
      <div tw="absolute flex items-start justify-end top-16 right-16 h-full w-full">
        <span
          style={{
            fontSize: 64,
            fontFamily: "Switzer",
            maxWidth: "58.333333%",
          }}
          tw="font-bold text-white text-right"
        >
          {title}
        </span>
      </div>
      <div tw="absolute flex items-end justify-end bottom-16 right-16 h-full w-full">
        <span
          style={{
            fontSize: 24,
            fontFamily: "Switzer",
          }}
          tw="text-white text-right"
        >
          {date}
        </span>
      </div>
    </div>
  );
}
