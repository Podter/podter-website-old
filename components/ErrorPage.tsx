import { TypographyH1, TypographyP } from "./ui/Typography";
// import FlyingToasters from "./FlyingToasters/FlyingToasters";
import { PropsWithChildren } from "react";

type ErrorPageProps = {
  title: string;
  subtitle: string;
  description: string;
};

export default function ErrorPage({
  title,
  subtitle,
  description,
  children,
}: PropsWithChildren<ErrorPageProps>) {
  return (
    <div className="relative flex flex-col text-center justify-center items-center w-full h-[calc(100vh-10.5rem)] md:h-[calc(100vh-18rem)]">
      <h1 className="text-9xl md:text-[10rem] font-extrabold">{title}</h1>
      <TypographyH1 className="mt-2">{subtitle}</TypographyH1>
      <TypographyP>{description}</TypographyP>
      <div className="flex flex-row items-center justify-center gap-3 mt-6 mb-16 md:mb-32">
        {children}
      </div>
      <div className="fixed top-0 left-0 lg:-top-[12.5%] lg:-left-[12.5%] lg:absolute lg:w-[125%] w-full h-screen lg:h-[125%] overflow-hidden -z-30">
        <div className="relative w-full h-full">
          {/* <FlyingToasters className="absolute top-0 left-0 w-full h-full -z-20" /> */}
          <div className="absolute top-0 left-0 w-full h-full -z-10 lg:shadow-[inset_0px_0px_50px_125px_hsl(var(--background))]"></div>
        </div>
      </div>
    </div>
  );
}
