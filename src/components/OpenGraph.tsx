import { siteConfig } from "@/constants/site";

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
        backgroundImage: `url(${siteConfig.url}/og-bg.png)`,
      }}
    >
      <div
        style={{
          marginTop: 128,
          marginRight: 128,
          fontSize: 128,
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
