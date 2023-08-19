// import { siteConfig } from "@/constants/site";

type Props = {
  title: string | null;
};

export default function OpenGraph({ title }: Props) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        // backgroundImage: `url(${siteConfig.url}/og-bg.png)`,
        backgroundImage: `url("https://podter-website-git-dev-podter.vercel.app/og-bg.png")`,
      }}
    >
      <div
        style={{
          marginTop: 64,
          marginRight: 64,
          fontSize: 96,
          fontWeight: 700,
          color: "#fff",
          fontFamily: "Switzer",
          maxWidth: "66.666667%",
          textAlign: "end",
        }}
      >
        {title}
      </div>
    </div>
  );
}
